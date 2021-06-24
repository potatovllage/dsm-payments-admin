import React from "react";
import { Container } from "@material-ui/core";
import RootContext from "./hooks/context/rootContext";
import RootRouter from "./route";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <RootContext>
      <Container>
        <GlobalStyle />
        <RootRouter />
      </Container>
    </RootContext>
  );
}

export default App;
