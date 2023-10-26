import React from "react";
import cls from "./Register.module.scss";
import RegisterForm from "@/features/Auth/ui/RegisterForm/RegisterForm";
import { LoginForm } from "@/features/Auth/ui/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;