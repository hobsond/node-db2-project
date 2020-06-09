
exports.up = function(knex,Promise) {
    return knex.schema.createTable('cars',tbl=>{
        tbl.increments('Vin')
            .unique()
        tbl.text('make')
        tbl.text('model')
        tbl.integer('milleage')
            
    })
  
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists('cars')
  
};
