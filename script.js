/* =========================================================
   STEM TECH CHALLENGE
   =========================================================

   FEATURES:
   HOST PASSWORD
   3 ROUNDS
   15 QUESTIONS PER ROUND
   4 TEAMS
   3 HEARTS PER TEAM
   PHONE BUZZERS
   15 SECOND HOST TIMER
   +5 BEFORE TIME
   +2 AFTER TIME
   -1 HEART FOR WRONG ANSWER
   -2 POINTS WHEN NO HEARTS REMAIN
   UNDERTAKER BELL ON TIME END
   16-SOUND MANUAL MEME SOUNDBOARD
   STOP MEME BUTTON
   AUTOMATICALLY STOP PREVIOUS MEME
   MULTIPLE TEAMS CAN ATTEMPT AFTER WRONG ANSWERS

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

let questions = roundQuestions[1];


/* =========================================================
   TEAMS
   ========================================================= */

const teams = {

    team1: {
        name: "TEAM 1",
        score: 0,
        hearts: 3,
        connection: null,
        connected: false
    },

    team2: {
        name: "TEAM 2",
        score: 0,
        hearts: 3,
        connection: null,
        connected: false
    },

    team3: {
        name: "TEAM 3",
        score: 0,
        hearts: 3,
        connection: null,
        connected: false
    },

    team4: {
        name: "TEAM 4",
        score: 0,
        hearts: 3,
        connection: null,
        connected: false
    }

};


/* =========================================================
   GAME STATE
   ========================================================= */

let currentQuestion = 0;

let timeLeft = GAME_TIME;

let timer = null;

let gameStarted = false;

let questionEnded = false;

let timerRunning = false;

let activeTeam = null;

let questionWasPassed = false;

let attemptedTeams = new Set();

let peer = null;


/* =========================================================
   MEME AUDIO STATE
   ========================================================= */

let currentMemeAudio = null;


/* =========================================================
   ELEMENTS
   ========================================================= */

const startScreen =
    document.getElementById("start-screen");

const passwordScreen =
    document.getElementById("password-screen");

const roundScreen =
    document.getElementById("round-screen");

