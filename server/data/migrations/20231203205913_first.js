/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("events", tbl => {
    tbl.increments("id").primary()
    tbl.string("name")
    tbl.dateTime("start").notNullable()
    tbl.dateTime("end").notNullable()
  })
  .createTable("people", tbl => {
    tbl.increments("id").primary()
    tbl.string("name").notNullable()
    tbl.integer("event_id").unsigned().references("id").inTable("events")
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("people").dropTableIfExists("events")
};
