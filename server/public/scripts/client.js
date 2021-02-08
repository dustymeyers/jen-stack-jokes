console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  fetchJokes();
  $('#addJokeButton').on('click', addNewJoke);
}

function addNewJoke() {
  console.log('in addNewJoke');
  let whoseJoke = $('#whoseJokeIn').val();
  let jokeQuestion = $('#questionIn').val();
  let punchLine = $('#punchlineIn').val();
  $.ajax({
    data: {
      joke_to_add: {
        whoseJoke,
        jokeQuestion,
        punchLine,
      },
    },
    url: '/joke',
    method: 'POST',
  }).then(function () {
    console.log('Joke submitted');
  });
}

function fetchJokes() {
  $.ajax({
    url: '/jokes',
    method: 'GET',
  }).then(function (jokeHistory) {
    console.log('We got some jokes:', jokeHistory);
    for (let joke of jokeHistory) {
      $('#outputDiv').append(`
          <li>
            <blockquote>
              <p class="jokeQuestionOut">"${joke.jokeQuestion}"</p>
              <p class="punchLineOut">"${joke.punchLine}"<p>
              <p class="whoseJokeOut">-- By ${joke.whoseJoke}<p>
            </blockquote>
          </li>
      `);
    }
  });
}
