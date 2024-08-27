// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {suggestionsList: this.props.suggestionsList, searchInput: ''}

  onChangingSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  inputSuggestion = id => {
    const {suggestionsList} = this.state
    const suggestionObject = suggestionsList.find(
      eachItem => eachItem.id === id,
    )
    this.setState({searchInput: suggestionObject.suggestion})
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    const filteredSearchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google"
        />
        <div className="suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search"
              value={searchInput}
              onChange={this.onChangingSearchInput}
            />
          </div>
          <ul>
            {filteredSearchResults.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                inputSuggestion={this.inputSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
