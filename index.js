var st = require('st')
var _ = require("underscore")

module.exports = function(plasma, dna) {
  plasma.on(dna.reactOn, function(c){
    var app = c.data
    for(var mountPoint in dna.mount) {
      dna.mount[mountPoint].forEach(function(p){
        if(p.path)
          p = p.path
        var options = _.extend({
          "path": p+"/",
          "url": mountPoint+"/",
          "passthrough": true,
          "index": false,
          "cache": false
        }, dna.st)
        if(dna.log)
          console.log("static",mountPoint+"/","->",p+"/","using cache",options.cache)
        app.use(st(options))
      })
    }
  })
}