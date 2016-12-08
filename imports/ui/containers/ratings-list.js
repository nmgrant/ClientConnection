import { composeWithTracker } from 'react-komposer';
import { Ratings } from '../../api/ratings/ratings.js';
import { RatingsList } from '../components/ratings-list.js';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('ratings');
  if (subscription.ready()) {
    const ratings = Ratings.find({}, {sort: {_id: -1}, limit: 5}).fetch();
    onData(null, { ratings });
  }
};

export default composeWithTracker(composer, Loading)(RatingsList);
