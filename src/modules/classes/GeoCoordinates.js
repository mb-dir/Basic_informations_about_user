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

        //auxiliary functions related with geolocation API(https://developer.mozilla.org/pl/docs/Web/API/Geolocation_API)- these are navigator.geolocation.getCurrentPosition callbacks
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            newInfo.innerHTML = `latitude/longitude: ${latitude} ${longitude}`;
          }
        
          function error() {
            newInfo.innerHTML = "Unable to retrieve your location";
          }
    }
}

export default GeoCoordinates;