/* =========================================================
   STEM TECH CHALLENGE
   =========================================================

   FINAL OFFLINE VERSION

   4 TEAMS
   3 ROUNDS
   15 QUESTIONS PER ROUND
   3 HEARTS PER TEAM
   15 SECOND TIMER
   PAUSE / RESUME
   HOST TEAM SELECTION
   +5 BEFORE TIME
   +2 AFTER TIME
   -1 HEART FOR WRONG ANSWER
   -2 POINTS WHEN NO HEARTS REMAIN
   UNDERTAKER BELL
   16-SOUND MANUAL MEME SOUNDBOARD
   NO PHONE BUZZERS
   NO PEERJS
   NO INTERNET REQUIRED

   ========================================================= */


/* =========================================================
   HOST PASSWORD
   ========================================================= */

const HOST_PASSWORD = "hurr3214@$";


/* =========================================================
   GAME SETTINGS
   ========================================================= */

const GAME_TIME = 15;

const STARTING_HEARTS = 3;

const CORRECT_BEFORE_TIME = 5;

const CORRECT_AFTER_TIME = 2;

const WRONG_HEART_PENALTY = 1;

const WRONG_NO_HEART_PENALTY = 2;


/* =========================================================
   ROUND 1 QUESTIONS
   ========================================================= */

const round1Questions = [

    {
        category: "COMPUTER MEMORY",

        question:
            "Which of these is a type of computer memory that is volatile?",

        answers: [
            "Hard Disk",
            "ROM",
            "RAM",
            "SSD"
        ],

        correct: 2
    },


    {
        category: "NETWORKING",

        question:
            "In networking, what does IP stand for?",

        answers: [
            "Internet Protocol",
            "Internal Port",
            "Information Process",
            "Input Path"
        ],

        correct: 0
    },


    {
        category: "PROGRAMMING",

        question:
            "Which of these is a high-level programming language?",

        answers: [
            "Assembly",
            "Python",
            "Machine Code",
            "Binary"
        ],

        correct: 1
    },


    {
        category: "OPERATING SYSTEMS",

        question:
            "Which of the following is NOT an operating system?",

        answers: [
            "Windows",
            "Linux",
            "Oracle",
            "macOS"
        ],

        correct: 2
    },


    {
        category: "WEB DEVELOPMENT",

        question:
            "In web development, HTML is primarily used for:",

        answers: [
            "Designing databases",
            "Structuring web pages",
            "Writing server code",
            "Encrypting data"
        ],

        correct: 1
    },


    {
        category: "OPEN SOURCE",

        question:
            "Which of these is an example of open-source software?",

        answers: [
            "Microsoft Office",
            "Linux",
            "Adobe Photoshop",
            "Oracle Database"
        ],

        correct: 1
    },


    {
        category: "ALGORITHMS",

        question:
            "Which of the following best describes an algorithm?",

        answers: [
            "A flowchart of a program",
            "A sequence of steps to solve a problem",
            "A type of data storage",
            "A computer virus"
        ],

        correct: 1
    },


    {
        category: "CLOUD COMPUTING",

        question:
            "What is the main advantage of cloud computing?",

        answers: [
            "It eliminates cybersecurity risks",
            "It provides scalability and remote access",
            "It guarantees unlimited storage",
            "It requires no internet"
        ],

        correct: 1
    },


    {
        category: "DATA SCIENCE",

        question:
            "Which of these programming languages is mainly used for data science and machine learning?",

        answers: [
            "Python",
            "C++",
            "PHP",
            "JavaScript"
        ],

        correct: 0
    },


    {
        category: "CYBERSECURITY",

        question:
            "In cybersecurity, a firewall is used to:",

        answers: [
            "Speed up the internet",
            "Block unauthorized access",
            "Backup files automatically",
            "Encrypt passwords"
        ],

        correct: 1
    },


    {
        category: "ARTIFICIAL INTELLIGENCE",

        question:
            "Which search algorithm is commonly used in Artificial Intelligence for shortest path problems?",

        answers: [
            "A* Algorithm",
            "Binary Search",
            "Depth First Search",
            "Selection Sort"
        ],

        correct: 0
    },


    {
        category: "COMPUTER ARCHITECTURE",

        question:
            "The von Neumann architecture is based on the idea that:",

        answers: [
            "Data and instructions are stored in separate memory",
            "Data and instructions share the same memory",
            "Computers can only process numerical data",
            "Programs must be hardwired"
        ],

        correct: 1
    },


    {
        category: "DATABASES",

        question:
            "Which of these is an example of a NoSQL database?",

        answers: [
            "MySQL",
            "Oracle DB",
            "MongoDB",
            "PostgreSQL"
        ],

        correct: 2
    },


    {
        category: "DATABASES",

        question:
            "What is the primary purpose of an index in a database?",

        answers: [
            "To increase storage capacity",
            "To speed up data retrieval",
            "To create backups",
            "To manage user permissions"
        ],

        correct: 1
    },


    {
        category: "NETWORKING",

        question:
            "In networking, what is the function of DNS (Domain Name System)?",

        answers: [
            "Encrypts user data",
            "Converts IP addresses to domain names",
            "Converts domain names to IP addresses",
            "Blocks malware websites"
        ],

        correct: 2
    }

];


/* =========================================================
   ROUND 2 QUESTIONS
   ========================================================= */

