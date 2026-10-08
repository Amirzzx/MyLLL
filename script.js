const heartsContainer = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (8 + Math.random() * 6) + "s";

    heart.style.bottom = "-50px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 14000);

}

setInterval(createHeart, 500);

const letter = document.getElementById("letterImage");

letter.addEventListener("click", openLetter);

function openLetter() {

    letter.style.pointerEvents = "none";

    letter.style.transition = "all .8s ease";

    letter.style.transform = "scale(1.15)";

    setTimeout(() => {

        letter.animate(

            [

                { transform: "scale(1.15) rotate(0deg)" },

                { transform: "scale(1.15) rotate(-2deg)" },

                { transform: "scale(1.15) rotate(2deg)" },

                { transform: "scale(1.15) rotate(-2deg)" },

                { transform: "scale(1.15) rotate(0deg)" }

            ],

            {

                duration: 500

            }

        );

    }, 500);

    setTimeout(() => {

        letter.style.transform = "scale(1.4)";

    }, 1100);

    setTimeout(() => {

        showPassword();

    }, 1800);

}

function showPassword() {

    const box = document.createElement("div");

    box.className = "passwordBox";

    box.innerHTML = `

        <h3>🔐 رمز نامه</h3>

        <input id="passwordInput" type="password" placeholder="رمز را وارد کن">

        <button id="openBtn">

            باز کردن نامه ❤️

        </button>

        <p id="hintText"></p>

    `;

    document.body.appendChild(box);

}

const correctPassword = "1401718";

const hints = [

"نود بدی رمزو میگم😏",

"یکم بیشتر فکر کن...",

"یه تاریخه مهمیه",

"واقعا؟"

];

let hintIndex = 0;

document.addEventListener("click",(e)=>{

    if(e.target.id==="openBtn"){

        checkPassword();

    }

});
function checkPassword(){

    const input=document.getElementById("passwordInput");

    const hint=document.getElementById("hintText");

    if(input.value===correctPassword){

        document.querySelector(".passwordBox").remove();

        openRealLetter();

    }

    else{

        if(hintIndex<hints.length){

            hint.innerHTML=hints[hintIndex];

            hintIndex++;

        }

        else{

            hint.innerHTML="اشتباهههه";

        }

        input.value="";

    }

}
function openRealLetter(){

    letter.style.transition="1s";

    letter.style.transform="scale(1.7)";

    letter.style.filter="drop-shadow(0 0 40px rgba(255,255,255,.9))";

    setTimeout(()=>{

        showLetterText();

    },900);

}
function showLetterText() {

    const text = document.createElement("div");

    text.className = "letterText";

    text.innerHTML = `

        <h2>برای قشنگ ترین دختر دنیا ❤️</h2>

        <p id="typing"></p>

        <button id="nextBtn" style="display:none;">
            ادامه ❤️
        </button>

    `;

    document.body.appendChild(text);

    typeText();

    document.getElementById("nextBtn").onclick = showSecondPart;

}


function showSecondPart() {

    const target = document.getElementById("typing");
    const btn = document.getElementById("nextBtn");

    btn.style.display = "none";
    target.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        target.innerHTML += secondText.charAt(i);

        i++;

        if (i >= secondText.length) {

            clearInterval(timer);

            btn.innerHTML = "ادامه ❤️";
            btn.style.display = "inline-block";
            btn.onclick = showThirdPart;
        }

    }, 45);
}


function showThirdPart() {

    const target = document.getElementById("typing");
    const btn = document.getElementById("nextBtn");

    btn.style.display = "none";
    target.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {

        target.innerHTML += thirdText.charAt(i);

        i++;

        if (i >= thirdText.length) {

            clearInterval(timer);

            btn.innerHTML = "من هم دوستت دارم ❤️";
            btn.style.display = "inline-block";
            btn.onclick = finishLetter;
        }

    }, 45);
}
const firstText = `
سلام عشق من،

نمی‌دونم این نامه رو از کجا شروع کنم،
چون بعضی احساس‌ها اونقدر بزرگن که با چندتا جمله ساده نمی‌شه بیانشون کرد.
فقط می‌خوام بدونی که تو برای من یه آدم معمولی نیستی؛
کسی هستی که بودنش توی زندگی من فرق ایجاد کرده.
شاید بعضی وقت‌ها نتونستم اون‌طور که باید نشون بدم چقدر دوستت دارم،
شاید بعضی وقت‌ها کم گذاشتم یا نتونستم اون توجهی که نیاز داشتی رو بهت بدم،
ولی هیچ‌وقت به این معنی نبوده که برام مهم نیستی.
گاهی آدم‌ها احساسات عمیقی دارن
اما بلد نیستن همیشه درست نشونش بدن.
`;

