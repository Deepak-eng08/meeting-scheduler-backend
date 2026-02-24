const { Op } = require("sequelize");
const Meeting = require("../module/meeting.model");

class MeetingService {

  static async create(data) {

    if (new Date(data.startTime) >= new Date(data.endTime)) {
      throw new Error("startTime must be before endTime");
    }

    const conflict = await Meeting.findOne({
      where: {
        userId: data.userId,
        startTime: { [Op.lt]: data.endTime },
        endTime: { [Op.gt]: data.startTime },
      },
    });

    if (conflict) {
      throw new Error("Time slot already booked");
    }
    return await Meeting.create(data);
  }

  static async getAll() {
    return await Meeting.findAll();
  }

  static async getById(id) {
    return await Meeting.findByPk(id);
  }

  static async delete(id) {
    return await Meeting.destroy({ where: { id } });
  }
}

module.exports = MeetingService;