const round2Questions = [

    {
        category: "FILE FORMATS",

        question:
            "Which of these is a lossless compression format?",

        answers: [
            "JPEG",
            "MP3",
            "PNG",
            "MP4"
        ],

        correct: 2
    },


    {
        category: "PROGRAMMING",

        question:
            "In programming, which keyword is commonly used to define a constant value?",

        answers: [
            "let",
            "const",
            "def",
            "final"
        ],

        correct: 1
    },


    {
        category: "DATABASES",

        question:
            "Which SQL command is used to remove a table permanently?",

        answers: [
            "DELETE",
            "REMOVE",
            "DROP",
            "ERASE"
        ],

        correct: 2
    },


    {
        category: "NETWORKING",

        question:
            "Which layer of the OSI model handles end-to-end error recovery and flow control?",

        answers: [
            "Transport",
            "Network",
            "Session",
            "Data Link"
        ],

        correct: 0
    },


    {
        category: "COMPUTER MEMORY",

        question:
            "Which type of memory is used for caching to speed up CPU operations?",

        answers: [
            "ROM",
            "Cache",
            "Flash",
            "Virtual Memory"
        ],

        correct: 1
    },


    {
        category: "ALGORITHMS",

        question:
            "Which algorithm is commonly used for finding shortest paths in weighted graphs?",

        answers: [
            "BFS",
            "Dijkstra's Algorithm",
            "Prim's Algorithm",
            "Floyd-Warshall"
        ],

        correct: 1
    },


    {
        category: "OBJECT-ORIENTED PROGRAMMING",

        question:
            "In object-oriented design, encapsulation refers to:",

        answers: [
            "Code reusability",
            "Restricting access to data within a class",
            "Hiding implementation from the compiler",
            "Writing multiple methods with the same name"
        ],

        correct: 1
    },


    {
        category: "DATABASES",

        question:
            "Which of these is NOT a NoSQL database?",

        answers: [
            "Cassandra",
            "Redis",
            "PostgreSQL",
            "MongoDB"
        ],

        correct: 2
    },


    {
        category: "CYBERSECURITY",

        question:
            "Which type of attack floods a server with excessive requests to overwhelm it?",

        answers: [
            "Phishing",
            "Denial of Service (DoS)",
            "Man-in-the-Middle",
            "SQL Injection"
        ],

        correct: 1
    },


    {
        category: "PROGRAMMING",

        question:
            "Which programming language is often used for system-level programming such as operating systems?",

        answers: [
            "Java",
            "C",
            "PHP",
            "Python"
        ],

        correct: 1
    },


    {
        category: "ALGORITHMS",

        question:
            "Which sorting algorithm guarantees O(n log n) time in the worst case and works by splitting an array into smaller parts and merging them?",

        answers: [
            "Quick Sort",
            "Merge Sort",
            "Insertion Sort",
            "Bubble Sort"
        ],

        correct: 1
    },


    {
        category: "NETWORKING",

        question:
            "Which protocol is used to secure HTTP communications using TLS?",

        answers: [
            "FTP",
            "HTTP",
            "HTTPS",
            "SMTP"
        ],

        correct: 2
    },


    {
        category: "DATABASES",

        question:
            "The 'I' in ACID stands for Isolation. What does Isolation ensure?",

        answers: [
            "Transactions run independently",
            "Data is encrypted",
            "Databases scale automatically",
            "Indexes are preserved"
        ],

        correct: 0
    },


    {
        category: "MACHINE LEARNING",

        question:
            "Which machine learning technique is commonly used for dimensionality reduction?",

        answers: [
            "K-Means",
            "PCA (Principal Component Analysis)",
            "Decision Trees",
            "Gradient Descent"
        ],

        correct: 1
    },


    {
        category: "CYBERSECURITY",

        question:
            "In cybersecurity, a zero-day vulnerability refers to:",

        answers: [
            "A bug fixed within 24 hours",
            "A flaw exploited before the vendor releases a patch",
            "Malware that deletes data on the first day",
            "A system failure with no backup"
        ],

        correct: 1
    }

];


/* =========================================================
   ROUND 3 QUESTIONS
   ========================================================= */

