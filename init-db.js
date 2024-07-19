const { MongoClient } = require('mongodb');
const fs = require('fs');

// Load configuration from environment variables or .env file
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'school';

// Function to initialize the database
async function initializeDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);

        // Create collections and insert initial data
        const students = db.collection('students');
        await students.insertMany([
            {
                "_id": "669a278181f37156a45d09fe",
                "name": "Barnacle Boy",
                "age": 70,
                "gpa": 1.5,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "History",
                    "Physical Education",
                    "Superhero Studies"
                ],
                "address": {
                    "street": "505 Sidekick St",
                    "city": "BB",
                    "postcode": 12353
                }
            },
            {
                "_id": "669a278181f37156a45d09ff",
                "name": "Bubble Bass",
                "age": 13,
                "gpa": 2.2,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "Culinary Arts",
                    "Biology",
                    "Physical Education"
                ],
                "address": {
                    "street": "606 Bubble St",
                    "city": "BB",
                    "postcode": 12354
                }
            },
            {
                "_id": "669a279181f37156a45d0a04",
                "name": "Dirty Bubble",
                "age": 50,
                "gpa": 1.6,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": [
                    "Chemistry",
                    "Physics",
                    "Physical Education"
                ],
                "address": {
                    "street": "789 Bubble St",
                    "city": "BB",
                    "postcode": 12358
                }
            },
            {
                "_id": "669a279181f37156a45d0a02",
                "name": "DoodleBob",
                "age": 6,
                "gpa": 2,
                "fullTime": false,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": [
                    "Art",
                    "Math",
                    "Science"
                ],
                "address": {
                    "street": "123 Doodle Rd",
                    "city": "BB",
                    "postcode": 12356
                }
            },
            {
                "_id": "669a279181f37156a45d0a05",
                "name": "Flying Dutchman",
                "age": 100,
                "gpa": 2.8,
                "fullTime": false,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": [
                    "History",
                    "Geography",
                    "Navigation"
                ],
                "address": {
                    "street": "101 Ghost Ship",
                    "city": "BB",
                    "postcode": 12359
                }
            },
            {
                "_id": "669a270a81f37156a45d09f1",
                "name": "Gary",
                "age": 8,
                "gpa": 1.9
            },
            {
                "_id": "669a278181f37156a45d09fa",
                "name": "Karen",
                "age": 7,
                "gpa": 3.5,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "Computer Science",
                    "IT",
                    "Mathematics"
                ],
                "address": {
                    "street": "101 Tech St",
                    "city": "BB",
                    "postcode": 12349
                }
            },
            {
                "_id": "669a279181f37156a45d0a06",
                "name": "King Neptune",
                "age": 60,
                "gpa": 4.2,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": "2024-07-19T08:45:05.546Z",
                "courses": [
                    "Leadership",
                    "Political Science",
                    "Oceanography"
                ],
                "address": {
                    "street": "202 Neptune Ln",
                    "city": "BB",
                    "postcode": 12360
                }
            },
            {
                "_id": "669a272181f37156a45d09f4",
                "name": "Larry",
                "age": 8,
                "gpa": 3.2,
                "fullTime": false,
                "registerDate": "2024-07-19T08:43:13.702Z",
                "graduationDate": null,
                "courses": [
                    "Biology",
                    "IT",
                    "Finance"
                ],
                "address": {
                    "street": "16 ST",
                    "city": "BB",
                    "postcode": 12345
                }
            },
            {
                "_id": "669a279181f37156a45d0a03",
                "name": "Man Ray",
                "age": 45,
                "gpa": 3.4,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": [
                    "History",
                    "Physics",
                    "Drama"
                ],
                "address": {
                    "street": "456 Ray Blvd",
                    "city": "BB",
                    "postcode": 12357
                }
            },
            {
                "_id": "669a278181f37156a45d09fd",
                "name": "Mermaid Man",
                "age": 80,
                "gpa": 1,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "History",
                    "Physical Education",
                    "Superhero Studies"
                ],
                "address": {
                    "street": "404 Hero Ave",
                    "city": "BB",
                    "postcode": 12352
                }
            },
            {
                "_id": "669a278181f37156a45d09f8",
                "name": "Mr. Krabs",
                "age": 10,
                "gpa": 2.9,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": "2024-07-19T08:44:49.711Z",
                "courses": [
                    "Economics",
                    "Finance",
                    "Business"
                ],
                "address": {
                    "street": "456 Ocean Ave",
                    "city": "BB",
                    "postcode": 12347
                }
            },
            {
                "_id": "669a278181f37156a45d09fc",
                "name": "Mrs. Puff",
                "age": 12,
                "gpa": 3,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "Driving",
                    "Safety",
                    "Mechanics"
                ],
                "address": {
                    "street": "303 Boat St",
                    "city": "BB",
                    "postcode": 12351
                }
            },
            {
                "_id": "669a278181f37156a45d0a00",
                "name": "Old Man Jenkins",
                "age": 85,
                "gpa": 1.8,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "History",
                    "Life Skills",
                    "Storytelling"
                ],
                "address": {
                    "street": "707 Memory Ln",
                    "city": "BB",
                    "postcode": 12355
                }
            },
            {
                "_id": "669a270a81f37156a45d09ef",
                "name": "Patrick",
                "age": 5,
                "gpa": 1.5
            },
            {
                "_id": "669a278181f37156a45d09f9",
                "name": "Pearl",
                "age": 6,
                "gpa": 4,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "Marine Biology",
                    "Mathematics",
                    "Dance"
                ],
                "address": {
                    "street": "789 Coral Dr",
                    "city": "BB",
                    "postcode": 12348
                }
            },
            {
                "_id": "669a278181f37156a45d09f7",
                "name": "Plankton",
                "age": 9,
                "gpa": 3.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": [
                    "Chemistry",
                    "Physics",
                    "Biology"
                ],
                "address": {
                    "street": "123 Main St",
                    "city": "BB",
                    "postcode": 12346
                }
            },
            {
                "_id": "669a270a81f37156a45d09f0",
                "name": "Sandy",
                "age": 7,
                "gpa": 4.5
            },
            {
                "_id": "669a26ff81f37156a45d09ed",
                "name": "SpongeBob",
                "age": 5,
                "gpa": 2.5
            },
            {
                "_id": "669a278181f37156a45d09fb",
                "name": "Squidward",
                "age": 11,
                "gpa": 2.7,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": "2024-07-19T08:44:49.711Z",
                "courses": [
                    "Art",
                    "Music",
                    "History"
                ],
                "address": {
                    "street": "202 Tentacle Ln",
                    "city": "BB",
                    "postcode": 12350
                }
            },
            {
                "_id": "669a9b1c38bad3c93ec485ad",
                "name": "Squidward Jr the 2nd",
                "age": 4,
                "gpa": 1.5,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": "2024-07-19T08:44:49.711Z",
                "courses": [
                    "Art",
                    "Music",
                    "History"
                ],
                "address": {
                    "street": "202 Tentacle Ln",
                    "city": "BB",
                    "postcode": 12350
                }
            }
        ]);

        console.log('Database initialized');
    } catch (error) {
        console.error('Error initializing database:', error);
    } finally {
        await client.close();
    }
}

initializeDatabase();