const secondText = `
من دلم برای اون لحظه‌هایی تنگ شده که با هم حرف می‌زدیم،
برای خنده‌هات،
برای حس خوبی که از بودن کنار تو می‌گرفتم؛
حتی وقتی فاصله بینمون بود.
تو باعث شدی یه سری احساسات رو تجربه کنم
که قبل از تو کمتر شناخته بودم.
نمی‌خوام فقط با حرف قشنگ چیزی رو درست کنم؛
می‌خوام با رفتارم نشون بدم که بودن تو برام ارزشمنده.
می‌خوام بیشتر حواسم بهت باشه،
بیشتر گوش بدم،
بیشتر بفهممت
و کاری کنم که دوباره اون حس خوب بینمون برگرده.
`;

const thirdText = `
فقط ازت می‌خوام بدونی که من هنوز همون آدمی هستم
که دوستت داشت و داره.
شاید کامل نباشم،
شاید اشتباه کنم،
ولی احساسم نسبت به تو واقعی بوده و هست.
امیدوارم دوباره بتونیم کنار هم لحظه‌های قشنگ بسازیم؛
نه به خاطر اینکه گذشته رو فراموش کنیم،
بلکه چون هنوز چیزهای زیادی بینمون هست که ارزش جنگیدن داره.
دوستت دارم،
بیشتر از چیزی که شاید همیشه تونسته باشم نشون بدم.
`;

function finishLetter() {

    document.getElementById("landing").style.display = "none";

    const letterText = document.querySelector(".letterText");
    if (letterText) {
        letterText.remove();
    }
    createHeartExplosion();

    setTimeout(() => {

        const msg = document.createElement("div");

        msg.id = "finishText";

        msg.innerHTML = "لبخندت قشنگ‌ترین تصویر دنیاس ❤️";

        document.body.appendChild(msg);

    }, 2000);

    setTimeout(() => {

    const finish = document.getElementById("finishText");

    if (finish) {
        finish.remove();
    }

    document.getElementById("timerPage").style.display = "flex";

    document.querySelector(".love-reasons").style.display = "flex";


    startLoveTimer();

}, 6000);
}

function typeText() {

    let i = 0;

    const target = document.getElementById("typing");

    target.innerHTML = "";

    const timer = setInterval(() => {

        target.innerHTML += firstText.charAt(i);

        i++;

        if (i >= firstText.length) {

            clearInterval(timer);
            document.getElementById("nextBtn").style.display = "inline-block";

        }

    }, 45);

}
function createHeartExplosion() {

    for (let i = 0; i < 180; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize = (18 + Math.random() * 30) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 250 + Math.random() * 600;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate(

            [
                {
                    transform: "translate(0,0) scale(0.5)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px,${y}px) scale(1.4)`,
                    opacity: 0
                }

            ],

            {
                duration: 3500,
                easing: "ease-out",
                fill: "forwards"
            }

        );

        setTimeout(() => {

            heart.remove();

        }, 3500);

    }

}

function startLoveTimer() {

    const startDate = new Date("2022-10-10T00:00:00"); 

    const timer = document.getElementById("loveTimer");

    setInterval(() => {

        const now = new Date();
        

        const diff = now - startDate;

        const totalSeconds = Math.floor(diff / 1000);
        const totalMinutes = Math.floor(diff / (1000 * 60));
        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        const totalWeeks = Math.floor(totalDays / 7);
        const totalMonths = Math.floor(totalDays / 30);
        const totalYears = Math.floor(totalDays / 365);

        timer.innerHTML = `
        <div>💍 ${totalYears} سال</div>
        <div>❤️ ${totalMonths} ماه</div>
        <div>💖 ${totalWeeks} هفته</div>
        <div>🌹 ${totalDays} روز</div>
        <div>🕒 ${totalHours} ساعت</div>
        <div>⏰ ${totalMinutes} دقیقه</div>
        <div>✨ ${totalSeconds} ثانیه</div>

        `;

    }, 1000);

}

const reasons = [

    {
        image:"assets/images/love-cat.jpg",
        text:"چون وقتی تو هستی انگار کل دنیا رو دارم❤️"
    },

    {
        image:"assets/images/cute-couple-cat.png",
        text:"چون کنار تو آرامش واقعی رو پیدا کردم "
    },

    {
        image:"assets/images/cat-with-heart.jpg",
        text:"چون با تو حتی روزای سخت هم قشنگ میشن 💖"
    },

    {
        image:"assets/images/cat-with-rose.jpg",
        text:"چون تو بهترین اتفاق زندگیمی ✨"
    },

    {
        image:"assets/images/sad-cat-2.jpg",
        text:"چون هر روز بیشتر عاشقت میشم ❤️"
    }

];
const buttonTexts = [

    "❤️ دلیل بعدی",

    " یکی دیگه بگم؟",

    "💖 هنوز تموم نشده",

    "😍 اینم یکی دیگه",

    "💕 باز هم دلیل دارم",

    "✨ ادامه بده"

];

