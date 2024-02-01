import { Card } from "antd";
import parse from "html-react-parser";
import PropTypes from "prop-types";

const TextBlock = ({ content }) => {
  return <Card style={{ width: 300 }}>{parse(content)}</Card>;
};

TextBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TextBlock;
