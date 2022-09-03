import React, { useState, useEffect } from 'react';
import { Box, Card, Backdrop } from '@mui/material';

import styles from './ShortLinks.module.scss';
import { LinksTable, AddLink } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { makeShort, getLinks } from 'src/store/shortLinks/actions';
import { Loader, Message, Modal } from 'src/components';
import { QRCodeSVG } from 'qrcode.react';

import {
  changeModalOpen,
  setSelectedLink,
} from 'src/store/shortLinks/shortLinksSlice';

interface ShortLinksPageProps {}

const ShortLinksPage: React.FC<ShortLinksPageProps> = () => {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    links,
    isLoading,
    error,
    itemsPerPage,
    currentPage,
    order,
    orderBy,
    selectedLink,
    isModalOpen,
  } = useAppSelector((state) => state.shortLinks);

  useEffect(() => {
    dispatch(getLinks());
  }, [itemsPerPage, currentPage, order, orderBy]);

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
    }
  }, [error]);

  const handleErrorClose = () => {
    setErrorVisible(false);
  };

  const handleModalClose = () => {
    dispatch(changeModalOpen(false));
    dispatch(setSelectedLink(null));
  };

  const handleAdd = (link: string) => {
    dispatch(makeShort(link));
  };

  return (
    <Box className={styles.wrapper}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <Loader visible={isLoading} />
      </Backdrop>
      <Message visible={errorVisible} text={error} onClose={handleErrorClose} />
      <Modal visible={isModalOpen} onClose={handleModalClose}>
        <Box>
          <QRCodeSVG value={selectedLink!} size={400} />
        </Box>
      </Modal>
      <Box component="main" sx={{ flexGrow: 1, pb: 1, px: { xs: 2, sm: 4 } }}>
        <Card
          sx={{
            minHeight: '100%',
            py: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box sx={{ width: { xs: '80%', sm: '80%' } }}>
              <AddLink add={handleAdd} />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ width: { xs: '80%', sm: '80%' } }}>
              <LinksTable />
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default ShortLinksPage;
