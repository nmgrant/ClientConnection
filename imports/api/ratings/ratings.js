import faker from 'faker';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';

export const Ratings = new Mongo.Collection('Ratings');

Ratings.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Ratings.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Ratings.schema = new SimpleSchema({
  "author.first": {
    type: String,
    label: 'The author of the rating.',
  },
  "author.last": {
    type: String,
    label: 'The author of the rating.',
  },
  "ratedUser.first": {
      type: String,
      label: 'The user being rated.'
  },
  "ratedUser.last": {
      type: String,
      label: 'The user being rated.'
  },
  comment: {
      type: String,
      label: 'Written review of the user.'
  },
  stars: {
      type: Number,
      label: 'The star rating of the user.'
  }
});

Ratings.attachSchema(Ratings.schema);

Factory.define('Rating', Ratings, {
  comment: () => faker.hacker.phrase(),
  stars: () => faker.random.number()
});
