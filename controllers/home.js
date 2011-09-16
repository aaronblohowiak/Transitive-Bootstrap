module.exports = function(routes, Transitive){
  routes.get("/", function(req, res){
    res.writeHead(200, { 
      'Content-Type': 'text/html', 
      'Cache-Control': 'no-cache, no-store'
    });

    res.end(Transitive.Views.renderPage("home", {}));
  });
};