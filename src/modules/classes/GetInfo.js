class GetInfo{
    constructor(infoContainer){
        this.infoContainer = infoContainer;
        this.informationsToShow = {
            operatingSystem: this.getOperatingSystem(),
            browserName: this.getBrowserName(),
            width: screen.width,
            height: screen.height,
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
    getBrowserName(){
        let browser = null;
        if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) {
            browser = "Opera";
        } else if(navigator.userAgent.indexOf("Chrome") != -1 ) {
            browser =  "Chrome";
        } else if(navigator.userAgent.indexOf("Safari") != -1) {
            browser =  "Safari";
        } else if(navigator.userAgent.indexOf("Firefox") != -1 ){
            browser =  "Firefox";
        } else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) {
            browser =  "IE";
        } else {
            browser =  "Unknown";
        }
        return browser;
    }
}

export default GetInfo;