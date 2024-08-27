// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, inputSuggestion} = props
  const {suggestion, id} = suggestionItem
  const onClickingSuggestion = () => {
    inputSuggestion(id)
  }
  return (
    <li className="listItem">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onClickingSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
