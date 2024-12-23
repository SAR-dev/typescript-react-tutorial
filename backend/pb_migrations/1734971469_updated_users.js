/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("select4133428192")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select4133428192",
    "maxSelect": 1,
    "name": "user_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "STUDENT",
      "TEACHER"
    ]
  }))

  return app.save(collection)
})
