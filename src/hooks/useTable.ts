import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchQuery, setSearchQuery } from 'utils/searchQuery';

function useTable<T>() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const [list, setList] = useState<T[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const onPageChange = (page: number) => {
    const currentQuery = getSearchQuery(search);
    const query = setSearchQuery({ ...currentQuery, page });
    navigate(`${pathname}?${query}`);
  };

  return {
    list,
    setList,
    totalCount,
    setTotalCount,
    isLoading,
    setIsLoading,
    selected,
    setSelected,
    onPageChange,
  };
}

export default useTable;
