import React from "react";
import { useNavigate } from "react-router-dom";

function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Выполните здесь код, который необходим для выхода пользователя из сессии
    // Например, очистка сессионных данных или отправка запроса на сервер

    // Очистить токен из sessionStorage
    sessionStorage.removeItem("token");

    // После успешного выхода, перенаправьте пользователя на главную страницу (например)
    navigate("/");
  };

  return (
    /* prettier-ignore */
    <button onClick={handleSignOut}>Выйти из сессии</button>
  );
}

export default SignOutButton;
