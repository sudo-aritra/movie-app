import { useState } from "react";
import Search from "./Components/Search";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="wrapper">
        <header>
          <img src="../public/hero-img.png" alt="" />
          <h1>
            Watch <span className="text-gradient">Movies</span> and enjoy
            without paying
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
}

export default App;
