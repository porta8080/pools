function PoolModel(db){
  this.db = db;
  this.collection = db.collection('pools');
};

PoolModel.records = [
  {id: 1, name: 'Prefeito Rio de Janeiro 2016'},
  {id: 2, name: 'Melhor time do Brasileirão 2016'}
];

PoolModel.prototype.all = function(callback){
  // return PoolModel.records;
  this.collection.find({},callback);
};

// module.exports = new PoolModel();
module.exports = function(db){
    return new PoolModel(db);
};
