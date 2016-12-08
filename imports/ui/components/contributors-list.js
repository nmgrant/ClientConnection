import React from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import { Contributor } from './contributor.js';

export const ContributorsList = ({ contributors, ratings }) => (
  contributors.length > 0 ? <ListGroup className="contributors-list">
    {contributors.map((con) => (
      <Contributor key={ con._id } contributor={ con } />
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No contributors yet.</Alert>
);

ContributorsList.propTypes = {
  contributors: React.PropTypes.array
};
