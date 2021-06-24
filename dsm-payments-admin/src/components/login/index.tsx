import React, { FC, useState } from "react";
import Button from "../default/button";
import Input from "../default/input";
import * as S from "./style";
import { loginRequest } from "../../apis/loginApi";
import { useHistory } from "react-router-dom";

const Login: FC = () => {
  const history = useHistory();
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const buttonClickHandler = async () => {
    localStorage.setItem("password", password);
    try {
      await loginRequest();
      setError("");
      history.push("/");
    } catch (error) {
      console.log(error);
      setError("비밀번호를 확인해 주세요.");
    }
  };
  return (
    <S.Login>
      <S.LoginBody>
        <S.LoginTitle>로그인</S.LoginTitle>
        <S.LoginSubTitle>{error}</S.LoginSubTitle>
        <Input
          width={320}
          height={40}
          onChange={setPassword}
          margin="150px 0px 0px 0px"
          placeholder="패스워드"
        />
        <Button
          width={320}
          height={40}
          color="white"
          backgroundColor="#3f51b5"
          borderColor="#3f51b5"
          margin="20px 0px 0px 0px"
          fontSize={17}
          onClick={buttonClickHandler}
        >
          로그인
        </Button>
      </S.LoginBody>
    </S.Login>
  );
};

export default Login;
