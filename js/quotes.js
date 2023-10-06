const quotes = [
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    quote: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    quote: "Don't count the days, make the days count.",
    author: 'Muhammad Ali',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    author: 'Abraham Lincoln',
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'Life is really simple, but we insist on making it complicated.',
    author: 'Confucius',
  },
  {
    quote: 'The best preparation for tomorrow is doing your best today.',
    author: 'H. Jackson Brown Jr.',
  },
  {
    quote:
      'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine',
  },
  {
    quote:
      'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    author: 'Brian Tracy',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