const round3Questions = [

    {
        category: "DATA STRUCTURES",

        question:
            "Which data structure follows the LIFO principle?",

        answers: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
        ],

        correct: 1
    },


    {
        category: "COMPUTER BASICS",

        question:
            "What does CPU stand for?",

        answers: [
            "Central Processing Unit",
            "Computer Processing Utility",
            "Central Program User",
            "Computer Power Unit"
        ],

        correct: 0
    },


    {
        category: "WEB DEVELOPMENT",

        question:
            "Which HTTP status code means 'Not Found'?",

        answers: [
            "200",
            "301",
            "404",
            "500"
        ],

        correct: 2
    },


    {
        category: "WEB DEVELOPMENT",

        question:
            "Which language is primarily used to style web pages?",

        answers: [
            "HTML",
            "CSS",
            "SQL",
            "Python"
        ],

        correct: 1
    },


    {
        category: "NETWORKING",

        question:
            "Which device connects different networks and forwards data between them?",

        answers: [
            "Keyboard",
            "Router",
            "Monitor",
            "Printer"
        ],

        correct: 1
    },


    {
        category: "COMPUTER HARDWARE",

        question:
            "What does GPU stand for?",

        answers: [
            "General Processing Unit",
            "Graphics Processing Unit",
            "Graphical Program Utility",
            "General Program Unit"
        ],

        correct: 1
    },


    {
        category: "ARTIFICIAL INTELLIGENCE",

        question:
            "Which of these is an example of Artificial Intelligence?",

        answers: [
            "A calculator performing basic addition",
            "A voice assistant understanding spoken commands",
            "A USB cable",
            "A computer mouse"
        ],

        correct: 1
    },


    {
        category: "PROGRAMMING",

        question:
            "Which programming concept allows a function to call itself?",

        answers: [
            "Inheritance",
            "Recursion",
            "Compilation",
            "Encapsulation"
        ],

        correct: 1
    },


    {
        category: "DATABASES",

        question:
            "Which language is commonly used to retrieve and manipulate data in databases?",

        answers: [
            "HTML",
            "CSS",
            "SQL",
            "XML"
        ],

        correct: 2
    },


    {
        category: "NETWORKING",

        question:
            "What is the main purpose of an IP address?",

        answers: [
            "To identify a device on a network",
            "To increase storage space",
            "To protect a screen",
            "To install software"
        ],

        correct: 0
    },


    {
        category: "BLOCKCHAIN",

        question:
            "Which technology is commonly used to store cryptocurrency transaction records?",

        answers: [
            "Blockchain",
            "Bluetooth",
            "HTML",
            "RAM"
        ],

        correct: 0
    },


    {
        category: "COMPUTER MEMORY",

        question:
            "What happens to the data currently stored in RAM when a computer is turned off?",

        answers: [
            "It is permanently saved",
            "It is printed",
            "It is lost",
            "It moves to the CPU"
        ],

        correct: 2
    },


    {
        category: "CYBERSECURITY",

        question:
            "Which cybersecurity technique tricks users into revealing sensitive information?",

        answers: [
            "Phishing",
            "Encryption",
            "Compression",
            "Defragmentation"
        ],

        correct: 0
    },


    {
        category: "SOFTWARE DEVELOPMENT",

        question:
            "Which version-control system is commonly used by software developers?",

        answers: [
            "Git",
            "Excel",
            "PowerPoint",
            "Paint"
        ],

        correct: 0
    },


    {
        category: "CYBERSECURITY",

        question:
            "What is the main purpose of encryption?",

        answers: [
            "To make computers faster",
            "To protect information by converting it into an unreadable form",
            "To increase screen brightness",
            "To delete computer viruses"
        ],

        correct: 1
    }

];


/* =========================================================
   ALL ROUNDS
   ========================================================= */

const roundQuestions = {

    1: round1Questions,

    2: round2Questions,

    3: round3Questions

};


/* =========================================================
   CURRENT ROUND
   ========================================================= */

let currentRound = 1;

let questions =
    roundQuestions[currentRound];


/* =========================================================
   TEAMS
   ========================================================= */

const teams = {

    team1: {

        name: "TEAM 1",

        score: 0,

        hearts: STARTING_HEARTS

    },


    team2: {

        name: "TEAM 2",

        score: 0,

        hearts: STARTING_HEARTS

    },


    team3: {

        name: "TEAM 3",

        score: 0,

        hearts: STARTING_HEARTS

    },


    team4: {

        name: "TEAM 4",

        score: 0,

        hearts: STARTING_HEARTS

    }

};


/* =========================================================
   GAME STATE
   ========================================================= */

let currentQuestion = 0;

let timeLeft = GAME_TIME;

let timer = null;

let timerRunning = false;

let gameStarted = false;

let questionEnded = false;


/*
   TRUE when the 15 seconds have expired.

   IMPORTANT:
   The question remains answerable after this.
   A correct answer after this gets +2.
*/

let questionWasPassed = false;


/*
   Teams that have already attempted
   the current question.
*/

let attemptedTeams = new Set();


/*
   The answer selected by the host
   before the team-selection popup.
*/

let pendingAnswer = null;


/*
   Currently selected team.
*/

let selectedTeam = null;


/* =========================================================
   MEME AUDIO
   ========================================================= */

let currentMemeAudio = null;


/* =========================================================
   ELEMENT HELPER
   ========================================================= */

function getElement(id) {

    return document.getElementById(id);

}


/* =========================================================
   SCREEN ELEMENTS
   ========================================================= */

const startScreen =
    getElement("start-screen");

const passwordScreen =
    getElement("password-screen");

const roundScreen =
    getElement("round-screen");

const quizScreen =
    getElement("quiz-screen");

const resultScreen =
    getElement("result-screen");


/* =========================================================
   START SCREEN
   ========================================================= */

const startBtn =
    getElement("start-btn");


/* =========================================================
   PASSWORD
   ========================================================= */

const passwordBtn =
    getElement("password-btn");

const passwordBackBtn =
    getElement("password-back-btn");

const passwordInput =
    getElement("host-password");

const passwordError =
    getElement("password-error");


/* =========================================================
   ROUND
   ========================================================= */

const roundBackBtn =
    getElement("round-back-btn");

const changeRoundBtn =
    getElement("change-round-btn");


/* =========================================================
   QUIZ
   ========================================================= */

const currentRoundDisplay =
    getElement("current-round-display");

const questionNumberElement =
    getElement("question-number");

const categoryElement =
    getElement("category");

const questionElement =
    getElement("question");

const answersElement =
    getElement("answers");

const feedbackElement =
    getElement("feedback");

const nextBtn =
    getElement("next-btn");

const buzzStatus =
    getElement("buzz-status");


/* =========================================================
   TIMER
   ========================================================= */

const timerElement =
    getElement("timer");

const timerCircle =
    getElement("timer-circle");

const timerStatus =
    getElement("timer-status");

