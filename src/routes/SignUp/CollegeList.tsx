import { useInfiniteQuery } from 'react-query';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { getCollegeLists } from '../../apis/admin';
import InfinitySelect from '../../components/InfinitySelect';

interface Props {
  register: UseFormRegister<FieldValues>;
}

// useInfiniteQuery에서 쓸 함수
const fetchCollegeLists = ({ pageParam = 1 }) =>
  getCollegeLists({ page: pageParam });

const CollegeList = ({ register }: Props) => {
  const { data, fetchNextPage } = useInfiniteQuery(
    ['collegeList'],
    fetchCollegeLists,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.data) return pages.length + 1;
        return false;
      },
    }
  );

  const onConvertList = () => {
    if (!data) return [];

    const lists = data?.pages.map(page => page.data.college_lists);
    return lists?.reduce((prev, next) => [...prev, ...next]);
  };

  const renderItem = ({ college_name }: { college_name: string }) =>
    college_name;

  return (
    <InfinitySelect
      required
      fullWidth
      id="college_id"
      list={onConvertList()}
      renderItem={renderItem}
      getMoreItems={fetchNextPage}
      placeholder="학교를 선택해주세요"
      {...register('college')}
      MenuProps={{ PaperProps: { style: { maxHeight: 250 } } }}
    />
  );
};

export default CollegeList;
