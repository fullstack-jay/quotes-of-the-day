const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");


// fungsi kerja quote random
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
   // mengambil kutipan data acak dari API dan diuraikan dalam bentuk objek javascript
    fetch("https://api.quotable.io/random").then(res =>res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    // SpeechSynthesisUtterance adalah API web yang berfungsi untuk membuat permintaan suara
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); 
});

copyBtn.addEventListener("click", ()=>{
   navigator.clipboard.writeText(quoteText.innerText)
});

twitterBtn.addEventListener("click", ()=>{
   let twitterUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`; // mengambil quote berupa text dan mengarahkannya ke url twitter
   window.open(twitterUrl, "_blank");
 });

quoteBtn.addEventListener("click", randomQuote);