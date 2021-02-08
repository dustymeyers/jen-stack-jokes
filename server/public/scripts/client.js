console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  fetchJokes();
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
              <p class="whosJokeOut">-- By ${joke.whoseJoke}<p>
            </blockquote>
          </li>
      `);
    }
  });
}
