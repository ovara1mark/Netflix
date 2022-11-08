import React from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import logo from "../../../Asset/logo.svg";

export const AdultNav = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(20, 20, 20)", background: "transparent", color: "white", padding: "0 50px", height: "70px", position: "relative", zIndex: "2", fontSize: "0.858rem",backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",  }}>
        <div style={{display: "flex", alignItems: "center", gap: "30px"}}>
            <img style={{width: "100px", backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)"}} src={logo} alt="logo" />
            <div style={{display: "flex", gap: "16px"}}>
            <span style={{fontWeight: "bold"}}>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
            <span>Browse by Languages</span>
            </div>
        </div>
        <div style={{display: "flex", gap: "16px"}}>
            <FaSearch style={{fontSize: "1.3rem"}} />
            <FaBell style={{fontSize: "1.3rem"}} />
            <img src="" alt="" />
            <FaCaretDown style={{fontSize: "1.3rem"}} />
        </div>
    </nav>
  );
};