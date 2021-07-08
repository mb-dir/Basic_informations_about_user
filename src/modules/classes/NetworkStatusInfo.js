class NetworkStatus{
    constructor(infoContainer){
        this.infoContainer = infoContainer;

        this.showNetworkStatus();
    }
    showNetworkStatus(){
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";
        this.infoContainer.appendChild(newInfo);

        const networkStatus = navigator.onLine;

        //Network status assuming that there is no change in connection state
        if(networkStatus){
            newInfo.innerHTML = "Online/offline: online";
        }else{
            newInfo.innerHTML = "Online/offline: offline";
        }
        //Network status if there is change in connection state
        window.addEventListener("online", ()=>{
            newInfo.innerHTML = "Online/offline: online";
        });
        window.addEventListener("offline", ()=>{
            newInfo.innerHTML = "Online/offline: offline";
        });
    }
}

export default NetworkStatus;