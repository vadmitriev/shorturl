import React from "react";
import { Form, Input, Button, Divider, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "src/routes/constants";

interface SignupFormProps {
  handleInput: (name: string, value: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ handleInput }) => {
  return (
    <>
      <Typography.Title>Регистрация</Typography.Title>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Пожалуйста, введите логин" }]}
      >
        <Input
          prefix={<UserOutlined />}
          onChange={(e) => handleInput("name", e.target.value)}
          placeholder="Имя"
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
          size="large"
          style={{ width: "80%" }}
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
      <Divider />
      <Link to={PUBLIC_ROUTES.LOGIN}>Уже есть аккаунт? Войти</Link>
    </>
  );
};

export default SignupForm;
