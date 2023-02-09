const Room = require("../modals/room");
const mongoose = require("mongoose");

const rooms = require("../data/rooms");

mongoose.connect("mongodb://localhost:27017/bookit", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("rooms are delsted");

    await Room.insertMany(rooms);
    console.log("rooms are inserted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
seedRooms();
