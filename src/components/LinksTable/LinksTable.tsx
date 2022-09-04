import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TablePagination,
  TableContainer,
  TableRow,
  TableCell,
} from '@mui/material';

import { IShortLink } from 'src/interfaces';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import {
  changePage,
  changeItemsPerPage,
  setOrder,
  setOrderBy,
  setSelectedLink,
  changeModalOpen,
} from 'src/store/shortLinks/shortLinksSlice';

import LinksTableHead from './LinksTableHead';
import LinksTableRow from './LinksTableRow';
import { Message } from 'src/components';
import styles from './LinksTable.module.scss';

interface LinksTableProps {
  links: IShortLink[];
}

const LinksTable: React.FC<LinksTableProps> = ({ links }) => {
  const dispatch = useAppDispatch();
  const { itemsPerPage, currentPage, order, orderBy } = useAppSelector(
    (state) => state.shortLinks,
  );

  const [messageVisible, setMessageVisible] = useState<boolean>(false);

  const handleRequestSort = (
    _: React.MouseEvent<unknown>,
    property: keyof IShortLink,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    dispatch(setOrder(isAsc ? 'desc' : 'asc'));
    dispatch(setOrderBy(property));
  };

  const handleCopy = () => {
    setMessageVisible(true);
  };

  const handleCloseMessage = () => {
    setMessageVisible(false);
  };

  const handleQrClick = (link: string) => {
    dispatch(setSelectedLink(link));
    dispatch(changeModalOpen(true));
  };

  const handlePageChange = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number,
  ) => {
    dispatch(changePage(page));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(changeItemsPerPage(parseInt(event.target.value, 10)));
    dispatch(changePage(0));
  };

  return (
    <>
      <Message
        visible={messageVisible}
        text="Ссылка скопирована!"
        type="success"
        onClose={handleCloseMessage}
      />
      <TableContainer className={styles.container}>
        <Table
          aria-labelledby="tableTitle"
          size="small"
          className={styles.table}
        >
          <LinksTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />

          <TableBody className={styles.tableBody}>
            {links.length > 0 ? (
              links.map((link: IShortLink) => (
                <LinksTableRow
                  key={link.id}
                  link={link}
                  onCopy={handleCopy}
                  onQrClick={() => handleQrClick(link.short)}
                />
              ))
            ) : (
              <>
                <TableRow />
                <TableRow />
                <TableRow>
                  <TableCell
                    align="center"
                    colSpan={4}
                    sx={{ borderBottom: 'none' }}
                  >
                    Тут ничего нет
                  </TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={500}
        rowsPerPage={itemsPerPage}
        page={currentPage}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelDisplayedRows={() => ''}
      />
    </>
  );
};

export default LinksTable;