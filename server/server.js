const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
// use bodyParser to digest json data
app.use(bodyParser.json());
// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: 'Danny',
    jokeQuestion: 'Why do scuba divers fall backwards out of boats?',
    punchLine: 'If they fell forwards they’d still be in the boat!',
  },
  {
    whoseJoke: 'Luke',
    jokeQuestion: 'Two fish are in a tank. What did one fish say to the other?',
    punchLine: 'Do you know how to drive this thing?',
  },
  {
    whoseJoke: 'Millie',
    jokeQuestion: 'What do you call a pile of cats?',
    punchLine: 'A meowntain!',
  },
  {
    whoseJoke: 'dEv',
    jokeQuestion: 'Why should you not play cards in the forest?',
    punchLine: 'Too many Cheetahs!',
  },
  {
    whoseJoke: 'Scott',
    jokeQuestion: 'I went to the zoo the other day, it had one dog...',
    punchLine: 'It was a shih tzu.',
  },
];

// serve back static files
app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server

app.get('/jokes', (req, res) => {
  console.log('GET Request for jokes');
  res.send(jokes);
});

app.post('/joke', (req, res) => {
  console.log('POST Request for joke');
  if (req.body.joke_to_add === undefined) {
    console.log('Oops, missing joke_to_add');
    // 400 === You're missing something
    res.sendStatus(400);
    return;
  } else {
    // set a variable for the object we are receiving
    let newJoke = req.body.joke_to_add;
    console.log('This is our newJoke:', newJoke);
    jokes.push(newJoke);
    res.sendStatus(201);
  }
});
