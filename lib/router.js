Router.route('/request', function(){
  var req = this.request;
  var res = this.response;
  var query = this.params.query;
  Meteor.call('createShort', query.url, function(error, success){
    if(error){
      res.end("error");
    } else {
      res.end(success);
    }
  });
}, {where: 'server'});

Router.route('/:short', function(){
  var req = this.request;
  var res = this.response;
  res.writeHead(302, {
    'Location': 'https://cheqitout.co' + urls.findOne({short: this.params.short}).url
  });
  res.end();
}, {where: 'server'});
