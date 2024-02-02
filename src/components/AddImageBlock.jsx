import PropTypes from "prop-types";

const AddImageBlock = ({ onImageChange }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
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
    </div>
  );
};

AddImageBlock.propTypes = {
  onImageChange: PropTypes.func.isRequired,
};

export default AddImageBlock;
