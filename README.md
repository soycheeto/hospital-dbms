# Hospital Appointment Booking System

This repository contains code for a Hospital Appointment Booking System built using Node.js with Express and SQLite3.

## Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Dependencies:
    - body-parser
    - ejs
    - express
    - sqlite3

## Configuration

- This system uses SQLite3 as its database. The database file (`hospital.db`) is included in the project directory.
- Ensure that Node.js is installed on your machine before running the application.
- Within packages.json, add this line:
    `"scripts": {
      "start": "node index.js"
    },`
## Usage

1. Run the application by executing `node app.js` or `npm start` command in the terminal.
2. Access the application through your web browser at `http://localhost:8080`.

## Features

- **Registration**: Users can register by providing their name, email, and specialty.
- **Doctor Search**: Users can search for doctors based on specialty and hospital.
- **Appointment Booking**: Users can book appointments with available doctors.
- **User Management**: User data is stored in the database for future appointments.

## Routes

- `/`: Homepage where users can register and search for doctors.
- `/register`: POST route for user registration.
- `/book`: POST route for booking appointments.

## Dependencies

- Express: Web application framework for Node.js.
- Body-parser: Middleware for handling HTTP POST request data.
- SQLite3: Asynchronous, non-blocking SQLite3 bindings for Node.js.

## Database Schema

The database schema consists of three tables:

1. **doctors**: Stores information about doctors, including name, specialty, and hospital ID.
2. **hospitals**: Stores information about hospitals, including name.
3. **users**: Stores information about users, including name and email.
4. **appointments**: Stores information about appointments, including user ID, doctor ID, and date/time.

## Contributors

- Trisha Hansen D'Souza, K N Thushaar Rangan, Amogh P

## License

This project is licensed under the [MIT License](LICENSE).