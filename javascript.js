var quotes =[
    ["Sell a good night’s sleep – not the mattres.", "Instructor at Academy of Art University"],
    ["The man who stops advertising to save money is like the man who stops the clock to save time.",  "Thomas Jefferson"],
    ["The consumer isn’t a moron; she is your wife. You insult her intelligence if you assume that a mere slogan and a few vapid adjectives will persuade her to buy anything.", "David Ogilvy"],
    ["If it doesn’t sell, it isn’t creative.", "David Ogilvy"]



]


document.getElementById('buttonNext').addEventListener('click', newQuote);

function newQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quote-text').innerHTML = quotes[randomNumber][0];
    document.getElementById('author').innerHTML = quotes[randomNumber][1];
}