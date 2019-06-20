const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

//C
//R
const get_dishes = async () => await db('dishes')
//I'm assuming there single call that can do this, I just can't figure it out.
const get_dish = async id => {
    //select d.id, d.name, d.variant, d.instructions, group_concat(r.ingredient_name, ', ') as ingredients
    // from dishes as d
    // join recipes as r
    // on r.dish_id = d.id
    // where d.id = 2
    return await db
    .select('d.id', 'd.name', 'd.variant', 'd.instructions', 'r.ingredient_name as ingredients')
    .from('dishes as d')
    .join('recipes as r', {'r.dish_id': 'd.id'})
    .where('d.id', Number(id))
    // const recipes = await db('recipes')
    //     .select('ingredient_name as name', 'quantity')
    //     .where('dish_id', Number(id))
    // const dish = await db('dishes')
    //     .select('name', 'instructions')
    //     .where('id', Number(id))
    // return {...dish[0], ingredients: recipes}
}
const get_recipes = async () => await db('recipes')
//U
//D

module.exports = {
    get_dish,
    get_dishes,
    get_recipes,
}

// return db.select('dishes.id', 'dishes.name as dish', 'recipes.name as recipe')
//     .from('dishes')
//     .leftJoin('recipes', 'dishes.id', 'recipes.dish_id')
//     .where('dishes.id', Number(id));