const phoneScreen =
    document.getElementById("phone-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startBtn =
    document.getElementById("start-btn");

const passwordBtn =
    document.getElementById("password-btn");

const passwordBackBtn =
    document.getElementById("password-back-btn");

const roundBackBtn =
    document.getElementById("round-back-btn");

const phoneModeBtn =
    document.getElementById("phone-mode-btn");

const restartBtn =
    document.getElementById("restart-btn");

const nextRoundBtn =
    document.getElementById("next-round-btn");

const changeRoundBtn =
    document.getElementById("change-round-btn");


const passwordInput =
    document.getElementById("host-password");

const passwordError =
    document.getElementById("password-error");


const currentRoundDisplay =
    document.getElementById("current-round-display");

const resultRoundNumber =
    document.getElementById("result-round-number");


const joinBtn =
    document.getElementById("join-btn");


const questionElement =
    document.getElementById("question");

const categoryElement =
    document.getElementById("category");

const answersElement =
    document.getElementById("answers");


const timerElement =
    document.getElementById("timer");

const timerCircle =
    document.getElementById("timer-circle");

const timerStatus =
    document.getElementById("timer-status");


const questionNumberElement =
    document.getElementById("question-number");


const feedbackElement =
    document.getElementById("feedback");


const nextBtn =
    document.getElementById("next-btn");


const buzzStatus =
    document.getElementById("buzz-status");


const hostIdDisplay =
    document.getElementById("host-id");


const startTimerBtn =
    document.getElementById("start-timer-btn");

const stopTimerBtn =
    document.getElementById("stop-timer-btn");

const resetTimerBtn =
    document.getElementById("reset-timer-btn");

const endQuestionBtn =
    document.getElementById("end-question-btn");


const hostIdInput =
    document.getElementById("host-id-input");

const teamSelect =
    document.getElementById("team-select");

const phoneStatus =
    document.getElementById("phone-status");

const phoneBuzzArea =
    document.getElementById("phone-buzzer-area");

const phoneTeamName =
    document.getElementById("phone-team-name");

const phoneBuzzBtn =
    document.getElementById("phone-buzz-btn");

const phoneBuzzStatus =
    document.getElementById("phone-buzz-status");


/* =========================================================
   SCREEN SWITCHING
   ========================================================= */

function showScreen(screen) {

    if (!screen) return;

    document
        .querySelectorAll(".screen")
        .forEach(s => {
            s.classList.remove("active");
        });

    screen.classList.add("active");

}


/* =========================================================
   HOST BUTTON
   ========================================================= */

startBtn.addEventListener(
    "click",
    () => {

        passwordInput.value = "";

        passwordError.textContent = "";

        showScreen(passwordScreen);

        setTimeout(() => {
            passwordInput.focus();
        }, 100);

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

        if (event.key === "Enter") {
            checkPassword();
        }

    }
);


function checkPassword() {

    const enteredPassword =
        passwordInput.value;

    if (enteredPassword === HOST_PASSWORD) {

        passwordError.textContent = "";

        showScreen(roundScreen);

    }

    else {

        passwordError.textContent =
            "❌ Incorrect host password.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =========================================================
   PASSWORD BACK
   ========================================================= */

passwordBackBtn.addEventListener(
    "click",
    () => {

        showScreen(startScreen);

    }
);


/* =========================================================
   ROUND BACK
   ========================================================= */

roundBackBtn.addEventListener(
    "click",
    () => {

        showScreen(startScreen);

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
                    Number(button.dataset.round);

                startSelectedRound(
                    selectedRound
                );

            }
        );

    });


/* =========================================================
   START SELECTED ROUND
   ========================================================= */

function startSelectedRound(roundNumber) {

    if (!roundQuestions[roundNumber]) {
        return;
    }

    currentRound =
        roundNumber;

    questions =
        roundQuestions[currentRound];

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

    createHostPeer();

    showQuestion();

}


/* =========================================================
   RESET ROUND SCORES
   ========================================================= */

function resetRoundScores() {

    Object.keys(teams)
        .forEach(teamKey => {

            teams[teamKey].score =
                0;

            teams[teamKey].hearts =
                STARTING_HEARTS;

        });

    updateScoreboard();

}


/* =========================================================
   PHONE MODE
   ========================================================= */

phoneModeBtn.addEventListener(
    "click",
    () => {

        showScreen(phoneScreen);

    }
);


/* =========================================================
   RESET TEAMS CONNECTION STATE
   ========================================================= */

function resetTeams() {

    Object.keys(teams)
        .forEach(teamKey => {

            teams[teamKey].score =
                0;

            teams[teamKey].hearts =
                STARTING_HEARTS;

            teams[teamKey].connection =
                null;

            teams[teamKey].connected =
                false;

        });

    updateScoreboard();

}


/* =========================================================
   HOST PEER
   ========================================================= */

function createHostPeer() {

    if (peer) {
        return;
    }

    peer = new Peer();

    peer.on(
        "open",
        id => {

            hostIdDisplay.textContent =
                id;

            console.log(
                "HOST ID:",
                id
            );

        }
    );

    peer.on(
        "connection",
        connection => {

            setupTeamConnection(
                connection
            );

        }
    );

    peer.on(
        "error",
        error => {

            console.error(
                "Peer error:",
                error
            );

        }
    );

}


/* =========================================================
   SETUP PHONE CONNECTION
   ========================================================= */

function setupTeamConnection(connection) {

    connection.on(
        "data",
        data => {

            handlePhoneMessage(
                data,
                connection
            );

        }
    );

    connection.on(
        "close",
        () => {

            Object.keys(teams)
                .forEach(teamKey => {

                    if (
                        teams[teamKey].connection ===
                        connection
                    ) {

                        teams[teamKey]
                            .connected = false;

                        teams[teamKey]
                            .connection = null;

                    }

                });

            updateScoreboard();

        }
    );

}


/* =========================================================
   PHONE MESSAGE
   ========================================================= */

function handlePhoneMessage(
    data,
    connection
) {

    if (!data) {
        return;
    }


    if (data.type === "identify") {

        const teamKey =
            data.team;

        if (!teams[teamKey]) {

            connection.send({

                type: "error",

                message:
                    "Invalid team."

            });

            return;

        }


        teams[teamKey]
            .connection =
            connection;

        teams[teamKey]
            .connected =
            true;


        connection.send({

            type:
                "connected",

            team:
                teamKey,

            name:
                teams[teamKey].name

        });


        sendBuzzAvailability(
            teamKey,
            connection
        );

        updateScoreboard();

        return;

    }


    if (data.type === "buzz") {

        teamBuzz(
            data.team
        );

    }

}


/* =========================================================
   PHONE JOIN
   ========================================================= */

joinBtn.addEventListener(
    "click",
    connectPhone
);


function connectPhone() {

    const hostId =
        hostIdInput.value.trim();

    const selectedTeam =
        teamSelect.value;


    if (!hostId) {

        phoneStatus.textContent =
            "Please enter the Host ID.";

        return;

    }


    phoneStatus.textContent =
        "Connecting...";


    if (window.phonePeer) {

        try {
            window.phonePeer.destroy();
        }

        catch (error) {
            console.warn(error);
        }

    }


    const phonePeer =
        new Peer();

    window.phonePeer =
        phonePeer;


    phonePeer.on(
        "open",
        () => {

            const connection =
                phonePeer.connect(
                    hostId
                );

            window.phoneConnection =
                connection;


            connection.on(
                "open",
                () => {

                    connection.send({

                        type:
                            "identify",

                        team:
                            selectedTeam

                    });

                }
            );


            connection.on(
                "data",
                data => {

                    handlePhoneResponse(
                        data
                    );

                }
            );


            connection.on(
                "close",
                () => {

                    phoneStatus.textContent =
                        "Disconnected.";

                    phoneBuzzBtn.disabled =
                        true;

                    window.phoneConnection =
                        null;

                }
            );

        }
    );


    phonePeer.on(
        "error",
        error => {

            console.error(error);

            phoneStatus.textContent =
                "Could not connect to host.";

        }
    );

}


/* =========================================================
   PHONE RESPONSE
   ========================================================= */

function handlePhoneResponse(data) {

    if (data.type === "connected") {

        phoneStatus.textContent =
            "✓ CONNECTED TO HOST";

        phoneStatus.style.color =
            "#52ed91";

        phoneTeamName.textContent =
            data.name;

        phoneBuzzArea.classList.add(
            "connected"
        );

        phoneBuzzBtn.disabled =
            false;

        phoneBuzzStatus.textContent =
            "WAITING FOR QUESTION...";

    }


    if (data.type === "buzz-result") {

        if (data.accepted) {

            phoneBuzzBtn.disabled =
                true;

            phoneBuzzStatus.textContent =
                "🔔 YOU BUZZED FIRST!";

        }

        else {

            phoneBuzzStatus.textContent =
                "Too late — another team buzzed.";

        }

    }


    if (data.type === "buzz-open") {

        if (data.allowed) {

            phoneBuzzBtn.disabled =
                false;

            phoneBuzzStatus.textContent =
                "BUZZ NOW!";

        }

        else {

            phoneBuzzBtn.disabled =
                true;

            phoneBuzzStatus.textContent =
                "You already answered this question.";

        }

    }


    if (data.type === "question-ended") {

        phoneBuzzBtn.disabled =
            true;

        phoneBuzzStatus.textContent =
            "Waiting for next question...";

    }


    if (data.type === "new-question") {

        phoneBuzzBtn.disabled =
            false;

        phoneBuzzStatus.textContent =
            "BUZZ NOW!";

    }

}


/* =========================================================
   PHONE BUZZ BUTTON
   ========================================================= */

phoneBuzzBtn.addEventListener(
    "click",
    () => {

        const selectedTeam =
            teamSelect.value;

        const connection =
            window.phoneConnection;


        if (!connection) {
            return;
        }


        if (connection.open) {

            connection.send({

                type:
                    "buzz",

                team:
                    selectedTeam

            });

        }

    }
);


/* =========================================================
   TEAM BUZZER
   ========================================================= */

function teamBuzz(teamKey) {

    if (!gameStarted) {
        return;
    }

    if (questionEnded) {
        return;
    }

    if (!teams[teamKey]) {
        return;
    }


    if (attemptedTeams.has(teamKey)) {

        sendBuzzResult(
            teamKey,
            false
        );

        return;

    }


    if (activeTeam !== null) {

        sendBuzzResult(
            teamKey,
            false
        );

        return;

    }


    activeTeam =
        teamKey;


    stopTimer();


    questionWasPassed =
        false;


    highlightBuzzedTeam(
        teamKey
    );


    buzzStatus.textContent =
        "🔔 " +
        teams[teamKey].name +
        " BUZZED FIRST!";


    buzzStatus.classList.add(
        "active"
    );


    sendBuzzResult(
        teamKey,
        true
    );


    notifyPhonesBuzzClosed();

}


/* =========================================================
   SEND BUZZ RESULT
   ========================================================= */

function sendBuzzResult(
    teamKey,
    accepted
) {

    const connection =
        teams[teamKey]?.connection;

    if (!connection) {
        return;
    }

    if (connection.open) {

        connection.send({

            type:
                "buzz-result",

            accepted:
                accepted

        });

    }

}


/* =========================================================
   NOTIFY PHONES BUZZ CLOSED
   ========================================================= */

function notifyPhonesBuzzClosed() {

    Object.keys(teams)
        .forEach(teamKey => {

            const connection =
                teams[teamKey].connection;

            if (
                connection &&
                connection.open
            ) {

                connection.send({

                    type:
                        "buzz-result",

                    accepted:
                        teamKey === activeTeam

                });

            }

        });

}


/* =========================================================
   OPEN BUZZER FOR OTHER TEAMS
   ========================================================= */

function notifyPhonesBuzzOpen() {

    Object.keys(teams)
        .forEach(teamKey => {

            const connection =
                teams[teamKey].connection;

            if (
                connection &&
                connection.open
            ) {

                connection.send({

                    type:
                        "buzz-open",

                    allowed:
                        !attemptedTeams.has(teamKey)

                });

            }

        });

}


/* =========================================================
   SEND CURRENT BUZZ AVAILABILITY
   ========================================================= */

function sendBuzzAvailability(
    teamKey,
    connection
) {

    if (!connection || !connection.open) {
        return;
    }


    if (
        questionEnded ||
        !gameStarted
    ) {

        connection.send({

            type:
                "question-ended"

        });

        return;

    }


    if (
        attemptedTeams.has(teamKey)
    ) {

        connection.send({

            type:
                "buzz-open",

            allowed:
                false

        });

        return;

    }


    connection.send({

        type:
            "new-question"

    });

}


/* =========================================================
   HIGHLIGHT BUZZED TEAM
   ========================================================= */

function highlightBuzzedTeam(teamKey) {

    document
        .querySelectorAll(".team-card")
        .forEach(card => {

            card.classList.remove(
                "buzzed"
            );

        });


    const card =
        document.getElementById(
            teamKey + "-card"
        );


    if (card) {

        card.classList.add(
            "buzzed"
        );

    }

}


/* =========================================================
   SHOW QUESTION
   ========================================================= */

function showQuestion() {

    stopTimer();

    questionEnded =
        false;

    activeTeam =
        null;

    questionWasPassed =
        false;

    attemptedTeams =
        new Set();


    document
        .querySelectorAll(".team-card")
        .forEach(card => {

            card.classList.remove(
                "buzzed"
            );

        });


    buzzStatus.textContent =
        "Waiting for a team to buzz...";

    buzzStatus.classList.remove(
        "active"
    );


    const q =
        questions[currentQuestion];


    questionNumberElement.textContent =
        currentQuestion + 1;


    currentRoundDisplay.textContent =
        currentRound;


    categoryElement.textContent =
        q.category;


    questionElement.textContent =
        q.question;


    answersElement.innerHTML =
        "";


    feedbackElement.textContent =
        "";


    feedbackElement.className =
        "feedback";


    nextBtn.style.display =
        "none";


    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


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

                    if (!activeTeam) {

                        feedbackElement.textContent =
                            "⚠️ A team must buzz first.";

                        feedbackElement.className =
                            "feedback wrong-text";

                        return;

                    }


                    markAnswer(
                        index,
                        activeTeam
                    );

                }
            );


            answersElement.appendChild(
                button
            );

        }
    );


    resetTimer();

    notifyPhonesNewQuestion();

}


