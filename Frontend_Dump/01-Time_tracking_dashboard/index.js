document.addEventListener("DOMContentLoaded", () => {

    console.log("Start");

    // json
    let JSONdb;
    async function fetchData() {
        try {
            const response = await fetch('http://192.168.1.42:8080/data.json');
            const db = await response.json();
            JSONdb = db;
            createCard(db);
            console.log(db);
        } catch (error) {
            console.error('Erro ao carregar arquivo JSON:', error);
        }
    }
    fetchData();

    // #Variables
    // ##Profile
    const userName = document.getElementById('userName');
    const userPic = document.getElementById('userPic');

    const dailyBtn = document.getElementById("dailyBtn");
    const weeklyBtn = document.getElementById('weeklyBtn');
    const monthlyBtn = document.getElementById('monthlyBtn');

    // ##Time cards
    const cardTitle = document.getElementById('cardTitle');
    const cardTimeCount = document.getElementById('cardTimeCount');
    const cardPic = document.getElementById('cardPic');
    const cardPreviousTimeCount = document.getElementById('cardPreviousTimeCount');
    const cardPreviousPeriod = document.getElementById('cardPreviousPeriod');

    console.log("DOM carregado");


    // #Events
    let timeOpt = 0;

    //daily
    dailyBtn.addEventListener("click", () => {timeOpt = 1; console.log("Daily"); setTimeFrame (timeOpt)});

    //weekly
    weeklyBtn.addEventListener("click", () => {timeOpt = 2; console.log("Weekly"); setTimeFrame (timeOpt)});

    //monthly
    monthlyBtn.addEventListener("click", () => {timeOpt = 3; console.log("Weekly"); setTimeFrame (timeOpt)});

    // ##Showing info

    function setTimeFrame (timeOpt){
        timeChoice = timeOpt;

        switch (timeChoice) {
            case 1: //Daily
                cardTimeCount = document.innerhtml(JSONdb.timeframes.daily.current);
                cardPreviousTimeCount = document.innerhtml(JSONdb.timeframes.daily.previous);
                cardPreviousPeriod = document.innerhtml("Yesterday");
        
            case 2: //Weekly
                cardTimeCount = document.innerhtml(JSONdb.timeframes.weekly.current);
                cardPreviousTimeCount = document.innerhtml(JSONdb.timeframes.weekly.previous);
                cardPreviousPeriod = document.innerhtml("Last week");

            case 3: //monthly
                cardTimeCount = document.innerhtml(JSONdb.timeframes.monthly.current);
                cardPreviousTimeCount = document.innerhtml(JSONdb.timeframes.monthly.previous);
                cardPreviousPeriod = document.innerhtml("Last month");
        };

        console.log("Mudou o período.");
    }

    console.log("Criando cartões")
    function createCard(file){
        const cardsFather = document.getElementById("cards-container"); 
        file.forEach(_item => {

            const card = document.createElement('div');
            card.classList.add("card","bg-profile", "col");
            cardsFather.appendChild(card);
            // const pic = document.createElement('img');      
            // pic.classList.add("cardPic"),
            
            // title = document.createElement('h3'),
            // title.classList.add("cardTitle"),
            // title.textContext = JSONdb.title,
            // picChoice = title.textContext,
            // // switch (picChoice) {
            // //     case 'Work':
            // //         pic.src = "work.png";
            
            // //     case 'Play':
            // //         pic.src = "work.png";
            
            // //     case 'Study':
            // //         pic.src = "work.png";
            
            // //     case 'Exercise':
            // //         pic.src = "work.png";
            
            // //     case 'Social':
            // //         pic.src = "work.png";

            // //     case 'Self Care':
            // //         pic.src = "work.png";
            // // };
            

            // timecount = document.createElement('p'),
            // timecount.classList.add("cardTimeCount"),
            // timecount.textContext = JSONdb.timeframes.daily.current,

            // previoustimecount = document.createElement('p'),
            // previoustimecount.classList.add("cardPreviousTimeCount"),
            // previoustimecount.textContext = JSONdb.timeframes.daily.previous,

            // previousperiod = document.createElement('p'),
            // previousperiod.classList.add("cardPreviousPeriod"),
            // previousperiod.textContext = "Yesterday",


            // card.appendChild(img),
            // card.appendChild(h3),
            // card.appendChild(p),
            // card.appendChild(p),
            // card.appendChild(p),
        });
    }
    

    
})