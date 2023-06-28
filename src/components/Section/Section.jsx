import PropTypes from 'prop-types';
import { SectionWrap, Title } from './Section.style';

export default function Section({ title, styles, children }) {
  return (
    <SectionWrap stylesss={styles}>
      <Title>{title}</Title>
      {children}
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
