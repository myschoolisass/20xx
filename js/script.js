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

function hideIframeContent() {
  document.getElementById('contentFrame').style.display = 'none';
  toggleButtons(true);
  document.getElementById('contentFrame').srcdoc = '';
}
function ProxyFullscreen() {
  const proxyItem = localStorage.getItem('proxy');
  switch (proxyItem) {
    case 'astroid':
      loadIframe('https://astroid.mathonline.click/worksheets');
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
  loadIframe('./games.html');
}
