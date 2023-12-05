import axios from "axios";
import { useState } from "react";
import { Button, Form, Input, Label } from "../../Services/Styles/Form.styled";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // динамічне отримання даних з інпутів
  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    switch (name) {
      case "name":
        setName(value);
        return;

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

  // логіка відправки реєстраційних даних в базу
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/register", {
        name,
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("email", data.email);
      localStorage.setItem("key", data.token);
      window.location.reload();
    } catch (error) {
      console.log(error.response.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Username </Label>
      <Input
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleChange(e)}
        required
      />
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
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default Register;