let currentReason = 0;

function showReason(index){

    document.getElementById("reasonModal").style.display="flex";

    setTimeout(()=>{

        document.querySelector(".reason-card").classList.add("show");

    },10);

    document.getElementById("reasonImage").src =
    reasons[index].image;

    document.getElementById("reasonContent").innerHTML =
    reasons[index].text;
    document.getElementById("nextReason").innerHTML =
    buttonTexts[index % buttonTexts.length];

}

document.getElementById("reasonBtn").onclick = function () {

    currentReason = 0;

    const nextBtn = document.getElementById("nextReason");

    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
    nextBtn.innerHTML = "❤️ دلیل بعدی";

    showReason(currentReason);

};

document.getElementById("nextReason").onclick = function () {

    if (currentReason < reasons.length - 1) {

        currentReason++;

        showReason(currentReason);
        if (currentReason === reasons.length - 1) {

            this.innerHTML = "💌 تموم شد";

        }

    } else {
        this.disabled = true;

        this.innerHTML = "❤️فعلا همینا به ذهنم رسید";

        this.style.opacity = "0.6";

        this.style.cursor = "default";

    }

};

document.getElementById("closeReason").onclick = function () {

    document.getElementById("reasonModal").style.display = "none";

    currentReason = 0;

    const nextBtn = document.getElementById("nextReason");

    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
    nextBtn.innerHTML = "❤️ دلیل بعدی";

};

const nextBtn = document.getElementById("nextReason");

nextBtn.disabled = false;
nextBtn.innerHTML = "❤️ دلیل بعدی";


document.getElementById("gameBtn").onclick = function () {

    document.getElementById("gameModal").style.display = "flex";

    gameArea.innerHTML = `
        <div id="girl">👧</div>
        <div id="gameHeart">❤️</div>
    `;

    girl = document.getElementById("girl");
    gameHeart = document.getElementById("gameHeart");

    collectedHearts = 0;

    heartY = -40;

    girlX = 50;

    girl.style.left = girlX + "%";

    gameHeart.style.top = heartY + "px";

    gameHeart.style.left =
        Math.random() * (gameArea.offsetWidth - 40) + "px";

    document.getElementById("gameScore").innerHTML =
        `❤️ ${collectedHearts} / ${totalHearts}`;

    gameRunning = true;

    requestAnimationFrame(moveGameHeart);

};

document.getElementById("closeGame").onclick = function () {

    gameRunning = false;

    document.getElementById("gameModal").style.display = "none";

};

let totalHearts = 10;
let collectedHearts = 0;
const gameArea = document.getElementById("gameArea");
let girl = document.getElementById("girl");
let gameHeart = document.getElementById("gameHeart");

let girlX = 50;

function moveGirl(direction) {

    girlX += direction * 7;

    if (girlX < 5) {
        girlX = 5;
    }

    if (girlX > 95) {
        girlX = 95;
    }

    girl.style.left = girlX + "%";
}

document.getElementById("leftBtn").onclick = function () {
    moveGirl(-1);
};

document.getElementById("rightBtn").onclick = function () {
    moveGirl(1);
};



let heartY = 20;
let gameRunning = false;

