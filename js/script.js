window.addEventListener('beforeunload', function (e) {
  if (!window.confirm('Are you sure you want to leave?')) {
    e.preventDefault();
    e.returnValue = 'anti-closing, brought to you by stupid';
  }
});

function toggleButtons(display) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.display = display ? 'block' : 'none';
  });
  ['alarmClock', 'quoteOfTheDay', 'backButton'].forEach(id => {
    document.getElementById(id).style.display = display ? 'block' : 'none';
  });
  if (localStorage.getItem('panic') === 'on') {
    document.getElementById('panicButton').style.display = 'block';
  }
}

function loadIframe(url, displayButtons = false) {
  const contentFrame = document.getElementById('contentFrame');
  contentFrame.src = url;
  contentFrame.style.display = 'block';
  if (!displayButtons) {
    toggleButtons(false);
  }
}

function ProxyFullscreen() {
  const proxyItem = localStorage.getItem('proxy');
  switch (proxyItem) {
    case 'astroid':
      loadIframe('./lol.html');
      break;
    case 'interstellar':
      loadIframe('./woah.html');
      break;
    default:
      loadIframe('./woah.html');
  }
}

function Settings() {
  loadIframe('./settings.html');
}

function loadIframer() {
  let website = prompt("Enter the website URL:");
  if (!website.startsWith("https://")) {
    website = "https://" + website;
  }
  loadIframe(website);
}

function GameLoader() {
  loadIframe('https://myschoolisass.github.io/games.html');
}

function hideIframeContent() {
  document.getElementById('contentFrame').style.display = 'none';
  toggleButtons(true);
  document.getElementById('contentFrame').srcdoc = '';
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.getElementById('clockTime').textContent = time;
  document.getElementById('clockAmPm').textContent = amPm;
}
setInterval(updateClock, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    // Add your quotes here
  ];
  const quoteType = localStorage.getItem('quoteType');
  let quoteIndex;
  switch (quoteType) {
    case 'minute':
      quoteIndex = new Date().getMinutes() - 1;
      break;
    case 'hour':
      quoteIndex = new Date().getHours() - 1;
      break;
    case 'day':
    default:
      quoteIndex = new Date().getDate() - 1;
  }
  if (quoteIndex >= 0 && quoteIndex < quotes.length) {
    displayQuote(quotes[quoteIndex]);
  }
  setInterval(() => {
    if (quoteIndex >= 0 && quoteIndex < quotes.length) {
      displayQuote(quotes[quoteIndex]);
    }
  }, 60000);
});

function displayQuote(quote) {
  const quoteElement = document.getElementById('quoteOfTheDay');
  if (quoteElement) {
    quoteElement.textContent = quote;
  } else {
    console.error("Element with ID 'quoteOfTheDay' not found.");
  }
}
