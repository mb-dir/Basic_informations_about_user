class UserMedia{
    constructor(infoContainer, ...meidaTypesToCheck){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;
        //array of mediaTypes to check(media types are defined when the instance is created(index.js))
        this.meidaTypesToCheck = meidaTypesToCheck;
        this.showMedia();
    }
    //Loop throught all af media types which are defined in index.js
    showMedia(){
        for(const media of this.meidaTypesToCheck){
            //Calling the method which renders informations about avaiable/unavaiable of media
            this.renderMedia(media);
        }
    }
    //Handling of the async method
    renderMedia(mediaType){
        this.getMedia().then((devices)=>{
            //Check if getMedia() method returnes desired object(device)
            const isMedia = devices.some(device => mediaType === device.kind);

            //Creating HTML content for such an object(device), before if statment, cuz in if decides only about content of li(newInfo)
            const newInfo = document.createElement("li");
            newInfo.className = "basicList__element informations__info";
            this.infoContainer.appendChild(newInfo);

            if(isMedia){
                newInfo.innerHTML = `${mediaType}: true`;
            }else{
                newInfo.innerHTML = `${mediaType}: false`;
            }
        });
    }
    //async method which returnes info about avaiable media, it returnes array of objects which describle avaiavle media
    async getMedia(){
        try{
            const md = navigator.mediaDevices;
            if (!md || !md.enumerateDevices){
              return false;
            }else{
                const devices = await md.enumerateDevices();
                return devices;
            }
        }catch(err){
            throw new Error(err);
        }
    }
}

export default UserMedia;