const menuModel = require('../model/menu');

const addMenuItem = async(req, res) => {
    const {name, hotelId, price, image} = req.body;

    const menuItem = new menuModel({name, hotelId, price, image});

    try {
    await menuItem.save();
    res.status(200).json({ message: "Item added" });
  } catch (err) {
    res.send(err);
  }
};

const getMenuItemsOfHotel = async (req, res) => {
  try {
    const contents = await contentModel.find({hotelId: "req.params.hotelId"});
    res.status(200).json({ contents });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    let menuItemId = req.params.id;
    const content = await ContentModel.findOne({ _id: menuItemId });
    if (content) {
      await content.deleteOne({ _id: menuItemId });
      res
        .status(200)
        .json({ message: "Content deleted successfully", _id: menuItemId });
    } else {
      res.status(404).json({ message: "Content not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const updatMenuItem = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = {
      price: req.body.price,
      description: req.body.price,
      image: req.body.price,
    };
    const updatedMenuItem = await ContentModel.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );
    if (updatedMenuItem) {
      res.status(200).json({ menuItem: updatedMenuItem });
    } else {
      res.status(404).json({ message: "Menu Item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.export= {
    addMenuItem,
    getMenuItemsOfHotel,
    deleteMenuItem,
    updatMenuItem,
};