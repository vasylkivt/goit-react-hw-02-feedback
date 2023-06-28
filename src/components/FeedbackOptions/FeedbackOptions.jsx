import PropTypes from 'prop-types';
// import { Container } from './FeedbackOptions.style';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          onClick={() => onLeaveFeedback(option)}
          key={option}
          type="button"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
