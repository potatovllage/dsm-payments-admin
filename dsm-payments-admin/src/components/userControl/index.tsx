import React, { FC, useState } from "react";
import { useModalContext } from "../../hooks/context/modalContext";
import User from "../../models/user";
import Button from "../default/button";
import Input from "../default/input";
import Table from "../default/table";
import columns from "./columns";

interface Props {
  users: User[];
  setSearchQuery: (value: string) => void;
}

const mainButtonStyle = {
  width: 100,
  height: 50,
  color: "white",
  borderColor: "white",
  fontSize: 18,
  margin: "10px",
};

const StudentControl: FC<Props> = ({ users, setSearchQuery }) => {
  const [selectedUser, setSelectedStudent] = useState<User[]>([]);
  const { setType, setModalInfo } = useModalContext();

  const openMinusModal = () => {
    setModalInfo({
      targets: [...selectedUser],
    });
    setType("userMinus");
  };

  const openPlusModal = () => {
    setModalInfo({
      targets: [...selectedUser],
    });
    setType("userPlus");
  };

  const userSelectHandler = (params: { selectionModel: string[] }) => {
    const selectedUser = params.selectionModel.map((selection) => {
      return users.find((user) => user.id === selection) as User;
    });
    setSelectedStudent(selectedUser);
  };

  return (
    <div
      style={{
        height: "calc(100vh - 140px)",
        width: "100%",
      }}
    >
      <Input
        width="calc(100% - 250px)"
        height={50}
        onChange={setSearchQuery}
        margin="90px 0px 30px 250px"
        placeholder="검색할 유저의 이름을 입력해 주세요."
        fontSize="15px"
      />
      <Table<User>
        rows={users}
        columns={columns}
        style={{
          height: 600,
          marginLeft: 250,
          width: "calc(100% - 250px)",
        }}
        checkboxSelection={true}
        isRowSelectable={true}
        onSelectionModelChange={userSelectHandler}
      />
      <div
        style={{
          marginLeft: 250,
          marginTop: 20,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          {...mainButtonStyle}
          backgroundColor="rgb(53, 110, 214)"
          onClick={openPlusModal}
        >
          입금
        </Button>
        <Button
          {...mainButtonStyle}
          backgroundColor="rgb(228,68,64)"
          onClick={openMinusModal}
        >
          출금
        </Button>
      </div>
    </div>
  );
};

export default StudentControl;
