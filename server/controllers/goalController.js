const asyncHandler = require('express-async-handler')

// GET
//@route   GET api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

// POST
//@route   POST api/goals
const setGoal = asyncHandler(async (req, res) => {
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'Set Goal'
    })
})

//PUT
//@route PUT api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    })
})

//DELETE
//@route DELETE api/goals/:id
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}