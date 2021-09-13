class GeoCoordinates{
    constructor(infoContainer){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;

        //Call the method showing latitude/longitude
        this.getCoordinates();
    }
    getCoordinates(){
        console.log("Apud");
    }
}

export default GeoCoordinates;