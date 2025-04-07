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

/*History*/
const quizQuestions = [
    {
        question: "When was Hong Kong handed back to China?",
        answers: ["1945", "1997", "1984", "2000"],
        correct: 1,
        stats: [10, 60, 20, 10]
    },
    {
        question: "What treaty marked the start of British rule over Hong Kong in 1842?",
        answers: ["Treaty of Peking", "Treaty of Nanking", "Treaty of Versailles", "Sino-British Declaration"],
        correct: 1,
        stats: [15, 55, 20, 10]
    },
    {
        question: "In 2008, which Olympic events did Hong Kong host?",
        answers: ["Swimming", "Gymnastics", "Equestrian", "Track and Field"],
        correct: 2,
        stats: [20, 15, 50, 15]
    },
    {
        question: "What principle was established for Hong Kong during the 1997 handover?",
        answers: ["One Country, Two Systems", "Two Countries, One System", "One Nation, One Law", "Complete Autonomy"],
        correct: 0,
        stats: [65, 15, 10, 10]
    },
    {
        question: "Why did Britain want Hong Kong in 1842?",
        answers: ["Tourism", "Military Base", "Opium Trade", "Cultural Exchange"],
        correct: 2,
        stats: [10, 20, 55, 15]
    }
];

let currentQuestionIndex = 0;
let fiftyFiftyUsed = false;
const homeSection = document.getElementsByClassName("history-header")[0];
const quizSection = document.getElementById("History-quiz");
const section1842 = document.getElementById("1842");
const section1997 = document.getElementById("1997");
const section2008 = document.getElementById("2008");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const resultElement = document.getElementById("result");
const statsGraph = document.getElementById("statsGraph");
const nextButton = document.getElementById("nextQuestion");

function showQuiz() {
    homeSection.style.display = "none";
    section1842.style.display = "none";
    section1997.style.display = "none";
    section2008.style.display = "none";
    quizSection.style.display = "block";
    currentQuestionIndex = 0;
    loadQuestion();
}

function showHome() {
    quizSection.style.display = "none";
    homeSection.style.display = "block";
    section1842.style.display = "flex";
    section1997.style.display = "flex";
    section2008.style.display = "flex";
    fiftyFiftyUsed = false;
    document.getElementById("fiftyFifty").disabled = false;
    resultElement.textContent = "";
    statsGraph.style.display = "none";
    nextButton.style.display = "none";
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].style.display = "inline-block";
    }
}

function loadQuestion() {
    const currentQuiz = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuiz.question;
    for (let i = 0; i < currentQuiz.answers.length; i++) {
        answerButtons[i].textContent = currentQuiz.answers[i];
        answerButtons[i].style.display = "inline-block";
    }
    resultElement.textContent = "";
    statsGraph.style.display = "none";
    nextButton.style.display = "none";
}

function checkAnswer(selected) {
    const currentQuiz = quizQuestions[currentQuestionIndex];
    if (selected === currentQuiz.correct) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Wrong! The answer was " + currentQuiz.answers[currentQuiz.correct];
    }
    nextButton.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        fiftyFiftyUsed = false;
        document.getElementById("fiftyFifty").disabled = false;
    } else {
        resultElement.textContent = "Quiz completed! Return home to restart.";
        nextButton.style.display = "none";
    }
}

function useFiftyFifty() {
    if (fiftyFiftyUsed) {
        alert("You’ve already used the 50:50 tip for this question!");
        return;
    }
    fiftyFiftyUsed = true;
    document.getElementById("fiftyFifty").disabled = true;
    const currentQuiz = quizQuestions[currentQuestionIndex];
    let wrongIndex = (currentQuiz.correct + 1) % 4;
    for (let i = 0; i < answerButtons.length; i++) {
        if (i !== currentQuiz.correct && i !== wrongIndex) {
            answerButtons[i].style.display = "none";
        }
    }
}

function showStats() {
    const currentQuiz = quizQuestions[currentQuestionIndex];
    statsGraph.style.display = "block";
    statsGraph.innerHTML = "Statistics:<br>" +
        currentQuiz.answers.map((ans, i) => `${ans}: ${currentQuiz.stats[i]}%`).join("<br>");
}

window.onload = function() {
    section1842.style.display = "flex";
    section1997.style.display = "flex";
    section2008.style.display = "flex";
    quizSection.style.display = "none";
};