/* =========================================================
   STEM TECH CHALLENGE
   =========================================================

   FEATURES:

   15 QUESTIONS
   4 TEAMS
   3 HEARTS PER TEAM
   PHONE BUZZERS
   15 SECOND HOST TIMER
   +5 BEFORE TIME
   +2 AFTER TIME
   -1 HEART FOR WRONG ANSWER
   -2 POINTS WHEN NO HEARTS REMAIN
   UNDERTAKER BELL ON TIME END
   MANUAL MEME SOUNDBOARD

   ========================================================= */


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

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


    /* =====================================================
       ROUND 2
       ===================================================== */

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


    /* =====================================================
       ROUND 3
       ===================================================== */

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
   SETTINGS
   ========================================================= */

const GAME_TIME = 15;

const STARTING_HEARTS = 3;

const CORRECT_BEFORE_TIME = 5;

const CORRECT_AFTER_TIME = 2;

const WRONG_HEART_PENALTY = 1;

const WRONG_NO_HEART_PENALTY = 2;


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

let peer = null;


/* =========================================================
   ELEMENTS
   ========================================================= */

const startScreen =
    document.getElementById("start-screen");

const phoneScreen =
    document.getElementById("phone-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startBtn =
    document.getElementById("start-btn");

const phoneModeBtn =
    document.getElementById("phone-mode-btn");

const joinBtn =
    document.getElementById("join-btn");

const restartBtn =
    document.getElementById("restart-btn");


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

    document
        .querySelectorAll(".screen")
        .forEach(s => {
            s.classList.remove("active");
        });

    screen.classList.add("active");

}


/* =========================================================
   START HOST
   ========================================================= */

startBtn.addEventListener(
    "click",
    startHostGame
);


