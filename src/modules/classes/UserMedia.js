class UserMedia{
    constructor(infoContainer, ...meidaTypesToCheck){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;
        //array of mediaTypes to check(media types are defined when the instance is created(index.js))
        this.meidaTypesToCheck = meidaTypesToCheck;
        this.getMedia();
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