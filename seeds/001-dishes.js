exports.seed = async function(knex) {
  await knex('dishes').insert([
    {id: 1, name: 'pizza', variant: 'taco', instructions: 'eat'},
    {id: 2, name: 'pizza', variant: 'roll', instructions: 'eat'},
    {id: 3, name: 'pizza', variant: 'pocket', instructions: 'eat'},
    {id: 4, name: 'pizza', variant: 'sphegetti', instructions: 'eat'},
    {id: 5, name: 'pizza', variant: 'dessert', instructions: 'eat'},
    {id: 6, name: 'pizza', variant: 'frozen', instructions: 'eat'},
    {id: 7, name: 'pizza', variant: 'leftover', instructions: 'eat'},
  ])
}