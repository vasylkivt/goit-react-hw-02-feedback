import styled from 'styled-components';

export const SectionWrap = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;
/* background-color: ${({ $sectionStyles }) =>
    $sectionStyles.backgroundColor || '#ffffff'}; */

export const Container = styled.div`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  /* @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  } */
`;

export const SectionTitle = styled.h1`
  margin-bottom: 45px;
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: 700;

  font-size: 36px;
  line-height: 1.11;
  letter-spacing: 0.72px;
  text-align: center;
  text-transform: capitalize;
`;
