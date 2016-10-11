const PageDAO = function(model){
  this.model = model;
}

PageDAO.prototype.findBySlug = function(slug,callback){
  this.model.find({slug: slug},callback);
};

PageDAO.prototype.create = function(data,callback){
  var record = new this.model(data);
  record.save(callback);
};

module.exports = function(model){
  console.log(model)
  return new PageDAO(model);
}
