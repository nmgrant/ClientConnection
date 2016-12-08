import React from 'react';
import { Row, Col, ListGroupItem, FormControl, Button } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { updateRating, removeRating } from '../../api/ratings/methods.js';
import StarRatingComponent from 'react-star-rating-component';

const handleUpdateRating = (ratingId, event) => {
  const comment = event.target.value.trim();
  if (comment !== '' && event.keyCode === 13) {
    updateRating.call({
      _id: ratingId,
      update: { comment },
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Rating updated!', 'success');
      }
    });
  }
};

const handleRemoveRating = (documentId, event) => {
  event.preventDefault();
  // this should be replaced with a styled solution so for now we will
  // disable the eslint `no-alert`
  // eslint-disable-next-line no-alert
  if (confirm('Are you sure? This is permanent.')) {
    removeRating.call({
      _id: ratingId,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Rating removed!', 'success');
      }
    });
  }
};

export const Rating = ({ rating }) => (
  <ListGroupItem key={ rating._id }>
    <h3>
      { rating.ratedUser.first } { rating.ratedUser.last }
    </h3>
    <StarRatingComponent 
        name="rate2" 
        editing={false}
        starCount={ 5 }
        value={rating.stars}
        starColor="#ff0000"
    />
    <div>
      {rating.comment}
      <div style={{textAlign: 'right'}}>
      - <cite>{rating.author.first} {rating.author.last}</cite></div>
    </div>
  </ListGroupItem>
);