function moveGameHeart() {

    if (!gameRunning) {
        return;
    }

    heartY += 1.5;

    gameHeart.style.top = heartY + "px";

    const girlRect = girl.getBoundingClientRect();
    const heartRect = gameHeart.getBoundingClientRect();

    const collision =
        heartRect.left < girlRect.right &&
        heartRect.right > girlRect.left &&
        heartRect.top < girlRect.bottom &&
        heartRect.bottom > girlRect.top;

    if (collision) {

        collectedHearts++;

        if (collectedHearts >= totalHearts) {

    gameRunning = false;

    gameArea.innerHTML = `
        <div class="gameResult">

            <div class="resultHeart">
                ❤️
            </div>

            <h2>
                آفرین عشق من! 🎉
            </h2>

            <p>
                همه قلب‌ ها رو جمع کردی ❤️
                <br>
                درست مثل این که قلب منو هم از همون اول جمع کردی😔❤️
            </p>

            <button id="finishGameBtn">
                💕 ادامه
            </button>
            

        </div>
    `;
    document.getElementById("finishGameBtn").onclick = function () {

    gameArea.innerHTML = `
        <div id="finalHeart">❤️</div>
    `;

    setTimeout(() => {

        document.getElementById("finalHeart").classList.add("heartZoom");

    }, 50);

    setTimeout(() => {

    document.getElementById("gameModal").style.display = "none";

    document.getElementById("secretDoor").style.display = "block";

}, 2500);

};

    return;
}

        document.getElementById("gameScore").innerHTML =
    `❤️ ${collectedHearts} / ${totalHearts}`;

        console.log(
            "❤️ قلب گرفته شد:",
            collectedHearts,
            "/",
            totalHearts
        );

        if (collectedHearts < totalHearts) {

            heartY = -40;

            const randomX =
                Math.random() * (gameArea.offsetWidth - 40);

            gameHeart.style.left = randomX + "px";
            gameHeart.style.top = heartY + "px";

        }

    }

    if (heartY >= gameArea.offsetHeight - 40) {

    gameRunning = false;

    gameArea.innerHTML = `

        <div class="gameResult">

            <div class="resultHeart">
                🥺
            </div>

            <h2>
                نههههه
            </h2>

            <p>
                یکی از قلب‌ ها رو از دست دادی 💔
                <br>
                دوباره امتحان کن!
            </p>

            <button id="restartGameBtn">
                🔄 دوباره بازی
            </button>

        </div>

    `;

    document.getElementById("restartGameBtn").onclick = restartGame;

    return;
}

    requestAnimationFrame(moveGameHeart);
}

function restartGame() {

    collectedHearts = 0;
    heartY = -40;
    girlX = 50;
    gameRunning = true;

    gameArea.innerHTML = `
        <div id="girl">👧</div>
        <div id="gameHeart">❤️</div>
    `;

    girl = document.getElementById("girl");
    gameHeart = document.getElementById("gameHeart");

    girl.style.left = girlX + "%";

    gameHeart.style.left =
        Math.random() * (gameArea.offsetWidth - 40) + "px";

    gameHeart.style.top = heartY + "px";

    document.getElementById("gameScore").innerHTML =
        `❤️ ${collectedHearts} / ${totalHearts}`;

    requestAnimationFrame(moveGameHeart);
}

let secretDoorUnlocked = false;

const secretDoor = document.getElementById("secretDoor");
const doorModal = document.getElementById("doorModal");
const closeDoorModal = document.getElementById("closeDoorModal");
const secretRoom = document.getElementById("secretRoom");
const timerPage = document.getElementById("timerPage");

function closeAllSecretModals() {

    const modalIds = [
        "memoriesModal",
        "musicModal",
        "favoritesModal",
        "nightsModal",
        "storyModal",
        "finalWordsModal"
    ];

    modalIds.forEach((id) => {

        const modal = document.getElementById(id);

        if (modal) {
            modal.style.display = "none";
        }

    });
}


secretDoor.onclick = function () {

    if (secretDoorUnlocked) {

        timerPage.style.display = "none";
        secretRoom.style.display = "block";

        closeAllSecretModals();

        return;
    }

    doorModal.style.display = "flex";
};


closeDoorModal.onclick = function () {

    doorModal.style.display = "none";

    setTimeout(() => {

        showSecretKey();

    }, 5000);

};

function showSecretKey() {

    if (document.getElementById("secretKey")) {
        return;
    }

    const key = document.createElement("div");

    key.id = "secretKey";
    key.innerHTML = "🔑";

    key.style.position = "fixed";
    key.style.left =
        (10 + Math.random() * 80) + "vw";

    key.style.top =
        (15 + Math.random() * 70) + "vh";

    key.style.fontSize = "40px";
    key.style.cursor = "pointer";
    key.style.zIndex = "999999";

    document.body.appendChild(key);


    key.onclick = function () {

        secretDoorUnlocked = true;

        key.remove();

    };

}

document.getElementById("roomExit").onclick = function () {

    closeAllSecretModals();

    secretRoom.style.display = "none";

    timerPage.style.display = "flex";

};

