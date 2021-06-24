import React, { FC, MouseEvent, useMemo } from "react";
import { useModalContext } from "../../../hooks/context/modalContext";
import * as S from "./style";
import withControlModal from "./withControlModal";

interface Props {}

const Modal: FC<Props> = () => {
  const { type, modalInfo, setType } = useModalContext();
  const modalBackgroundClickHandler = () => {
    setType("");
  };
  const modalClickHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const Modal = useMemo(
    () =>
      withControlModal({
        targets: modalInfo.targets,
        isBooth: type === "boothMinus" || type === "boothPlus",
        isMinus: type === "userMinus" || type === "boothMinus",
      }),
    [type, modalInfo]
  );
  if (type === "") return <></>;
  return (
    <S.ModalBackground onClick={modalBackgroundClickHandler}>
      <S.Modal onClick={modalClickHandler}>
        <Modal />
      </S.Modal>
    </S.ModalBackground>
  );
};

export default Modal;
