import { useState, useEffect } from "react";
import { LoadImages, SearchImages } from "./components/api";
import Image from "./components/image";
import "./App.css";

function App() {
  const [query, setQuery] = useState();
  const [searchQ, setSearch] = useState();

  const data = LoadImages();

  const search = () => {
    setSearch(query);
  };

  const searchData = SearchImages(searchQ);
  console.log(searchData);

  return (
    <div className="App">
      <div>
        <h1>React Photo Search</h1>
      </div>

      <div className="main">
        <input
          type="text"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search free high resolution images"
        />
        <button  className="btn" onClick={search}>Search</button>
        <button className="book">Bookmarks</button>
      </div>
      <div>
        <div className="container">
          {searchQ
            ? searchData.map((img, key) => (
                <Image src={img.urls.thumb} key={key} />
              ))
            : data.map((img, key) => <Image src={img.urls.thumb} key={key} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
