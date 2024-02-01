import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

let modules = {
  toolbar: [["bold", "italic", "underline"]],
};
let formats = ["bold", "italic", "underline"];

const AddTextBlock = ({ content, onTextChange }) => {
  const [text, setText] = useState(content);
  const handleProcedureContentChange = (content) => {
    setText(content);
    onTextChange(content);
  };
  useEffect(() => {
    setText(content);
  }, [content]);
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
        value={text}
      />
    </div>
  );
};

AddTextBlock.propTypes = {
  content: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default AddTextBlock;
