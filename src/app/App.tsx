import Draggable from "@/shared/ui/Draggable";
import Droppable from "@/shared/ui/Droppable";
import { DndContext, type DragEndEvent, type UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";

export default function App() {

  const containers = ["drop-cnt-1", "drop-cnt-2", "drop-cnt-3"];
  const [parent, setParent] = useState<UniqueIdentifier | undefined>(undefined);

  const draggableMarkup = <Draggable id="draggable-item">Drag Me</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!parent && draggableMarkup}
      <div className="flex gap-4">
        {
          containers.map(cnt =>
            <Droppable id={cnt}>
              { parent === cnt ? draggableMarkup : "Drop Here..."}
            </Droppable>
          )
        }
      </div>

    </DndContext>
  );

  function handleDragEnd(e: DragEndEvent) {
    const { over } = e;
    setParent(over ? over.id : undefined);
  }
}