import React from "react";
import { Form, Input, Button, Divider, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "src/routes/constants";

interface LoginFormProps {
  handleInput: (name: string, value: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ handleInput }) => {
  return (
    <>
      <Typography.Title>Вход</Typography.Title>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Пожалуйста, введите логин" }]}
      >
        <Input
          prefix={<UserOutlined />}
          onChange={(e) => handleInput("username", e.target.value)}
          placeholder="Login"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          onChange={(e) => handleInput("password", e.target.value)}
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          size="large"
          style={{ width: "80%" }}
        >
          Войти
        </Button>
      </Form.Item>
      <Divider />
      <Link to={PUBLIC_ROUTES.SIGN_UP}>Регистрация</Link>
    </>
  );
};

export default LoginForm;
