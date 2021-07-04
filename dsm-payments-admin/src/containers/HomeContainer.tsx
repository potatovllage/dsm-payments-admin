import React, { useCallback, useEffect, useState } from "react";
import { getStatusRequest } from "../apis/statusApi";
import Home from "../components/home";
import { useStatusContext } from "../hooks/context/statusContext";

const HomeContainer = () => {
  const { status, setStatus } = useStatusContext();

  const initializeStatus = useCallback(async () => {
    const status = await getStatusRequest();
    setStatus(status);
    setLoading(false);
  }, [setStatus]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    initializeStatus();
  }, [initializeStatus]);
  return <Home status={status} loading={loading} />;
};

export default HomeContainer;