const startTimerBtn =
    getElement("start-timer-btn");

const stopTimerBtn =
    getElement("stop-timer-btn");

const resetTimerBtn =
    getElement("reset-timer-btn");

const endQuestionBtn =
    getElement("end-question-btn");


/* =========================================================
   RESULTS
   ========================================================= */

const resultRoundNumber =
    getElement("result-round-number");

const winnerDisplay =
    getElement("winner-display");

const nextRoundBtn =
    getElement("next-round-btn");

const restartBtn =
    getElement("restart-btn");


/* =========================================================
   TEAM MODAL
   ========================================================= */

const teamModal =
    getElement("team-modal");

const modalCancel =
    getElement("modal-cancel");


/* =========================================================
   SCREEN SWITCHING
   ========================================================= */

function showScreen(screen) {

    if (!screen) {

        return;

    }


    document
        .querySelectorAll(".screen")
        .forEach(screenElement => {

            screenElement.classList.remove(
                "active"
            );

        });


    screen.classList.add(
        "active"
    );

}


/* =========================================================
   SAVE TEAM NAMES
   ========================================================= */

function saveTeamNames() {

    for (
        let number = 1;
        number <= 4;
        number++
    ) {

        const input =
            getElement(
                `team${number}-name-input`
            );


        const enteredName =
            input.value.trim();


        if (enteredName) {

            teams[`team${number}`].name =
                enteredName;

        }

        else {

            teams[`team${number}`].name =
                `TEAM ${number}`;

        }

    }


    updateTeamNamesOnScreen();

}


/* =========================================================
   UPDATE TEAM NAMES
   ========================================================= */

function updateTeamNamesOnScreen() {

    for (
        let number = 1;
        number <= 4;
        number++
    ) {

        const teamKey =
            `team${number}`;


        const team =
            teams[teamKey];


        const quizName =
            getElement(
                `${teamKey}-name`
            );


        const resultName =
            getElement(
                `final-${teamKey}-name`
            );


        if (quizName) {

            quizName.textContent =
                team.name;

        }


        if (resultName) {

            resultName.textContent =
                team.name;

        }

    }

}


/* =========================================================
   START BUTTON
   ========================================================= */

startBtn.addEventListener(
    "click",
    () => {

        saveTeamNames();


        passwordInput.value =
            "";

        passwordError.textContent =
            "";


        showScreen(
            passwordScreen
        );


        setTimeout(
            () => {

                passwordInput.focus();

            },
            100
        );

    }
);


/* =========================================================
   PASSWORD
   ========================================================= */

passwordBtn.addEventListener(
    "click",
    checkPassword
);


passwordInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            checkPassword();

        }

    }
);


function checkPassword() {

    const enteredPassword =
        passwordInput.value;


    if (
        enteredPassword ===
        HOST_PASSWORD
    ) {

        passwordError.textContent =
            "";


        showScreen(
            roundScreen
        );

    }

    else {

        passwordError.textContent =
            "❌ Incorrect host password.";

        passwordInput.value =
            "";

        passwordInput.focus();

    }

}


/* =========================================================
   PASSWORD BACK
   ========================================================= */

passwordBackBtn.addEventListener(
    "click",
    () => {

        showScreen(
            startScreen
        );

    }
);


/* =========================================================
   ROUND BACK
   ========================================================= */

roundBackBtn.addEventListener(
    "click",
    () => {

        showScreen(
            startScreen
        );

    }
);


/* =========================================================
   ROUND BUTTONS
   ========================================================= */

document
    .querySelectorAll(".round-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selectedRound =
                    Number(
                        button.dataset.round
                    );


                startSelectedRound(
                    selectedRound
                );

            }
        );

    });


/* =========================================================
   START SELECTED ROUND
   ========================================================= */

function startSelectedRound(
    roundNumber
) {

    if (
        !roundQuestions[roundNumber]
    ) {

        return;

    }


    currentRound =
        roundNumber;


    questions =
        roundQuestions[
            currentRound
        ];


    currentQuestion =
        0;


    resetRoundScores();


    gameStarted =
        true;


    showScreen(
        quizScreen
    );


    currentRoundDisplay.textContent =
        currentRound;


    updateTeamNamesOnScreen();


    showQuestion();

}


/* =========================================================
   RESET ROUND SCORES
   ========================================================= */

function resetRoundScores() {

    Object
        .values(teams)
        .forEach(team => {

            team.score =
                0;

            team.hearts =
                STARTING_HEARTS;

        });


    updateScoreboard();

}


/* =========================================================
   RESET ENTIRE GAME
   ========================================================= */

