import API_KEY from "../config";

class Geocoding{
    constructor(infoContainer){
        //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;

        //Call the method showing latitude/longitude
        this.showGeolocationInformations();
    }
    showGeolocationInformations(){
        //Create an appropriate HTML element(in this element the information will be kept) 
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";

        this.infoContainer.appendChild(newInfo);

        //Check if the browser supports the geolocation api
        if(!navigator.geolocation) {
            newInfo.innerHTML = "Geolocation is not supported by your browser";
        }else{
            newInfo.innerHTML = "Locating…";
            //If everything is ok use getCurrentPosition function
            navigator.geolocation.getCurrentPosition(success, error);
        }

        //auxiliary functions related with geolocation API(https://developer.mozilla.org/pl/docs/Web/API/Geolocation_API)- these are navigator.geolocation.getCurrentPosition callbacks
        function success(position) {
            //Precise values
            let latitude  = position.coords.latitude;
            let longitude = position.coords.longitude;
            //Based on api key, latitude and longitude create the appropriate address - this address in passed to fetch
            const apiRef = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`;
            
            console.log(apiRef)
          }
        
          function error() {
            newInfo.innerHTML = "Unable to retrieve your location";
          }
    }
}

export default Geocoding;