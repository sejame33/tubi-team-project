import React, { useState } from "react";
import "./LivePage.css";
import Artist from "./sections/Artist";
import Live from "./sections/Live";

const LivePage = () => {
  return (
    <>
      <Artist />
      <Live />
    </>
  );
};

export default LivePage;
