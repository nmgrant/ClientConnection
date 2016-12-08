import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';
import { insertRating }  from '../../api/ratings/methods.js';
import StarRatingComponent from 'react-star-rating-component';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => {
    return suggestion.profile.name.first + ' ' + suggestion.profile.name.last;
};

const renderSuggestion = suggestion => (
    <div>
        {suggestion.profile.name.first + ' ' + suggestion.profile.name.last}
    </div>
);

const getSuggestions = (value) => {
    const users = Meteor.users.find().fetch();
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : users.filter(u =>
        (u.profile.name.first + ' ' + u.profile.name.last)
        .toLowerCase().slice(0, inputLength) === inputValue
    )
};


export default class AddRating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 0,
      value: '',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.handleInsertRating = this.handleInsertRating.bind(this);
  };
 
  onChange(event, {newValue}) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({value}) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  handleInsertRating(event) {
    const target = event.target;
    const comment = target.value.trim();
    const author = {
      first: Meteor.user().profile.name.first,
      last: Meteor.user().profile.name.last
    }
    const stars = this.state.rating
    const name = this.state.value.split(' ');
    const ratedUser = {
      first: name[0],
      last: name[1]
    }

    if (comment !== '' && event.keyCode === 13) {
      insertRating.call({
        author,
        ratedUser,
        stars,
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

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue
    });
  };
 
  render() {
    const { rating, value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter a contributor\'s name',
      value,
      onChange: this.onChange
    };

  return (
  <FormGroup>
    <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
    />
    <FormControl
      type="text"
      onKeyUp={ this.handleInsertRating }
      placeholder="Type a rating comment and press enter..."
    />
    <StarRatingComponent 
          name="rate2" 
          editing={true}
          starCount={ 5 }
          value={ rating }
          starColor="#ff0000"
          onStarClick={ this.onStarClick }
    />
    </FormGroup>
    );
  }
};