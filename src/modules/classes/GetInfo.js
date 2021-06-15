class GetInfo{
    constructor(infoContainer){
        this.infoContainer = infoContainer;
        this.informationsToShow = {
            operatingSystem: this.getOperatingSystem()
        };
    }
    getOperatingSystem(){
        let OS = null;
        if(navigator.userAgent.indexOf("Win") != -1){
            OS = "Windows";
        }else if(navigator.userAgent.indexOf("Mac") != -1){
            OS = "Mac";
        }
        else if(navigator.userAgent.indexOf("X11") != -1){
            OS = "UNIX";
        }
        else if(navigator.userAgent.indexOf("Linux") != -1){
            OS = "Linux ";
        }
        return OS;
    }
}

export default GetInfo;