// styles import
import "../styles/main.scss";

import GetInfo from "./classes/GetInfo";

const infoContainer = document.querySelector("#infoContainer");

const info = new GetInfo(infoContainer);

console.log(info)
