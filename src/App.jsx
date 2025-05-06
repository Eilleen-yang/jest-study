import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./_components/Counter";
import InputMirror from "./_components/InputMirror";
import LoginStatus from "./_components/LoginStatus";

function App() {
  return (
    <>
      <Counter />
      <InputMirror />
      <LoginStatus />
    </>
  );
}

export default App;
