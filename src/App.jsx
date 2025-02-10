import "./App.css";
import logo from "../public/solbook-logo.png";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header logo={logo} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}