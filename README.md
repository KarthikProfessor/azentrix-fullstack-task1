# URL Shortener API

A RESTful URL Shortener API built using Node.js, Express.js, and MongoDB. This application allows users to shorten long URLs, redirect using short codes, and track click analytics.

## Features

* Create short URLs from long URLs
* Redirect to original URLs using short codes
* Track click counts for each shortened URL
* Return proper 404 responses for invalid short codes
* Store URL data in MongoDB
* RESTful API design

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* ShortID
* Dotenv

## Project Structure

```text
azentrix-fullstack-task1/
│
├── models/
│   └── Url.js
│
├── routes/
│   └── urlRoutes.js
│
├── server.js
├── .env
├── package.json
├── README.md
└── .gitignore
```

## Installation

### Clone Repository

```bash
git clone https://github.com/KarthikProfessor/azentrix-fullstack-task1.git
```

### Navigate to Project

```bash
cd azentrix-fullstack-task1
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/urlshortener
```

### Run Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

## API Endpoints

### Create Short URL

**POST** `/shorten`

Request Body:

```json
{
  "url": "https://www.google.com"
}
```

Response:

```json
{
  "shortCode": "abc123",
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Redirect URL

**GET** `/:code`

Example:

```http
GET /abc123
```

Redirects to the original URL.

### URL Analytics

**GET** `/stats/:code`

Response:

```json
{
  "originalUrl": "https://www.google.com",
  "clicks": 5
}
```

### Invalid Short Code

Response:

```json
{
  "message": "URL not found"
}
```

## Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

## Future Improvements

* URL validation
* Custom short codes
* Expiration dates
* User authentication
* Swagger API documentation
* Docker support

## Author

Karthik Raju

Backend Developer Internship Task Submission – Azentrix Digital Services
