import propTypes from "prop-types";

const NewComponent = (props) => {
  return <div>{props.name}</div>;
};

NewComponent.defaultProps = {
  name: "^^*"
};

NewComponent.propTypes = {
  name: propTypes.string.isRequired
};

export default NewComponent;
