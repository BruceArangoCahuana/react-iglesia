import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom'

function Header() {
     const nombreUsuario = localStorage.getItem("nombreItem")
     
    const[usuario,setUsuario] =useState({
        nombreUsuario
    })
    console.warn(setUsuario)
    console.clear()
    const cerra = ()=>{
        localStorage.clear();
        window.location.href ="/" ;
      }
   
  return (
    <Fragment>
        <div className="container-fluid">
            <div className="ful m-auto mt-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                    <Link className="navbar-brand col-1"  to="/#">
                        <img src="../img/logoDMI.png" alt="" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa-solid fa-bars" style={{fontSize: "20px"}}></i></Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="#">Gestion del estudiante</Link>
                            <Link className="dropdown-item" to="#">Estudiante</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Gestion del curso</Link>
                            <Link className="dropdown-item" to="#">Gestion asistencia</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Reportes</Link>
                            <Link className="dropdown-item" to="#">Reportes de notas</Link>
                            <Link className="dropdown-item" to="#">Reportes de asistencia</Link>
                            </div>
                        </li>
                        </ul>
                        <div>
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle text-white btn btn-danger lowerCase__person" data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false" 
                                style={{backgroundColorolor:"rgb(233, 18, 18)"}}>
                                    {
                                    usuario.nombreUsuario
                                    }
                                </Link>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="#">About</Link>
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item"
                                        onClick={cerra}
                                    >Cerrar sesion <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                                    
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        </div>

       
    </Fragment>
  )
}

export default Header