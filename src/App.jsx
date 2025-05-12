import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostListProvider from "./store/postList-store";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <PostListProvider>
      <div className="app-container">       
        <Sidebar />
        <div className="content">
          <Header />       
        {/* Outlet component is used to render all the routing specific children at the correct places.*/}
          <div className="main-content-area">
            <Outlet/>
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
