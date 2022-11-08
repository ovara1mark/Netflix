import React from "react";
import { AdultNav } from "../../molecules";
import title from "../../../Asset/movie-title.webp";
import { FaInfoCircle, FaPlay } from "react-icons/fa";


export const HomeAdults = () => {
    return (
        <>
        <div>
            <img style={{position: "absolute", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat",  }} src="https://occ-0-5543-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVk4xIur0E3jyFbckGV3xEDY7PjWG14B4-No0owPK4VSwU54OW5llS4JFbqOjMFB6OYAoz5unKiwqlDzfA5NKkledt789Tk5VwtA.webp?r=031" alt="hero-banner" />
            <AdultNav />
            <div style={{position: "absolute", width: "50%", padding: "0 50px", marginTop: "64px"}}>
            <img style={{width: "85%"}} src={title} alt="hero-title" />
            <p style={{textShadow: "2px 2px 4px rgb(0 0 0 / 45%)", color: "white", width: "85%"}}>
            A TV producer discovers a secret supernatural world as she becomes entangled with a former deity who's spent centuries searching for his lost lover.
            </p>
            <div style={{display: "flex", gap: "16px"}}>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px"}}><FaPlay /> Play</button>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px", backgroundColor: "rgba(109, 109, 110, 0.7)", color: "white"}}><FaInfoCircle /> More Info</button>
            </div>
            </div>
        </div>
        </>
    );
}