import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/default/header";
import Modal from "../components/default/modal";
import Navigation from "../components/default/navigation";
import {
  BoothControlContainer,
  HomeContainer,
  LogContainer,
  LoginContainer,
  UserControlContainer,
} from "../containers";
import { useModalContext } from "../hooks/context/modalContext";

const RootRouter: FC = () => {
  const { type } = useModalContext();
  return (
    <>
      {type !== "" ? <Modal /> : ""}
      <BrowserRouter>
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route path="/log" component={LogContainer} />
          <Route path="/user/control" component={UserControlContainer} />
          <Route path="/booth/control" component={BoothControlContainer} />
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default RootRouter;