const memories = [
    {
        image: "assets/images/Memory/memory1.jpg",
        text: "جزو اولین دیت هامون👫(دومی یا سومی شاید)"
    },
    {
        image: "assets/images/Memory/memory2.jpg",
        text: "اولین کادویی که بهم دادی✨"
    },
    {
        image: "assets/images/Memory/memory3.jpg",
        text: "اولین بوسه اینجا اتفاق افتاد💋"
    },
    {
        image: "assets/images/Memory/memory4.jpg",
        text: "جزو اولین غذاهامون😋"
    },
    {
        image: "assets/images/Memory/memory5.jpg",
        text: "اولین برف☃️"
    },
    {
        image: "assets/images/Memory/memory6.jpg",
        text: "عکس مورد علاقم فووور اور"
    },
    {
        image: "assets/images/Memory/memory7.jpg",
        text: "آقا این لاکت رو چیکار کردی؟ من خیلی دوسش داشتم"
    },
    {
        image: "assets/images/Memory/memory8.jpg",
        text: "اولین گل درست حسابی که دادم و مثل خودت خوشگل شد💐"
    },
    {
        image: "assets/images/Memory/memory9.jpg",
        text: "اولین ناهارت تو خونمون👩🏻‍❤️‍👨🏽"
    },
    {
        image: "assets/images/Memory/memory10.jpg",
        text: "بوس سانسور شده"
    },
    {
        image: "assets/images/Memory/memory11.jpg",
        text: "اثر هنری در حال نگاه کردن به یه نقاشی ساده"
    },
    {
        image: "assets/images/Memory/memory12.jpg",
        text: "هات چاکلت + بارون"
    },
    {
        image: "assets/images/Memory/memory13.jpg",
        text: "آرامش بینمون❤️"
    },
    {
        image: "assets/images/Memory/memory14.jpg",
        text: "آقا این خرسه رو چیکار کردی؟"
    },
    {
        image: "assets/images/Memory/memory15.jpg",
        text: "دیت صبحانه❤️"
    },
    {
        image: "assets/images/Memory/memory16.jpg",
        text: "دیت صورتی💕"
    },
    {
        image: "assets/images/Memory/memory17.jpg",
        text: "روز دختر👩‍🦰"
    },
    {
        image: "assets/images/Memory/memory18.jpg",
        text: "به به"
    },
    {
        image: "assets/images/Memory/memory19.jpg",
        text: "دیت جزیره🏖️"
    },
    {
        image: "assets/images/Memory/memory20.jpg",
        text: "لاکی لاکیییی"
    },
    {
        image: "assets/images/Memory/memory21.jpg",
        text: "شف امیر"
    },
    {
        image: "assets/images/Memory/memory22.jpg",
        text: "تولدت مبارکککک🥳"
    }
];

let currentMemory = 0;

const memoriesBtn = document.getElementById("memoriesBtn");
const memoriesModal = document.getElementById("memoriesModal");
const closeMemories = document.getElementById("closeMemories");

const memoryImage = document.getElementById("memoryImage");
const memoryText = document.getElementById("memoryText");
const memoryNumber = document.getElementById("memoryNumber");

const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");

function updateMemory() {

    const memory = memories[currentMemory];

    memoryImage.style.opacity = "0";

    setTimeout(() => {

        memoryImage.src = memory.image;
        memoryImage.alt = `خاطره ${currentMemory + 1}`;

        memoryText.textContent = memory.text;

        memoryNumber.textContent =
            `${currentMemory + 1} / ${memories.length}`;

        memoryImage.style.opacity = "1";

    }, 150);

    prevMemory.disabled = currentMemory === 0;

    nextMemory.disabled =
        currentMemory === memories.length - 1;
}

memoriesBtn.onclick = function () {

    currentMemory = 0;

    memoriesModal.style.display = "flex";

    updateMemory();

};

nextMemory.onclick = function () {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        updateMemory();

    }

};

prevMemory.onclick = function () {

    if (currentMemory > 0) {

        currentMemory--;

        updateMemory();

    }

};

closeMemories.onclick = function () {

    memoriesModal.style.display = "none";

};

const songs = [
    {
        title: "صرفا چندتا آهنگی که با شنیدنش یاد تو میوفتم❤️",
        file: "assets/music/gokyuzum.mp3"
    },
    {
        title: " در مورد دختری که به زندگیش نور بخشید💕",
        file: "assets/music/GlimpseOfUs.mp3"
    },
    {
        title: "حس می کنم دست تو دست هم تو سریال داریم میدوییم🌙",
        file: "assets/music/RunningUpThatHill.mp3"
    },
    {
        title: "درسته که هرچی آهنگ گوش می کنم یاد تو میوفتم ولی اینها بیشتر حسمو منتقل میکنه",
        file: "assets/music/SenSoyle.mp3"
    }
];

let currentSong = 0;

document.getElementById("musicBtn").onclick = function () {

    currentSong = 0;

    document.getElementById("musicModal").style.display = "flex";

    updateSong();

};

function updateSong() {

    const audio = document.getElementById("loveAudio");

    document.getElementById("musicTitle").innerHTML =
        songs[currentSong].title;

    audio.src = songs[currentSong].file;

    document.getElementById("songNumber").innerHTML =
        `${currentSong + 1} / ${songs.length}`;

    audio.load();

}

