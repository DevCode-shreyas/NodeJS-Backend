const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const Person = require("./models/person");
const menu = require("./models/menu");
const Task = require("./models/task");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const savedPerson = await newPerson.save();

    console.log("data saved");

    res.status(200).json(savedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const persons = await Person.find({});
    console.log("data fetched");
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.post("/menu", async (req, res) => {
  try {
    const menuItemData = req.body; // Assuming the request body contains menu item data

    // Create a new menu item using the Mongoose model
    const menuItem = new menu(menuItemData);

    // Save the new menu item to the database
    const menu_data = await menuItem.save();

    console.log("Menu item saved");
    res.status(201).json(menu_data);
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/menu", async (req, res) => {
  try {
    // Use the Mongoose model to find all menu items in the database
    const menuItems = await menu.find();

    // Send the list of menu items as a JSON response
    res.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
