// import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  const [key, setKey] = useState(0);

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div className="layout">
      <div className="layout_navbar">
        <Link
          to="/1"
          className="layout_navbar_item"
          data-tooltip-id="home-tooltip"
          data-tooltip-content="Căn hộ"
        >
          <i className="fa-solid fa-house icon_home"></i>
        </Link>
        <Link
          to="/2"
          className="layout_navbar_item"
          data-tooltip-id="hotel-tooltip"
          data-tooltip-content="Chung cư mini"
        >
          <i className="fa-solid fa-hotel icon_home"></i>
        </Link>
        <Link
          to="/3"
          className="layout_navbar_item"
          data-tooltip-id="user-tooltip"
          data-tooltip-content="Ở ghép"
        >
          <i className="fa-solid fa-user-group icon_home"></i>
        </Link>
      </div>

      <div
        style={{
          paddingTop: "",
        }}
        className="layout_container"
      >
        <Header onReload={handleReload} />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
