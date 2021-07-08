// styles import
import "../styles/main.scss";

// js import
import GetInfo from "./classes/GetStaticInfo";
import BatteryInfo from "./classes/BatteryInfo";

//variables ralated with DOM
const infoContainer = document.querySelector("#infoContainer");

//objects
const info = new GetInfo(infoContainer);
const batteryInfo = new BatteryInfo(infoContainer);
