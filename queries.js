//1 Task
db.myColl.find(
{$or:
    [
        {"scores.0.score": {$gt:87, $lt:93}},
        {"scores.1.score": {$gt:87, $lt:93}},
        {"scores.2.score": {$gt:87, $lt:93}},
        {"scores.3.score": {$gt:87, $lt:93}}
    ]
}).pretty() 
//2 Task
db.myColl.aggregate(
    [
        { $unwind:
            {
                path:"$scores"
            }
        },
        {$match:
            {
                $and: [
                        {"scores.type":"exam"},
                        {"scores.score":{
                            $gt: 90
                                        }
                        }
                      ]
            }
        }
    ]
).pretty()
//3 Task
db.myColl.update(
   { name: "Dusti Lemmond" },
   { $set:
      {
        "accepted": true
      }
   },
   {
       upsert:false,
       multi:true
   }
)
