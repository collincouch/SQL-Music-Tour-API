// DEPENDENCIES
const events = require("express").Router();
const db = require("../models");
const { Event } = db;
const { Op } = require("sequelize");

// FIND ALL Events
events.get("/", async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      where: {
        name: { [Op.like]: `%${req.query.name ? req.query.name : ""}%` },
      },
    });
    res.status(200).json(foundEvents);
  } catch (error) {
    res.status(500).json(error);
  }
});

// FIND A SPECIFIC Events
events.get("/:id", async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    });
    res.status(200).json(foundEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE AN Event
events.post("/", async (req, res) => {
  try {
    const newStage = await Event.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new event",
      data: newStage,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE A Event
events.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedEvents} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE A Event
events.delete("/:id", async (req, res) => {
  try {
    const deletedEvents = await Event.destroy({
      where: {
        event_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedEvents} event(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = events;
