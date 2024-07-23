// src/App.js
import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    const response = await fetch("https://picsum.photos/500/200");
    setImageUrl(response.url);
  };

  return (
    <div>
      <h1>Random Picture</h1>
      {imageUrl && <img src={imageUrl} alt="Random" />}
      <button onClick={fetchRandomImage}>Get Another Picture</button>
    </div>
  );
}

export default App;
