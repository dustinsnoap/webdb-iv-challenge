exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('shopping_list', tbl => {
            //a list of dishes and the amount of each needed
            tbl .increments()
            tbl .integer('dish_id')
                .notNullable()
                .references('id')
                .inTable('dishes')
                //if column gets deleted any related data will die with it
                .onDelete('CASCADE')
            tbl .integer('quantity')
                .notNullable()
            tbl .timestamps(true, true)
        }),
        knex.schema.createTable('dishes', tbl => {
            //holds dish name, it's variant, and instructions on how to make it
            //referenced by: shopping_list, recipes
            tbl .increments()
            tbl .string('name') //not unique because there can be other variants
                .notNullable()
            tbl .string('variant')
            tbl .string('instructions')
            tbl .timestamps(true, true)
        }),
        knex.schema.createTable('recipes', tbl => {
            //list of ingredients and the quantity needed for each dish
            tbl .increments()
            tbl .integer('dish_id')
                .notNullable()
                .references('id')
                .inTable('dishes')
                //if column gets deleted any related data will die with it
                .onDelete('CASCADE')
            tbl .string('ingredient_name')
                .notNullable()
                .references('name')
                .inTable('ingredients')
                //if column gets deleted any related data will die with it
                .onDelete('CASCADE')
            tbl .float('quantity')
                .notNullable()
            tbl.timestamps(true, true)
        }),
        knex.schema.createTable('ingredients', tbl => {
            //list of ingredient names
            //referenced by: recipes
            tbl .string('name')
                .primary()
            tbl .timestamps(true, true)
        }),
    ])
}

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists('shopping_list'),
        knex.schema.dropTableIfExists('dishes'),
        knex.schema.dropTableIfExists('recipes'),
        knex.schema.dropTableIfExists('ingredients'),
    ])
}
