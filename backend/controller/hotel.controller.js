const hotelModel = require("../model/hotel");

const addHotel = async (req, res) => {
  const { name, address, rating, reviews, image } = req.body;

  try {
    await hotelModel.create({ name, address, rating, reviews, image });
    res.status(200).json({ message: "Hotel added" });
  } catch (err) {
    res.status(500).json({ error: `Failed to insert hotel ${err}` });
  }
};

const getAllHotels = async (req, res) => {
  try {
    const hotels = await hotelModel.find();
    res.status(200).json({ hotels });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.id;
    const hotel = await hotelModel.findOne({ _id: hotelId });
    if (hotel) {
      await hotel.deleteOne({ _id: hotelId });
      res
        .status(200)
        .json({ message: "Hotel deleted successfully", _id: hotelId });
    } else {
      res.status(404).json({ message: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.export = { addHotel, getAllHotels, deleteHotel };
