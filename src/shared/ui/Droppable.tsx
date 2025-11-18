import { useDroppable, type UniqueIdentifier } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DroppableProps = {
    children: ReactNode;
    id: UniqueIdentifier;
}

export default function Droppable({ children, id }: DroppableProps) {

    const { isOver, setNodeRef } = useDroppable({ id });

    return (
        <div ref={setNodeRef}
            className={`${isOver && 'border-sky-400 bg-sky-100 border-dotted'} border-2 p-4 w-50 h-50 rounded-md`}>
            {children}
        </div>
    );
}