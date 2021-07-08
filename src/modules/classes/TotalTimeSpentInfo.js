class TotalTime{
    constructor(infoContainer){
        this.infoContainer = infoContainer;

        this.storageTotalTimeSpent();
        this.getTotalTime();
    }
    storageTotalTimeSpent(){
        let spentSeconds = 0;
        setInterval(()=>{
            spentSeconds++;
        },1000);

        addEventListener("unload", ()=>{
            const timeFormStorage = parseInt(window.localStorage.getItem("totalTime"));
            if(timeFormStorage){
                window.localStorage.setItem("totalTime", spentSeconds + timeFormStorage);
            }else{
                window.localStorage.setItem("totalTime", spentSeconds); 
            }
        });
    }

    getTotalTime(){
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";
        this.infoContainer.appendChild(newInfo);

        const totalTime = parseInt(window.localStorage.getItem("totalTime"));
        const totalTimeHours = Math.floor(totalTime/3600);
        const totalTimeMinutes = Math.floor((totalTime-(totalTimeHours*3600))/60);
        const totalTimeSeconds = Math.floor(totalTime-(totalTimeHours*3600+totalTimeMinutes*60));

        //If it is first visit, there is no "totalTime" in localStorage
        if(isNaN(totalTime)){
            newInfo.innerHTML = "It is Your first visit here";
        }

        if(totalTimeHours!==0){
            newInfo.innerHTML = `Total time spent on this page by you: ${totalTimeHours}h ${totalTimeMinutes}m ${totalTimeSeconds}s`;
        }else if(totalTimeMinutes!==0){
            newInfo.innerHTML = `Total time spent on this page by you: ${totalTimeMinutes}m ${totalTimeSeconds}s`;
        }else{
            newInfo.innerHTML = `Total time spent on this page by you: ${totalTimeSeconds}s`;
        }
    }
}

export default TotalTime;