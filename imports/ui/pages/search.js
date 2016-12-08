import React from 'react';
import { Jumbotron, Row, Col, Grid } from 'react-bootstrap';
import { GettingStartedGoogleMap } from '../components/map.js';

export const Search = () => (
  <Grid>
    <Row>
      <Col xs={6} md={4}>
        <h1> Search Results </h1>
      </Col>
      <Col xs={6} md ={4} xsOffset={2} mdOffset={2}>
        <h1> Map Results </h1>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `400px`, width: '400px' }} />
          }
          mapElement={
            <div style={{ height: `400px`, width: '400px' }} />
          }
          onMapLoad={_.noop}
          onMapClick={_.noop}
          onMarkerRightClick={_.noop}
        />
      </Col>
    </Row>
  </Grid>
);