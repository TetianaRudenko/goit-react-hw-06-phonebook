import PropTypes from "prop-types";
import { Wrap, Title  } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <Wrap>
      {title && <Title> {title} </Title>}
      {children}
    </Wrap>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export { Section };