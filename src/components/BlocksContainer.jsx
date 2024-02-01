import { useSelector } from "react-redux";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

const BlocksContainer = () => {
  const blocks = useSelector((state) => state.blocks);
  console.log(blocks);
  return (
    <div>
      {blocks.map((block) =>
        block.type === "text" ? (
          <TextBlock key={block.id} content={block.content} />
        ) : (
          <ImageBlock key={block.id} content={block.content} />
        )
      )}
    </div>
  );
};

export default BlocksContainer;
