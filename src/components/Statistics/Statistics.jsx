import PropTypes from 'prop-types';
import { Info, StatItem, StatisticsWrap, Text } from './Statistics.style';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatisticsWrap>
      <StatItem>
        <Text>Good:</Text>
        <Info>{good}</Info>
      </StatItem>
      <StatItem>
        <Text>Neutral:</Text>
        <Info>{neutral}</Info>
      </StatItem>
      <StatItem>
        <Text>Bad:</Text>
        <Info>{bad}</Info>
      </StatItem>
      <StatItem>
        <Text>Total:</Text>
        <Info>{total}</Info>
      </StatItem>
      <StatItem>
        <Text>Positive feedback:</Text>
        <Info>{positivePercentage}</Info>
      </StatItem>
    </StatisticsWrap>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
