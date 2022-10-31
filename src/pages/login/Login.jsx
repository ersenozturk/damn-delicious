import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Input } from "./Login.styled";

const Login = () => {
  const navigate = useNavigate()
  const demoUserName = {
    username: "ersenOZturk",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(demoUserName));
    navigate(-1)
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h1>Login</h1>
        <Input required placeholder="Please key down randomly" />
        <Button type="submit">
          Demo Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
