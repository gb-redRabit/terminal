let before = document.getElementById("before");
const liner = document.getElementById("liner"),
  command = document.getElementById("typer"),
  textarea = document.getElementById("texter"),
  terminal = document.getElementById("terminal"),
  cursor = document.getElementById("cursor");

let git = 0,
  pw = false,
  pwd = false,
  commands = [];

textarea.value = "";
command.innerHTML = textarea.value;

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", (e) => {
  enterKey(e);
});
window.addEventListener("load", () => {
  cursor.style.left = "0px";
});

console.log(
  "%cYou hacked my password!😠",
  "color: #04ff00; font-weight: bold; font-size: 24px;"
);
console.log(
  "%cPassword: '" + password + "' - I wonder what it does?🤔",
  "color: grey"
);

const enterKey = (e) => {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    command.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      pwd = true;
    }
    if (pwd && e.keyCode == 13) {
      loopLines(secret, "color2 margin", 120);
      command.innerHTML = "";
      textarea.value = "";
      pwd = false;
      pw = false;
      liner.classList.remove("password");
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      command.innerHTML = "";
      textarea.value = "";
      pw = false;
      liner.classList.remove("password");
    }
  } else {
    if (e.keyCode == 13) {
      commands.push(command.innerHTML);
      git = commands.length;
      addLine("gb-redRabit:" + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commands[git];
      command.innerHTML = textarea.value;
    }
    help;
    if (e.keyCode == 40 && git != commands.length) {
      git += 1;
      if (commands[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commands[git];
      }
      command.innerHTML = textarea.value;
    }
  }
};

const commander = (cmd) => {
  cursor.style.left = "0px";
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "video":
      addLine("Opening YouTube...", "color2", 80);
      newTab(youtube);
      break;
    case "sudo":
      addLine("Oh no, you're not admin...", "color2", 80);
      setTimeout(() => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }, 1000);

      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "secret":
      liner.classList.add("password");
      pw = true;
      break;
    case "projects":
      addLine("<br/>", "color2", 0);
      loopLines(projects, "color2 margin project", 80);
      addLine("<br/>", "color2", list.length * 80 + 80);
      break;
    case "password":
      addLine(
        "<span class=\"inherit\"> Lol! You're joking, right? You're gonna have to try harder than that!😂</span>",
        "error",
        100
      );
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:bejtan.grzegorz@gmail.com"> bejtan.grzegorz@gmail.com</a>...',
        "color2",
        80
      );
      newTab(email);
      break;
    case "clear":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "cv":
      setTimeout(() => {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      addLine("Print CV...", "color2", 60);
      loopLines(cv, "", 80);
      break;
    case "dowcv":
      addLine("Downloader CV...", "color2", 0);
      let link = document.createElement("a");
      link.href = "CV-Bejtan-Grzegorz.txt";
      link.download = "CV-Bejtan-Grzegorz.txt".substr(
        "CV-Bejtan-Grzegorz.txt".lastIndexOf("/") + 1
      );
      link.click();
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    default:
      const item = list.filter(
        (item) => item.name.toLowerCase() == cmd.toLowerCase()
      );
      if (item.length > 0) {
        addLine(`Opening GitHub/${item[0].name}...`, "color2", 0);
        newTab(item[0].url);
      } else {
        addLine(
          '<span class="inherit">Command not found. For a list of commands, type <span class="command">\'help\'</span>.</span>',
          "error",
          100
        );
      }
      break;
  }
};

const newTab = (link) => {
  setTimeout(() => {
    window.open(link, "_blank");
  }, 500);
};

const addLine = (text, style, time) => {
  let t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(() => {
    let next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
};

const loopLines = (name, style, time) => {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
};

const typeIt = (from, e) => {
  e = e || window.event;
  let w = document.getElementById("typer");
  let tw = from.value;
  if (!pw) {
    w.innerHTML = tw.replace(/\n/g, "");
  }
};
const moveIt = (count, e) => {
  e = e || window.event;
  let keycode = e.keyCode || e.which;
  if (keycode == 37 && parseInt(cursor.style.left) >= 0 - (count - 1) * 10) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && parseInt(cursor.style.left) + 10 <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }
};
