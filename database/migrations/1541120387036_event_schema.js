'use strict'

const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', (table) => {
      table.increments()
      table.string('title')
      table.datetime('start_date')
      table.datetime('end_date')
      table.string('location')
      table.integer('price')
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema
