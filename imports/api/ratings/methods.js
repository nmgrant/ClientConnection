import { Ratings } from './ratings';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { rateLimit } from '../../modules/rate-limit.js';

export const insertRating = new ValidatedMethod({
  name: 'ratings.insert',
  validate: new SimpleSchema({
    "author.first": { type: String },
    "author.last": { type: String },
    "ratedUser.first": { type: String },
    "ratedUser.last": { type: String },
    comment: { type: String },
    stars: { type: Number }
  }).validator(),
  run(rating) {
    Ratings.insert(rating);
  },
});

export const updateRating = new ValidatedMethod({
  name: 'ratings.update',
  validate: new SimpleSchema({
    _id: { type: String },
    'update.author': { type: Object, optional: false },
    'update.ratedUser': { type: Object, optional: false },
    'update.comment': { type: String, optional: true },
    'update.stars': { type: Number, optional: false },
  }).validator(),
  run({ _id, update }) {
    Ratings.update(_id, { $set: update });
  },
});

export const removeRating = new ValidatedMethod({
  name: 'ratings.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Ratings.remove(_id);
  },
});

rateLimit({
  methods: [
    insertRating,
    updateRating,
    removeRating,
  ],
  limit: 5,
  timeRange: 1000,
});
