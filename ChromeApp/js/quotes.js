const quotes = [
    { quote: "Genius without education is like silver in the mine."},
    { quote: "Opportunities are never lost. The other fellow takes those you miss."},
    { quote: "Why be a man when you can be a success?"},
    { quote: "Well begun is half done."},
    { quote: "I'd rather be hated for who I am than be loved for who I'm not."},
    { quote: "They must often change who would be constant in happiness or wisdom."},
    { quote: "Life is just a bowl of pits."},
    { quote: "The world is full of suffering but it is also full of people overcoming it." },
    { quote: "othing is as far away as one minute ago."},
    { quote: "The man who is swimming against the stream knows the strength of it."}
];

const quote = document.querySelector("#quote span:first-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//나는 for문으로 찾아서 랜덤ㅇ르 만들어야하나 했는데..
//수학함수조합으로 이렇게 깔끔하게 만들어져서 너무 신기했다.

quote.innerText = todaysQuote.quote;
//뿌야!