var PagesController = function(dao){
  this.dao = dao;
}

PagesController.prototype.show = function(req,res,next){
  this.dao.findBySlugAsync(req.params.slug)
  .then(function(data){
    res.json(data);
  });
}

PagesController.prototype.create = function(req,res,next){
  this.dao.createAsync(req.params.slug)
  .then(function(data){
    res.json(data);
  });
}

module.exports = function(dao){
  return new PagesController(dao);
}
