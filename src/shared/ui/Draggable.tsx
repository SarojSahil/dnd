import { useDraggable, type UniqueIdentifier } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DraggableProps = {
    children: ReactNode;
    id: UniqueIdentifier;
}

export default function Draggable({children, id}: DraggableProps) {

    const { listeners, attributes, setNodeRef, transform } = useDraggable({ id });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
    } : undefined;

    return (
        <div ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`border p-2 rounded-md w-24 text-center`}>
            {children}
        </div>
    );
}