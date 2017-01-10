import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'createShort': function(url){
    var short = Random.id(6);
    short = short.toLowerCase();
    if(urls.findOne({key: short})){
      Meteor.call('createShort', url);
    } else if(urls.findOne({url: url})) {
      return urls.findOne({url: url}).short;
    } else {
      urls.insert({
        short: short,
        url: url
      });
      return short;
    }
  },
  'checkShorts': function(){
    console.log(urls.find().fetch());
  }
});
