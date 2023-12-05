import axios from "axios";
import { Notify } from "notiflix";
import { useState } from "react";
import { Button, Form, Input, Label } from "../../Services/Styles/Form.styled";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case "email":
        setEmail(value);
        return;

      case "password":
        setPassword(value);
        return;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { email, password };

    const login = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/login",
          credentials
        );
        localStorage.setItem("email", data.email);
        localStorage.setItem("key", data.token);
        window.location.reload();
        return data;
      } catch (error) {
        console.log(error);
        Notify.failure(error.response?.data?.message);
      }
    };

    login();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Email </Label>
      <Input
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleChange(e)}
        required
      />
      <Label>Password </Label>
      <Input
        type="password"
        name="password"
        value={password}
        onChange={(e) => handleChange(e)}
        required
      />
      <Button type="submit">Log in</Button>
    </Form>
  );
};
