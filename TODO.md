# TODO

## Server

- [x] Set up GET endpoint to send joke info to client
- [ ] Set up POST endpoint to receive new joke info

## Client

- [x] Set up way to GET joke history
  - [x] Append all on DOM
- [ ] Set up way to POST joke history from client

  - [ ] Also on DOM

  ### GET /jokes

Returns a new joke, every time you hit it.

Like so:

```json
{
  "jokeQuestion": "A question",
  "punchLine": "SOMETHING HILARIOUS",
  "whoseJoke": "someone funny"
}
```

### POST /joke

Create a new joke, like:

```json
{
  "joke_to_add": {
    "jokeQuestion": "A question",
    "punchLine": "SOMETHING HILARIOUS",
    "whoseJoke": "someone funny"
  }
}
```
