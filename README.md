# Queries into queries.js

## Examples of working

### 1 Task
db.myColl.find(
{$or:
    [
        {"scores.0.score": {$gt:87, $lt:93}},
        {"scores.1.score": {$gt:87, $lt:93}},
        {"scores.2.score": {$gt:87, $lt:93}},
        {"scores.3.score": {$gt:87, $lt:93}}
    ]
}).pretty() 
### 2 Task
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
### 3 Task
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





![First](http://savepic.ru/14212443.jpg "First query")
![Second](http://savepic.ru/14216539.jpg "Second query")
![Third](http://savepic.ru/14217563.jpg "Third query")
