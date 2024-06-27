import { Link } from "react-router-dom"

export function Navigation(){
  return(
    <div style={{
      backgroundColor: '#f0f0f0',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/tasks" style={{
        textDecoration: 'none',
        color: '#333',
        marginRight: '20px',
        fontSize: '24px' // Agregué este estilo para igualar el tamaño de la letra
      }}>
        Task App
      </Link>
      <Link to="/tasks-create" style={{
        textDecoration: 'none',
        color: '#333',
        fontSize: '24px' // Agregué este estilo para igualar el tamaño de la letra
      }}>Create Tasks</Link>
    </div>
  )
}