var st = require('st')
module.exports = function(plasma, dna) {
  plasma.on(dna.reactOn, function(c){
    var app = c.data
    for(var mountPoint in dna.mount) {
      dna.mount[mountPoint].forEach(function(p){
        var options = {
          "path": p+"/",
          "url": mountPoint+"/",
          "passthrough": true,
          "index": false,
          "cache": false
        }
        if(dna.log)
          console.log(options)
        app.use(st(options))
      })
    }
  })
}