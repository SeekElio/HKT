//**Destination**

//Function1 :ViewDetail
function view1(){
    alert("Victoria Harbour, located between Hong Kong Island and the Kowloon Peninsula, is a world-famous natural harbour. Known for its stunning skyline and vibrant atmosphere, it serves as a major shipping hub and offers iconic night views. The harbour is also famous for the Symphony of Lights show and is a popular destination for tourists and locals alike.");
}

function view2(){
    alert("Victoria Peak is Hong Kong's highest point at 554 meters above sea level. It offers breathtaking panoramic views of the city's skyline and harbor. Popular for its tram rides and lush greenery, it's a must-visit destination for tourists and locals alike.")
}

function view3(){
    alert("Central, Hong Kong, is renowned for its financial services. It serves as a global financial hub with major banks and financial institutions.")
}

//Function2: Rating
function rating(){
    //获取评分
    ratingInput = document.getElementById("ratingInput").value;
    //评分功能：
    ///判断评分是否为数字
    if (ratingInput != null && !isNaN(ratingInput)){
        //如果是数字，转换字符串为整数，验证评分是否有效
        let rating = parseInt(ratingInput);
        //如果有效:1.储存到后台并提示储存成功，2.清空输入框，3.并显示在卡面上
        if (rating>=1 && rating<=5){
            localStorage.setItem("rating", rating);
            alert(`Your rating ${rating} has been stored!`);
            document.getElementById("rating").value = "";
            document.getElementById("rating-score").innerText = rating;
        }
        //如果无效，提示重新输入
        else{
            alert("Invalid input! Please enter an integer among 1-5.");
        }
    }
    //如果不是数字，提示输入数字
    else{
        alert("Invalid input! Please enter an integer.");
    }
}

//Function3: Display rating
window.onload = function loadRating(){
    let storedRating = localStorage.getItem("rating");
    if (storedRating) {
        document.getElementById("rating-score").innerText = storedRating;
        document.getElementById("display-Rating").style.opacity = 1; 
    }
}
window.onload();

//Function4: Quiz
function startQuiz(){
    //Check wheter user wants to start
    let result = confirm("Are you sure to strat this quiz?");
    if (!result){
        alert("You are successfully quit the quiz!")
    }
    else{
        alert("Let's start the quiz!")
    }
    //start the quiz
    while (result){
        let answerQ1 = window.prompt("Q1. Where is Victoria Harbour located in?")
        if (answerQ1.toLowerCase() =="hong kong island" ||answerQ1.toLowerCase() =="kowloon peninsula"||answerQ1.toLocaleLowerCase =="between Hong Kong Island and the kowloon peninsula"){
            alert("Corrcet!")
        }
        else{
            alert(`Your answer 【${answerQ1}】 is incorrect!`)
        }
        let answerQ2 = window.prompt("Q2. What's the height of Victoria Peak?(m)")
        if (answerQ2.toLowerCase() =="554" || answerQ2.toLowerCase() == "554m"){
            alert("Corrcet!")
        }
        else{
            alert(`Your answer 【${answerQ2}】 is incorrect!`)
        }
        let answerQ3 = window.prompt("Q3. Which service is Central Area most famous for?")
        if (answerQ3.toLowerCase() =="finance" || answerQ3.toLowerCase() == "finance service"){
            alert("Corrcet!")
        }
        else{
            alert(`Your answer 【${answerQ3}】 is incorrect!`)
        }
        break
    }
}