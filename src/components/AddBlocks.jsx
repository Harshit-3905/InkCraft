import { useState } from "react";
import { Modal, Button, Tabs } from "antd";
import AddTextBlock from "./AddTextBlock";
import AddImageBlock from "./AddImageBlock";
import { useDispatch } from "react-redux";
import { addBlock } from "../store/blockSlice";

const AddBlocks = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("text");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const showModal = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    setLoading(true);
    const block = {
      id: new Date().getTime().toString(),
      type,
      content,
    };
    dispatch(addBlock(block));
    setContent("");
    setOpen(false);
    setLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="h-full flex justify-center items-center">
      <button
        onClick={showModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Block
      </button>
      <Modal
        open={open}
        title="Add Block"
        onOk={handleAdd}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="link"
            type="primary"
            loading={loading}
            onClick={handleAdd}
          >
            Add
          </Button>,
        ]}
      >
        <Tabs
          style={{ marginBottom: 32 }}
          onChange={(key) => setType(key === "1" ? "text" : "image")}
          defaultActiveKey="1"
        >
          <Tabs.TabPane tab="Text Block" key="1">
            <AddTextBlock content={content} onTextChange={setContent} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Image Block" key="2">
            <AddImageBlock content={content} onImageChange={setContent} />
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default AddBlocks;
