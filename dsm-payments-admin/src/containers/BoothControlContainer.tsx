import React from "react";
import BoothControl from "../components/boothControl";
import { useBoothContext } from "../hooks/context/boothsContext";

const BoothControlContainer = () => {
  const { booths, setBooths } = useBoothContext();
  return <BoothControl booths={booths} />;
};

export default BoothControlContainer;
