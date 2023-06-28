import PropTypes from 'prop-types';

import { SectionWrap, SectionTitle, Container } from './Section.style';

export default function Section({ title, /* styles, */ children }) {
  return (
    <SectionWrap
    // $sectionStyles={styles}
    >
      <Container>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </Container>
    </SectionWrap>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
