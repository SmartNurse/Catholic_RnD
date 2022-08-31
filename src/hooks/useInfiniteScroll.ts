import { debounce } from '@mui/material';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { IGetList } from '../apis/type';

interface Props {
  listKey: string;
  moreRef: React.MutableRefObject<null>;
  getApi: (request: IGetList) => Promise<AxiosResponse<any>>;
}

const useInfiniteScroll = ({ listKey, moreRef, getApi }: Props) => {
  const [page, setPage] = useState(1);
  const [list, setList] = useState<any[]>([]);

  const onGetList = () => {
    getApi({ page }).then(({ data }) => {
      const responseList = data[listKey];
      if (responseList.length === 0)
        fetchMoreObserver.unobserve(moreRef.current!);

      setPage(page + 1);
      setList([...list, ...responseList]);
    });
  };

  const onResetList = () => {
    getApi({ page: 1 }).then(({ data }) => {
      const responseList = data[listKey];
      setPage(2);
      setList(responseList);
    });
  };

  // IntersectionObserver를 이용한 무한 스크롤
  const fetchMoreObserver = new IntersectionObserver(
    ([{ target, isIntersecting }]) => {
      if (isIntersecting) {
        fetchMoreObserver.unobserve(target);
        debounce(onGetList, 300)();
      }
    }
  );

  useEffect(() => {
    if (!moreRef.current) return;
    fetchMoreObserver.observe(moreRef.current);
    // eslint-disable-next-line
  }, [moreRef]);

  return {
    list,
    onGetList,
    onResetList,
  };
};

export default useInfiniteScroll;
