import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
  Card,
} from '@mui/material';

import styles from './ShortLinks.module.scss';
import { LinksTable, AddLink } from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { makeShort, getLinks } from 'src/store/shortLinks/actions';
import { Loader, Message } from 'src/components';

interface ShortLinksPageProps {}

const ShortLinksPage: React.FC<ShortLinksPageProps> = () => {
  const [errorVisible, setErrorVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { links, isLoading, error } = useAppSelector(
    (state) => state.shortLinks,
  );

  useEffect(() => {
    dispatch(getLinks());
  }, []);

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
    }
  }, [error]);

  const handleErrorClose = () => {
    setErrorVisible(false);
  };

  const handleAdd = (link: string) => {
    dispatch(makeShort(link));
  };

  return (
    <Box className={styles.wrapper}>
      <Loader visible={isLoading} />
      <Message
        visible={errorVisible}
        error={error}
        onClose={handleErrorClose}
      />
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
            }}
          >
            <Box sx={{ width: { xs: '80%', sm: '70%' } }}>
              <AddLink add={handleAdd} />
            </Box>
          </Box>
          <LinksTable links={links} />
        </Card>
      </Box>
    </Box>
  );
};

export default ShortLinksPage;
