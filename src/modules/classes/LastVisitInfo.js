class lastVisitInfo{
    constructor(infoContainer){
         //Container for elements to show(the elements are li with single info)
        this.infoContainer = infoContainer;

        //Calling these two methods right away when the object is created in order to save/get the informations from storage 
        this.getLastVisit();
        this.setDateOfLastVisit();
    }

    //This method gets inforamtions from local storage and shows it on page
    getLastVisit(){
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";

        this.infoContainer.appendChild(newInfo);

        const date = window.localStorage.getItem("lastVisit");

        if(date === null){
            newInfo.innerHTML =  "It is Your first visit here";
        }else{
            newInfo.innerHTML = date;
        }
    }

    //Auxiliary method which save the info about last visit in local storage
    setDateOfLastVisit(){
        const nowDate = new Date();
        let [month, day, year, hour, minutes, dayNumber] = [nowDate.getMonth(), nowDate.getDate(), nowDate.getFullYear(), nowDate.getHours(), nowDate.getMinutes(), nowDate.getDay()];
        const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        if(month < 10){
            month = `0${month}`;
        }
        if(day < 10){
            day = `0${day}`;
        }
        if(hour < 10){
            hour = `0${hour}`;
        }
        if(minutes < 10){
            minutes = `0${minutes}`;
        }
        const lastVisitDate = `${year}-${month}-${day}(${weekDays[dayNumber]}), ${hour}:${minutes}`;

        window.localStorage.setItem("lastVisit", lastVisitDate);
    }
}

export default lastVisitInfo;