import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";

let modules = {
  toolbar: [["bold", "italic", "underline"]],
};
let formats = ["bold", "italic", "underline"];
const AddTextBlock = () => {
  const [text, setText] = useState("");
  const handleProcedureContentChange = (content) => {
    setText(content);
  };
  return (
    <div className="mb-4">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Write Text Here"
        onChange={handleProcedureContentChange}
        style={{ height: "220px" }}
        maxLength="250"
      />
    </div>
  );
};

export default AddTextBlock;
