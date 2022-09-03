import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from 'src/routes/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { login, signUp } from 'src/store/auth/actions';
import LoadingButton from '@mui/lab/LoadingButton';

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Paper,
  Backdrop,
} from '@mui/material';
import { Message, Loader } from 'src/components';

import { useFormik } from 'formik';

import styles from './Auth.module.scss';

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const { error, isLoading, token, username } = useAppSelector(
    (state) => state.auth,
  );

  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const isLoginPage = location.pathname === PUBLIC_ROUTES.LOGIN;

  const handleErrorClose = () => {
    setErrorVisible(false);
  };

  useEffect(() => {
    if (error) {
      setErrorVisible(true);
    }
  }, [error]);

  useEffect(() => {
    if (username && !isLoginPage) {
      navigator(PUBLIC_ROUTES.LOGIN);
    }
  }, [username, isLoginPage]);

  useEffect(() => {
    if (token) {
      navigator(PRIVATE_ROUTES.MAIN);
    }
  }, [token, navigator]);

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Слишком короткий логин!')
      .max(50, 'Слишком длинный логин!')
      .required('Необходимо ввести логин'),
    password: Yup.string().required('Необходимо ввести пароль'),
  });

  const formik = useFormik({
    initialValues: {
      username: 'test',
      password: 'test',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      if (isLoginPage) {
        dispatch(login(values));
      } else {
        dispatch(signUp(values));
      }
    },
  });

  return (
    <div className={styles.wrapper}>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <Loader visible={isLoading} />
      </Backdrop>
      <Message visible={errorVisible} text={error} onClose={handleErrorClose} />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: 'center',
          width: '100%',
          // mb: '1.2rem',
          pb: { sm: '2rem' },
        }}
      >
        <span className={styles.title}>Welcome to Short URL</span>
      </Typography>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            sx={{
              padding: '20px',
            }}
          >
            <Typography component="h1" variant="h5">
              {isLoginPage ? 'Вход' : 'Регистрация'}
            </Typography>
            <Box
              component="form"
              marginTop={3}
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Логин"
                name="username"
                autoComplete="given-name"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />

              <TextField
                margin="normal"
                variant="filled"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                loading={isLoading}
                sx={{ mt: 2 }}
              >
                {isLoginPage ? 'Войти' : 'Зарегистрироваться'}
              </LoadingButton>
              <Divider sx={{ mb: 2 }} />
              <Button
                component={Link}
                to={isLoginPage ? PUBLIC_ROUTES.SIGN_UP : PUBLIC_ROUTES.LOGIN}
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                {isLoginPage ? 'Регистрация' : 'Уже есть аккаунт? Войти'}
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default AuthPage;
