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
  '<span class="command">social</span><span class="link">Display social networks</span>', // pozmieniąć linki
  '<span class="command">secret</span><span class="link">Find the password</span>', // rozbudować sekret dodać efekt wirusa
  '<span class="command">projects</span><span class="link">View coding projects</span>',
  '<span class="command">cv</span><span class="link">Download CV</span>', //dodać
  '<span class="command">history</span><span class="link">View command history</span>',
  '<span class="command">help</span> <span class="link"> You obviously already know what this does</span>',
  '<span class="command">email</span><span class="link">Write to me</span>',
  '<span class="command">clear</span><span class="link">Clear terminal</span>',
  '<span class="command">banner</span><span class="link">Display the header</span>',
  "<br>",
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
