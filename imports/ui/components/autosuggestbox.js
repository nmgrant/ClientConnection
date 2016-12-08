import React from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => {
    return suggestion.profile.name.first + ' ' + suggestion.profile.name.last;
};

const renderSuggestion = suggestion => (
    <div>
        {suggestion.profile.name.first + ' ' + suggestion.profile.name.last}
    </div>
);

const getSuggestions = (users, value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : users.filter(u =>
        (u.profile.name.first + ' ' + u.profile.name.last)
        .toLowerCase().slice(0, inputLength) === inputValue
    )
};

export default class AutoSuggestBox extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  };
 
  onChange(event, {newValue}) {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({value}) {
    this.setState({
      suggestions: getSuggestions(this.props.users, value)
    });
  };

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };
 
  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Enter a contributor\'s name',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}