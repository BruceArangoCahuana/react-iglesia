import React,{Fragment,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Header from '../../layout/Header'
import axios from 'axios'


function Gestion() {
const[viewEstudiante,setviewEstudiante] = useState([])
   const url= `/editar/editar/`
    console.log(url)
   const redigiriCancel = (e) =>{
    e.preventDefault()
    const url = "/panel"
    window.location.href = url
    }

    const redigirNuevo = (e) =>{
        e.preventDefault()
        const url = "/panel/nuevo"
        window.location.href = url
    } 
    const eliminar = (idalumno) =>{
        Swal.fire({
            title: '¿Estas seguro de eliminar?',
            text: "Una vez eliminano no se podra recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                const arrayEliminar ={
                    "idaction": 3,
                    "student": {
                        "idstudent": idalumno
                    }
                }
                axios.post("https://api-iglesiapeniel-qa.herokuapp.com/services/students/delete",arrayEliminar)
              Swal.fire(
                'Eliminado!',
                'Se elimino correctamente.',
                'success'
              )
            }
          })
    }


    const queryMostrardato = async() =>{
     
         const arrayStudent ={
            "idaction": 2,
            "student":{
                "idstudent": 0,
                "factor": 20,
                "pagination": 60
            }
        }
        const viewstudent = await axios.post("https://api-iglesiapeniel-qa.herokuapp.com/services/students/read",arrayStudent)
        setviewEstudiante(viewstudent.data.students)
    }

   
    
    useEffect(()=>{
        queryMostrardato()
        
    },[])
  return (
    <Fragment>
        <Header />
        <div className="container-fluid">
            <div  className="full bg-white p-3">
                <h2 className="">Gestion del Estudiante</h2>
          
            <div className="full m-auto full__media">
                <div className="form-group d-flex justify-content-end">
                    <Link className="btn btn-danger me-4" to="/panel"
                     onClick={redigiriCancel}
                    >Cancelar</Link>
                    <button className="btn btn-success"
                    onClick={redigirNuevo}
                    >
                        Crear nuevo
                    </button>
                </div>
             </div>
            <div className="full  m-auto  mt-5 full__media">
                    <form className="d-flex justify-content-start full__media">
                        <div className="form-group col-4">
                            <input 
                                type="text" 
                                placeholder="Buscar Alumno..." 
                                className="form-control" />
                        </div>
                        <div className="form-group justify-content-end">
                            <button className="btn btn-info me-4" 
                            style={{marginLeft: "20px",background:"#1F618D"}}>Buscar</button>
                           
                        </div>
                    </form>
            </div>
            <div className="full m-auto mt-5">
                <table className="table table-hover border__table">
                    <thead className="bg-gray" style={{backgroundColor:"rgb(70, 64, 64)"}}>
                    <tr>
                        <th scope="col" className="text-white">Codigo Estudiante</th>
                        <th scope="col" className="text-white">Nombres</th>
                        <th scope="col" className="text-white">Apellidos</th>
                        <th scope="col" className="text-white">DNI</th>
                        <th scope="col" className="text-white">Estado</th>
                        <th scope="col text-center" className="text-white">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       viewEstudiante.map(estudent =>(
                        <tr className="table-active bg-white"
                        key={estudent.idstudent}
                        >
                        <th scope="row">{estudent.student}</th>
                        <td>{estudent.names}</td>
                        <td>{estudent.lastnames}</td>
                        <td>{estudent.docnumber}</td>
                        <td>{estudent.currentstatusstudent.currentstatus}</td>
                            <td className="acciones">
                                <Link  to={`/panel/ver/${estudent.idstudent}`}
                                onClick={() => {
                                    window.location.href =`/panel/ver/${estudent.idstudent}` 
                               }}
                                >   
                                    <i className="fa-solid fa-eye  me-3 icono__hover" 
                                    style={{cursor:"pointer"}} id="guardar"></i>
                                </Link>
                            
                                <Link to={`/panel/editar/${estudent.idstudent}`}
                                onClick={() => {
                                     window.location.href =`/panel/editar/${estudent.idstudent}` 
                                }}
                                >
                                    <i className="fa-solid fa-pen me-3 icono__hover" 
                                    style={{cursor:"pointer"}} id="habilitado"></i>
                                </Link>
                                <i className="fa-solid fa-trash-can me-3 icono__hover" 
                                style={{cursor:"pointer"}}
                                value="1"
                                onClick={()=>eliminar(estudent.idstudent)}
                                ></i>
                            </td>
                        </tr>
                       ))
                    
                    }
                   
                    
                    </tbody>
                </table>
                <div>
                    <ul className='d-flex justify-content-end list__none'>
                      
                        <li className='me-3'>
                            1
                        </li>
                        <li className='me-3'>
                            2
                        </li>
                        <li className='me-3'>
                            3
                        </li>
                    </ul>
                </div>
        </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Gestion