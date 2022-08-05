# COREYOBACKENDAPP

This sample project demonstrates how to set up a user authentication  using JSON Web Tokens. There are several endpoints exposed in the sample, including user login and signup, along with an example of a protected resource.

## POSTMAN COLLECTION
* https://www.getpostman.com/collections/c14b765dc6a608508d2f

## VALIDATION

* I have added proper validation for all the parameters.


## Installation and Running the App

Clone the repo, then: 

```bash
npm install
npm start
```

The app will be served at `localhost:5000`.

## Local Setup

To setup the API locally, you will need to run MongoDB . Create a `.env` file and populate it with the following values:

```bash
SECRET_KEY=<secret_key>
PORT=5000
MONGO_URI=<MongoDB_URL>

```
# AUTHENTICATION

## Available Routes

#### **POST** `/register`
* Used for signing up a user. Accepts `name`, `email`, `phone`  and `password` to create a user. Returns a JWT.

#### **POST** `/login`
* Used for logging a user in. Accepts `user` (where you can supply a users `email`),and pass `Token` in headers and `password` to authenticate a user. 

#### **POST** `/logout`
* Used for logout a user . 

#### **GET** `/users`
* Returns all users in the database. 

#### **POST** `/users`
* Add user in the database.

# NEWSAPP
* This api (http://localhost:5000/news?search=bitcoin) can only be accessed by authenticated 
* users. The Api fetches news or top headlines from newsapi.org (https://newsapi.org/). 
* I implemented search using keyword functionality.

## Available Routes

#### **POST** `/news`
* Returns all `news` in the database. Requires a valid JWT.

#### **GET** `/news`
* Returns all news in the database. 

## Response
* The API returns the response in the following format:
{
"count": 10,
"data": [
{
"headline": "Human organs can be stored for three
times as long in a major breakthrough for transplants",
"link":
"https://www.telegraph.co.uk/science/2019/09/09/human-organ
s-can-stored-three-times-long-major-breakthrough/"
},
{
"headline": "IRS goes after cryptocurrency owners for
unpaid taxes",

"link":
"https://www.cbsnews.com/news/own-bitcoin-irs-pursues-crypt
ocurrency-owners-for-unpaid-taxes/"
}
.
.
.
.

]
}

# WEATHERAPP

* This api (http://localhost:5000/weather) doesn’t need authentication and is needed to fetch * weather forecasts over the next five days. I use Openweathermap API (https://openweathermap.* org/) to fetch weather forecast data. I  choose to hard-code the location.

## Available Routes

#### **POST** `/weather`
* Returns the next five days weather forcast in the database.

## Response

{
"count": 5,
"unit": "metric",
"location": "Bangalore",
"data": [
{
"date": "Sun March 06 2020",
"main": "Rain",
"temp": 293.55
},
{
"date": "Sun March 07 2020",
"main": "Sunny",
"temp": 294.64
},
.
.

.
.
.
]
}



