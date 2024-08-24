// Get the "Enter" button element
let enter = document.getElementById('enter');
// If the "Enter" button exists, add an event listener to it
if (enter) {
    enter.addEventListener('click', function () {
        const name = document.getElementById('name').value; // Get the user's name from the input field
        // If the user has entered a name, store it in local storage and display a welcome message
        if (name) {
            localStorage.setItem('name', name);
            alert(`Welcome, ${name}! Please select a category.`);
            categories.forEach(button => button.disabled = false); // Enable the category buttons
        } else {
            alert('Please enter your name'); // If the user hasn't entered a name, display an error message and disable the category buttons
            categories.forEach(button => button.disabled = true);
        }
    });
}

// Get all the category buttons
let categories = document.querySelectorAll('.category-btn');
categories.forEach(button => {
    button.disabled = true; // Initialize the category buttons as disabled
    // Add an event listener to each category button
    button.addEventListener('click', function () {
        let category = this.id; // Get the selected category
        localStorage.setItem('category', category); // Store the selected category in local storage
        window.location.href = 'quiz_page.html'; // Redirect to the quiz page
    });
});

// Define the questions for each category
let Questions = {
    // array of question objects for pipes category
    pipes: [
        {
            question: "Two pipes A and B can fill a tank in 20 minutes and 30 minutes respectively. If both pipes are opened together, the time taken to fill the tank is ?",
            options: [
                "50 minutes",
                "12 minutes",
                "25 minutes",
                "15 minutes"
            ],
            answer: "12 minutes"
        },
        {
            question: "Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. Both the pipes are opened together but after 4 minutes, pipe A is turned off. What is the total time required to fill the tank ?",
            options: [
                "10 min. 20 sec.",
                "11 min. 45 sec.",
                "12 min. 30 sec.",
                "14 min. 40 sec."
            ],
            answer: "14 min. 40 sec."
        },
        {
            question: "A cistern is normally filled in 8 hours but takes two hours longer to fill because of a leak in its bottom. If the cistern is full, the leak will empty it in ?",
            options: [
                "20 hrs",
                "28 hrs",
                "36 hrs",
                "40 hrs"
            ],
            answer: "20 hrs"
        },
        {
            question: "A tap can empty a tank in one hour. A second tap can empty it in 30 minutes. If both the taps operate simultaneously, how much time is needed to empty the tank ?",
            options: [
                "20 minutes",
                "30 minutes",
                "40 minutes",
                "45 minutes"
            ],
            answer: "20 minutes"
        },
        {
            question: "Three Taps A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is ?",
            options: [
                "10",
                "12",
                "14",
                "16"
            ],
            answer: "14"
        },
        {
            question: "Two pipes can fill a cistern in 3 hours and 4 hours respectively and a waste pipe can empty it in 2 hours. If all the three pipes are kept open, then the cistern will be filled in ?",
            options: [
                "5 hour",
                "8 hours",
                "10 hours",
                "12 hours"
            ],
            answer: "12 hours"
        },
        {
            question: "One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 min, then the slower alone will be able to fill the tank in ?",
            options: [
                "81 min",
                "108 min",
                "144 min",
                "192 min"
            ],
            answer: "144 min"
        },
        {
            question: "A tap can fill a cistern in 8 hours and another tap can empty it in 16 hours. If both the taps are open, the time (in hours) taken to fill the tank will be ?",
            options: [
                "8",
                "10",
                "16",
                "24"
            ],
            answer: "16"
        },
        {
            question: "Two pipes can fill a cistern separately in 10 hours and 15 hours. They can together fill the cistern in ?",
            options: [
                "6 hours",
                "7 hours",
                "8 hours",
                "9 hours"
            ],
            answer: "6 hours"
        },
        {
            question: "One fill pipe A is 3 times faster than second fill pipe B and takes 32 minutes less than the fill pipe B. When will the cistern be full if both pipes are opened together ?",
            options: [
                "6 min",
                "8 min",
                "12 min",
                "10 min"
            ],
            answer: "12 min"
        }
    ],
    // array of question objects for probability category
    probability: [
        {
            question: "An event in the probability that will never be happened is called as -",
            options: [
                "Unsure event",
                "Sure event",
                "Possible event",
                "Impossible event"
            ],
            answer: "Impossible event"
        },
        {
            question: "What will be the value of P(not E) if P(E) = 0.07?",
            options: [
                "0.90",
                "0.07",
                "0.93",
                "0.72"
            ],
            answer: "0.93"
        },
        {
            question: "What will be the probability of getting odd numbers if a dice is thrown?",
            options: [
                "1/2",
                "2",
                "4/2",
                "5/2"
            ],
            answer: "1/2"
        },
        {
            question: "What is the probability of getting a sum as 3 if a dice is thrown?",
            options: [
                "2/18",
                "1/18",
                "4",
                "1/36"
            ],
            answer: "1/18"
        },
        {
            question: "What is the probability of getting an even number when a dice is thrown?",
            options: [
                "1/6",
                "1/2",
                "1/3",
                "1/4"
            ],
            answer: "1/2"
        },
        {
            question: "The probability of getting two tails when two coins are tossed is -",
            options: [
                "1/6",
                "1/2",
                "1/3",
                "1/4"
            ],
            answer: "1/4"
        },
        {
            question: "What is the probability of getting the sum as a prime number if two dice are thrown?",
            options: [
                "5/24",
                "5/12",
                "5/30",
                "1/4"
            ],
            answer: "5/12"
        },
        {
            question: "What is the probability of getting atleast one head if three unbiased coins are tossed?",
            options: [
                "7/8",
                "1/2",
                "5/8",
                "8/9"
            ],
            answer: "7/8"
        },
        {
            question: "What is the probability of getting 1 and 5 if a dice is thrown once?",
            options: [
                "1/6",
                "1/3",
                "2/3",
                "8/9"
            ],
            answer: "1/3"
        },
        {
            question: "What will be the probability of losing a game if the winning probability is 0.3?",
            options: [
                "0.5",
                "0.6",
                "0.7",
                "0.8"
            ],
            answer: "0.7"
        }
    ],
    // array of question objects for age category
    age: [
        {
            question: "The average age of a man and his son is 48 years. The ratio of their ages is 11:5 respectively. What will be ratio of their ages after 6 years",
            options: [
                "6:5",
                "5:3",
                "4:3",
                "2:1"
            ],
            answer: "2:1"
        },
        {
            question: "In a family the average age of the father and mother is 38 years whereas the average age of father, mother and their only daughter is 28 years. Then the age of the daughter is -",
            options: [
                "5 years",
                "6 years",
                "7 years",
                "8 years"
            ],
            answer: "8 years"
        },
        {
            question: "Six years back Seema was half of that of Rupa in age. Four years hence the respective ratio of their ages would be 3:5. How old is Rupa at present?",
            options: [
                "32 years",
                "16 years",
                "40 years",
                "None of these"
            ],
            answer: "None of these"
        },
        {
            question: "If 8 :15 is the ratio of sunil and tarun ages than the ratio and tarun change after the period of 9 year and become 11:18 . Find out the age difference between sunil and tarun ?",
            options: [
                "20 years",
                "21 years",
                "24 years",
                "33 years"
            ],
            answer: "21 years"
        },
        {
            question: "10 year hence, 5:3 is the ratio of mother and daughter but 10 year before 3:1 would be the ratio of mother and daughter . Find out the mother and daughter present age of ratio?",
            options: [
                "1:2",
                "1:3",
                "2:3",
                "2:5"
            ],
            answer: "1:2"
        },
        {
            question: "If the age of a mother is 3 times in the comparison of her daughter before the period of 10 year . 10 year later from the present date , the mother age would be 2 times of her daughter. In that situation what should be the age ratio of them at the present time?",
            options: [
                "13:4",
                "9:2",
                "7:3",
                "5:2"
            ],
            answer: "7:3"
        },
        {
            question: "If Ram and Sham have 36 year and 16 year age . After how much time ram age would be double as old as sham ?",
            options: [
                "1 years",
                "2 years",
                "3 years",
                "4 years"
            ],
            answer: "4 years"
        },
        {
            question: "Yusuf is as much younger to ajay as he is older to pawan , if 48 year is the sum of ajay and pawan then what should be the present age of yusuf?",
            options: [
                "20 years",
                "24 years",
                "30 years",
                "cannot be determined"
            ],
            answer: "24 years"
        },
        {
            question: "Nitesh and raju is 40 and 60 years old. Find out the time howmuch year ago, the ratio of their age 3:5 ?",
            options: [
                "5 years",
                "10 years",
                "20 years",
                "37 years"
            ],
            answer: "10 years"
        },
        {
            question: "The age of the father was 38 years when he was born at that time the age of the mother was 36 years old while his brother was 4 year younger to his was born. What should be the difference between the age of father and mother?",
            options: [
                "2 years",
                "4 years",
                "6 years",
                "8 years"
            ],
            answer: "6 years"
        }
    ],
    // array of question objects for profit category
    profit: [
        {
            question: "The profit and loss account of a company signifies the following.",
            options: [
                "Profit and loss occurred from the sale of the company’s assets",
                "Profit and loss faced by the business or company",
                "Total capital put by the company",
                "None of the above"
            ],
            answer: "Profit and loss faced by the business or company"
        },
        {
            question: "The expenditure of the revenue of a company or a business is recorded in which of the following?",
            options: [
                "Balance sheet",
                "Trading account",
                "Account of profit and loss",
                "None of these"
            ],
            answer: "Account of profit and loss"
        },
        {
            question: "A person sells the car to another person at a loss of 10%. If the second person sells the car for Rs. 54000 and receives a 20% gain, what’s the actual price of the car?",
            options: [
                "Rs. 60000",
                "Rs. 25000",
                "Rs. 75000",
                "Rs. 50000"
            ],
            answer: "Rs. 50000"
        },
        {
            question: "If the selling price of 12 books is equivalent to the cost price of 18 copies, then calculate the profit per cent.",
            options: [
                "40%",
                "50%",
                "44%",
                "20%"
            ],
            answer: "50%"
        },
        {
            question: "The cost price of 20 shoes is equivalent to the selling price of x shoes. What is the value of x if the profit percentage is 25%?",
            options: [
                "25",
                "20",
                "19",
                "16"
            ],
            answer: "16"
        },
        {
            question: "Increase of debit in the profit and loss is also called _____.",
            options: [
                "Gross Profit",
                "Gross Loss",
                "Net Profit",
                "Net Loss"
            ],
            answer: "Net Loss"
        },
        {
            question: "The selling price of two bicycles each is Rs. 3990, one with a gain of 54% and another with a loss of 5%. What is the loss and gain transaction on the total transaction?",
            options: [
                "No gain and no loss",
                "2.55 loss",
                "0.25 loss",
                "2.55 gain"
            ],
            answer: "0.25 loss"
        },
        {
            question: "Rick bought cold drinks of Rs. 56000. Then he sold 1/3rd of the total purchase to a 40% loss. How much profit does he need to earn on the remaining cold drinks to cover the loss?",
            options: [
                "20%",
                "45%",
                "60%",
                "40%"
            ],
            answer: "20%"
        },
        {
            question: "In a clothing store, the profit percentage is 320% of the price. If its selling price remains the same and costs increase by up to 25%, then what percentage of the selling price will become profit?",
            options: [
                "100%",
                "20%",
                "70%",
                "50%"
            ],
            answer: "70%"
        },
        {
            question: "The balance between the loss and profit account is transmitted to _________.",
            options: [
                "Cash Flow Statement",
                "Trial Balance",
                "Trading Account",
                "Balance Sheet"
            ],
            answer: "Balance Sheet"
        }
    ]
};

