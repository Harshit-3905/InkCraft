import { useSelector, useDispatch } from "react-redux";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { moveBlock } from "../store/blockSlice";

const BlocksContainer = () => {
  const blocks = useSelector((state) => state.blocks);
  const dispatch = useDispatch();
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(
      moveBlock({
        sourceIndex: result.source.index,
        destinationIndex: result.destination.index,
      })
    );
  };
  return (
    <div className="w-full flex gap-4 justify-center items-center mt-5">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="uniqueDroppableId">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {block.type === "text" ? (
                        <TextBlock
                          key={block.id}
                          id={block.id}
                          content={block.content}
                        />
                      ) : (
                        <ImageBlock
                          key={block.id}
                          id={block.id}
                          content={block.content}
                        />
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default BlocksContainer;
