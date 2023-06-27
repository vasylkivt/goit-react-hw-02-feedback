export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button onClick={onLeaveFeedback} key={option} type="button">
      {option}
    </button>
  ));
}
