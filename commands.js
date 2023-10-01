const password = "rabbit";
const linkedin = "https://www.linkedin.com/in/grzegorz-bejtan-bb4a67198/";
const github = "https://github.com/gb-redRabit";
const email = "mailto:bejtan.grzegorz@gmail.com";

whoami = ["<br>", "Hey, I'm Grzegorz!👋", "Coś tam dalej", "<br>"];

social = [
  "<br>",
  `linkedin       <a class="link" href="${linkedin}" target="_blank">linkedin/grzegorzBejtan</a>`,
  `github         <a class="link" href="${github}" target="_blank">github/gb-redRabit</a>`,
  "<br>",
];

secret = [
  "<br>",
  '<span class="command">sudo</span><span class="link">Only use if you\'re admin</span>',
  "<br>",
];

projects = [];
list = [];
fetch("https://api.github.com/users/gb-redRabit/repos")
  .then((res) => res.json())
  .then((res) => {
    res.map((item) => {
      if (item.name != "gb-redRabit") {
        list.push({ name: item.name, url: item.clone_url });
        projects.push(
          `${item.name}<a class="link" href="${item.clone_url}" target="_blank">github/${item.name}</a>`
        );
      }
    });
  });
help = [
  "<br>",
  '<span class="command">whoami</span><span class="link">Who am I?</span>', //dokończyć opis
  '<span class="command">email</span><span class="link">Write to me</span>',
  '<span class="command">social</span><span class="link">Display social networks</span>', // pozmieniąć linki
  '<span class="command">secret</span><span class="link">Find the password</span>', // rozbudować sekret dodać efekt wirusa
  '<span class="command">projects</span><span class="link">View coding projects</span>',
  '<span class="command">cv</span><span class="link">Print CV</span>',
  '<span class="command">dowcv</span> <a class="link" href="CV-Bejtan-Grzegorz.txt" download> Downloader CV</a>',
  '<span class="command">history</span><span class="link">View command history</span>',
  '<span class="command">help</span> <span class="link"> You obviously already know what this does</span>',
  '<span class="command">clear</span><span class="link">Clear terminal</span>',
  '<span class="command">banner</span><span class="link">Display the header</span>',
  "<br>",
];

cv = [
  "",
  "                                 ____        _ _                 ____                                   ",
  "                                | __ )  ___ (_) |_ __ _ _ __    / ___|_ __ _______  __ _  ___  _ __ ____",
  "                                |  _ \\ / _ \\| | __/ _` | '_ \\  | |  _| '__|_  / _ \\/ _` |/ _ \\| '__|_  /",
  "                                | |_) |  __/| | || (_| | | | | | |_| | |   / /  __/ (_| | (_) | |   / / ",
  "                                |____/ \\___|/ |\\__\\__,_|_| |_|  \\____|_|  /___\\___|\\__, |\\___/|_|  /___|",
  "                                          |__/                                     |___/                ",
  "<br/>",
  "      bejtan.grzegorz@gmail.com /∆ 509 817 144 /∆ github.com/gb-redRabit /∆ linkedin.com/in/grzegorz-bejtan-bb4a67198/",
  "<br/>",
  "             # Kodowanie kreatywne # Projektowanie stron # Wizualizacja danych # Projektowanie informacji #",
  "<br/>",
  "/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯",
  "<br/>",
  //dodać
  "cos tam o mnie ",
  "<br/>",
  "/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯",
  "<br/>",
  //zmienić info
  "### Edukacja i Prace ###",
  "<br/>",
  "Scientific high school degree |----------| 2007 |",
  "                                         |      |",
  "Mechatronics engineering |---------------| 2008 |",
  "         Padua University |              |      |",
  "                                         | 2009 |",
  "                                         |      |",
  "Music and new Technologies |-------------| 2010 |",
  "       Vicenza Conservatory |            |      |",
  "                                         | 2011 |------------------------------------------01-| FluendoCrescente ~~~~ ////",
  "                            |            |      |",
  "First level academic dipoma |------------| 2012 |-----------------------------------------------02-| R.E.M. ~~~~~ ///// xx",
  "Master course: Communication Design |----|      |",
  "          IUAV University of Venice |    | 2013 |-----------------03-| Les Invocations du Vide [thesis] ~~~~~~ ///// xxxxx",
  "                          / x # ∆ • |    |      |-----------------------------------------04-| SpaceSonic IV //////// xxxx",
  "                                         |      |--------------------------------------05-| Social Dinner ////// xxxxxx ##",
  "                                         |      |--------------------------------------------------06-| PASSWORD* ########",
  "                                         |      |------------------------------------------07-| Words in a Day ∆∆∆∆ /// ••",
  "                                         |      |",
  "                                         | 2014 |-------------------------08-| Agorà interactive installation //// ••• xxx",
  "                                         |      |-----------09-| Atlas of Contemporary Technology - Vanishing ∆∆∆∆∆ •••• /",
  "                                         |      |-10-| Deep into the animal exctinction - visualization ∆∆∆∆ //// xxxx ••• ",
  "                                         |      |-----------11-| Deep into the animal exctinction - sonification ~~~~~ ///",
  "                                         |      |--------------------------------12-| A matter of Dimensions ###### •• ~~~",
  "                                         |      |-------------------------------13-| The Structure - by RedBull /// xxx ~~ ",
  "                                         |      |",
  "                                         |      |",
  "                                         | 2015 |-------14-| Atlas of Contemporary Networks - Interplanetary ∆∆∆∆∆∆ •••• /",
  "                                         |      |-----------------------------------------15-| @AtlasDSN ////// xxx # ∆∆ •",
  "                                         |      |",
  "<br/>",
  "### Umiejętności w zakresie oprogramowania ###",
  //dodać inny wyglad temu
  "<br/>",
  "Git, Github, Netlify, VSC, Postman, HTML, CSS, SASS, Bootstrap, Tailwind, Emotion, JS, JQ, Webpack, React, Electron, C#",
  "<br/>",
  // dodać dalej sekcje
  `<br>`,
];

banner = [
  // cos pozmieniać??????????
  '<span class="index">gb-redRabit (GB) </span>',
  "                  _",
  "                 /_\\",
  "                 \\\\\\\\     ___          _____________________________________",
  "                  \\\\\\\\   /   \\        /                                     \\",
  "                   \\\\\\\\_/ \\   \\      /     What does a computer scientist    \\",
  "                    \\     /\\__/     /   do when he wakes up with a hangover?  \\",
  "                     \\X -/          \\               Tests memory.             /",
  "                  ___/ ^ \\___       / _______________________________________/",
  "                     \\___/         /_/",
  "                     _/ \\_",
  "                  __//   \\\\__",
  "                 /___\\/_\\/___\\",
  '<span class="color2">Welcome to my interactive web terminal.</span>',
  '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
];
