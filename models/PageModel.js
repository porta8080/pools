var PageModel = function(mongoose){
  this.mongoose = mongoose;
}

PageModel.prototype.sayHello = function(){
  console.log('Hello, I\'m Page '+this.id);
}

module.exports = function(mongoose){
  var schema = new mongoose.Schema({
    name: String,
    slug: String,
    content: String,
    private: Boolean,
    password: String,
    created_at: Date,
    updated_at: Date
  },{collection: 'pages'});

  schema.methods = Object.create(PageModel.prototype);
  return mongoose.model('Page', schema);
}
