# HNG12 Public API

## Overview
This is a simple public API built using Node.js and Express for the HNG12 program. It returns the following JSON response:

- Your registered email address (used to register on the HNG12 Slack workspace).
- The current datetime in ISO 8601 format (UTC).
- The GitHub URL of the project's codebase.

## API Documentation

### Base URL
```
<your-deployment-url>
```

### Endpoints
#### `GET /`
**Response Format:**
```json
{
  "email": "omorakabenjamin3@gmail.com",
  "current_datetime": "2025-01-31T23:31:24.206Z",
  "github_url": "https://github.com/tegzy-cmd/HNG_TASK"
}
```

## Installation & Setup

### Prerequisites
- Node.js installed on your machine.
- Git for cloning the repository.

### Steps to Run Locally
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Create a `.env` file** in the root directory and add the following:
   ```env
   PORT=3000
   ```
4. **Start the server:**
   ```sh
   npm start
   ```
5. The API will be available at `http://localhost:3000/`.

## Deployment
To deploy your API, use platforms like:
- [Render](https://render.com)
- [Railway](https://railway.app)
- [Vercel](https://vercel.com)
- [Heroku](https://www.heroku.com)

## Technologies Used
- Node.js
- Express.js
- CORS

## License
This project is open-source and available under the MIT License.

