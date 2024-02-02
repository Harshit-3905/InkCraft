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
  const [textcontent, setTextContent] = useState("");
  const [imagecontent, setImageContent] = useState("");
  const dispatch = useDispatch();
  const showModal = () => {
    setOpen(true);
  };

  const handleAdd = () => {
    setLoading(true);
    const id = new Date().getTime().toString();
    if (type === "image") {
      sessionStorage.setItem(id, imagecontent);
    }
    const block = {
      id,
      type,
      content: type === "image" ? id : textcontent,
    };
    dispatch(addBlock(block));
    setTextContent("");
    setImageContent("");
    setOpen(false);
    setLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div className="mt-5 flex justify-center items-center">
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
          defaultActiveKey="1"
          style={{ marginBottom: 32 }}
          onChange={(key) => setType(key === "1" ? "text" : "image")}
          items={[
            {
              key: "1",
              label: "Text",
              children: (
                <AddTextBlock
                  content={textcontent}
                  onTextChange={setTextContent}
                />
              ),
            },
            {
              key: "2",
              label: "Image",
              children: <AddImageBlock onImageChange={setImageContent} />,
            },
          ]}
        ></Tabs>
      </Modal>
    </div>
  );
};

export default AddBlocks;