function resetGame() {

    stopTimer();

    stopMeme();


    gameStarted =
        false;


    currentRound =
        1;


    currentQuestion =
        0;


    questions =
        roundQuestions[1];


    attemptedTeams =
        new Set();


    pendingAnswer =
        null;


    selectedTeam =
        null;


    resetRoundScores();


    /*
       Reset the names displayed in the inputs
       so the host can enter new names.
    */

    for (
        let number = 1;
        number <= 4;
        number++
    ) {

        const input =
            getElement(
                `team${number}-name-input`
            );


        if (input) {

            input.value =
                "";

        }

    }


    showScreen(
        startScreen
    );

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    stopTimer();


    questionEnded =
        false;


    questionWasPassed =
        false;


    attemptedTeams =
        new Set();


    pendingAnswer =
        null;


    selectedTeam =
        null;


    closeTeamModal();


    timerCircle.classList.remove(
        "expired"
    );


    document
        .querySelectorAll(".team-card")
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });


    buzzStatus.textContent =
        "Choose an answer. You will then select the team answering.";


    buzzStatus.classList.remove(
        "active"
    );


    questionNumberElement.textContent =
        currentQuestion + 1;


    currentRoundDisplay.textContent =
        currentRound;


    const question =
        questions[currentQuestion];


    categoryElement.textContent =
        question.category;


    questionElement.textContent =
        question.question;


    feedbackElement.textContent =
        "";


    feedbackElement.className =
        "feedback";


    nextBtn.style.display =
        "none";


    answersElement.innerHTML =
        "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "answer-btn";


            button.textContent =
                String.fromCharCode(
                    65 + index
                ) +
                ". " +
                answer;


            button.addEventListener(
                "click",
                () => {

                    chooseAnswer(
                        index
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    resetTimer();

}


/* =========================================================
   CHOOSE ANSWER
   =========================================================

   Host clicks an answer first.

   Then the popup asks:

   WHO IS ANSWERING?

   ========================================================= */

function chooseAnswer(
    answerIndex
) {

    if (
        questionEnded
    ) {

        return;

    }


    pendingAnswer =
        answerIndex;


    openTeamModal();

}


/* =========================================================
   OPEN TEAM MODAL
   ========================================================= */

function openTeamModal() {

    if (
        questionEnded
    ) {

        return;

    }


    teamModal.classList.add(
        "open"
    );


    document
        .querySelectorAll(
            ".modal-team-buttons button"
        )
        .forEach(button => {

            const teamKey =
                button.dataset.team;


            button.textContent =
                teams[teamKey].name;


            /*
               Teams that already attempted
               cannot answer again.
            */

            button.disabled =
                attemptedTeams.has(
                    teamKey
                );

        });

}


/* =========================================================
   CLOSE TEAM MODAL
   ========================================================= */

function closeTeamModal() {

    teamModal.classList.remove(
        "open"
    );

}


/* =========================================================
   TEAM MODAL BUTTONS
   ========================================================= */

document
    .querySelectorAll(
        ".modal-team-buttons button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const teamKey =
                    button.dataset.team;


                confirmTeam(
                    teamKey
                );

            }
        );

    });


/* =========================================================
   CANCEL TEAM SELECTION
   ========================================================= */

modalCancel.addEventListener(
    "click",
    () => {

        pendingAnswer =
            null;


        closeTeamModal();

    }
);


/* =========================================================
   CONFIRM TEAM
   ========================================================= */

function confirmTeam(
    teamKey
) {

    if (
        pendingAnswer === null
    ) {

        return;

    }


    if (
        questionEnded
    ) {

        return;

    }


    if (
        !teams[teamKey]
    ) {

        return;

    }


    if (
        attemptedTeams.has(
            teamKey
        )
    ) {

        return;

    }


    const answerIndex =
        pendingAnswer;


    pendingAnswer =
        null;


    closeTeamModal();


    selectedTeam =
        teamKey;


    highlightSelectedTeam(
        teamKey
    );


    buzzStatus.textContent =
        "🏆 " +
        teams[teamKey].name +
        " IS ANSWERING";


    buzzStatus.classList.add(
        "active"
    );


    markAnswer(
        answerIndex,
        teamKey
    );

}


/* =========================================================
   HIGHLIGHT SELECTED TEAM
   ========================================================= */

function highlightSelectedTeam(
    teamKey
) {

    document
        .querySelectorAll(
            ".team-card"
        )
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });


    const card =
        getElement(
            teamKey + "-card"
        );


    if (card) {

        card.classList.add(
            "selected"
        );

    }

}


/* =========================================================
   MARK ANSWER
   ========================================================= */

function markAnswer(
    selectedIndex,
    teamKey
) {

    if (
        questionEnded
    ) {

        return;

    }


    if (
        !teamKey ||
        !teams[teamKey]
    ) {

        return;

    }


    if (
        attemptedTeams.has(
            teamKey
        )
    ) {

        return;

    }


    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    /*
       Record that this team has attempted.
    */

    attemptedTeams.add(
        teamKey
    );


    /* =====================================================
       CORRECT ANSWER
       ===================================================== */

    if (
        selectedIndex ===
        question.correct
    ) {

        buttons[selectedIndex]
            .classList.add(
                "correct"
            );


        let points;


        /*
           Before time:
           +5

           After time:
           +2
        */

        if (
            questionWasPassed
        ) {

            points =
                CORRECT_AFTER_TIME;

        }

        else {

            points =
                CORRECT_BEFORE_TIME;

        }


        teams[teamKey].score +=
            points;


        updateScoreboard();


        feedbackElement.textContent =
            "✓ " +
            teams[teamKey].name +
            " CORRECT! +" +
            points +
            " POINTS";


        feedbackElement.className =
            "feedback correct-text";


        questionEnded =
            true;


        stopTimer();


        disableAnswers();


        highlightCorrectAnswer();


        nextBtn.style.display =
            "block";


        setNextButtonText();


        return;

    }


    /* =====================================================
       WRONG ANSWER
       ===================================================== */

    buttons[selectedIndex]
        .classList.add(
            "wrong"
        );


    const team =
        teams[teamKey];


    /*
       If hearts remain:
       remove one heart.
    */

    if (
        team.hearts > 0
    ) {

        team.hearts -=
            WRONG_HEART_PENALTY;


        feedbackElement.textContent =
            "✗ WRONG! " +
            team.name +
            " loses ❤️";

    }

    else {

        /*
           Once all hearts are gone,
           wrong answers cost -2 points.
        */

        team.score -=
            WRONG_NO_HEART_PENALTY;


        feedbackElement.textContent =
            "✗ WRONG! " +
            team.name +
            " loses -" +
            WRONG_NO_HEART_PENALTY +
            " POINTS";

    }


    updateScoreboard();


    feedbackElement.className =
        "feedback wrong-text";


    selectedTeam =
        null;


    document
        .querySelectorAll(
            ".team-card"
        )
        .forEach(card => {

            card.classList.remove(
                "selected"
            );

        });


    /*
       Check whether all four teams
       have attempted the question.
    */

    if (
        attemptedTeams.size >= 4
    ) {

        questionEnded =
            true;


        stopTimer();


        highlightCorrectAnswer();


        disableAnswers();


        buzzStatus.textContent =
            "NO MORE TEAMS CAN ANSWER.";


        buzzStatus.classList.add(
            "active"
        );


        nextBtn.style.display =
            "block";


        setNextButtonText();


        return;

    }


    /*
       Other teams may now attempt.
    */

    buzzStatus.textContent =
        "⚡ WRONG ANSWER — OTHER TEAMS CAN ANSWER!";


    buzzStatus.classList.add(
        "active"
    );

}


