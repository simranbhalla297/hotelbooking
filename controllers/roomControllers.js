import { Query } from "mongoose";
import Room from "../modals/room";
import ErrorHandler from "../utilis/errorHandler";
import APIFeatures from "../utilis/apiFeatures";
import CatchAsyncErrors from "../middlewares/CatchAsyncErrors";
// const allRooms = (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "all rooms",
//   });
// };

//get all the rooms
const allRooms = CatchAsyncErrors(async (req, res) => {
  const resPerPage = 4;
  const roomCount = await Room.countDocuments();
  console.log("roomCount" + roomCount);
  // const rooms = await Room.find({
  //   name: { $regex: "Picturesque ", $options: "$i" },
  // });
  const apiFeatures = new APIFeatures(Room.find(), req.query).search().filter();
  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;
  console.log("filtered rooms " + filteredRoomsCount);
  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query.clone();

  res.status(200).json({
    success: true,
    roomCount,
    filteredRoomsCount,
    resPerPage,
    rooms,
  });
});
// const allRooms = async (req, res) => {
//   try {
//     const rooms = await Room.find();
//     res.status(200).json({
//       success: true,
//       count: rooms.length,
//       rooms,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// };

//get single room by id =>   /api/rooms/:id
const getSingleRoom = CatchAsyncErrors(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this ID", 404));
  }
  res.status(200).json({
    success: true,
    room,
  });
});
//update room by id

const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        message: "roon not found with this id",
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// delete room by id =>  /api/rooms/:id

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        status: false,
        message: "room not found ",
      });
    }

    await room.remove();
    res.status(200).json({
      status: true,
      message: "room deleted",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: message.error,
    });
  }
};
//create new roonm =>  /api/rooms
const newRoom = CatchAsyncErrors(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room,
  });
});
export { allRooms, newRoom, getSingleRoom, updateRoom, deleteRoom };
