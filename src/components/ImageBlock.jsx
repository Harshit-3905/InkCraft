import { Card } from "antd";
import PropTypes from "prop-types";

const ImageBlock = ({ content }) => {
  return (
    <Card style={{ width: 300 }}>
      <img src={content} />
    </Card>
  );
};

ImageBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ImageBlock;
