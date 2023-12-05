import { Route, Routes } from "react-router-dom";
import { LoginForm } from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import { Users } from "../../Pages/Users/Users";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Header } from "../Header/Header";
import { FreePage } from "../HiddenPage/FreePage";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import PrivateRoute from "../Routes/PrivateRoute";
import RestrictedRoute from "../Routes/RestrictedRoute";
import { Container } from "./App.styled.jsx";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomePage />} />
        <Route path="/freepage" element={<FreePage />} />
        <Route
          path="/users"
          element={<PrivateRoute element={Users} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute element={LoginForm} redirectTo="/users" />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute element={Register} redirectTo="/users" />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
