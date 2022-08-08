import { forwardRef, useEffect, useRef } from 'react';
import { debounce, MenuItem, Select, SelectProps } from '@mui/material';

type Props = SelectProps & {
  id: string;
  list: any[];
  placeholder: string;
  getMoreItems: () => void;
  renderItem: (item: any) => any;
};

const InfinitySelect = forwardRef((props: Props, ref) => {
  const { id, list, placeholder, renderItem, getMoreItems, ...selectProps } =
    props;

  const lastRef = useRef(null);
  useEffect(() => {
    // IntersectionObserver를 이용한 무한 스크롤
    const fetchMoreObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          debounce(getMoreItems, 300)();
        }
      }
    );

    if (!lastRef.current) return;
    fetchMoreObserver.observe(lastRef.current);
  }, [lastRef, getMoreItems]);

  return (
    <Select {...selectProps} defaultValue={placeholder} inputRef={ref}>
      <MenuItem value={placeholder} disabled>
        {placeholder}
      </MenuItem>
      {list.map(item => (
        <MenuItem key={item[id]} value={item[id]}>
          {renderItem(item)}
        </MenuItem>
      ))}
      <MenuItem ref={lastRef} />
    </Select>
  );
});

export default InfinitySelect;
