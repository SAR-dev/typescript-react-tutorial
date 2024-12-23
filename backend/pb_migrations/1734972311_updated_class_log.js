/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2644375201")

  // update collection data
  unmarshal({
    "name": "class_logs"
  }, collection)

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3993083173",
    "max": 0,
    "min": 0,
    "name": "teacher_note",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4036919756",
    "max": 0,
    "min": 0,
    "name": "student_note",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2644375201")

  // update collection data
  unmarshal({
    "name": "class_log"
  }, collection)

  // remove field
  collection.fields.removeById("text3993083173")

  // remove field
  collection.fields.removeById("text4036919756")

  return app.save(collection)
})