/* =========================================================
   MARK ANSWER
   ========================================================= */

function markAnswer(
    selectedIndex,
    teamKey
) {

    if (questionEnded) {
        return;
    }


    if (!teamKey || !teams[teamKey]) {
        return;
    }


    if (attemptedTeams.has(teamKey)) {
        return;
    }


    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    attemptedTeams.add(
        teamKey
    );


    /* =====================================================
       CORRECT ANSWER
       ===================================================== */

    if (
        selectedIndex ===
        q.correct
    ) {

        buttons[selectedIndex]
            .classList.add(
                "correct"
            );


        let points;


        if (questionWasPassed) {

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

        notifyPhonesQuestionEnded();


        nextBtn.style.display =
            "block";


        nextBtn.textContent =
            currentQuestion ===
            questions.length - 1
                ? "FINISH ROUND →"
                : "NEXT QUESTION →";


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


    if (team.hearts > 0) {

        team.hearts -=
            WRONG_HEART_PENALTY;


        feedbackElement.textContent =
            "✗ WRONG! " +
            team.name +
            " loses ❤️";

    }

    else {

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


    activeTeam =
        null;


    document
        .querySelectorAll(".team-card")
        .forEach(card => {

            card.classList.remove(
                "buzzed"
            );

        });


    buzzStatus.textContent =
        "⚡ WRONG ANSWER — OTHER TEAMS CAN BUZZ!";


    buzzStatus.classList.add(
        "active"
    );


    notifyPhonesBuzzOpen();


    /* =====================================================
       ALL TEAMS HAVE ATTEMPTED
       ===================================================== */

    if (
        attemptedTeams.size >=
        Object.keys(teams).length
    ) {

        questionEnded =
            true;


        stopTimer();

        highlightCorrectAnswer();

        disableAnswers();


        buzzStatus.textContent =
            "NO MORE TEAMS CAN ANSWER.";


        notifyPhonesQuestionEnded();


        nextBtn.style.display =
            "block";


        nextBtn.textContent =
            currentQuestion ===
            questions.length - 1
                ? "FINISH ROUND →"
                : "NEXT QUESTION →";

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

    if (questionEnded) {
        return;
    }


    if (timerRunning) {
        return;
    }


    if (timeLeft <= 0) {
        return;
    }


    timerRunning =
        true;


    timerStatus.textContent =
        "RUNNING";


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

stopTimerBtn.addEventListener(
    "click",
    () => {

        stopTimer();

    }
);


function stopTimer() {

    if (timer) {

        clearInterval(timer);

        timer =
            null;

    }


    timerRunning =
        false;


    if (!questionEnded) {

        timerStatus.textContent =
            "STOPPED";

    }

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

    updateTimer();

    timerStatus.textContent =
        "READY";

}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateTimer() {

    timerElement.textContent =
        timeLeft;


    timerCircle.classList.toggle(
        "warning",
        timeLeft <= 5
    );

}


/* =========================================================
   TIME EXPIRED
   ========================================================= */

function timeExpired() {

    if (questionEnded) {
        return;
    }


    questionEnded =
        true;


    questionWasPassed =
        true;


    stopTimer();


    playUndertakerBell();


    timerStatus.textContent =
        "TIME'S UP";


    buzzStatus.textContent =
        "⏰ TIME'S UP — QUESTION PASSED";


    disableAnswers();

    highlightCorrectAnswer();


    feedbackElement.textContent =
        "⏰ Time's up! The question can now be passed to a team.";


    feedbackElement.className =
        "feedback wrong-text";


    nextBtn.style.display =
        "block";


    nextBtn.textContent =
        currentQuestion ===
        questions.length - 1
            ? "FINISH ROUND →"
            : "NEXT QUESTION →";


    notifyPhonesQuestionEnded();

}


/* =========================================================
   MANUAL END QUESTION
   ========================================================= */

endQuestionBtn.addEventListener(
    "click",
    () => {

        if (!questionEnded) {

            timeExpired();

        }

    }
);


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

    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    if (buttons[q.correct]) {

        buttons[q.correct]
            .classList.add(
                "correct"
            );

    }

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

nextBtn.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >=
            questions.length
        ) {

            showResults();

            return;

        }


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

        gameStarted =
            false;

        showScreen(
            roundScreen
        );

    }
);


/* =========================================================
   SCOREBOARD
   ========================================================= */

function updateScoreboard() {

    Object.keys(teams)
        .forEach(teamKey => {

            const team =
                teams[teamKey];


            const score =
                document.getElementById(
                    teamKey +
                    "-score"
                );


            const lives =
                document.getElementById(
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

        });

}


/* =========================================================
   HEARTS
   ========================================================= */

function createHearts(hearts) {

    let output =
        "";


    for (
        let i = 0;
        i < STARTING_HEARTS;
        i++
    ) {

        if (i < hearts) {

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
   PHONE NEW QUESTION
   ========================================================= */

function notifyPhonesNewQuestion() {

    Object.keys(teams)
        .forEach(teamKey => {

            const connection =
                teams[teamKey]
                    .connection;


            if (
                connection &&
                connection.open
            ) {

                connection.send({

                    type:
                        "new-question"

                });

            }

        });

}


/* =========================================================
   PHONE QUESTION END
   ========================================================= */

function notifyPhonesQuestionEnded() {

    Object.keys(teams)
        .forEach(teamKey => {

            const connection =
                teams[teamKey]
                    .connection;


            if (
                connection &&
                connection.open
            ) {

                connection.send({

                    type:
                        "question-ended"

                });

            }

        });

}


/* =========================================================
   UNDERTAKER BELL
   ========================================================= */

function playUndertakerBell() {

    /*
       Exact filename from GitHub repository.
    */

    playSound(
        "undertakers-bell_2UwFCIe.mp3",
        false
    );

}


/* =========================================================
   16-SOUND MEME SOUNDBOARD
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


const memeLabels = {

    1: "YEET",

    2: "FAHHHH",

    3: "BRUHHH",

    4: "VINE BOOM",

    5: "YOOO",

    6: "RIZZ",

    7: "LET'S GOOO",

    8: "7 CRORE",

    9: "CAT LAUGH",

    10: "DUN DUN DUN",

    11: "FART",

    12: "HUH?",

    13: "RIZZBOT LAUGH",

    14: "SAD VIOLIN",

    15: "AUGHHHH",

    16: "UNDERTAKER"

};


/* =========================================================
   PLAY MEME
   ========================================================= */

function playMeme(number) {

    /*
       Convert to a real number so:
       "11" becomes 11,
       "2" becomes 2,
       etc.

       This guarantees that button 11
       plays meme 11 and NOT meme 1.
    */

    number =
        Number(number);


    const sound =
        memeSounds[number];


    if (!sound) {

        console.warn(
            "No sound assigned to meme:",
            number
        );

        return;

    }


    /*
       STOP THE PREVIOUS MEME FIRST.
    */

    stopMeme();


    /*
       Start the exact meme number.
    */

    currentMemeAudio =
        new Audio(sound);


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

    if (!currentMemeAudio) {
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
   CREATE EXTRA SOUND BUTTONS
   =========================================================

   Buttons 1–8 already exist in index.html.

   This automatically creates:
   9
   10
   11
   12
   13
   14
   15
   16

   It also creates the STOP SOUND button.

   ========================================================= */

function setupSoundboard() {

    const soundContainer =
        document.querySelector(
            ".sound-buttons"
        );


    if (!soundContainer) {
        return;
    }


    /* =====================================================
       FIX EXISTING BUTTONS 1–8
       ===================================================== */

    const existingButtons =
        soundContainer.querySelectorAll(
            ".meme-btn"
        );


    existingButtons.forEach(
        button => {

            const text =
                button.textContent.trim();


            /*
               Read the number at the beginning
               of the button text.

               Example:
               "1. YEET" -> 1
               "2. FAHHHH" -> 2
            */

            const match =
                text.match(/^(\d+)/);


            if (!match) {
                return;
            }


            const number =
                Number(match[1]);


            /*
               Remove old inline onclick
               behavior and use the exact number.
            */

            button.dataset.memeNumber =
                number;


            button.onclick =
                () => {

                    playMeme(number);

                };

        }
    );


    /* =====================================================
       CREATE BUTTONS 9–16
       ===================================================== */

    for (
        let number = 9;
        number <= 16;
        number++
    ) {

        if (
            soundContainer.querySelector(
                `[data-meme-number="${number}"]`
            )
        ) {

            continue;

        }


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

                playMeme(number);

            }
        );


        soundContainer.appendChild(
            button
        );

    }


    /* =====================================================
       CREATE STOP BUTTON
       ===================================================== */

    if (
        !soundContainer.querySelector(
            ".stop-meme-btn"
        )
    ) {

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

}


/* =========================================================
   AUDIO
   ========================================================= */

function playSound(
    file,
    stopCurrentMeme = false
) {

    /*
       If requested, stop the meme currently playing.
    */

    if (stopCurrentMeme) {

        stopMeme();

    }


    const audio =
        new Audio(file);


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
   RESULTS
   ========================================================= */

function showResults() {

    stopTimer();

    stopMeme();

    gameStarted =
        false;


    resultRoundNumber.textContent =
        currentRound;


    document.getElementById(
        "final-team1"
    ).textContent =
        teams.team1.score;


    document.getElementById(
        "final-team2"
    ).textContent =
        teams.team2.score;


    document.getElementById(
        "final-team3"
    ).textContent =
        teams.team3.score;


    document.getElementById(
        "final-team4"
    ).textContent =
        teams.team4.score;


    let winner =
        "team1";


    Object.keys(teams)
        .forEach(teamKey => {

            if (
                teams[teamKey].score >
                teams[winner].score
            ) {

                winner =
                    teamKey;

            }

        });


    document.getElementById(
        "winner-display"
    ).textContent =
        "🏆 " +
        teams[winner].name +
        " LEADS THIS ROUND!";


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

        stopTimer();

        stopMeme();

        gameStarted =
            false;

        currentQuestion =
            0;

        currentRound =
            1;

        questions =
            roundQuestions[1];

        attemptedTeams =
            new Set();

        activeTeam =
            null;

        resetTeams();

        showScreen(
            startScreen
        );

    }
);


/* =========================================================
   PUBLIC FUNCTIONS
   ========================================================= */

window.teamBuzz =
    teamBuzz;

window.hostStartTimer =
    startTimer;

window.hostStopTimer =
    stopTimer;

window.hostResetTimer =
    resetTimer;

window.hostEndQuestion =
    timeExpired;

window.playMeme =
    playMeme;

window.stopMeme =
    stopMeme;


/* =========================================================
   INITIAL STATE
   ========================================================= */

resetTeams();

updateTimer();

setupSoundboard();
