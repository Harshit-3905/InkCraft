import { Card } from "antd";
import PropTypes from "prop-types";

const ImageBlock = ({ content }) => {
  return (
    <Card className="w-[400px] bg-orange-500">
      <img src={content} />
    </Card>
  );
};

ImageBlock.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ImageBlock;