/* =========================================================
   DISABLE ANSWERS
   ========================================================= */

function disableAnswers() {

    document
        .querySelectorAll(
            ".answer-btn"
        )
        .forEach(button => {

            button.disabled =
                true;

        });

}


/* =========================================================
   HIGHLIGHT CORRECT ANSWER
   ========================================================= */

function highlightCorrectAnswer() {

    const question =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    if (
        buttons[question.correct]
    ) {

        buttons[question.correct]
            .classList.add(
                "correct"
            );

    }

}


/* =========================================================
   NEXT BUTTON TEXT
   ========================================================= */

function setNextButtonText() {

    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextBtn.textContent =
            "FINISH ROUND →";

    }

    else {

        nextBtn.textContent =
            "NEXT QUESTION →";

    }

}


/* =========================================================
   START TIMER
   ========================================================= */

startTimerBtn.addEventListener(
    "click",
    startTimer
);


function startTimer() {

    if (
        questionEnded
    ) {

        return;

    }


    if (
        timerRunning
    ) {

        return;

    }


    if (
        timeLeft <= 0
    ) {

        return;

    }


    timerRunning =
        true;


    timerStatus.textContent =
        "RUNNING";


    timerStatus.classList.remove(
        "paused",
        "expired"
    );


    timerStatus.classList.add(
        "running"
    );


    stopTimerBtn.textContent =
        "⏸ PAUSE";


    timer =
        setInterval(
            () => {

                timeLeft--;

                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    stopTimer();


                    timeExpired();

                }

            },
            1000
        );

}


/* =========================================================
   PAUSE / RESUME
   ========================================================= */

stopTimerBtn.addEventListener(
    "click",
    togglePause
);


function togglePause() {

    if (
        questionEnded
    ) {

        return;

    }


    /*
       If currently running,
       pause it.
    */

    if (
        timerRunning
    ) {

        pauseTimer();

    }

    else {

        /*
           If paused or ready,
           resume/start it.
        */

        if (
            timeLeft > 0
        ) {

            resumeTimer();

        }

    }

}


/* =========================================================
   PAUSE TIMER
   ========================================================= */

function pauseTimer() {

    if (
        timer
    ) {

        clearInterval(
            timer
        );

        timer =
            null;

    }


    timerRunning =
        false;


    timerStatus.textContent =
        "PAUSED";


    timerStatus.classList.remove(
        "running",
        "expired"
    );


    timerStatus.classList.add(
        "paused"
    );


    stopTimerBtn.textContent =
        "▶ RESUME";

}


/* =========================================================
   RESUME TIMER
   ========================================================= */

function resumeTimer() {

    if (
        timeLeft <= 0
    ) {

        return;

    }


    timerRunning =
        true;


    timerStatus.textContent =
        "RUNNING";


    timerStatus.classList.remove(
        "paused",
        "expired"
    );


    timerStatus.classList.add(
        "running"
    );


    stopTimerBtn.textContent =
        "⏸ PAUSE";


    timer =
        setInterval(
            () => {

                timeLeft--;

                updateTimer();


                if (
                    timeLeft <= 0
                ) {

                    stopTimer();


                    timeExpired();

                }

            },
            1000
        );

}


/* =========================================================
   STOP TIMER
   ========================================================= */

function stopTimer() {

    if (
        timer
    ) {

        clearInterval(
            timer
        );

        timer =
            null;

    }


    timerRunning =
        false;

}


/* =========================================================
   RESET TIMER
   ========================================================= */

resetTimerBtn.addEventListener(
    "click",
    resetTimer
);


function resetTimer() {

    stopTimer();


    timeLeft =
        GAME_TIME;


    questionWasPassed =
        false;


    timerCircle.classList.remove(
        "warning",
        "expired"
    );


    timerStatus.textContent =
        "READY";


    timerStatus.classList.remove(
        "running",
        "paused",
        "expired"
    );


    stopTimerBtn.textContent =
        "⏸ PAUSE";


    updateTimer();

}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateTimer() {

    timerElement.textContent =
        timeLeft;


    timerCircle.classList.toggle(
        "warning",
        timeLeft <= 5 &&
        timeLeft > 0
    );


    timerCircle.classList.toggle(
        "expired",
        timeLeft <= 0
    );

}


