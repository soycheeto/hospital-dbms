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


### SQL Operations

#### Table Creation
The database schema is created with the following tables:
- **Appointments**: Records appointments made by users with doctors.
- **Users**: Stores information about users registering for appointments.
- **Doctors**: Contains details about doctors, including their specialties and associated hospitals.
- **Hospitals**: Stores information about hospitals, including their names and locations.

#### Data Analysis
1. **Total Appointments Count**: Count the total number of appointments in the database.
2. **User Appointments Count**: Count the number of appointments for each user, listing their ID, name, and appointment count.
3. **Doctor Appointments Count**: Count the number of appointments for each doctor, listing their ID, name, and appointment count.
4. **Hospital Appointments Count**: Count the number of appointments for each hospital, listing their ID, name, and appointment count.
5. **Busiest Time for Appointments**: Identify the busiest day/time for appointments.
6. **Most Popular Specialty**: Determine the most popular medical specialty among doctors.

#### Data Retrieval
- **Appointments with User Details**: Retrieve appointments along with user details, including appointment ID, date and time, user name, and email.
- **Appointments with Doctor Details**: Retrieve appointments along with doctor details, including appointment ID, date and time, doctor name, specialty, and hospital name.
- **Doctors with Hospital Details**: Retrieve doctors along with hospital details, including doctor name, specialty, hospital name, and location.


## Contributors

- Trisha Hansen D'Souza, K N Thushaar Rangan, Amogh P

## License

This project is licensed under the [MIT License](LICENSE).