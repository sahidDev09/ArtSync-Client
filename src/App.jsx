import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import "./locomotive.css";


function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
