import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";
import { useHistory } from "react-router-dom";
import { getBoothesRequest } from "../apis/boothApi";
import BoothControl from "../components/boothControl";
import { useBoothContext } from "../hooks/context/boothsContext";

const BoothControlContainer = () => {
  const { booths, setBooths } = useBoothContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const history = useHistory();

  const initializeBoothes = useCallback(async () => {
    if (!setBooths || !history) return;
    try {
      const boothes = await getBoothesRequest(searchQuery);
      setBooths(boothes);
    } catch (error) {
      history.push("/login");
    }
  }, [setBooths, history, searchQuery]);

  const debounceSetSearchQuery = _.debounce((value: string) => {
    setSearchQuery(value);
  }, 1000);

  useEffect(() => {
    initializeBoothes();
  }, [initializeBoothes, setSearchQuery]);

  return (
    <BoothControl setSearchQuery={debounceSetSearchQuery} booths={booths} />
  );
};

export default BoothControlContainer;
