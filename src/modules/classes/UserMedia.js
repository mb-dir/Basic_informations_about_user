class UserMedia{
    constructor(infoContainer, ...meidaTypesToCheck){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;
        //array of mediaTypes to check(media types are defined when the instance is created(index.js))
        this.meidaTypesToCheck = meidaTypesToCheck;
    }

}

export default UserMedia;