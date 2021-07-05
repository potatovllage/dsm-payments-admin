import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getStatusRequest } from "../apis/statusApi";
import Home from "../components/home";
import { useStatusContext } from "../hooks/context/statusContext";

const HomeContainer = () => {
  const { status, setStatus } = useStatusContext();
  const history = useHistory();

  const initializeStatus = useCallback(async () => {
    try {
      const status = await getStatusRequest();
      setStatus(status);
      setLoading(false);
    } catch (error) {
      history.push("/login");
    }
  }, [setStatus, history]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    initializeStatus();
  }, [initializeStatus]);
  return <Home status={status} loading={loading} />;
};

export default HomeContainer;
