import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertRating } from '../../api/ratings/methods.js';

const handleInsertRating = (event) => {
  const target = event.target;
  const comment = target.value.trim();

  if (comment !== '' && event.keyCode === 13) {
    insertRating.call({
      comment,
    }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        target.value = '';
        Bert.alert('Rating added!', 'success');
      }
    });
  }
};

export const AddAuthor = () => (
  <FormGroup>
    <FormControl
      type="text"
      onKeyUp={ handleInsertRating }
      placeholder="Type an Author name and press enter..."
    />
  </FormGroup>
);
