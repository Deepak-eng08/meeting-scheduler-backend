const express = require("express");
const MeetingController = require("../modules/meeting/index/meeting.controller");

const router = express.Router();

router.post("/meetings", MeetingController.create);
router.get("/meetings", MeetingController.getAll);
router.get("/meetings/:id", MeetingController.getOne);
router.delete("/meetings/:id", MeetingController.delete);

module.exports = router;