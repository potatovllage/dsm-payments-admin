import _ from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUsersRequest } from "../apis/userApi";
import StudentControl from "../components/userControl";
import { useUserContext } from "../hooks/context/usersContext";

const StudentControlContainer = () => {
  const { users, setUsers } = useUserContext();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const history = useHistory();
  const initializeUsers = useCallback(async () => {
    if (!setUsers || !history) return;
    try {
      const users = await getUsersRequest(searchQuery);
      setUsers(users);
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  }, [setUsers, history, searchQuery]);

  const debounceSetSearchQuery = _.debounce((value: string) => {
    setSearchQuery(value);
  }, 1000);

  useEffect(() => {
    initializeUsers();
  }, [initializeUsers]);

  return (
    <StudentControl users={users} setSearchQuery={debounceSetSearchQuery} />
  );
};

export default StudentControlContainer;
