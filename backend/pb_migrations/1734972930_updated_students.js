/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_JXoLttAbnc` ON `students` (\n  `user`,\n  `teacher`\n)"
    ]
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2907260911",
    "hidden": false,
    "id": "relation2968954581",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "teacher",
    "presentable": false,
    "required": true,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3827815851")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_JXoLttAbnc` ON `students` (`user`)"
    ]
  }, collection)

  // remove field
  collection.fields.removeById("relation2968954581")

  return app.save(collection)
})
