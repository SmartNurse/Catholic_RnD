import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import Footer from './Footer';
import NoResultsOverlay from './NoResultsOverlay';

const MuiDataGrid = (props: DataGridProps) => {
  const { columns, page, pageSize, rowCount, onPageChange, ...dataGridProps } =
    props;

  const isPagination = pageSize && rowCount ? true : undefined;

  const components = {
    NoResultsOverlay,
    Footer: () =>
      isPagination ? (
        <Footer
          page={page! + 1}
          count={Math.ceil(rowCount! / pageSize!)}
          onPageChange={onPageChange as any}
        />
      ) : null,
  };

  return (
    <DataGrid
      autoHeight
      disableColumnMenu
      checkboxSelection={dataGridProps.onSelectionModelChange ? true : false}
      columns={columns.map(column => ({ ...column, flex: 1, sortable: false }))}
      components={components}
      onPageChange={onPageChange}
      page={page}
      pageSize={pageSize}
      pagination={isPagination}
      paginationMode={isPagination ? 'server' : 'client'}
      rowCount={rowCount}
      rowHeight={40}
      sx={{
        backgroundColor: '#fff',
        border: 'solid 1px lightGray',
        '.MuiDataGrid-cellContent': { fontSize: 12 },
      }}
      {...dataGridProps}
    />
  );
};

export default MuiDataGrid;
