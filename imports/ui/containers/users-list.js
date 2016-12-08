import { composeWithTracker } from 'react-komposer';
import { AddRating } from '../components/add-rating.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('users');
  if (subscription.ready()) {
    const users = Meteor.users.find().fetch();
    onData(null, { users });
  }
};

export default composeWithTracker(composer, Loading)(AddRating);