document.getElementById("nextSong").onclick = function () {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    updateSong();

};

document.getElementById("prevSong").onclick = function () {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    updateSong();

};

document.getElementById("closeMusic").onclick = function () {

    const audio = document.getElementById("loveAudio");

    audio.pause();

    document.getElementById("musicModal").style.display = "none";

};

const favorites = [

    {
        title: "لبخندت ❤️",
        text: "خودت نمیدونی ولی وقتی خنده میاد رو لبات انگار دنیا رو بهم میدن ❤️"
    },

    {
        title: "چشمات 🥺",
        text: "نمیدونم چرا ولی میشه ساعت ها خیره شد به چشمات"
    },

    {
        title: "صدات 🎵",
        text: "تو نمیدونی ولی من دلم میخواد هر روز زنگ بزنم بهت و صداتو بشنوم فقط"
    },

    {
        title: "آرامشی که کنار تو دارم 🤍",
        text: "یه حسی داری که باعث میشه بودن با تو برام یه جای امن باشه"
    },

    {
        title: "خودِ خودت 💖",
        text: "و شاید مهم‌ترینش اینه که لازم نیست برای دوست داشتنت دنبال دلیل خاصی بگردم؛ خودت برای من کافی‌ای"
    }

];

let currentFavorite = 0;

document.getElementById("favoritesBtn").onclick = function () {

    currentFavorite = 0;

    document.getElementById("favoritesModal").style.display = "flex";

    updateFavorite();

};

function updateFavorite() {

    document.getElementById("favoriteTitle").innerHTML =
        favorites[currentFavorite].title;

    document.getElementById("favoriteText").innerHTML =
        favorites[currentFavorite].text;

}

document.getElementById("nextFavorite").onclick = function () {

    currentFavorite++;

    if (currentFavorite >= favorites.length) {
        currentFavorite = 0;
    }

    updateFavorite();

};

document.getElementById("closeFavorites").onclick = function () {

    document.getElementById("favoritesModal").style.display = "none";

};

const nights = [
    {
        title: "اولین شب 🌙",
        date: "شبی که همه‌چیز تازه بود",
        text: "شاید اون شب نمی‌دونستیم قراره این آشنایی ما رو به کجا برسونه، ولی الان که بهش فکر می‌کنم، می‌بینم یکی از قشنگ‌ترین شروع‌های زندگی من بود."
    },

    {
        title: "شب‌های طولانی ❤️",
        date: "وقتی خواب مهم نبود",
        text: "بعضی شب‌ها فقط حرف می‌زدیم و زمان اصلا حس نمی‌شد. انگار بی خوابی تنها چیزی بود که مجبورمون می‌کرد از هم خداحافظی کنیم."
    },

    {
        title: "شب‌های دلتنگی",
        date: "وقتی فاصله بیشتر از همیشه حس می‌شد",
        text: "بعضی شب‌ ها فقط دلم می‌خواست پیشم بودی. نه حرف خاصی می‌خواستم، نه اتفاق خاصی؛ فقط می‌خواستم کنارت باشم و بدونم نزدیکمی."
    },

    {
        title: "شب‌هایی که دلم می‌خواست زمان متوقف بشه",
        date: "فقط من و تو",
        text: "بعضی لحظه‌ها رو دوست داشتم هیچ‌وقت تموم نشن؛ فقط تو باشی و من، بدون عجله، بدون فکر کردن به فردا."
    },

    {
        title: "و شب‌هایی که هنوز نیومدن...💖",
        date: "این داستان هنوز تمام نشده",
        text: "هنوز شب‌هایی هست که با هم تجربه نکردیم؛ شب‌هایی که قراره بعدها به خاطراتمون اضافه بشن. و من دوست دارم خیلی از اون شب‌ها رو کنار تو زندگی کنم."
    }
];

let currentNight = 0;

const nightsBtn = document.getElementById("nightsBtn");
const nightsModal = document.getElementById("nightsModal");
const closeNights = document.getElementById("closeNights");
const nextNight = document.getElementById("nextNight");

function showNight() {
    document.getElementById("nightTitle").innerText =
        nights[currentNight].title;

    document.getElementById("nightDate").innerText =
        nights[currentNight].date;

    document.getElementById("nightText").innerText =
        nights[currentNight].text;

    if (currentNight === nights.length - 1) {
        nextNight.innerText = "🌙 از اول";
    } else {
        nextNight.innerText = "🌙 شب بعدی";
    }
}

