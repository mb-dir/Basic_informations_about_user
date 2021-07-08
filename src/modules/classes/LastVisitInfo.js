class lastVisitInfo{
    constructor(infoContainer){
        this.infoContainer = infoContainer;

        this.getLastVisit();
        this.setDateOfLastVisit();
    }
    getLastVisit(){
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";

        this.infoContainer.appendChild(newInfo);

        const date = window.localStorage.getItem("lastVisit");
        this.setDateOfLastVisit();
        if(date === null){
            newInfo.innerHTML =  "It is Your first visit here";
        }else{
            newInfo.innerHTML = date;
        }
    }

    //auxiliary methods(methods which do not "download" the informations, but are useful)
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