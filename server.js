var Transitive = new (require("transitive"))();

var options = {port: 3454};

//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();

console.log("Server started. listening on port " + Transitive.server.address().port);