nightsBtn.onclick = function () {

    timerPage.style.display = "none";
    secretRoom.style.display = "block";

    currentNight = 0;

    showNight();

    nightsModal.style.display = "flex";

};

nextNight.onclick = function () {
    currentNight++;

    if (currentNight >= nights.length) {
        currentNight = 0;
    }

    showNight();
};

closeNights.onclick = function () {
    nightsModal.style.display = "none";
};


const story = [
    {
        title: "یکی بود، یکی نبود... 🌙",
        text: "در دنیایی که آدم‌ها گاهی قبل از اینکه همدیگر را ببینند، می‌توانند قلب هم را پیدا کنند، پسری زندگی می‌کرد که فکرش را هم نمی‌کرد یک روز، پشت یک صفحه‌ی کوچک، با دختری آشنا شود که قرار است بخش بزرگی از زندگی‌اش شود."
    },

    {
        title: "یک آشنایی ساده 💬",
        text: "اولش فقط چند پیام ساده بود. یک سلام، چند جمله، چند شوخی کوچک... اما کم‌کم چیزی تغییر کرد. پیام‌هایشان بیشتر شد، حرف‌هایشان طولانی‌تر شد و از اتفاق‌های روزشان برای هم می‌گفتند."
    },

    {
        title: "کم‌کم عاشق شدن ❤️",
        text: "پسر کم‌کم فهمید که به دختر علاقه پیدا کرده؛ خیلی بیشتر از چیزی که انتظارش را داشت. اما یک مشکل وجود داشت... او نمی‌توانست چیزی بگوید. می‌ترسید. نه از جواب «نه»؛ از این می‌ترسید که اگر احساسش را بگوید، همین رابطه‌ی قشنگی که بینشان ساخته شده هم از بین برود."
    },

    {
        title: "اعترافی که از طرف دختر بود",
        text: "تا اینکه یک شب، این بار دختر بود که تمام آن چیزی را که پسر جرئت گفتنش را نداشت، به زبان آورد. پسری که از ترس از دست دادن دختر، نمی‌توانست عشقش را اعتراف کند... و دختری که خودش قدم اول را برداشت."
    },

    {
        title: "شب و روزهای ما 🌙☀️",
        text: "از آن شب، دیگر فقط دو آدم پشت دو صفحه نبودند. آن‌ها برای هم تبدیل به «آدمِ هر شب» شدند. شب‌ها با حرف زدن می‌گذشت؛ گاهی تا صبح. گاهی با خنده، گاهی با دلتنگی، گاهی با حرف‌هایی که فقط خودشان معنی‌شان را می‌فهمیدند."
    },

    {
        title: "فاصله‌ای که کم شد 🗺️❤️",
        text: "روزها یکی پس از دیگری گذشتند تا اینکه یک روز، اتفاقی افتاد که شاید هیچ‌ کدامشان در شروع داستان تصورش را نمی‌کردند. دختر برای دانشگاه، به همان شهری آمد که پسر در آن زندگی می‌کرد."
    },

    {
        title: "بالاخره کنار هم 👩🏻‍❤️‍👨🏻",
        text: "فاصله‌ای که مدت‌ها فقط با اینترنت و صفحه‌ی گوشی تحملش کرده بودند، ناگهان کوتاه شده بود. دیگر قرار نبود فقط صدای هم را بشنوند یا عکس هم را ببینند. حالا می‌توانستند واقعا کنار هم راه بروند، همدیگر را ببینند، با هم غذا بخورند، بخندند و برای اولین بار، ساعت‌هایی را زندگی کنند که هیچ صفحه‌ای بینشان نبود."
    },

    {
        title: "از اینترنت تا واقعیت 💕",
        text: "آن‌ها فهمیدند بعضی آدم‌ها را اول با چشم نمی‌بینیم؛ اول با حرف‌هایشان می‌شناسیم. با طرز خندیدنشان، با نگرانی‌هایشان، با سکوت‌هایشان و با تمام آن شب‌هایی که کنار هم نبودند، اما احساس می‌کردند هستند."
    },

    {
        title: "عاشقی 🤍",
        text: "دو نفری که یک روز فقط از پشت صفحه با هم حرف می‌زدند، حالا می‌توانستند کنار هم قدم بزنند و عاشقی کنند. شاید اگر کسی در همان روزهای اول به آن‌ها می‌گفت این چند پیام ساده قرار است تبدیل به یک داستان چند ساله شود، هیچ‌کدام باور نمی‌کردند."
    },

    {
        title: "این داستان هنوز تمام نشده... 💖",
        text: "بعضی داستان‌ها از جایی شروع می‌شوند که هیچ‌کس انتظارش را ندارد. گاهی از یک پیام ساده، گاهی از یک سلام و گاهی از دختری که یک روز تصمیم می‌گیرد به جای منتظر ماندن، خودش دلش را به پسری بسپارد که مدت‌ها بود دوستش داشت."
    },

    {
        title: "صفحه‌های سفید 📖",
        text: "بهترین قسمت داستان، آن صفحاتی نیست که نوشته شده‌اند؛ صفحاتی است که هنوز سفید مانده‌اند. صفحه‌هایی برای تمام قرارهای بعدی، تمام خنده‌های بعدی، تمام شب‌هایی که هنوز نیامده‌اند و تمام روزهایی که قرار است این دو نفر، کنار هم بنویسند."
    },

    {
        title: "پایان؟ ❤️",
        text: "نه... فقط پایانِ این فصل. چون داستان ما هنوز ادامه دارد. 💖"
    }
];