let currentCategory = localStorage.getItem('category'); // Get the current category from local storage
let currentQuestions = Questions[currentCategory]; // Get the current questions for the selected category
let currentQuestionIndex = 0; // Initialize the current question index to 0
let score = 0; // Initialize the score to 0
let timerInterval; // Initialize the timer interval
let totalTimeTaken = 0; // Initialize the total time taken to 0
let startTime; // Initialize the start time
let attempts = 0; // Initialize the number of attempts to 0

// Function to start the quiz
function startQuiz() {
    startTime = Date.now(); // Set the start time

    // Display the question number
    let questionNumber = document.getElementById('question-number');
    questionNumber.innerText = `${currentQuestionIndex + 1}/10`;

    // Display the question
    let question = document.getElementById('question');
    question.innerText = currentQuestions[currentQuestionIndex].question;

    // Display the options
    let options = document.getElementById('options');
    options.innerHTML = '';
    currentQuestions[currentQuestionIndex].options.forEach(option => {
        let button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(option));
        options.appendChild(button);
    });
    // Start the timer
    startTimer();

    // Display the category heading
    let categoryHeading = document.getElementById('category-heading');
    let currentCategory = localStorage.getItem('category');
    switch (currentCategory) {
        case 'pipes':
            categoryHeading.textContent = 'Pipes And Cisterns';
            break;
        case 'probability':
            categoryHeading.textContent = 'Probability';
            break;
        case 'age':
            categoryHeading.textContent = 'Problem On Ages';
            break;
        case 'profit':
            categoryHeading.textContent = 'Profit And Loss';
            break;
        default:
            categoryHeading.textContent = 'Default Category';
    }
    // Set the next button text
    document.getElementById('next_btn').innerText = currentQuestionIndex === currentQuestions.length - 1 ? 'Submit' : 'Next Question';
}

