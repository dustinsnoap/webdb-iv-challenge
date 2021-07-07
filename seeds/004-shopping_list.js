exports.seed = async function(knex) {
    await knex('shopping_list').insert([
      {id: 1, dish_id: 1, quantity: 27},
      {id: 2, dish_id: 2, quantity: 72},
      {id: 3, dish_id: 5, quantity: 176},
    ])
}