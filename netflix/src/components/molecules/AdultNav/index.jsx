import React from "react";
import { FaSearch, FaBell, FaCaretDown, FaSmileWink, FaUserSlash, FaUserFriends, FaRegUser } from "react-icons/fa";
import logo from "../../../Asset/logo.svg";

export const AdultNav = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(20, 20, 20)", background: "transparent", color: "white", padding: "0 50px", height: "70px", position: "relative", zIndex: "2", fontSize: "0.9rem",backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)", lineHeight: "1.2"  }}>
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
        <div style={{display: "flex", gap: "16px", alignItems: "center"}}>
            <FaSearch style={{fontSize: "1.2rem"}} />
            <span>Kids</span>
            <FaBell style={{fontSize: "1.2rem"}} />
            <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
            <FaRegUser style={{fontSize: "1.2rem",}} />
            <FaCaretDown style={{fontSize: "1.2rem"}} />
            </div>
        </div>
    </nav>
  );
};