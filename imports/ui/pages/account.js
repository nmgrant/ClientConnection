import React from 'react';
import { Row, Col } from 'react-bootstrap';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';

export const Account = () => (
  <Row>
    <Col xs={ 12 }>
      <h3 className="page-header">My Account</h3>
    </Col>
  </Row>
);
