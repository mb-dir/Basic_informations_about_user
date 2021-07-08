class CurrentlyTime{
    constructor(infoContainer){
        this.infoContainer = infoContainer;

        this.timeCurrentlySpentRender();
    }
    timeCurrentlySpentRender(){
        let timeSpentSeconds = 0;
        let timeSpentMinutes = 0;
        let timeSpentSecondsMod = 0
        
        const newInfo = document.createElement("li");
        newInfo.className = "basicList__element informations__info";
        newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentSeconds}s`;

        this.infoContainer.appendChild(newInfo);

        setInterval(()=>{
            timeSpentSeconds++;
            timeSpentSecondsMod = timeSpentSeconds%60;

            if(timeSpentSeconds >= 60){
                if(timeSpentSecondsMod === 0){
                    timeSpentMinutes++;
                }
                newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentMinutes}m ${timeSpentSecondsMod}s`;
              }else{
                newInfo.innerHTML = `Time currently  spent on this page: ${timeSpentSeconds}s`;
              }

        },1000);
    }
}

export default CurrentlyTime;