import React, { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "src/routes/constants";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { login, signUp } from "src/store/auth/actions";
import { ILoginData, ISignUpData } from "src/interfaces";

import { Form, Card, notification } from "antd";
import { Loader } from "src/components";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

import styles from "./Auth.module.scss";

interface AuthPageProps {}

const AuthPage: React.FC<AuthPageProps> = () => {
  const dispatch = useAppDispatch();
  const navigator = useNavigate();
  const location = useLocation();
  const { error, isLoading, token } = useAppSelector((state) => state.auth);

  const [data, setData] = useState<ILoginData | ISignUpData>({
    username: "",
    password: "",
  });

  const isLoginPage = location.pathname === PUBLIC_ROUTES.LOGIN;

  const handleSubmit = () => {
    if (isLoginPage) {
      dispatch(login(data));
    } else {
      dispatch(signUp(data as ISignUpData));
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

  useEffect(() => {
    if (error) {
      notification.error({
        message: error,
        duration: 10,
      });
    }
  }, [error]);

  useEffect(() => {
    if (token) {
      navigator(PRIVATE_ROUTES.MAIN);
    }
  }, [token, navigator]);

  return (
    <div className={styles.wrapper}>
      <Loader visible={isLoading} />
      <Card className={styles.content}>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          onKeyDown={handleKeyDown}
        >
          {location.pathname === PUBLIC_ROUTES.LOGIN ? (
            <LoginForm handleInput={handleInputChange} />
          ) : (
            <SignupForm handleInput={handleInputChange} />
          )}
        </Form>
      </Card>
    </div>
  );
};

export default AuthPage;
