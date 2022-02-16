// @desc        GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public
exports.getBootcamps = (req, res, next) => {
    res.json({
        success: true,
        msg: "get all bootcamps"
    })
}

// @desc        GET a single bootcamp
// @route       GET /api/v1/bootcamps/:id
// @access      Public
exports.getBootcamp = (req, res, next) => {
    res.json({
        success: true,
        msg: `get a single bootcamp which is ${req.params.id}`
    })
}

// @desc        Create a bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private
exports.createBootcamp = (req, res, next) => {
    res.json({
        success: true,
        msg: "Create a new bootcamp"
    })
}

// @desc        Update a bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private
exports.updateBootcamp = (req, res, next) => {
    res.json({
        success: true,
        msg: `Update a bootcamp ${req.params.id}`
    })
}

// @desc        Delete a bootcamp
// @route       DELETE /api/v1/bootcamps/:id
// @access      Private
exports.deleteBootcamp = (req, res, next) => {
    res.json({
        success: true,
        msg: `DELETE a bootcamp ${req.params.id}`
    })
}