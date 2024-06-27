import { TasksList } from "../components/TasksList";

export function TasksPage() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "800px",
        margin: "40px auto",
      }}
    >
      <TasksList
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
        }}
      />
    </div>
  );
}