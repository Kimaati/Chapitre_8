import React from "react";
import PropTypes from "prop-types";

const Tag = ({ tag }) => {
  return <span className="tag">{tag}</span>;
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
