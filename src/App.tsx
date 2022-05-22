import React, { useState } from "react";

import "./App.css";
import First from "./First";
// import User from "./components/User";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
let url: string;
function App() {
  const [country, setcountry] = useState<string>("in");
  const [category, setcategory] = useState<string>("");

  if (category === "") {
    url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=08b411d01bcd456b88f0954c6fa59f3e`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=08b411d01bcd456b88f0954c6fa59f3e`;
  }

  return (
    <>
      <div className="App">
        <Navbar
          setcategory={setcategory}
          category={category}
          country={country}
        />
        <div id="content">
          <Sidebar setcountry={setcountry} category={category} />
          <br></br>
          <First url={url} />
        </div>
      </div>
    </>
  );
}

export default App;
