import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextFrom from "./Components/TextFrom";
import Alert from "./Components/Alert";
import {Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "#102f5e";
      document.body.style.color = "white";
    } else {
      setMode("light");
      showAlert("Light Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
        alert={alert}
      />
      <Alert alert={alert} />
      {/* <DarkMode/> */}

        <Routes>
          <Route
            path="/"
            element={
              <TextFrom
                heading="Try TextUtils Word & Character Counter & Text Manipulation"
                query="Enter Or Paste Text Below to use the utilities :"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
    </>
  );
}

export default App;
