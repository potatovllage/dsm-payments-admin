import React, { FC, useState } from "react";
import { boothPayRequest } from "../../../apis/boothApi";
import { userPayRequest } from "../../../apis/userApi";
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
  request?: (id: string, value: number) => void;
}

function withControlModal({ targets, isBooth, isMinus, request }: Props): FC {
  return () => {
    const [input, setInput] = useState<string>("");
    const { users, setUsers } = useUserContext();
    const { booths, setBooths } = useBoothContext();
    const { setType } = useModalContext();
    const point = parseInt(input);
    const userButtonClickHandler = async () => {
      const changedUsers = users.map((user) => {
        if (targets.find((target) => target.id === user.id)) {
          try {
            userPayRequest(user.number, isMinus ? -point : point);
            let changedUser = { ...user };
            changedUser.point += isMinus ? -point : point;
            return changedUser;
          } catch (error) {
            window.alert(
              `${user.number}에서 에러가 발생했습니다. 다시 시도해 주세용.`
            );
          }
        }
        return user;
      });
      setType("");
      setUsers(changedUsers);
    };
    const boothButtonClickHandler = async () => {
      const changedBooths = booths.map((booth) => {
        if (targets.find((target) => target.id === booth.id)) {
          try {
            boothPayRequest(booth.id, isMinus ? -point : point);
            let changedBooth = { ...booth };
            changedBooth.point += isMinus ? -point : point;
            changedBooth.totalPoint += isMinus ? 0 : point;
            console.log(changedBooth);
            return changedBooth;
          } catch (error) {
            window.alert(
              `${booth.id}에서 에러가 발생했습니다. 다시 시도해 주세요.`
            );
          }
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
          backgroundColor={`${
            isMinus ? "rgb(228, 68, 64)" : "rgb(53, 110, 214)"
          }`}
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
