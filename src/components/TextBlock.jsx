import { Card, Modal, Button } from "antd";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBlock, updateBlock } from "../store/blockSlice";
import AddTextBlock from "./AddTextBlock";

const TextBlock = ({ id, content }) => {
  const [text, setText] = useState(content);
  const [ishover, setIshover] = useState(false);
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
    dispatch(
      updateBlock({
        id,
        type: "text",
        content: text,
      })
    );
  };
  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <Card
      className="w-[400px]  bg-orange-500 flex flex-col"
      onMouseEnter={() => setIshover(true)}
      onMouseLeave={() => setIshover(false)}
    >
      <div>{parse(content)}</div>
      {ishover && (
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
        <AddTextBlock content={content} onTextChange={setText} />
      </Modal>
    </Card>
  );
};

TextBlock.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TextBlock;
