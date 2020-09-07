import React from "react";
import Header from "./components/Header/Header";
import HabitList from "./components/HabitList/HabitList";
import TaskList from "./components/TaskList/TaskList";
import { createGlobalStyle } from "styled-components";
import "./assets/reset/reset.scss";
import colors from "./colors/_colors";

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(0deg, ${colors.purpleDark} 0%, ${colors.black} 100%);
    height: 100vh;
    #root > * {
      box-sizing: border-box;
	  }
  }
`;

const App: React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Header heading="test" />
            <HabitList />
            <TaskList />
        </React.Fragment>
    );
};

export default App;
