import React from "react";
import { AdultNav } from "../../molecules";
import title from "../../../Asset/movie-title.webp";
import { FaAngleLeft, FaAngleRight, FaChevronCircleDown, FaInfoCircle, FaPlay, FaPlayCircle, FaPlusCircle, FaRegThumbsUp} from "react-icons/fa";
import CardImg from "../../../Asset/card-img.jpg";
import CardImg2 from "../../../Asset/card-img2.jpg";
import CardImg3 from "../../../Asset/card-img3.jpg";

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
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <div style={{display: "flex", gap: "16px"}}>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px", border: "none"}}><FaPlay /> Play</button>
            <button style={{display: "flex", alignItems: "center", gap: "8px", padding: "10px 24px", fontWeight: "bold", fontSize: "1rem", borderRadius: "5px", backgroundColor: "rgba(109, 109, 110, 0.7)", color: "white", border: "none"}}><FaInfoCircle /> More Info</button>
            </div>
            <p style={{color: "white", position: "absolute", right: "-630px", backgroundColor: "rgba(51,51,51,.6)", width: "70px", padding: "5px", border: "3px #dcdcdc", borderLeftStyle: "solid"}}>18+</p>
            </div>
            </div>
        </div>
        <div style={{width: "100%", paddingLeft: "50px", height: "25vh",}}>
            <div style={{width: "100%", position: "relative", marginTop: "500px", }}>
            <p style={{color: "white", marginTop: "50px", fontSize: "1.2rem"}}>Bingeworthy TvShows</p>
            <div style={{width: "fit-content"}}>
            <div style={{display: "grid", overflow: "hidden", gap: "8px", gridRows: "1", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",}}>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%" }} src={CardImg3} alt="" />
                <p style={{color: "white", position: "relative", top: "-50px", marginLeft: "30px", }}>Hello</p>
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg2} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg3} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", marginTop: "-150px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
            <div style={{width: "100%", position: "relative", marginTop: "30px", }}>
            <p style={{color: "white", marginTop: "100px", fontSize: "1.2rem"}}>Bingeworthy TvShows</p>
            <div style={{width: "fit-content"}}>
            <div style={{display: "grid", overflow: "hidden", gap: "8px", gridRows: "1", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",}}>
            <div style={{}}>
                <div style={{display: "flex"}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%", }} src={CardImg3} alt="" />
                </div>
                <div style={{color: "white", padding: "10px", backgroundColor: "transparent", marginTop: "10px"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <span style={{display: "flex", gap: "8px", fontSize: "1.5rem"}}>
                        <FaPlayCircle />
                        <FaPlusCircle />
                        <FaRegThumbsUp />
                        </span>
                        <div style={{fontSize: "1.5rem"}}>
                        <FaChevronCircleDown />
                        </div>
                    </div>
                    <div style={{display:"flex", gap: "2px"}}>
                        <span style={{color: "green", fontWeight: "bold", fontSize: "1rem"}}>90% Match</span>
                        <span style={{border: "1px solid white"}}>18+</span>
                        <span>5 Seasons</span>
                        <span style={{border: "1px solid white"}}>HD</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
                        <span>Soapy</span>
                        <span>Suspenseful</span>
                        <span>Teens</span>
                    </div>
                </div>
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg2} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg3} alt="" />
            </div>
            <div style={{}}>
                <img style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "5px", width: "100%"}} src={CardImg} alt="" />
            </div>
            </div>
            </div>
            </div>
            <div style={{position: "relative", color: "white", display: "flex", justifyContent: "space-between", fontSize: "3rem", alignItems: "center", marginTop: "-200px"}}>
            <FaAngleLeft />
            <FaAngleRight />
            </div>
        </div>
        </>
    );
};