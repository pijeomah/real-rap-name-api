const express = require('express')
const app = express()
const PORT = 8080
const artist = {
    "lil wayne":{
        "birthName": "Dwayne Michael Carter",
        "age": 40,
        "birthPlace" : "New Orleans, Louisana"
    },
    "birdman":{
        "birthName": "Bryan Christopher Williams",
        "age": 52,
        "birthPlace": "New Orleans, Louisana"
    },

    "drake":{
        "birthName": "Aubrey Drake Graham",
        "age": 36,
        "birthPlace": "Ontario, Canada"
    },

    "nicki minaj":{
        "birhName": "Onika Tanya Maraj",
        "age": 40,
        "birthPlace": "St.James, Trindad and Tobago"
    },

    "tyga":{
        "birthName": "Michael Ray Nguyen-Stevenson",
        "age": 33,
        "birthPlace": "Compton,California"
    },
    "unknown":{
        "birthName": "unknown",
        "age": 0,
        "birthPlace": "unknown"
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const artistebName = req.params.name.toLowerCase()
  if(artist[artistebName]){
    res.json(artiste[artistebName])
  }else {
    res.json('unknown')
  }
    
})

app.listen(PORT , ()=>{
    console.log("Listening on 8080")
})