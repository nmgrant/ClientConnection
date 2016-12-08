import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Rating } from './rating.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const RatingsList = ({ ratings }) => (
  <ListGroup className="ratings-list">
    <ReactCSSTransitionGroup
      transitionName="ratings-list"
      transitionEnterTimeout={0}
      transitionLeaveTimeout={0}
    >
      {ratings.map((rat) => (
        <Rating key={ rat._id } rating={ rat } />
      ))}
    </ReactCSSTransitionGroup>
  </ListGroup>
);

RatingsList.propTypes = {
  ratings: React.PropTypes.array,
};
