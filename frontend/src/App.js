import React from "react";
import Search from "./components/search/search";
import Modal from "./components/modal/modal";
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <div className="">
      <h1>I'm in app!</h1>
      <Homepage />
      <Search />
      <Modal />
    </div>
  );
}

export default App;