/* =========================================================
   TIME EXPIRED
   ========================================================= */

function timeExpired() {

    if (
        questionEnded
    ) {

        return;

    }


    /*
       VERY IMPORTANT:

       Do NOT set questionEnded = true here.

       The question must remain answerable
       after the timer expires.

       Teams answering after this point
       receive +2 instead of +5.
    */

    questionWasPassed =
        true;


    stopTimer();


    timerStatus.textContent =
        "TIME'S UP";


    timerStatus.classList.remove(
        "running",
        "paused"
    );


    timerStatus.classList.add(
        "expired"
    );


    timerCircle.classList.add(
        "expired"
    );


    buzzStatus.textContent =
        "⏰ TIME'S UP — QUESTION PASSED";


    buzzStatus.classList.add(
        "active"
    );


    feedbackElement.textContent =
        "⏰ Time's up! Select an answer and then choose the team answering for +2 points.";


    feedbackElement.className =
        "feedback wrong-text";


    /*
       Answers remain enabled.
    */

    /*
       Undertaker bell.
    */

    playUndertakerBell();

}


/* =========================================================
   MANUAL END QUESTION
   ========================================================= */

endQuestionBtn.addEventListener(
    "click",
    () => {

        if (
            questionEnded
        ) {

            return;

        }


        /*
           Treat manual ending the same as
           timer expiration.

           The question becomes a +2
           passed question.
        */

        timeExpired();

    }
);


/* =========================================================
   NEXT QUESTION
   ========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        if (
            currentQuestion >=
            questions.length - 1
        ) {

            showResults();

            return;

        }


        currentQuestion++;


        showQuestion();

    }
);


/* =========================================================
   CHANGE ROUND
   ========================================================= */

changeRoundBtn.addEventListener(
    "click",
    () => {

        stopTimer();

        closeTeamModal();


        gameStarted =
            false;


        currentQuestion =
            0;


        showScreen(
            roundScreen
        );

    }
);


/* =========================================================
   SCOREBOARD
   ========================================================= */

function updateScoreboard() {

    Object
        .entries(teams)
        .forEach(
            ([teamKey, team]) => {

                const score =
                    getElement(
                        teamKey +
                        "-score"
                    );


                const lives =
                    getElement(
                        teamKey +
                        "-lives"
                    );


                if (score) {

                    score.textContent =
                        team.score;

                }


                if (lives) {

                    lives.textContent =
                        createHearts(
                            team.hearts
                        );

                }

            }
        );

}


/* =========================================================
   HEARTS
   ========================================================= */

function createHearts(
    hearts
) {

    let output =
        "";


    for (
        let i = 0;
        i < STARTING_HEARTS;
        i++
    ) {

        if (
            i < hearts
        ) {

            output +=
                "❤️";

        }

        else {

            output +=
                "🖤";

        }

    }


    return output;

}


/* =========================================================
   RESULTS
   ========================================================= */

function showResults() {

    stopTimer();

    stopMeme();

    closeTeamModal();


    gameStarted =
        false;


    resultRoundNumber.textContent =
        currentRound;


    /*
       Update all four final scores.
    */

    for (
        let number = 1;
        number <= 4;
        number++
    ) {

        const teamKey =
            `team${number}`;


        getElement(
            `final-${teamKey}`
        ).textContent =
            teams[teamKey].score;


        getElement(
            `final-${teamKey}-name`
        ).textContent =
            teams[teamKey].name;

    }


    /*
       Find the highest score.
    */

    const scores =
        Object
            .values(teams)
            .map(
                team =>
                    team.score
            );


    const highestScore =
        Math.max(
            ...scores
        );


    const leaders =
        Object
            .values(teams)
            .filter(
                team =>
                    team.score ===
                    highestScore
            );


    if (
        leaders.length === 1
    ) {

        winnerDisplay.textContent =
            "🏆 " +
            leaders[0].name +
            " LEADS THIS ROUND!";

    }

    else {

        winnerDisplay.textContent =
            "🏆 ROUND TIED!";

    }


    /*
       No NEXT ROUND button after Round 3.
    */

    if (
        currentRound < 3
    ) {

        nextRoundBtn.style.display =
            "inline-block";

    }

    else {

        nextRoundBtn.style.display =
            "none";

    }


    showScreen(
        resultScreen
    );

}


/* =========================================================
   NEXT ROUND
   ========================================================= */

nextRoundBtn.addEventListener(
    "click",
    () => {

        if (
            currentRound >= 3
        ) {

            return;

        }


        showScreen(
            roundScreen
        );

    }
);


/* =========================================================
   RESTART
   ========================================================= */

restartBtn.addEventListener(
    "click",
    () => {

        resetGame();

    }
);


/* =========================================================
   MEME SOUNDS
   ========================================================= */

const memeSounds = {

    1:
        "YEET sound effect (meme) - QuickSounds.com.mp3",

    2:
        "Fahhh - QuickSounds.com.mp3",

    3:
        "Bruh sound effect #2 - QuickSounds.com.mp3",

    4:
        "VINE BOOM SOUND - QuickSounds.com.mp3",

    5:
        "Japanese YOOOO - QuickSounds.com.mp3",

    6:
        "SIGMA COLD RIZZ - QuickSounds.com.mp3",

    7:
        "spiderman-meme-song.mp3",

    8:
        "7-crore-kbc.mp3",

    9:
        "cat-laugh-meme-1.mp3",

    10:
        "dun-dun-dun-sound-effect-brass_8nFBccR.mp3",

    11:
        "fart-meme-sound.mp3",

    12:
        "huh_37bAoRo.mp3",

    13:
        "rizzbot-laugh.mp3",

    14:
        "sad violin.mp3",

    15:
        "auughhh.mp3",

    16:
        "undertakers-bell_2UwFCIe.mp3"

};


