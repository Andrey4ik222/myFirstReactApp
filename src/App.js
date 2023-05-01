import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
