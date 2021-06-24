import React, { FC, useState } from "react";
import { useModalContext } from "../../hooks/context/modalContext";
import User from "../../models/user";
import Button from "../default/button";
import Table from "../default/table";
import columns from "./columns";

interface Props {
  users: User[];
}

const mainButtonStyle = {
  width: 100,
  height: 50,
  color: "white",
  borderColor: "white",
  fontSize: 18,
  margin: "10px",
};

const StudentControl: FC<Props> = ({ users }) => {
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

  const userSelectHandler = (params: { selectionModel: number[] }) => {
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
      <Table<User>
        rows={users}
        columns={columns}
        style={{
          height: 600,
          marginLeft: 250,
          marginTop: 90,
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
