/**
* This is the javascript for the AHP model.  For this to have worked
* you must have loaded anpjs/ahpjs, see
* https://github.com/dlens/anpjs for how to load that script.
*/

var AHP_MODEL_JSON = {
  "name" : "Cell Phone Consumer Choice Model Version 1.0",
  "description" : "Our first attempt at the cell phone consumer choice model.",
  "alts" : ["Galaxy S8", "Galaxy S9", "iPhone X"],
  "children": [
      {
        "name": "Cost",
        "id" : 0,
        "description": "How inexpensive is the phone?",
        "alt_scores": [0.75, 0.1, 0.1]
      },
      {
        "name" : "Functionality",
        "id" : 1,
        "description" : "Basic cell phone needs in today's world",
        "children" : [
          {
            "name": "Photography",
            "id": 2,
            "description" : "",
            "alt_scores" : [0.2, 0.5, 0.1]
          },
          {
            "name": "Gaming",
            "id":3,
            "description" : "",
            "alt_scores" : [0.5, 1.0, 0.75]
          },
          {
            "name": "Storage",
            "id": 4,
            "description" : "",
            "alt_scores" : [0.5, 1.0, 0.85]
          }
        ],
        "pairwise" : [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ]
      },
      {
        "name": "Style",
        "id": 7,
        "description": "How well the phones rate on the nebulous style factor",
        "alt_scores": [0.5, 0.8, 1.0]
      }
  ],

  "pairwise": [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ],

}

var AHP_MODEL = AHPTreeNode.fromJSONObject(AHP_MODEL_JSON)