function startHostGame() {

    gameStarted = true;

    currentQuestion = 0;

    resetTeams();

    showScreen(quizScreen);

    createHostPeer();

    showQuestion();

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
   RESET TEAMS
   ========================================================= */

function resetTeams() {

    Object.keys(teams).forEach(
        teamKey => {

            teams[teamKey].score = 0;

            teams[teamKey].hearts =
                STARTING_HEARTS;

            teams[teamKey].connection =
                null;

            teams[teamKey].connected =
                false;

        }
    );

    updateScoreboard();

}


/* =========================================================
   HOST PEER
   ========================================================= */

function createHostPeer() {

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

function setupTeamConnection(
    connection
) {

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

            Object.keys(teams).forEach(
                teamKey => {

                    if (
                        teams[teamKey]
                            .connection ===
                        connection
                    ) {

                        teams[teamKey]
                            .connected = false;

                        teams[teamKey]
                            .connection = null;

                    }

                }
            );

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

    if (!data) return;


    /* PHONE IDENTIFICATION */

    if (
        data.type ===
        "identify"
    ) {

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


        teams[teamKey].connection =
            connection;

        teams[teamKey].connected =
            true;


        connection.send({

            type: "connected",

            team:
                teamKey,

            name:
                teams[teamKey].name

        });


        updateScoreboard();

        return;

    }


    /* BUZZ */

    if (
        data.type ===
        "buzz"
    ) {

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


    const phonePeer =
        new Peer();


    phonePeer.on(
        "open",
        () => {

            const connection =
                phonePeer.connect(
                    hostId
                );


            connection.on(
                "open",
                () => {

                    connection.send({

                        type: "identify",

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


    window.phonePeer =
        phonePeer;

}


/* =========================================================
   PHONE RESPONSE
   ========================================================= */

function handlePhoneResponse(
    data
) {

    if (
        data.type ===
        "connected"
    ) {

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


    if (
        data.type ===
        "buzz-result"
    ) {

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


    if (
        data.type ===
        "question-ended"
    ) {

        phoneBuzzBtn.disabled =
            true;

        phoneBuzzStatus.textContent =
            "Waiting for next question...";

    }


    if (
        data.type ===
        "new-question"
    ) {

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


        if (
            !window.phonePeer
        ) {

            return;

        }


        /*
            Find connection created during join.
            PeerJS connection is stored globally below.
        */

        if (
            !window.phoneConnection
        ) {

            /*
                Recreate connection if necessary.
            */

            const hostId =
                hostIdInput.value.trim();


            const connection =
                window.phonePeer.connect(
                    hostId
                );


            window.phoneConnection =
                connection;


            connection.on(
                "open",
                () => {

                    connection.send({

                        type: "identify",

                        team:
                            selectedTeam

                    });


                    connection.send({

                        type: "buzz",

                        team:
                            selectedTeam

                    });

                }
            );

        }

        else {

            window.phoneConnection.send({

                type: "buzz",

                team:
                    selectedTeam

            });

        }

    }
);


/* =========================================================
   TEAM BUZZER
   ========================================================= */

function teamBuzz(
    teamKey
) {

    if (!gameStarted) {

        return;

    }


    if (questionEnded) {

        return;

    }


    if (!teams[teamKey]) {

        return;

    }


    /*
        FIRST TEAM ONLY
    */

    if (activeTeam !== null) {

        sendBuzzResult(
            teamKey,
            false
        );

        return;

    }


    activeTeam =
        teamKey;


    /*
        Stop timer because team
        has buzzed.
    */

    stopTimer();


    /*
        This was a before-time buzz.
    */

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


    /*
        Tell all other phones that
        the buzzer is closed.
    */

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
        teams[teamKey]
            ?.connection;


    if (!connection) {

        return;

    }


    connection.send({

        type:
            "buzz-result",

        accepted:
            accepted

    });

}


/* =========================================================
   NOTIFY PHONES
   ========================================================= */

function notifyPhonesBuzzClosed() {

    Object.keys(teams)
        .forEach(teamKey => {

            const connection =
                teams[teamKey]
                    .connection;


            if (connection) {

                connection.send({

                    type:
                        "buzz-result",

                    accepted:
                        teamKey ===
                        activeTeam

                });

            }

        });

}


/* =========================================================
   HIGHLIGHT BUZZED TEAM
   ========================================================= */

function highlightBuzzedTeam(
    teamKey
) {

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

    questionEnded = false;

    activeTeam = null;

    questionWasPassed = false;


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
        (answer,index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-btn";


            button.textContent =
                String.fromCharCode(
                    65 + index
                )
                + ". "
                + answer;


            button.addEventListener(
                "click",
                () => {

                    /*
                        If no team has buzzed,
                        host can still select
                        an answer for testing.
                    */

                    if (
                        activeTeam
                    ) {

                        selectAnswer(
                            index,
                            activeTeam
                        );

                    }

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


    stopTimer();


    timerRunning =
        true;


    timerStatus.textContent =
        "RUNNING";


    timer = setInterval(
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

        timer = null;

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


    /*
        AUTOMATIC UNDERTAKER BELL
    */

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
        "NEXT QUESTION →";


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
   SELECT ANSWER
   ========================================================= */

function selectAnswer(
    selectedIndex,
    teamKey
) {

    if (questionEnded) {

        return;

    }


    questionEnded =
        true;


    stopTimer();


    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    /*
        CORRECT
    */

    if (
        selectedIndex ===
        q.correct
    ) {

        buttons[selectedIndex]
            .classList.add(
                "correct"
            );


        let points;


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


        if (
            teamKey &&
            teams[teamKey]
        ) {

            teams[teamKey].score +=
                points;

            updateScoreboard();

        }


        feedbackElement.textContent =
            "✓ " +
            (teamKey
                ? teams[teamKey].name
                : "TEAM") +
            " CORRECT! +" +
            points +
            " POINTS";


        feedbackElement.className =
            "feedback correct-text";

    }


    /*
        WRONG
    */

    else {

        buttons[selectedIndex]
            .classList.add(
                "wrong"
            );


        buttons[q.correct]
            .classList.add(
                "correct"
            );


        if (
            teamKey &&
            teams[teamKey]
        ) {

            const team =
                teams[teamKey];


            /*
                HEARTS REMAIN
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

            /*
                NO HEARTS
            */

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

        }

        else {

            feedbackElement.textContent =
                "✗ WRONG!";

        }


        feedbackElement.className =
            "feedback wrong-text";

    }


    activeTeam =
        null;


    nextBtn.style.display =
        "block";


    nextBtn.textContent =
        "NEXT QUESTION →";


    notifyPhonesQuestionEnded();

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

    const q =
        questions[currentQuestion];


    const buttons =
        document.querySelectorAll(
            ".answer-btn"
        );


    if (
        buttons[q.correct]
    ) {

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

function createHearts(
    hearts
) {

    let output = "";


    for (
        let i = 0;
        i < STARTING_HEARTS;
        i++
    ) {

        if (
            i < hearts
        ) {

            output += "❤️";

        }

        else {

            output += "🖤";

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


            if (connection) {

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


            if (connection) {

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

    playSound(
        "sounds/undertaker-bell.mp3"
    );

}


/* =========================================================
   MEME SOUNDBOARD
   ========================================================= */

function playMeme(
    number
) {

    const sounds = {

        1:
            "sounds/yeet.mp3",

        2:
            "sounds/fahhhh.mp3",

        3:
            "sounds/bruhhh.mp3",

        4:
            "sounds/vine-boom.mp3",

        5:
            "sounds/yooo.mp3",

        6:
            "sounds/rizz.mp3",

        7:
            "sounds/lets-gooo.mp3",

        8:
            "sounds/7-croreeeee.mp3"

    };


    if (
        sounds[number]
    ) {

        playSound(
            sounds[number]
        );

    }

}


/* =========================================================
   AUDIO
   ========================================================= */

function playSound(
    file
) {

    const audio =
        new Audio(file);


    audio.volume =
        1.0;


    audio.play()
        .catch(
            error => {

                console.warn(
                    "Audio playback failed:",
                    error
                );

            }
        );

}


/* =========================================================
   RESULTS
   ========================================================= */

restartBtn.addEventListener(
    "click",
    () => {

        showScreen(
            startScreen
        );

    }
);


function showResults() {

    stopTimer();

    gameStarted =
        false;


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
        " WINS!";


    showScreen(
        resultScreen
    );

}


/* =========================================================
   PUBLIC FUNCTIONS
   =========================================================

   These can also be used from the browser console
   or future controls.

   Example:

       teamBuzz("team1");

       hostStartTimer();

       hostStopTimer();

       hostResetTimer();

       playMeme(4);

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


/* =========================================================
   INITIAL STATE
   ========================================================= */

updateScoreboard();

