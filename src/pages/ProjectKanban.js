import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import "./ProjectKanban.css";

function ProjectKanban() {
  // Kanban State
  const [columns, setColumns] = useState({
    todo: {
      title: "🟥 Not Started",
      items: [
        { id: "1", name: "Portfolio Website" },
        { id: "2", name: "AI Chatbot" },
      ],
    },
    progress: {
      title: "🟨 In Progress",
      items: [{ id: "3", name: "E-Learning Platform" }],
    },
    done: {
      title: "🟩 Completed",
      items: [{ id: "4", name: "Health Tracker App" }],
    },
  });

  // DRAG & DROP LOGIC
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const sourceCol = columns[result.source.droppableId];
    const destCol = columns[result.destination.droppableId];

    const draggedItem = sourceCol.items[result.source.index];

    // Remove from source
    sourceCol.items.splice(result.source.index, 1);

    // Add to destination
    destCol.items.splice(result.destination.index, 0, draggedItem);

    setColumns({ ...columns });
  };

  return (
    <div className="kanban-wrapper">
      <h1 className="kanban-title">🏗 Project Kanban Board</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="kanban-board">
          {Object.entries(columns).map(([id, column]) => (
            <Droppable droppableId={id} key={id}>
              {(provided) => (
                <div
                  className="kanban-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2>{column.title}</h2>

                  {column.items.map((item, index) => (
                    <Draggable
                      draggableId={item.id}
                      index={index}
                      key={item.id}
                    >
                      {(provided) => (
                        <div
                          className="kanban-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {item.name}
                        </div>
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default ProjectKanban;
