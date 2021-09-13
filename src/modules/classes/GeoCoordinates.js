class GeoCoordinates{
    constructor(infoContainer){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;

        //Call the method showing latitude/longitude
        this.getCoordinates();
    }
    getCoordinates(){
        //Create an appropriate HTML element(in this element the information will be kept) 
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";

        this.infoContainer.appendChild(newInfo);
    }
}

export default GeoCoordinates;