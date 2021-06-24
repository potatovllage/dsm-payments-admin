import React from "react";
import StudentControl from "../components/userControl";
import { useUserContext } from "../hooks/context/usersContext";

const StudentControlContainer = () => {
  const { users, setUsers } = useUserContext();

  return <StudentControl users={users} />;
};

export default StudentControlContainer;