let currentStory = 0;

const storyBtn = document.getElementById("storyBtn");
const storyModal = document.getElementById("storyModal");
const closeStory = document.getElementById("closeStory");
const nextStory = document.getElementById("nextStory");

function showStory() {

    const current = story[currentStory];

    document.getElementById("storyTitle").innerText =
        current.title;

    document.getElementById("storyText").innerText =
        current.text;

    document.getElementById("storyStep").innerText =
        `${currentStory + 1} / ${story.length}`;

    if (currentStory === story.length - 1) {
        nextStory.innerText = "💖 دوباره از اول";
    } else {
        nextStory.innerText = "❤️ ادامه داستان";
    }
}

storyBtn.onclick = function () {
    currentStory = 0;
    showStory();
    storyModal.style.display = "flex";
};

nextStory.onclick = function () {

    currentStory++;

    if (currentStory >= story.length) {
        currentStory = 0;
    }

    showStory();
};

closeStory.onclick = function () {
    storyModal.style.display = "none";
};
const finalWordsBtn = document.getElementById("finalWordsBtn");
const finalWordsModal = document.getElementById("finalWordsModal");
const closeFinalWords = document.getElementById("closeFinalWords");
const backToRoom = document.getElementById("backToRoom");

const finalWords = [
    "اگه بخوام از تمام چیزهایی که بین ما گذشته یک چیز رو انتخاب کنم،",
    "اون چیز خودِ «ما»ست.",
    "",
    "تمام خنده‌ها، دلتنگی‌ها، شب‌هایی که طولانی شدن،",
    "حرف‌هایی که گفتیم و حتی حرف‌هایی که نگفتیم...",
    "",
    "همه‌ی این‌ها برای من تبدیل شدن به خاطره‌هایی که دوست ندارم هیچ‌وقت فراموششون کنم.",
    "",
    "شاید همیشه نتونم بهترین آدم دنیا برات باشم،",
    "شاید بعضی وقت‌ها اشتباه کنم یا نتونم دقیقا چیزی که تو می‌خوای رو انجام بدم.",
    "",
    "ولی یک چیز رو می‌دونم:",
    "تو برای من فقط یک آدم معمولی نیستی.",
    "",
    "تو بخشی از قشنگ‌ترین خاطرات منی.",
    "و هنوز دوست دارم قشنگ‌ترین قسمت‌های داستانمون رو با هم بنویسیم."
];

function typeFinalWords() {

    const textBox = document.getElementById("finalWordsText");
    const message = document.getElementById("finalMessage");

    textBox.innerHTML = "";
    message.classList.remove("show");

    let lineIndex = 0;

    function nextLine() {

        if (lineIndex >= finalWords.length) {

            setTimeout(() => {
                message.classList.add("show");
            }, 700);

            return;
        }

        textBox.innerHTML += finalWords[lineIndex] + "\n";

        lineIndex++;

        setTimeout(nextLine, 350);
    }

    nextLine();
}

finalWordsBtn.onclick = function () {

    timerPage.style.display = "none";
    secretRoom.style.display = "block";

    finalWordsModal.style.display = "flex";

    typeFinalWords();

};

closeFinalWords.onclick = function () {
    finalWordsModal.style.display = "none";
};

document.getElementById("backToRoom").onclick = function () {

    closeAllSecretModals();

    secretRoom.style.display = "block";

    timerPage.style.display = "none";

};


document.getElementById("secretRoom").style.display = "none";

document.getElementById("secretDoor").style.display = "none";


[
    "memoriesModal",
    "musicModal",
    "favoritesModal",
    "nightsModal",
    "storyModal",
    "finalWordsModal"
].forEach((id) => {

    const modal = document.getElementById(id);

    if (modal) {
        modal.style.display = "none";
    }

});