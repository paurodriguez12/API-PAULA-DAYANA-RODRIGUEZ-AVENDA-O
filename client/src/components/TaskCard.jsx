import {useNavigate} from "react-router-dom"

export function TaskCard({task}){

    const navigate = useNavigate()

    return(
        <div style={{
          background: "#101010",
          padding: "1rem",
          borderRadius: "10px",
          cursor: "pointer",
          margin: "1rem" // Add some margin to separate the cards
        }}

            onClick={() => {
                navigate(`/tasks/${task.id}`)
            }}
        >
            <h1 style={{
              color: "#fff",
              margin: 0
            }}>{task.title}</h1>
            <p style={{
              color: "#ccc",
              fontSize: "1.2rem"
            }}>{task.description}</p>
            <hr style={{
              borderColor: "#333",
              margin: "1rem 0"
            }} />
        </div>
    )
  }