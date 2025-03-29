const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
];

document.getElementById("generateBtn").addEventListener("click", generateQuote);
document.getElementById("tweetBtn").addEventListener("click", tweetQuote);
document.getElementById("copyBtn").addEventListener("click", copyQuote);
document.getElementById("speakBtn").addEventListener("click", speakQuote);
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        quoteElement.textContent = `"${quotes[randomIndex].text}"`;
        authorElement.textContent = `- ${quotes[randomIndex].author}`;
        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 300);

    // Change background gradient
    document.body.style.background = getRandomGradient();
}

function tweetQuote() {
    const text = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + " " + author)}`);
}

function copyQuote() {
    navigator.clipboard.writeText(document.getElementById("quote").textContent);
    alert("Quote copied to clipboard!");
}

function speakQuote() {
    const msg = new SpeechSynthesisUtterance(document.getElementById("quote").textContent);
    window.speechSynthesis.speak(msg);
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function getRandomGradient() {
    const gradients = [
        "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        "linear-gradient(135deg, #a18cd1, #fbc2eb)",
        "linear-gradient(135deg, #ffdde1, #ee9ca7)",
        "linear-gradient(135deg, #89f7fe, #66a6ff)",
        "linear-gradient(135deg, #ff758c, #ff7eb3)"
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Change button text based on the current theme
    const themeBtn = document.getElementById("themeBtn");
    if (body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}
