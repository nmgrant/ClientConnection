import React from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
import RatingsList from '../containers/ratings-list.js';

export const Index = () => (
  <Grid>
    <Row>
      <Jumbotron className="text-center">
        <h2>Client Connection</h2>
        <p>Find a business professional today!</p>
      </Jumbotron>
    </Row>
    <Row>
      <Col xs={6} md={4}>
        <h1> Recent ratings </h1>
        <RatingsList />
      </Col>
      <Col xs={8} md={6} xsOffset={2} mdOffset ={2}>
        <h1> Suggested Contributors </h1>
      </Col>
    </Row>
  </Grid>
);
