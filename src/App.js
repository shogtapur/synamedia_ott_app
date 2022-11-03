import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

//componets
import Navbar from "./component/Navbar";

//pages
import HomePage from "./pages/Home";
import Catchup from "./pages/Catchup";
import Boxset from "./pages/Boxset";
import Movies from "./pages/Movies";
import Kids from "./pages/Kids";
import Store from "./pages/Store";
import Sports from "./pages/Sports";
import Mylibrary from "./pages/Mylibrary";
import AboutPage from "./pages/About";
import Singlepage from "./pages/Singlepage";

class App extends React.Component {
  componentWillMount() {
    if (process.env.REACT_APP_TARGET_VALUE === "Tata") {
      import("./styles/tata.css");
    } else if (process.env.REACT_APP_TARGET_VALUE === "Airtel") {
      import("./styles/airtel.css");
    }
  }

  render() {
    return (
     <div className="root__container">
     <Router>
    <Navbar />
    <div className='body_container'>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/catchup" element={<Catchup />}></Route>
        <Route path="/boxset" element={<Boxset />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/sport" element={<Sports />}></Route>
        <Route path="/mylibraries" element={<Mylibrary />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/singleshow" element={<Singlepage />}></Route>
      </Routes>
    </div>
  </Router>
  </div>
    );
  }
}
export default App;
