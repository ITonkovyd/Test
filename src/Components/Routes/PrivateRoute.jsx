import { Navigate } from "react-router-dom";

// приватний маршрут для перенаправлення користувача на сторінку логіна

const PrivateRoute = ({ element: Component, redirectTo = "/" }) => {
  const isLoggedIn = localStorage.getItem("key");

  console.log(isLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
