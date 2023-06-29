import styled from 'styled-components';

export const StatisticsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Text = styled.div`
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;
`;

export const FeedbackValueWrap = styled.div`
  display: flex;

  margin: 0 auto;
  gap: 33px;
`;

export const Info = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;
  background: ${({ theme }) => theme.colors.linearGradient};
  /* border: 1px solid black; */
  min-width: 100px;
  border-radius: 50%;

  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PositiveFeedbackWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 500px;
  margin: 0 auto;
  gap: 10px;
  & p:first-child {
    font-size: 18px;
    line-height: 1.11;
    letter-spacing: 0.72px;
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.textColor};
    font-weight: 500;
  }

  & p:last-child {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
    background-color: ${({ theme, $positivePercentage }) =>
      getBgColor(theme.colors, $positivePercentage)};
    /* border: 1px solid black; */
    max-width: 500px;

    width: ${({ $positivePercentage }) => $positivePercentage};
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function getBgColor(color, option) {
  const num = Number.parseInt(option);
  console.log(color);
  console.log(num);

  if (num > 66) {
    return color.green;
  } else if (num > 33) {
    return color.yellow;
  } else {
    return color.red;
  }
}
