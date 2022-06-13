import React,{Fragment,useState,useEffect} from 'react'
import Header from '../../layout/Header'
import { withRouter,useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
function Ver(props) {
    const{idver} = props.match.params;
    const[ver,setVer] = useState([])
    const history = useHistory()
    const regresar = () =>{
        history.push("/panel/Estudiante")
    }
    
    const verquery = async() =>{
        const objedit ={
            "idaction": 2,
            "student":{
                "idstudent":idver,
                "factor": 20,
                "pagination": 60
            }
        }
    
        const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/students/read"
        const  verAlumno = await axios.post(url,objedit)
        setVer(verAlumno.data.students[0])
    }



    useEffect(()=>{
        verquery()
    })

  
  return (
    <Fragment>
         <Header />
        <div className="container-fluid">
            <div className="full m-auto bg-white p-3">
                <h2 className="mt-5 mb-3 text-center">Gestion del Estudiante: Editar</h2>
                <h4>Datos de la clase</h4>
                <h5>Cod: {ver.student} </h5>
                <form  className="full mt-1">
                    <div className="d-flex flex-wrap justify-content-between">

                    <div className="col-4">
                            <div className="form-group full">
                                <label className="text-black">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name="names"
                                    value={ver.names}
                                   disabled
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Tipo de documento</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name="names"
                                   
                                   disabled
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Telefono</label>
                                <input 
                                    type="tel" 
                                    className="form-control text-black" 
                                    name='phone'
                                    value={ver.phone}
                                   disabled
                                   
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Correo</label>
                                <input 
                                    type="email" 
                                    className="form-control text-black" 
                                    name="email"
                                    value={ver.email}
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Pais</label>
                                <input 
                                    type="email" 
                                    className="form-control text-black" 
                                    name="country"
                                    disabled
                                />
                                
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">N° de hijos</label>
                                <input 
                                    type="number"  
                                    max="10" min="0" 
                                    className="form-control text-black" 
                                    name="numberchildren"
                                    value={ver.numberchildren}
                                    disabled
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Fecha de nacimiento</label>
                                <input 
                                    type="date" 
                                    className="form-control text-black" 
                                    name='birthdate'
                                    value={ver.birthdate}
                                    disabled
                                />
                            </div>

                            <div className="form-group full mt-3">

                                <label className="text-black">Nivel de estudio</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='educationlevel'
                                    disabled
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Tipo de trabajo</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='jobtype'
                                    disabled
                                />
                                
                            </div>
                            

                            <div className="form-group full mt-3">
                                <label className="text-black">Trabajo</label>
                                    <input 
                                            type="text" 
                                            className="form-control text-black" 
                                            name='job'
                                            disabled
                                        />
                                   
                            </div>
                            
                        </div>
                  
                        
                        <div className="col-4">
                            <div className="form-group full">
                                <label className="text-black">Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name="lastnames"
                                    value={ver.lastnames}
                                    disabled
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Numero de documento</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='docnumber'
                                    value={ver.docnumber}
                                    disabled
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Celular</label>
                                <input 
                                    type="tel" 
                                    className="form-control text-black"
                                    name="cellphone" 
                                    value={ver.cellphone}
                                    disabled
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Direccion</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='address'
                                    value={ver.address}
                                    disabled
                                />
                            </div>

                            <div className="form-group full mt-3">
                            <label className="text-black">Estado civil</label>
                              <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='maritalstatus'
                                    
                                    disabled
                                />
                                  
                            </div>
                           
                            <div className="form-group full mt-3">
                                <label className="text-black">Sexo</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='sex'
                                    
                                    disabled
                                />
                                    
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Laborando</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='activework'
                                    value={ver.activework == 1 ? "Si ": "No" }
                                    disabled
                                />
                            </div>
                            
                        </div>
                    </div>
                     
                 
                    <h4 className="mt-5 mb-3">Cuestionario</h4>
                    <div className="form-group full mt-3">
                         <label className="text-black"
                        >¿CUÁNTO TIEMPO TIENE DE CREYENTE CONGREGANDO A LA (UNA) IGLESIA?</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                              
                               
                        </div>
                    <div className="form-group full mt-3">
                        <label className="text-black">¿DE SER EL CASO: ¿DE QUÉ IGLESIA Y DENOMINACIÓN PROVIENE?</label>
                        <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                    </div>
                    <div className="form-group full mt-3">
                         <label className="text-black">¿ES USTED BAUTIZADO EN AGUA?</label>
                         <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                    </div>
                    <div className="form-group full mt-3">
                         <label className="text-black">¿QUÉ CURSOS HA LLEVADO FUERA DE ESTA IGLESIA?</label>
                         <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />  
                    </div>
                    <div className="form-group full mt-3">
                        <label className="text-black">¿HACE CUÁNTO TIEMPO LLEVÓ ESTE(OS) CURSO(S)?</label>idCinco
                        <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                    </div>
                    <div className="form-group full mt-3">
                        <label className="text-black">¿QUÉ CURSOS A LLEVADO EN EL DMI?</label>idSeis
                        <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />  
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿HACE CUÁNTO TIEMPO LLEVÓ ESTE(OS) CURSO(S)?</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                                
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿CON QUIÉN(ES) VIVE?</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">CURSO A INSCRIBIRSE:</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='answers'
                                    
                                    disabled
                                />
                    </div>
                    
                    <div className="form-group full mt-3">
                       
                        <button
                        className="btn btn-danger mx-3"
                     
                        onClick={regresar}
                        >Cancelar</button>
                    </div>
                </form>
            
            </div>    
            
        </div>   
        <br></br>

    </Fragment>
  )
}

export default withRouter(Ver)