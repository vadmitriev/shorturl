import React, { useEffect, useState } from "react";

import { useLocation, useNavigate, Link } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "src/routes/constants";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { login, signUp } from "src/store/auth/actions";
import { ILoginData, ISignUpData } from "src/interfaces";

import {
  Card,
  Snackbar,
  Alert,
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Loader } from "src/components";

import styles from "./Auth.module.scss";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const { error, isLoading, token, username } = useAppSelector(
    (state) => state.auth,
  );

  const [errorVisible, setErrorVisible] = useState<boolean>(false);

  const [data, setData] = useState<ILoginData | ISignUpData>({
    username: "",
    password: "",
  });

  const isLoginPage = location.pathname === PUBLIC_ROUTES.LOGIN;

  const handleSubmit = () => {
    if (isLoginPage) {
      dispatch(login(data));
    } else {
      dispatch(signUp(data));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setData({ ...data, [name]: value });
  };

  const handleClose = () => {
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

  return (
    <div className={styles.wrapper}>
      <Loader visible={isLoading} />
      <Snackbar
        open={errorVisible}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs" onKeyDown={handleKeyDown}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            width: "100%",
            mb: "1.2rem",
            pb: { sm: "2rem" },
          }}
        >
          <span className={styles.title}>Welcome to Short URL</span>
        </Typography>
        <Card
          sx={{
            padding: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {isLoginPage ? "Вход" : "Регистрация"}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                // label="username"
                name="username"
                autoComplete="username"
                autoFocus
                placeholder="Логин"
                onChange={(e) => handleInputChange("username", e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                // label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoginPage ? "Вход" : "Регистрация"}
              </Button>
              <Divider sx={{ mb: 2 }} />
              {isLoginPage ? (
                <Link to={PUBLIC_ROUTES.SIGN_UP}>Регистрация</Link>
              ) : (
                <Link to={PUBLIC_ROUTES.LOGIN}>Уже есть аккаунт? Войти</Link>
              )}
            </Box>
          </Box>
        </Card>
      </Container>
      {/* <Card className={styles.content}> */}
      {/* <form
          name="login-form"
          // initialValues={{ remember: true }}
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          {location.pathname === PUBLIC_ROUTES.LOGIN ? (
            <LoginForm handleInput={handleInputChange} />
          ) : (
            <SignupForm handleInput={handleInputChange} />
          )}
        </form> */}
      {/* </Card> */}
    </div>
  );
};

export default AuthPage;
