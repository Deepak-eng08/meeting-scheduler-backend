const MeetingService = require("../service/meeting.service");

class MeetingController {

  static async create(req, res) {
    try {
      const meeting = await MeetingService.create(req.body);
      res.status(201).json(meeting);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAll(req, res) {
    const meetings = await MeetingService.getAll();
    res.json(meetings);
  }

  static async getOne(req, res) {
    const meeting = await MeetingService.getById(req.params.id);
    res.json(meeting);
  }

  static async delete(req, res) {
    await MeetingService.delete(req.params.id);
    res.json({ message: "Deleted successfully" });
  }
}

module.exports = MeetingController;