// Function to select an option
function selectOption(option) {
    attempts++;
    if (option === currentQuestions[currentQuestionIndex].answer) {
        score++;
        document.getElementById('score').innerText = `Score: ${score}`;
    }
    nextQuestion();
}

// Function to move to the next question
function nextQuestion() {
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    totalTimeTaken += timeTaken;
    currentQuestionIndex++
    if (currentQuestionIndex < currentQuestions.length) {
        startQuiz()
    } else {
        endQuiz()
    }
}

// Function to start the timer
function startTimer() {
    let seconds = 10;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds--;
        document.getElementById('timer').innerText = `${seconds < 10 ? '0' : ''}${seconds}`;
        if (seconds === 0) {
            nextQuestion();
        }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    localStorage.setItem('score', score);
    localStorage.setItem('time', totalTimeTaken);
    localStorage.setItem('attempts', attempts);
    window.location.href = 'quiz_result.html';
}

let submit = document.getElementById('next_btn'); // Get the 'next' button element and add a click event listener to it

if (submit) {
    submit.addEventListener('click', nextQuestion);
}

document.addEventListener('DOMContentLoaded', startQuiz); // Start the quiz when the DOM content is fully loaded

let Name = document.getElementById('participant-name'); // Display the participant's name from localStorage
Name.textContent = localStorage.getItem('name');

