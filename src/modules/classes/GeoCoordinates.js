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
            //Set the appropriate reference on google maps
            const mapRef = `https://www.google.pl/maps/@${latitude},${longitude},4440m/data=!3m1!1e3`;
            //Round the numbers
            latitude  = position.coords.latitude.toFixed(2);
            longitude = position.coords.longitude.toFixed(2);
            
            newInfo.innerHTML = `latitude/longitude: ${latitude} ${longitude}`;
            
            //Create an <a> element with reference to map with current user position
            const mapRefLink = document.createElement("a");
            mapRefLink.href = mapRef;
            mapRefLink.classList.add("informations__link");
            mapRefLink.innerHTML = "->click here to see the position on the map<-";
            //Append link element to li element
            newInfo.appendChild(mapRefLink);
          }
        
          function error() {
            newInfo.innerHTML = "Unable to retrieve your location";
          }
    }
}

export default GeoCoordinates;