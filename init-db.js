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
                "name": "SpongeBob SquarePants",
                "age": 8,
                "gpa": 2.5,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Art", "Music", "Science"],
                "address": {
                    "street": "124 Bikini Bottom Blvd",
                    "city": "Bikini Bottom",
                    "postcode": 12345
                }
            },
            {
                "name": "Patrick Star",
                "age": 7,
                "gpa": 1.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Physical Education", "Science", "Art"],
                "address": {
                    "street": "125 Rock St",
                    "city": "Bikini Bottom",
                    "postcode": 12346
                }
            },
            {
                "name": "Squidward Tentacles",
                "age": 9,
                "gpa": 3.0,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Music", "Art", "History"],
                "address": {
                    "street": "202 Tentacle Lane",
                    "city": "Bikini Bottom",
                    "postcode": 12347
                }
            },
            {
                "name": "Sandy Cheeks",
                "age": 8,
                "gpa": 4.1,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Marine Biology", "Engineering", "Math"],
                "address": {
                    "street": "303 Sandy Lane",
                    "city": "Bikini Bottom",
                    "postcode": 12348
                }
            },
            {
                "name": "Mr. Krabs",
                "age": 11,
                "gpa": 2.9,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": "2024-07-19T08:44:49.711Z",
                "courses": ["Economics", "Finance", "Business"],
                "address": {
                    "street": "456 Ocean Ave",
                    "city": "Bikini Bottom",
                    "postcode": 12349
                }
            },
            {
                "name": "Mrs. Puff",
                "age": 10,
                "gpa": 3.2,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Driving", "Safety", "Mechanics"],
                "address": {
                    "street": "303 Boat St",
                    "city": "Bikini Bottom",
                    "postcode": 12350
                }
            },
            {
                "name": "Plankton",
                "age": 9,
                "gpa": 3.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Biology", "Chemistry", "Physics"],
                "address": {
                    "street": "404 Chum Ave",
                    "city": "Bikini Bottom",
                    "postcode": 12351
                }
            },
            {
                "name": "Gary the Snail",
                "age": 5,
                "gpa": 2.0,
                "fullTime": false,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Napping", "Chasing", "Eating"],
                "address": {
                    "street": "125 Pet Lane",
                    "city": "Bikini Bottom",
                    "postcode": 12352
                }
            },
            {
                "name": "King Neptune",
                "age": 14,
                "gpa": 4.5,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": "2024-07-19T08:44:49.711Z",
                "courses": ["Leadership", "Oceanography", "Mythology"],
                "address": {
                    "street": "999 Neptune Blvd",
                    "city": "Bikini Bottom",
                    "postcode": 12353
                }
            },
            {
                "name": "Mermaid Man",
                "age": 12,
                "gpa": 3.7,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Superhero Studies", "History", "Physical Education"],
                "address": {
                    "street": "404 Hero Ave",
                    "city": "Bikini Bottom",
                    "postcode": 12354
                }
            },
            {
                "name": "Barnacle Boy",
                "age": 10,
                "gpa": 2.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Superhero Studies", "History", "Physical Education"],
                "address": {
                    "street": "505 Sidekick St",
                    "city": "Bikini Bottom",
                    "postcode": 12355
                }
            },
            {
                "name": "Bubble Bass",
                "age": 11,
                "gpa": 2.4,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Culinary Arts", "Biology", "Physical Education"],
                "address": {
                    "street": "606 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12356
                }
            },
            {
                "name": "Dirty Bubble",
                "age": 10,
                "gpa": 2.6,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Chemistry", "Physics", "Art"],
                "address": {
                    "street": "789 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12357
                }
            },
            {
                "name": "DoodleBob",
                "age": 6,
                "gpa": 2.1,
                "fullTime": false,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Art", "Math", "Science"],
                "address": {
                    "street": "123 Doodle Rd",
                    "city": "Bikini Bottom",
                    "postcode": 12358
                }
            },
            {
                "name": "Flying Dutchman",
                "age": 12,
                "gpa": 3.2,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Geography", "Navigation"],
                "address": {
                    "street": "101 Ghost Ship",
                    "city": "Bikini Bottom",
                    "postcode": 12359
                }
            },
            {
                "name": "Larry the Lobster",
                "age": 8,
                "gpa": 3.3,
                "fullTime": true,
                "registerDate": "2024-07-19T08:43:13.702Z",
                "graduationDate": null,
                "courses": ["Biology", "Physical Education", "Fitness"],
                "address": {
                    "street": "16 ST",
                    "city": "Bikini Bottom",
                    "postcode": 12360
                }
            },
            {
                "name": "Man Ray",
                "age": 10,
                "gpa": 3.6,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Physics", "Drama"],
                "address": {
                    "street": "456 Ray Blvd",
                    "city": "Bikini Bottom",
                    "postcode": 12361
                }
            },
            {
                "name": "Pearl Krabs",
                "age": 7,
                "gpa": 4.0,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Marine Biology", "Mathematics", "Dance"],
                "address": {
                    "street": "789 Coral Dr",
                    "city": "Bikini Bottom",
                    "postcode": 12362
                }
            },
            {
                "name": "Sandy Cheeks Jr.",
                "age": 6,
                "gpa": 4.3,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Marine Biology", "Math", "Engineering"],
                "address": {
                    "street": "303 Sandy Lane",
                    "city": "Bikini Bottom",
                    "postcode": 12363
                }
            },
            {
                "name": "Squidward Jr.",
                "age": 7,
                "gpa": 2.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Art", "Music", "History"],
                "address": {
                    "street": "202 Tentacle Ln",
                    "city": "Bikini Bottom",
                    "postcode": 12364
                }
            },
            {
                "name": "Barnacle Boy Jr.",
                "age": 6,
                "gpa": 2.9,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Superhero Studies", "History", "Physical Education"],
                "address": {
                    "street": "505 Sidekick St",
                    "city": "Bikini Bottom",
                    "postcode": 12365
                }
            },
            {
                "name": "Bubble Bass Jr.",
                "age": 8,
                "gpa": 2.6,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Culinary Arts", "Biology", "Physical Education"],
                "address": {
                    "street": "606 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12366
                }
            },
            {
                "name": "Dirty Bubble Jr.",
                "age": 8,
                "gpa": 2.7,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Chemistry", "Physics", "Art"],
                "address": {
                    "street": "789 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12367
                }
            },
            {
                "name": "DoodleBob Jr.",
                "age": 5,
                "gpa": 2.2,
                "fullTime": false,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Art", "Math", "Science"],
                "address": {
                    "street": "123 Doodle Rd",
                    "city": "Bikini Bottom",
                    "postcode": 12368
                }
            },
            {
                "name": "Flying Dutchman Jr.",
                "age": 11,
                "gpa": 3.3,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Geography", "Navigation"],
                "address": {
                    "street": "101 Ghost Ship",
                    "city": "Bikini Bottom",
                    "postcode": 12369
                }
            },
            {
                "name": "Larry the Lobster Jr.",
                "age": 7,
                "gpa": 3.4,
                "fullTime": true,
                "registerDate": "2024-07-19T08:43:13.702Z",
                "graduationDate": null,
                "courses": ["Biology", "Physical Education", "Fitness"],
                "address": {
                    "street": "16 ST",
                    "city": "Bikini Bottom",
                    "postcode": 12370
                }
            },
            {
                "name": "Man Ray Jr.",
                "age": 10,
                "gpa": 3.7,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Physics", "Drama"],
                "address": {
                    "street": "456 Ray Blvd",
                    "city": "Bikini Bottom",
                    "postcode": 12371
                }
            },
            {
                "name": "Pearl Krabs Jr.",
                "age": 8,
                "gpa": 4.2,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Marine Biology", "Mathematics", "Dance"],
                "address": {
                    "street": "789 Coral Dr",
                    "city": "Bikini Bottom",
                    "postcode": 12372
                }
            },
            {
                "name": "Sandy Cheeks III",
                "age": 8,
                "gpa": 4.4,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Marine Biology", "Math", "Engineering"],
                "address": {
                    "street": "303 Sandy Lane",
                    "city": "Bikini Bottom",
                    "postcode": 12373
                }
            },
            {
                "name": "Squidward Jr. II",
                "age": 7,
                "gpa": 2.9,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Art", "Music", "History"],
                "address": {
                    "street": "202 Tentacle Ln",
                    "city": "Bikini Bottom",
                    "postcode": 12374
                }
            },
            {
                "name": "Barnacle Boy II",
                "age": 6,
                "gpa": 3.0,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Superhero Studies", "History", "Physical Education"],
                "address": {
                    "street": "505 Sidekick St",
                    "city": "Bikini Bottom",
                    "postcode": 12375
                }
            },
            {
                "name": "Bubble Bass II",
                "age": 8,
                "gpa": 2.7,
                "fullTime": true,
                "registerDate": "2024-07-19T08:44:49.711Z",
                "graduationDate": null,
                "courses": ["Culinary Arts", "Biology", "Physical Education"],
                "address": {
                    "street": "606 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12376
                }
            },
            {
                "name": "Dirty Bubble II",
                "age": 8,
                "gpa": 2.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Chemistry", "Physics", "Art"],
                "address": {
                    "street": "789 Bubble St",
                    "city": "Bikini Bottom",
                    "postcode": 12377
                }
            },
            {
                "name": "DoodleBob II",
                "age": 5,
                "gpa": 2.3,
                "fullTime": false,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["Art", "Math", "Science"],
                "address": {
                    "street": "123 Doodle Rd",
                    "city": "Bikini Bottom",
                    "postcode": 12378
                }
            },
            {
                "name": "Flying Dutchman II",
                "age": 11,
                "gpa": 3.5,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Geography", "Navigation"],
                "address": {
                    "street": "101 Ghost Ship",
                    "city": "Bikini Bottom",
                    "postcode": 12379
                }
            },
            {
                "name": "Larry the Lobster II",
                "age": 7,
                "gpa": 3.5,
                "fullTime": true,
                "registerDate": "2024-07-19T08:43:13.702Z",
                "graduationDate": null,
                "courses": ["Biology", "Physical Education", "Fitness"],
                "address": {
                    "street": "16 ST",
                    "city": "Bikini Bottom",
                    "postcode": 12380
                }
            },
            {
                "name": "Man Ray II",
                "age": 10,
                "gpa": 3.8,
                "fullTime": true,
                "registerDate": "2024-07-19T08:45:05.546Z",
                "graduationDate": null,
                "courses": ["History", "Physics", "Drama"],
                "address": {
                    "street": "456 Ray Blvd",
                    "city": "Bikini Bottom",
                    "postcode": 12381
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
