import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1000000;
`;

export const Modal = styled.div`
  width: 420px;
  height: 500px;
  background-color: white;
  padding: 30px 70px;
  box-sizing: border-box;
  > div {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  margin-top: 50px;
`;

export const ModalDescription = styled.p`
  font-size: 15px;
  margin-top: 100px;
  margin-bottom: 20px;
`;
