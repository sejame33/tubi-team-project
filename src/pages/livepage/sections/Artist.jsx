import React from "react";
import SectionTitle from "../../../components/homecomp/SectionTitle";
import MyArtist from "../../../components/homecomp/MyArtist";

import "../LivePage.css";

const Artist = () => {
  return (
    <>
      <div className="livepage">
        <SectionTitle
          title="Artist"
          showMore={false}
          useNicknameTitle={false}
        />
        <MyArtist />
      </div>
    </>
  );
};

export default Artist;
