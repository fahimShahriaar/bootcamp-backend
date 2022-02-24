const Bootcamp = require("../models/Bootcamp");

// @desc        GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.json({
      success: false,
      msg: error,
    });
  }
};

// @desc        GET a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (bootcamp) {
      res.json({
        success: true,
        data: bootcamp,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "No Bootcamp found!",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      msg: error.message,
    });
  }
};

// @desc        Create a bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const newBootcamp = new Bootcamp(req.body);
    const result = await newBootcamp.save();
    res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
};

// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      res.status(400).json({ success: false });
    } else {
      res.json({
        success: true,
        data: bootcamp,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = async (req, res, next) => {
  res.json({
    success: true,
    msg: `DELETE a bootcamp ${req.params.id}`,
  });

  try {
    const result = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!result) {
      res.status(400).json({ success: false });
    } else {
      res.json({
        success: true,
        result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};
