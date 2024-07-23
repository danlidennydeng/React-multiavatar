import React, { useState } from "react";
import multiavatar from "@multiavatar/multiavatar";
import "./App.css";

const Avatar = ({ id }) => {
  const avatarSvg = multiavatar(id);

  return <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />;
};

const App = () => {
  const [avatarId, setAvatarId] = useState("example-id");

  return (
    <div>
      <h1>Multiavatar Demo</h1>
      <Avatar id={avatarId} />
      <input
        type="text"
        value={avatarId}
        onChange={(e) => setAvatarId(e.target.value)}
        placeholder="Enter Avatar ID"
      />
    </div>
  );
};

export default App;
