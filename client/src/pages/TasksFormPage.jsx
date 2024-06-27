import { useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TasksFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Tarea actualizada");
    } else {
      await createTask(data);
      toast.success("Tarea creada");
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data: { title, description } } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask();
  }, []);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Tittle"
          {...register("title", { required: true })}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        {errors.title && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            THIS FIELD IS REQUIERED
          </span>
        )}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        {errors.description && (
          <span
            style={{
              color: "red",
              fontSize: "12px",
              marginBottom: "10px",
            }}
          >
            THIS FIELD IS REQUIERED
          </span>
        )}
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "#ffffff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success("Tarea eliminada");
              navigate("/tasks");
            }
          }}
          style={{
            backgroundColor: "#ff0000",
            color: "#ffffff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}