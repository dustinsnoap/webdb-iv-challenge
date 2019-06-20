exports.seed = async function(knex) {
  await knex('recipes').insert([
    {id: 1, dish_id: 1, ingredient_name: 'pizza', quantity: 1},
    {id: 2, dish_id: 2, ingredient_name: 'roll', quantity: 90},
    {id: 3, dish_id: 2, ingredient_name: 'pizza', quantity: 90},
    {id: 4, dish_id: 3, ingredient_name: 'pizza', quantity: 7},
    {id: 5, dish_id: 3, ingredient_name: 'pocket', quantity: 7},
    {id: 6, dish_id: 4, ingredient_name: 'pizza', quantity: 1},
    {id: 7, dish_id: 5, ingredient_name: 'pizza', quantity: 10},
    {id: 8, dish_id: 6, ingredient_name: 'pizza', quantity: 100},
    {id: 9, dish_id: 7, ingredient_name: 'pizza', quantity: 1000},
  ])
}