import React from 'react';
import { Row, Col,Grid } from 'react-bootstrap';
import { AddAuthor } from '../components/add-author.js';

export const Application = () => (
<Grid> 
 <Row>
    <Col xs={ 12 }>
      <h4 className="text-center">Application</h4>
    </Col>
  </Row>  
  <Row>
    <p>Author</p>
    <AddAuthor/>		
  </Row>
</Grid>
);
