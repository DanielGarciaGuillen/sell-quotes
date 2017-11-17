var quotes =[
    ["Sell a good night’s sleep – not the mattres.", "Instructor at Academy of Art University"],
    ["The man who stops advertising to save money is like the man who stops the clock to save time.","Thomas Jefferson"],
    ["The consumer isn’t a moron; she is your wife. You insult her intelligence if you assume that a mere slogan and a few vapid adjectives will persuade her to buy anything.", "David Ogilvy"],
    ["If it doesn’t sell, it isn’t creative.", "David Ogilvy"],
    ["What you say in advertising is more important than how you say it.","David Ogilvy"],
    ["Our business is infested with idiots who try to impress by using pretentious jargon.","David Ogilvy"],
    ["The best ideas come as jokes. Make your thinking as funny as possible.","David Ogilvy"],
    ["Never write an advertisement which you wouldn't want your family to read. You wouldn't tell lies to your own wife. Don't tell them to mine.","David Ogilvy"],
    ["The more informative your advertising, the more persuasive it will be.","David Ogilvy"],
    ["In the modern world of business, it is useless to be a creative, original thinker unless you can also sell what you create.","David Ogilvy"],
    ["You Must Always Find A Market First... And Then Concentrate On A Product!","Gary Halbert"],
    ["Get yourself a collection of good ads and DM pieces and read them aloud and copy them in your own handwriting.","Gary Halbert"],
    ["Products are a dime a dozen. They are important, but much less crucial to success than finding a hot market.","Gary Halbert"],
    ["AIDA stand for? It stands for ATTENTION, INTEREST, DESIRE, ACTION. So, to make it clearer your letter should: 1. First, get his attention 2. Second, get him interested 3. Third, make him desire what you are selling 4. Compel him to take whatever action is needed to get whatever it is you are selling.","Gary Halbert"],
    ["Sell People What They Want To Buy!","Gary Halbert"],
    ["Here is something to remember: DEFENSIVE BEHAVIOR INVITES AGGRESSIVE ACTION","Gary Halbert"],
    ["You will fail not because of what you don't know, but because of what you won't do that you already do know.","Gary Halbert"],
    ["The headline is the ‘ticket on the meat.’ Use it to flag down readers who are prospects for the kind of product you are advertising.", "David Ogilvy"],
    ["Get yourself a collection of good ads and DM pieces and read them aloud and copy them in your own handwriting.","Gary Halbert"],
]


document.getElementById('buttonNext').addEventListener('click', newQuote);
document.getElementById('twitter-share-button').addEventListener('click', shareTweet);
var quot = document.getElementById('quote-text');

function newQuote(){
    var randomNumber = Math.floor(Math.random()* (quotes.length));
    document.getElementById('quote-text').innerHTML = "“" + quotes[randomNumber][0] + "”";
    document.getElementById('author').innerHTML = quotes[randomNumber][1];
}

//href="https://twitter.com/intent/tweet?text=Theconsumer"





//document.getElementById("twitter-share-button").onclick = function() {
//   ("twitter-share-button").href="https://twitter.com/intent/tweet?text=" + quot; 
 //   return false;
//  };
function shareTweet(){
  document.getElementById("twitter-share-button").href = "https://twitter.com/intent/tweet?text=" + quot.innerHTML;
}
console.log(quot);