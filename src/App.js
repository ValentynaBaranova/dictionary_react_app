import Dictinary from "./Dictinary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictinary defaultKeyword="sunset" />
      </div>
      <footer>
        This project was coded by Valentyna Baranova and is
        <a href="https://github.com/ValentynaBaranova/dictionary_react_app">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://grand-tarsier-f22d60.netlify.app/">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
