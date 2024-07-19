const express = require('express');
const {connectToDB, getDb} = require('./db');
const {ObjectId} = require('mongodb');

const app = express();
app.use(express.json());

let db;
connectToDB((err) => {
    if (!err) {
        db = getDb();
        app.listen(3000, () => {
            console.log('Connected to MongoDB');
        });
    } else {
        console.error('Failed to connect to the database');
        process.exit(1);
    }
});

// get all students in alphabetical order
app.get('/school', async (req, res) => {
    try {
        const students = await db.collection('students').find().sort({name: 1}).toArray();
        res.status(200).json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to retrieve students"});
    }
});

// get student by ID
app.get('/school/:id', async (req, res) => {
    const {id} = req.params;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID format"});
    }

    try {
        const student = await db.collection('students').findOne({_id: new ObjectId(id)});
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({error: "Student not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "An error occurred while retrieving the student"});
    }
});

// POST a new student
app.post('/school', async (req, res) => {
    const student = req.body;

    try {
        const result = await db.collection('students').insertOne(student);
        res.status(201).json({message: "Student added successfully", studentId: result.insertedId});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "An error occurred while adding the student"});
    }
});

// DELETE a student by ID
app.delete('/school/:id', async (req, res) => {
    const {id} = req.params;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({error: "Invalid ID format"});
    }

    try {
        const result = await db.collection('students').deleteOne({_id: new ObjectId(id)});
        if (result.deletedCount === 1) {
            res.status(200).json({message: "Student deleted successfully"});
        } else {
            res.status(404).json({error: "Student not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "An error occurred while deleting the student"});
    }
});

// PATCH update a student by ID
app.patch('/school/:id', async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
        // Update only the fields provided in the request body
        const result = await db.collection('students').updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedFields }
        );

        if (result.matchedCount === 1 && result.modifiedCount === 1) {
            res.status(200).json({ message: "Student updated successfully" });
        } else if (result.matchedCount === 1 && result.modifiedCount === 0) {
            // No fields were actually updated
            res.status(304).json({ message: "No changes made to the student" });
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the student" });
    }
});


// PUT update a student by ID
app.put('/school/:id', async (req, res) => {
    const { id } = req.params;
    const updatedStudent = req.body;

    // Validate ObjectId
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    try {
        // Replace the entire document with the new data
        const result = await db.collection('students').replaceOne(
            { _id: new ObjectId(id) },
            updatedStudent
        );

        if (result.matchedCount === 1) {
            res.status(200).json({ message: "Student updated successfully" });
        } else {
            res.status(404).json({ error: "Student not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the student" });
    }
});