/* =========================================================
   MEME LABELS
   ========================================================= */

const memeLabels = {

    1:
        "YEET",

    2:
        "FAHHHH",

    3:
        "BRUHHH",

    4:
        "VINE BOOM",

    5:
        "YOOO",

    6:
        "RIZZ",

    7:
        "LET'S GOOO",

    8:
        "7 CRORE",

    9:
        "CAT LAUGH",

    10:
        "DUN DUN DUN",

    11:
        "FART",

    12:
        "HUH?",

    13:
        "RIZZBOT LAUGH",

    14:
        "SAD VIOLIN",

    15:
        "AUGHHHH",

    16:
        "UNDERTAKER"

};


/* =========================================================
   PLAY MEME
   ========================================================= */

function playMeme(
    number
) {

    number =
        Number(number);


    const sound =
        memeSounds[number];


    if (!sound) {

        console.warn(
            "No sound assigned:",
            number
        );

        return;

    }


    /*
       Automatically stop the previous
       meme sound first.
    */

    stopMeme();


    /*
       IMPORTANT:

       Sounds are loaded from:

       sounds/

       beside index.html.
    */

    currentMemeAudio =
        new Audio(
            "sounds/" +
            sound
        );


    currentMemeAudio.volume =
        1.0;


    currentMemeAudio.addEventListener(
        "ended",
        () => {

            currentMemeAudio =
                null;

        }
    );


    currentMemeAudio
        .play()
        .catch(
            error => {

                console.warn(
                    "Meme sound failed:",
                    sound,
                    error
                );

            }
        );

}


/* =========================================================
   STOP MEME
   ========================================================= */

function stopMeme() {

    if (
        !currentMemeAudio
    ) {

        return;

    }


    try {

        currentMemeAudio.pause();


        currentMemeAudio.currentTime =
            0;

    }

    catch (error) {

        console.warn(
            "Could not stop meme:",
            error
        );

    }


    currentMemeAudio =
        null;

}


/* =========================================================
   PLAY NORMAL SOUND
   ========================================================= */

function playSound(
    file
) {

    const audio =
        new Audio(
            "sounds/" +
            file
        );


    audio.volume =
        1.0;


    audio.play()
        .catch(
            error => {

                console.warn(
                    "Audio playback failed:",
                    file,
                    error
                );

            }
        );

}


/* =========================================================
   UNDERTAKER BELL
   ========================================================= */

function playUndertakerBell() {

    playSound(
        "undertakers-bell_2UwFCIe.mp3"
    );

}


/* =========================================================
   SOUND BOARD SETUP
   ========================================================= */

function setupSoundboard() {

    const soundContainer =
        document.querySelector(
            ".sound-buttons"
        );


    if (
        !soundContainer
    ) {

        return;

    }


    /*
       Existing buttons 1-8.
    */

    const existingButtons =
        soundContainer.querySelectorAll(
            ".meme-btn"
        );


    existingButtons.forEach(
        button => {

            const match =
                button.textContent
                    .trim()
                    .match(
                        /^(\d+)/
                    );


            if (!match) {

                return;

            }


            const number =
                Number(
                    match[1]
                );


            button.dataset.memeNumber =
                number;


            button.onclick =
                () => {

                    playMeme(
                        number
                    );

                };

        }
    );


    /*
       Create buttons 9-16.
    */

    for (
        let number = 9;
        number <= 16;
        number++
    ) {

        const button =
            document.createElement(
                "button"
            );


        button.type =
            "button";


        button.className =
            "meme-btn";


        button.dataset.memeNumber =
            number;


        button.textContent =
            number +
            ". " +
            memeLabels[number];


        button.addEventListener(
            "click",
            () => {

                playMeme(
                    number
                );

            }
        );


        soundContainer.appendChild(
            button
        );

    }


    /*
       STOP SOUND button.
    */

    const stopButton =
        document.createElement(
            "button"
        );


    stopButton.type =
        "button";


    stopButton.className =
        "meme-btn stop-meme-btn";


    stopButton.textContent =
        "⏹ STOP SOUND";


    stopButton.addEventListener(
        "click",
        stopMeme
    );


    soundContainer.appendChild(
        stopButton
    );

}


/* =========================================================
   SOUNDBOARD OPEN / CLOSE
   ========================================================= */

const soundboardToggle =
    getElement(
        "soundboard-toggle"
    );


soundboardToggle.addEventListener(
    "click",
    () => {

        const soundboard =
            getElement(
                "soundboard"
            );


        soundboard.classList.toggle(
            "open"
        );

    }
);


/* =========================================================
   INITIAL STATE
   ========================================================= */

function initializeGame() {

    /*
       Set default team names.
    */

    updateTeamNamesOnScreen();


    /*
       Reset scores and hearts.
    */

    resetRoundScores();


    /*
       Reset timer.
    */

    resetTimer();


    /*
       Setup soundboard.
    */

    setupSoundboard();

}


/* =========================================================
   START
   ========================================================= */

initializeGame();
