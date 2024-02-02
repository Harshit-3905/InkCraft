import { Card, Modal, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBlock } from "../store/blockSlice";
import { useState } from "react";
import AddImageBlock from "./AddImageBlock";

const ImageBlock = ({ id }) => {
  const [image, setImage] = useState(sessionStorage.getItem(id));
  const [isHover, setIsHover] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const editBlock = () => {
    setEdit(true);
  };

  const deleteBlock = () => {
    dispatch(removeBlock(id));
  };

  const handleEdit = () => {
    setEdit(false);
    // Call a function to handle the update
    handleUpdateBlock();
  };

  const handleUpdateBlock = () => {
    sessionStorage.setItem(id, image);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <Card
      className="w-[400px] bg-orange-500"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={image} alt="Image" />
      {isHover && (
        <div className="mt-5 flex gap-4">
          <Button className="bg-yellow-500" onClick={editBlock}>
            Edit
          </Button>
          <Button className="bg-red-500" onClick={deleteBlock}>
            Delete
          </Button>
        </div>
      )}
      <Modal
        open={edit}
        title="Edit Block"
        onOk={handleEdit}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="link" type="primary" onClick={handleEdit}>
            Save
          </Button>,
        ]}
      >
        {/* Pass 'image' state instead of 'content' */}
        <AddImageBlock content={image} onImageChange={setImage} />
      </Modal>
    </Card>
  );
};

ImageBlock.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ImageBlock;
