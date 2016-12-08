import '/imports/startup/server';

Meteor.publish('users', () => Meteor.users.find());