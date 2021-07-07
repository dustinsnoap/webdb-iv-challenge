exports.seed = async function(knex) {
    await knex('ingredients').insert([
      {name: 'pizza'},
      {name: 'roll'},
      {name: 'pocket'},
    ])
}