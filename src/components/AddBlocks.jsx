import { useState } from "react";
import { Modal, Button, Tabs } from "antd";
import AddTextBlock from "./AddTextBlock";
import AddImageBlock from "./AddImageBlock";

const AddBlocks = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="link"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Add
          </Button>,
        ]}
      >
        <Tabs
          defaultActiveKey="1"
          style={{ marginBottom: 32 }}
          items={[
            {
              label: `Text Block`,
              key: 1,
              children: <AddTextBlock />,
            },
            {
              label: `Image Block`,
              key: 2,
              children: <AddImageBlock />,
            },
          ]}
        />
      </Modal>
    </div>
  );
};

export default AddBlocks;
