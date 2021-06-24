import React, { FC, useState } from "react";
import { useModalContext } from "../../hooks/context/modalContext";
import Booth from "../../models/booth";
import Button from "../default/button";
import Table from "../default/table";
import columns from "./columns";

interface Props {
  booths: Booth[];
}

const mainButtonStyle = {
  width: 100,
  height: 50,
  color: "white",
  borderColor: "white",
  fontSize: 18,
  margin: "10px",
};

const BoothControl: FC<Props> = ({ booths }) => {
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

  const boothSelectHandler = (params: { selectionModel: number[] }) => {
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
      <Table<Booth>
        rows={booths}
        columns={columns}
        style={{
          height: 600,
          marginLeft: 250,
          marginTop: 90,
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
