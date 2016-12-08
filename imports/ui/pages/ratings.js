import React from 'react';
import { Row, Col } from 'react-bootstrap';
import RatingsList from '../containers/ratings-list.js';
import AddRating from '../components/add-rating.js';

export const Ratings = () => (
  <Row>
    <Col xs={ 12 }>
      <h4 className="page-header">Ratings</h4>
      <AddRating />
    </Col>
  </Row>
);
