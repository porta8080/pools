function PoolsController(model){
  console.log(model);
  this.model = model;
};

PoolsController.prototype.index = function(req,res,next){
  // res.json();

  this.model.all(function(error,data){
    if(error){
      return next(error);
    }else{
      res.json(data);
    }
  });
};

// module.exports = new PoolsController();
module.exports = function(model){
  return new PoolsController(model);
};
