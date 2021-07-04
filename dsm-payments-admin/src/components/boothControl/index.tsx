import React, { FC, useState } from "react";
import { useModalContext } from "../../hooks/context/modalContext";
import Booth from "../../models/booth";
import Button from "../default/button";
import Input from "../default/input";
import Table from "../default/table";
import columns from "./columns";

interface Props {
  booths: Booth[];
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

const BoothControl: FC<Props> = ({ booths, setSearchQuery }) => {
  const [selectedBooth, setSelectedBooth] = useState<Booth[]>([]);
  const { setType, setModalInfo } = useModalContext();

  const openMinusModal = () => {
    setModalInfo({
      targets: [...selectedBooth],
    });
    setType("boothMinus");
  };

  const openPlusModal = () => {
    setModalInfo({
      targets: [...selectedBooth],
    });
    setType("boothPlus");
  };

  const boothSelectHandler = (params: { selectionModel: string[] }) => {
    const selectedBooth = params.selectionModel.map((selection) => {
      return booths.find((booth) => booth.id === selection) as Booth;
    });
    setSelectedBooth(selectedBooth);
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
        placeholder="검색할 부스의 이름을 입력해 주세요."
        fontSize="15px"
      />
      <Table<Booth>
        rows={booths}
        columns={columns}
        style={{
          height: 600,
          marginLeft: 250,
          width: "calc(100% - 250px)",
        }}
        checkboxSelection={true}
        isRowSelectable={true}
        onSelectionModelChange={boothSelectHandler}
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

export default BoothControl;
