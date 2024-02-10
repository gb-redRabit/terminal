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
  "<----------------------------------------------------------------------------------------------------------------------->",
  "                    ____        _ _                 ____                                   ",
  "                   | __ )  ___ (_) |_ __ _ _ __    / ___|_ __ _______  __ _  ___  _ __ ____",
  "                   |  _ \\ / _ \\| | __/ _` | '_ \\  | |  _| '__|_  / _ \\/ _` |/ _ \\| '__|_  /",
  "                   | |_) |  __/| | || (_| | | | | | |_| | |   / /  __/ (_| | (_) | |   / / ",
  "                   |____/ \\___|/ |\\__\\__,_|_| |_|  \\____|_|  /___\\___|\\__, |\\___/|_|  /___|",
  "                             |__/                                     |___/                ",
  "<br/>",
  "             Grzegorz Bejtan | bejtan.grzegorz@gmail.com | 509 817 144 | github.com/gb-redRabit ",
  "<br/>",
  "          # Kodowanie kreatywne # Projektowanie stron # Wizualizacja danych # Projektowanie informacji #",
  "<br/>",
  "/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯\\_/¯",
  "<br/>",
  "Jestem osobą doświadczoną na bardzo wielu stanowiskach pracy.",
  "<br/>",
  "### Edukacja i praca ###",
  "<br/>",
  "Zespół Szkół Ponadgimnazjalnych  <------| 2011 |",
  "   nr. 1 im. Noblistów Polskich         |      |",
  "      Spec.: Technik informatyk         |      |",
  "                                        | 2014 |-> Praktyki - Infocity (1)",
  "                                        |      |",
  "                                        |      |",
  "                                        | 2017 |-> Menadżer Restauracji - Amrest (2)",
  "                                        |      |",
  "                                        |      |",
  "                                        | 2020 |-> Pracownik magazynowy - AMAZON (3)",
  "JAVASCRIPT & REACT - FutureCollars <----| 2021 |",
  "                                        |      |",
  "                                        | 2023 |-> Operator procesu sterylizacji -  CitoNet (4) ",
  "                                        | 2024 |",
  "<br/>",
  "(1) - Tworzenie strony internetowej oraz aplikacji z użyciem .NET Framework oraz Bootstrapa ",
  "(2) - Prowadzenie ciągłości działania restauracji, konserwacja maszyn , dbanie o ",
  "jakość produktu oraz robienie zamówie",
  "(3) - Przyjmowanie oraz pakowanie produktów do wysyłki, oraz pełniłem funkcję krytyczną, czyli",
  "rozwiązywałem problemy z produktami, oraz wyszukiwanie informacji o produktach.",
  "(4) - Przyjmowanie materiału medycznego, dezynfekcja, sterylizacja i wydanie go",
  "monitorowanie przebiegów procesów, oraz pomoc przy prowadzeniu zmiany",
  "<br/>",
  "### Umiejętności techniczne ###",
  "<br/>",
  "- Git, Github, Netlify, Visual Studio, Vscode, Postman",
  "- Html, Css, Sass, Bootstrap, Tailwind, Emotion",
  "- Javascript, Jquery, Webpack, Babel, React, Vue, Electron",
  "<br/>",
  "### Umiejętności miękkie ###",
  "<br/>",
  "- Komunikatywność",
  "- Współpraca",
  "- Kreatywność",
  "- Elastyczność",
  "- Ciekawość i zaradność",
  "- Potrzeba ciągłego rozwoju ",
  "<br/>",
  "### Zainteresowania ###",
  "<br/>",
  "- Nowinki technologiczne",
  "- Programowanie",
  "- Gotowanie (kuchnia Azjatycka)",
  "- Gry karciane w szczególności 1000 oraz planszowe",
  `<br>`,
  "<-------------------------------------------------------------------------------------------------------------------->",
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
