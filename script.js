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

// Function2: Rating
function rating(destinationId) {
    // 获取评分输入框的值
    let ratingInput = document.getElementById("ratingInput" + destinationId).value;
    // 评分功能：
    // 判断评分是否为数字
    if (ratingInput != null && !isNaN(ratingInput)) {
        // 如果是数字，转换字符串为整数，验证评分是否有效
        let rating = parseInt(ratingInput);
        // 如果有效: 1.储存到后台并提示储存成功，2.清空输入框，3.并显示在卡面上
        if (rating >= 1 && rating <= 5) {
            localStorage.setItem("rating" + destinationId, rating);
            alert(`Your rating ${rating} for destination ${destinationId} has been stored!`);
            document.getElementById("ratingInput" + destinationId).value = "";
            document.getElementById("rating-score" + destinationId).innerText = rating;
        }
        // 如果无效，提示重新输入
        else {
            alert("Invalid input! Please enter an integer among 1-5.");
        }
    }
    // 如果不是数字，提示输入数字
    else {
        alert("Invalid input! Please enter an integer.");
    }
}

// Function3: Display rating
window.onload = function loadRating() {
    for (let i = 1; i <= 3; i++) {
        let storedRating = localStorage.getItem("rating" + i);
        if (storedRating) {
            document.getElementById("rating-score" + i).innerText = storedRating;
            document.getElementById("display-Rating" + i).style.opacity = 1;
        }
    }
}
window.onload()
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

//Food Recommendation
function food_view1(){
    alert("Siu mai, is a dumplings made with pork, shrimp and mushroom. It is commonly sold as street food. We recognise siu mai by its yellow skin and orange adornments of either fish eggs or diced carrot.")
}

function food_view2(){
    alert("The egg tart is a popular pastry with a flaky crust and a smooth, creamy filling made from eggs, sugar, and milk.Typically served with warm, usually find in bakery.")
}

function food_view3(){
    alert("Char siu, also known as Chinese barbecue pork, is a popular Cantonese dish characterized by its sweet and savory flavor. The pork is marinated in a mixture of honey, soy sauce, five-spice powder. It is often served with rice or noodles")
}

function map_of_siumai() {
    location.href = "https://www.google.com/maps/search/%E9%85%92%E6%A8%93/@22.3330074,114.0294935,11z?entry=\
    ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
}

function map_of_eggtart() {
    location.href = "https://www.google.com/maps/search/%E9%BA%B5%E5%8C%85%E5%BA%97/@22.324734,114.2313765,13z?\
    entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
}

function map_of_chasiu() {
    location.href = "https://www.google.com/maps/search/%E7%87%92%E5%91%B3/@22.3466363,114.1854002,12.07z/data=!4\
    m2!2m1!6e5?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
}
//make a vote
document.addEventListener("DOMContentLoaded", function () {
    const pollForm = document.getElementById("poll-form");
    const SiumaiCount = document.getElementById("Siumai-count");
    const EggtartCount = document.getElementById("Eggtart-count");
    const ChasiuCount = document.getElementById("Chasiu-count");
 
    // Initialize vote counts from localStorage, or set to 0 if not present
    let SiumaiVotes = parseInt(localStorage.getItem("SiumaiVotes")) || 0;
    let EggtartVotes = parseInt(localStorage.getItem("EggtartVotes")) || 0;
    let ChasiuVotes = parseInt(localStorage.getItem("ChasiuVotes")) || 0;
    
    updateResults();

    pollForm.addEventListener("submit", function (e) {

        // It will help to prevent the submission of 
        // form, so that following code can execute
        e.preventDefault();
        const formData = new FormData(pollForm);
        const userVote = formData.get("vote");

        if (userVote === "Siu mai") {
            SiumaiVotes++;
        } else if (userVote === "Egg tart") {
            EggtartVotes++;
        } else if (userVote === "Cha siu") {
            ChasiuVotes++;
        }

        // Save the updated vote counts to localStorage
        localStorage.setItem("SiumaiVotes", SiumaiVotes);
        localStorage.setItem("EggtartVotes", EggtartVotes);
        localStorage.setItem("ChasiuVotes", ChasiuVotes);

        updateResults();
    });

    function updateResults() {
        SiumaiCount.textContent = SiumaiVotes;
        EggtartCount.textContent = EggtartVotes;
        ChasiuCount.textContent = ChasiuVotes;
    }
});

/*FoodQuiz*/

function checkAnswerQ1(){
    if (document.quiz.answerQ1.value == "A"){
        document.quiz.correctnessQ1.value ="you are correct!"
    } else {document.quiz.correctnessQ1.value ="you are wrong, the correct answer is A"}
}

function checkAnswerQ2(){
    if (document.quiz.answerQ2.value == "C"){
        document.quiz.correctnessQ2.value ="you are correct!"
    } else {document.quiz.correctnessQ2.value ="you are wrong, the correct answer is C"}
}

function checkAnswerQ3(){
    if (document.quiz.answerQ3.value == "B"){
        document.quiz.correctnessQ3.value ="you are correct!"
    } else {document.quiz.correctnessQ3.value ="you are wrong, the correct answer is B"}
}
