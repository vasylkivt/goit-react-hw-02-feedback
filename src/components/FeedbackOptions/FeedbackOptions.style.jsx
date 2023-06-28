import styled from 'styled-components';

function getColor(color, option) {
  switch (option) {
    case 'good':
      return color.green;
    case 'neutral':
      return color.yellow;
    case 'bad':
      return color.red;

    default:
      return '#ededed';
  }
}

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled.button`
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: 500;

  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 15px 5px #838383;
  background-color: ${({ theme }) => theme.colors.backgroundColorBtn};

  transition: color 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    box-shadow 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    text-shadow 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    font-size 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1),
    background-color 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus {
    transform: scale(1.15);
    text-shadow: 2px 0px 3px #838383, -2px 0px 3px #838383, 0px 2px 3px #838383,
      0px -2px 3px #838383;

    font-size: 22px;
    color: ${({ theme, option }) => getColor(theme.colors, option)};
    box-shadow: 0px 0px 15px 5px
      ${({ theme, option }) => getColor(theme.colors, option)};
    background: radial-gradient(
      circle at 50% 50%,
      #ffffff 0,

      ${({ theme, option }) => getColor(theme.colors, option)} 100%
    );
  }
`;
