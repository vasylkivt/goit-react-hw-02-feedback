import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>
        <span>Good:</span>
        <span>{good}</span>
      </p>
      <p>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </p>
      <p>
        <span>Bad:</span>
        <span>{bad}</span>
      </p>
      <p>
        <span>Total:</span>
        <span>{total}</span>
      </p>
      <p>
        <span>Positive feedback:</span>
        <span>{positivePercentage}</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
