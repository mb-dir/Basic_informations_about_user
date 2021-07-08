// styles import
import "../styles/main.scss";

// js import
import GetInfo from "./classes/GetStaticInfo";

//variables ralated with DOM
const infoContainer = document.querySelector("#infoContainer");

//objects
const info = new GetInfo(infoContainer);