// Check the score from localStorage and display 'Pass' or 'Fail'
if (localStorage.getItem('score') > 3) {
    let pass = document.getElementById('result');
    pass.innerHTML = 'Pass';
} else {
    let fail = document.getElementById('result');
    fail.innerHTML = 'Fail';
}

// Display total time from localStorage or '00' if not set
let totalTime = document.getElementById('total-time');
totalTime.textContent = `${localStorage.getItem('time') || '00'}`;

// Display total number of questions or '0' if not set
let totalQuestions = document.getElementById('total-questions');
totalQuestions.innerText = `${currentQuestions.length || '0'}`;

// Display number of attempts from localStorage or '0' if not set
let attempt = document.getElementById('attempted');
attempt.innerText = `${localStorage.getItem('attempts') || '0'}`;

// Display number of correct answers from localStorage or '0' if not set
let correct = document.getElementById('correct');
correct.textContent = localStorage.getItem('score') || '0';

// Calculate and display the number of wrong answers
let wrong = document.getElementById('wrong');
wrong.textContent = `${localStorage.getItem('attempts') - localStorage.getItem('score') || '0'}`;

// Calculate and display the percentage of correct answers
let percentage = document.getElementById('percentage');
percentage.textContent = `${Math.round((localStorage.getItem('score') / localStorage.getItem('attempts')) * 100)}%`;

// Add an event listener to the 'Start Again' button to reset localStorage and redirect to quiz page
let startAgain = document.getElementById('start-again');
if (startAgain) {
    startAgain.addEventListener('click', () => {
        localStorage.removeItem('score');
        localStorage.removeItem('time');
        window.location.href = 'quiz_page.html';
    });
}

// Add an event listener to the 'Go Home' button to reset localStorage and redirect to home page
let goHome = document.getElementById('go-home');
if (goHome) {
    goHome.addEventListener('click', () => {
        localStorage.removeItem('score');
        localStorage.removeItem('time');
        window.location.href = 'index.html';
    });
}