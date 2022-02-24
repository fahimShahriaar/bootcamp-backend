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
    res.status(400).json({
      success: false,
      msg: error,
    });
  }
};

// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
  res.json({
    success: true,
    msg: `Update a bootcamp ${req.params.id}`,
  });
};

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
  res.json({
    success: true,
    msg: `DELETE a bootcamp ${req.params.id}`,
  });
};
