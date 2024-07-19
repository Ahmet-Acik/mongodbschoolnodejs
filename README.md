# My Node.js Project

## Description

This project is a Node.js application that connects to a MongoDB database to manage student records. It provides various endpoints to interact with the student data, including retrieving, adding, updating, and deleting student records.

## Installation

1. **Clone the repository**:
    ```bash
    git clone [(https://github.com/Ahmet-Acik/mongodbschoolnodejs.git)]
    ```

2. **Navigate to the project directory**:
    ```bash
    cd your-repository
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Create a `.env` file** (if your project uses environment variables):
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/school
    PORT=3000
    ```

5. **Initialize the database**:
    Create a `init-db.js` script to set up your database and collections (optional but recommended). See [Database Initialization](#database-initialization) for more details.

6. **Run the project**:
    ```bash
    npm start
    ```

## Usage

The application provides several RESTful API endpoints to manage student records:

### Get All Students

- **Endpoint**: `/school`
- **Method**: `GET`
- **Description**: Retrieves all students in alphabetical order.
- **Response**: JSON array of student objects.

### Get Student by ID

- **Endpoint**: `/school/:id`
- **Method**: `GET`
- **Description**: Retrieves a student by their ID.
- **Parameters**:
  - `id`: The MongoDB ObjectId of the student.
- **Response**: JSON object of the student.

### Add a New Student

- **Endpoint**: `/school`
- **Method**: `POST`
- **Description**: Adds a new student to the database.
- **Request Body**: JSON object with student details.
- **Response**: JSON object with a success message and the ID of the newly added student.

### Delete a Student by ID

- **Endpoint**: `/school/:id`
- **Method**: `DELETE`
- **Description**: Deletes a student by their ID.
- **Parameters**:
  - `id`: The MongoDB ObjectId of the student.
- **Response**: JSON object with a success message or an error message if the student is not found.

### Update a Student (Partial Update)

- **Endpoint**: `/school/:id`
- **Method**: `PATCH`
- **Description**: Updates specific fields of a student.
- **Parameters**:
  - `id`: The MongoDB ObjectId of the student.
- **Request Body**: JSON object with fields to update.
- **Response**: JSON object with a success message, or a message indicating no changes were made.

### Update a Student (Full Update)

- **Endpoint**: `/school/:id`
- **Method**: `PUT`
- **Description**: Replaces the entire student document.
- **Parameters**:
  - `id`: The MongoDB ObjectId of the student.
- **Request Body**: JSON object with the complete student details.
- **Response**: JSON object with a success message or an error message if the student is not found.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License

Specify the license under which the project is distributed. For example:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Database Initialization

If you want to initialize the database with sample data, you can use the `init-db.js` script provided in the repository. Here’s how:

1. **Ensure MongoDB is Running**

   Make sure MongoDB is installed and running on your local machine. You can start it using:

   ```bash
   mongod
   ```
   Run the Initialization Script

2. **First, ensure you have installed all dependencies:**

 ```bash
npm install
 ```
3. **Then, run the database initialization script:**

```bash
node init-db.js
```
