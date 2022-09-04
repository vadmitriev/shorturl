import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Box,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { IShortLink } from 'src/interfaces';
import { Order } from 'src/constants';

type HeadID = keyof IShortLink | 'qr';

interface HeadCell {
  id: HeadID;
  label: string;
  align: 'center' | 'left' | 'right';
  sorted: boolean;
  maxWidth: number;
}

const headCells: HeadCell[] = [
  {
    id: 'short',
    label: 'Короткая ссылка',
    align: 'center',
    sorted: true,
    maxWidth: 30,
  },
  {
    id: 'target',
    label: 'Ссылка',
    align: 'center',
    sorted: true,
    maxWidth: 40,
  },
  {
    id: 'counter',
    label: 'Просмотры',
    align: 'center',
    sorted: true,
    maxWidth: 20,
  },
  {
    id: 'qr',
    label: 'QR',
    align: 'center',
    sorted: false,
    maxWidth: 10,
  },
];

interface LinksTableHeadProps {
  order: Order | null;
  orderBy: string | null;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IShortLink,
  ) => void;
}

const LinksTableHead: React.FC<LinksTableHeadProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: HeadID) => (event: React.MouseEvent<unknown>) => {
      if (property === 'qr') return;
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow sx={{ '& th': { border: 0 } }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding="normal"
            sortDirection={orderBy === headCell.id && order ? order : false}
            style={{ width: `${headCell.maxWidth}%`, overflow: 'hidden' }}
          >
            {headCell.sorted ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id && order ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

export default LinksTableHead;
