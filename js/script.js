

window.addEventListener('beforeunload', function (e) {
  // Check if the "tabclose" item in localStorage is set to true

      var confirmationMessage = 'Are you sure you want to leave?';

      // Display a custom confirmation dialog
      if (!window.confirm(confirmationMessage)) {
          e.preventDefault();
          e.returnValue = 'anti-closing, brought to you by stupid'; // For some older browsers
      }});



  
  function HideButtons() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
          button.style.display = 'none';
      });
  
      document.getElementById('alarmClock').style.display = 'none';
      document.getElementById('quoteOfTheDay').style.display='none';
      
      const panic = localStorage.getItem('panic');
      if (panic === 'on') {
          document.getElementById('panicButton').style.display = 'block';
      }
      
      document.getElementById('backButton').style.display = 'block';
  }
  
  function GetButtons() {

      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
          button.style.display = 'block';
      })
      document.getElementById('alarmClock').style.display='block';
      document.getElementById('quoteOfTheDay').style.display='block';
      document.getElementById('backButton').style.display = 'none'; 
  }
function ProxyFullscreen() {
    let contentFrame = document.getElementById('contentFrame');
    contentFrame.style.display = 'block';
    HideButtons();
    let proxyItem = localStorage.getItem('proxy');
    let iframeUrl;
    if (proxyItem === 'astroid') {
        iframeUrl = 'https://astroid.mathonline.click';
    } else if (proxyItem === 'interstellar') {
        iframeUrl = './woah.html';
    } else if (proxyItem === 'doge') {
      iframeurl = './eh.html'
    } else if (proxyItem === 'art') {
      iframeUrl='./art.html'
    } else {
        iframeUrl = './art.html';
    }
    document.getElementById('contentFrame').style.display = 'block';
    contentFrame.srcdoc = `
    <iframe src="${iframeUrl}" width="100%" height=${contentFrame.clientHeight}>`;    
  }
  function loadIframeContent() {
      let contentFrame = document.getElementById('contentFrame');
      contentFrame.style.display = 'block';
      HideButtons();
      contentFrame.srcdoc = `
          <iframe src="./test.html" width=100% height=${contentFrame.clientHeight}>`;
  }
  function Settings() {
      document.getElementById('contentFrame').style.display='block';
      HideButtons();
      let iframe = document.getElementById('contentFrame');
      iframe.srcdoc = `
      <iframe src="./settings.html" width=100% height=${contentFrame.clientHeight}>`;
  }
  function loadIframer() {
      let website = prompt("Enter the website URL:");
      if (!website.startsWith("https://")) {
          website = "https://" + website;
      }
      HideButtons(); 
      let iframe = document.getElementById('contentFrame');
      iframe.style.display = 'block';
      iframe.src = website;
  }
  function GameLoader() {
      document.getElementById('contentFrame').style.display = 'block';
      HideButtons();
      let iframe = document.getElementById('contentFrame');
      contentFrame.srcdoc = `
      <iframe src="./games.html" width="100%" height=${contentFrame.clientHeight}>`;
        iframe.style.display = 'block';
  }
  function hideIframeContent() {
      document.getElementById('contentFrame').style.display = 'none';
      GetButtons();
      let iframe = document.getElementById('contentFrame');
      iframe.srcdoc = '';
  }
  function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12; // Convert to 12-hour format
      const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      document.getElementById('clockTime').textContent = time;
      document.getElementById('clockAmPm').textContent = amPm;
    }
    setInterval(updateClock, 1000);
    document.addEventListener("DOMContentLoaded", function() {
      const quotes = [
        "If you steal from one author, it's plagiarism; if you steal from many, it's research.",
        "Life isn't measured by the number of breaths you take, but by the number of moments that take your breath away.",
        "Obstacles are often just a stepping stone.",
        "Very often you will fail, but that is the sole reason to continue.",
        "Even if you get what you desired, what is there to gain when you get bored of it eventually?",
        "You never realize how boring your life is until someone asks what you like to do for fun.",
        "Over 90% of gamblers quit before striking gold.",
        "Unbelievable isn't impossible; It's just unproven.",
        "Children: You spend the first 2 years of their life teaching them to walk and talk. Then you spend the next 16 telling them to sit down and shut-up.",
        "Have a heart that never hardens, a temper that never tires, a touch that never hurts.",
        "Love me when I least deserve it, because that’s when I really need it.",
        "Overly confident people who think they know everything are a great annoyance to those of us who do.",
        "Either you run the day, or the day runs you.",
        "If two wrongs don't make a right, try three.",
        "Futures cannot be predicted, but futures can be invented.",
        "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man.",
        "I asked God for a bike, but I know God doesn't work that way. So I stole a bike and asked for forgiveness",
        "Love is a canvas furnished by Nature and embroidered by imagination.",
        "Enemies are just people who you haven't understood.",
        "Do not argue with an idiot. He will drag you down to his level and beat you with experience.",
        "You love flowers, but you cut them. You love animals, but you eat them. You tell me you love me, so now I'm scared!",
        "Often when you think you're at the end of something, you're at the beginning of something else.",
        "Understanding someone is so much harder than misunderstanding them.",
        "The best way to lie is to tell a Carefully Edited Truth.",
        "You make a living by what you get; you make a life by what you give.",
        "Love is a fabric which never fades, no matter how often it is washed in the water of adversity and grief.",
        "Education needs to work by pull, not push.",
        "Reasoning isn't going to work most of the time;The people to be reasoned are the ones who don't care for it, so why bother?",
        "When tempted to fight fire with fire, remember that the fire department generally uses water.",
          "People say nothing is impossible, but I do nothing every day.",
          "You aren't doing it wrong if nobody knows what you are doing.",
          "War does not determine who is right - only who is left.",
          "Perfection is not attainable, but if we chase perfection we can catch excellence.",
          "Never underestimate the power of stupid people in large groups.",
          "Some cause happiness wherever they go; others whenever they go.",
          "Better late than never, but never late is better.",
          "Between two evils, I always pick the one I never tried before.",
          "A pessimist is a person who has had to listen to too many optimists.",
          "Guilt: the gift that keeps on giving.",
          "Always borrow money from a pessimist. He won't expect it back.",
          "Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",
          "A bargain is something you don't need at a price you can't resist.",
          "Nothing sucks more than that moment during an argument when you realize you're wrong.",
          "We've all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.",
          "By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.",
          "Tell a man there are 300 billion stars in the universe and he'll believe you. Tell him a bench has wet paint on it and he'll have to touch it to be sure.",
          "Studying means 10% reading and 90% complaining to your friends that you have to study.",
          "Never take life seriously. Nobody gets out alive anyway.",
          "Long time ago I used to have a life, until someone told me to create a Tiktok account.",
          "All my life I thought air was free, until I bought a bag of chips.",
          "The great pleasure in life is doing what people say you cannot do.",
          "Don't worry if plan A fails, there are 25 more letters in the alphabet.",
          "The best time to give advice to your children is while they're still young enough to believe you know what you're talking about.",
          "A bank is a place that will lend you money, if you can prove that you don't need it.",
          "America is a country where half the money is spent buying food, and the other half is spent trying to lose weight",
          "Women who seek to be equal with men lack ambition.",
          "The human brain is a wonderful thing. It starts working the moment you are born, and never stops until you stand up to speak in public.",
          "At every party, there are two kinds of people'those who want to go home and those who don't. The trouble is, they are usually married to each other.",
          "There are two types of people. People who like Spring Rolls, and Liars.",
          "In the morning you beg to sleep more, in the afternoon you are dying to sleep, and at night you refuse to sleep.",
          "How is it one careless match can start a forest fire, but it takes a whole box to start a campfire?",
          "When you do crazy things, expect crazy results.",
          "An idea isn't responsible for the people who believe in it.",
          "It's called the american dream because you have to be asleep to believe in it.",
          "Who is more foolish. The fool, or the fool who follows him?",
          "Think of how stupid the average person is, and realize half of them are stupider than that.",
          "Nothing is random, and the composition of music is designed to please us, and music theory has a pretty good guess at why we like it.",
          "When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car.",
          "You miss 100% of the shots you don't take.",
          "My therapist told me the way to achieve true inner peace is to finish what I start. So far I've finished two bags of M&Ms and a chocolate cake. I feel better already.",
          "Why do people say 'no offense' right before they're about to offend you?",
          "A mind is like a parachute. It doesn’t work if it isn’t open.",
          "The man who has confidence in himself gains the confidence of others.",
          "Management is doing things right; leadership is doing the right things.",
      ];
          const quoteType = localStorage.getItem('quoteType');
        
          if (quoteType === 'minute') {
            const minute = new Date().getMinutes();
            const quoteIndex = minute - 1;
            if (quoteIndex >= 0 && quoteIndex < quotes.length) {
              displayQuote(quotes[quoteIndex]);
            }
          } else if (quoteType === 'hour') {
            const hour = new Date().getHours();
            const quoteIndex = hour - 1;
            if (quoteIndex >= 0 && quoteIndex < quotes.length) {
              displayQuote(quotes[quoteIndex]);
            }
          } else if (quoteType === 'day') {
            const dayOfMonth = new Date().getDate();
            const quoteIndex = dayOfMonth - 1;
            if (quoteIndex >= 0 && quoteIndex < quotes.length) {
              displayQuote(quotes[quoteIndex]);
            }
          } else {
              const dayOfMonth = new Date().getDate();
              const quoteIndex = dayOfMonth - 1;
              if (quoteIndex >= 0 && quoteIndex < quotes.length) {
                displayQuote(quotes[quoteIndex]);  
          }
          setInterval(displayQuote(quotes[quoteIndex]),60000)
        };  
        function displayQuote(quote) {
          const quoteElement = document.getElementById('quoteOfTheDay');
          if (quoteElement) {
            quoteElement.textContent = quote;
          } else {
            console.error("Element with ID 'quoteOfTheDay' not found.");
          }
        }});
  
