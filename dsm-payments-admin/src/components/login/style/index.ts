import styled from "styled-components";

export const Login = styled.div`
  margin-left: 250px;
  width: calc(100% - 250px);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBody = styled.div`
  width: 350px;
  height: 400px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  padding: 15px;
  box-sizing: border-box;
`;

export const LoginTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-top: 50px;
  text-align: center;
`;

export const LoginSubTitle = styled.p`
  font-size: 15px;
  margin-top: 10px;
  height: 20px;
  text-align: center;
  color: var(--negative);
`;
