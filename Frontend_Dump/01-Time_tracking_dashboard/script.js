document.addEventListener("DOMContentLoaded", () => {

    console.log("Começo");

    // json
    fetch('./data.json')
    .then(response =>  response.json())
    .then(bd =>{
        createCard(bd)
    })

    // Profile
    const userName = document.getElementById('userName');
    const userPic = document.getElementById('userPic');

    const dailyBtn = document.getElementById("dailyBtn");
    const weeklyBtn = document.getElementById('weeklyBtn');
    const monthlyBtn = document.getElementById('monthlyBtn');

    // Time cards
    const cardTitle = document.getElementById('cardTitle');
    const cardTimeCount = document.getElementById('cardTimeCount');
    const cardPic = document.getElementById('cardPic');
    const cardPreviousTimeCount = document.getElementById('cardPreviousTimeCount');
    const cardPreviousPeriod = document.getElementById('cardPreviousPeriod');

    userName.innerHTML = "DOM carregado";

    // #Getting info
    let timeOpt = 0;

    //daily
    // dailyBtn.addEventlistener("click", () => {timeOpt = 1, console.log("Abc")});

    //weekly
    // weeklyBtn.addEventlistener("click" , timeOpt = 2);

    //monthly
    // monthlyBtn.addEventlistener("click", timeOpt = 3);

    // ##Showing info

    function setTimeFrame (timeOpt){
        timeChoice = timeOpt;

        switch (timeChoice) {
            case 1: //Daily
                cardTimeCount = document.innerhtml(bd.timeframes.daily.current);
                cardPreviousTimeCount = document.innerhtml(bd.timeframes.daily.previous);
                cardPreviousPeriod = document.innerhtml("Yesterday");
        
            case 2: //Weekly
                cardTimeCount = document.innerhtml(bd.timeframes.weekly.current);
                cardPreviousTimeCount = document.innerhtml(bd.timeframes.weekly.previous);
                cardPreviousPeriod = document.innerhtml("Last week");

            case 3: //monthly
                cardTimeCount = document.innerhtml(bd.timeframes.monthly.current);
                cardPreviousTimeCount = document.innerhtml(bd.timeframes.monthly.previous);
                cardPreviousPeriod = document.innerhtml("Last month");
        };

        console.log("Mudou o período.");
    }

    console.log("Criando cartões")
    function createCard(bd){
        const cardsFather = document.getElementById("cards-container"); 
        bd.forEach(_item => {

            const card = document.createElement('div');
            card.classList.add("border")
            // const pic = document.createElement('img');      
            // pic.classList.add("cardPic"),
            
            // title = document.createElement('h3'),
            // title.classList.add("cardTitle"),
            // title.textContext = JSONbd.title,
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
            // timecount.textContext = JSONbd.timeframes.daily.current,

            // previoustimecount = document.createElement('p'),
            // previoustimecount.classList.add("cardPreviousTimeCount"),
            // previoustimecount.textContext = JSONbd.timeframes.daily.previous,

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

    createCard();
    setTimeFrame(timeOpt);

    
})