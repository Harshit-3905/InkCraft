import { useState } from "react";
import PropTypes from "prop-types";

const AddImageBlock = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSelectedImage(reader.result);
        onImageChange(reader.result);
      };
    }
  };
  return (
    <div>
      <label htmlFor="image">Add Image : </label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <h2>Preview:</h2>
          <img src={selectedImage} alt="Preview" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

AddImageBlock.propTypes = {
  onImageChange: PropTypes.func.isRequired,
};

export default AddImageBlock;
