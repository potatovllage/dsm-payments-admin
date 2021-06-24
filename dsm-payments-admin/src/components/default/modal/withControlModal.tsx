import React, { FC, useState } from "react";
import { useBoothContext } from "../../../hooks/context/boothsContext";
import { useModalContext } from "../../../hooks/context/modalContext";
import { useUserContext } from "../../../hooks/context/usersContext";
import Button from "../button";
import Input from "../input";
import * as S from "./style";

interface Props {
  targets: any[];
  isBooth: boolean;
  isMinus: boolean;
}

function withControlModal({ targets, isBooth, isMinus }: Props): FC {
  return () => {
    const [input, setInput] = useState<string>("");
    const { users, setUsers } = useUserContext();
    const { booths, setBooths } = useBoothContext();
    const { setType } = useModalContext();
    const point = parseInt(input);
    const userButtonClickHandler = () => {
      const changedUsers = users.map((user) => {
        if (targets.find((target) => target.id === user.id)) {
          let changedUser = { ...user };
          changedUser.point += isMinus ? -point : point;
          return changedUser;
        }
        return user;
      });
      setType("");
      setUsers(changedUsers);
    };
    const boothButtonClickHandler = () => {
      const changedBooths = booths.map((booth) => {
        if (targets.find((target) => target.id === booth.id)) {
          let changedBooth = { ...booth };
          changedBooth.point += isMinus ? -point : point;
          return changedBooth;
        }
        return booth;
      });
      setType("");
      setBooths(changedBooths);
    };
    return (
      <div>
        <S.ModalTitle>
          {isBooth ? "부스" : "유저"} {isMinus ? "출금" : "입금"}
        </S.ModalTitle>
        <S.ModalDescription>
          얼마나 {isMinus ? "출금" : "입금"} 하시겠습니까?
        </S.ModalDescription>
        <Input width={320} height={40} onChange={setInput} />
        <Button
          width={320}
          height={40}
          backgroundColor={`var(${isMinus ? "--negative" : "--success"})`}
          color="white"
          borderColor="white"
          margin="20px 0px 0px 0px"
          fontSize={18}
          onClick={isBooth ? boothButtonClickHandler : userButtonClickHandler}
        >
          {isMinus ? "출금" : "입금"}
        </Button>
      </div>
    );
  };
}

export default withControlModal;
