import React from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
import RatingsList from '../containers/ratings-list.js';

export const Support = () => (
  <Grid>
    <Row>
      <Jumbotron className="text-center">
        <h2>Support</h2>
        <p>Sorry we can't help you yet</p>
      </Jumbotron>
    </Row>
  </Grid>
);
