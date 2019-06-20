const express = require('express')
const router = express.Router()
const db = require('./models')

//ROUTE: /api/

//C
//R
router.get('/dish', async (req, res) => {
    try {
        const dishes = await db.get_dishes()
        dishes.length > 0
        ?   res.status(200).json(dishes)
        :   res.status(404).json({message: `No dishes found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/dish/:id', async (req, res) => {
    try {
        const dish = await db.get_dish(req.params.id)
        dish
        ?   res.status(200).json(dish)
        :   res.status(404).json({message: `Dish ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/recipe', async (req, res) => {
    try {
        const recipes = await db.get_recipes()
        recipes.length > 0
        ?   res.status(200).json(recipes)
        :   res.status(404).json({message: `No recipes found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
//D

module.exports = router