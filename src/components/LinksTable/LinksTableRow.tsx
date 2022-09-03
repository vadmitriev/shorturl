import React from 'react';
import {
  TableRow,
  TableCell,
  Link,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

import { IShortLink } from 'src/interfaces';
import copy from 'copy-to-clipboard';

import styles from './LinksTable.module.scss';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const boxStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  typography: 'body1',
  '& > :not(style) + :not(style)': {
    ml: 2,
  },
};

interface LinksTableRowProps {
  link: IShortLink;
  onCopy: () => void;
  onQrClick: () => void;
}

const LinksTableRow: React.FC<LinksTableRowProps> = ({
  link,
  onCopy,
  onQrClick,
}) => {
  const handleClickShort = (e: React.SyntheticEvent) => {
    preventDefault(e);
    copy(link.short);
    onCopy();
  };

  return (
    <TableRow className={styles.tableRow}>
      <TableCell className={styles.tableCell}>
        <Box sx={boxStyle} onClick={handleClickShort}>
          <Stack direction="row" spacing={1} display="flex" alignItems="center">
            <div>
              <Link href={link.short} underline="none" align="center">
                {link.short}
              </Link>
            </div>
            <IconButton onClick={handleClickShort}>
              <ContentCopyOutlinedIcon sx={{ cursor: 'pointer' }} />
            </IconButton>
          </Stack>
        </Box>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <Box sx={boxStyle} className={styles.target}>
          <Link
            href={link.target}
            target="_blank"
            rel="noopener"
            underline="none"
          >
            {link.target}
          </Link>
        </Box>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <Box sx={boxStyle}>
          <Stack direction="row" spacing={1}>
            <BarChartOutlinedIcon />
            <div>{link.counter}</div>
          </Stack>
        </Box>
      </TableCell>
      <TableCell className={styles.tableCell}>
        <Box sx={boxStyle} onClick={onQrClick}>
          <IconButton onClick={onQrClick}>
            <QrCodeIcon sx={{ cursor: 'pointer' }} />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default LinksTableRow;
