import React,{Fragment,useState,useEffect} from 'react'
import Header from '../../layout/Header'
import axios from 'axios'
import { withRouter,useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'

function Nuevo() {
const history = useHistory()
const [master ,setMaster] = useState([]);
const[mastrSexo ,setMastersexo] = useState([]);
const[masterEduacation ,setmasterEduacation] = useState([]);
const[masterTipoJob ,setmasterTipoJob] = useState([]);
const[masterMarital ,setmasterMarital] = useState([]);
const[masterContry,setmasterContry] = useState([]);
const[masterTrabajo,setmasterTrabajo] = useState([]);
const[masterPregunta,setmasterPregunta] = useState([])
const[respuesta,setRespuesta] = useState({})
const[answer,setAnswer] = useState({});

const consultarDoc = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/doctypes"
    const documento = await axios.get(url)
    setMaster(documento.data.doctypes)
}

const consultarSexo = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/sexs"
    const sexo = await axios.get(url)
    setMastersexo(sexo.data.sexs)
}

const consultarEducation = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/educationlevels"
    const educacion = await axios.get(url)
    setmasterEduacation(educacion.data.educationlevels)
}

const consultarTipojob = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/jobtypes"
    const tipoJob = await axios.get(url)
    setmasterTipoJob(tipoJob.data.jobtypes)
}

const consultarMarital = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/maritalstatus"
    const marital = await axios.get(url)
    setmasterMarital(marital.data.maritalstatus)
}

const consultarContry = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/countries"
    const contry = await axios.get(url)
    setmasterContry(contry.data.countries)
}
///traer tipo de trabajo
const opciones = async(e)=>{
    e.preventDefault();
    const opcion = e.target.value
    if(opcion == 1){
  
     const trabajos = await axios.get(`https://api-iglesiapeniel-qa.herokuapp.com/services/masters/jobs/1` )
    setmasterTrabajo(trabajos.data.jobs)
    
    }else if(opcion == 2){
      
    const trabajos =await axios.get(`https://api-iglesiapeniel-qa.herokuapp.com/services/masters/jobs/2` )
      setmasterTrabajo(trabajos.data.jobs)
    }else if(opcion == 3){
        const trabajos =await axios.get(`https://api-iglesiapeniel-qa.herokuapp.com/services/masters/jobs/3` )
        setmasterTrabajo(trabajos.data.jobs)
    }else{
        console.log("SELECT")
        console.clear()
    }
}

const consultarPreguntas = async() =>{
    const url = "https://api-iglesiapeniel-qa.herokuapp.com/services/masters/questionsanswers"
    const pregunta = await axios.get(url)
    setmasterPregunta(pregunta.data.questions)
}

const registerAnswer = (e) =>{
    setAnswer({
        ...answer,
        [e.target.name]:e.target.value
    })
}
const traerId = (e) =>{
     let idquestionUno= document.querySelector("#id").value
     let idquestionDos= document.querySelector("#idDos").value
     let idquestionTres= document.querySelector("#idTres").value
     let idquestionCuatro= document.querySelector("#idCuatro").value
     let idquestionCinco= document.querySelector("#idCinco").value
     let idquestionSeis= document.querySelector("#idSeis").value
     let idquestionSiete= document.querySelector("#idSiete").value
     let idquestionOcho= document.querySelector("#idOcho").value
     let idquestionNueve= document.querySelector("#idNueve").value
    setRespuesta({
        ...respuesta,
        [e.target.name]:e.target.value,
        idquestionUno,
        idquestionDos,
        idquestionTres,
        idquestionCuatro,
        idquestionCinco,
        idquestionSeis,
        idquestionSiete,
        idquestionOcho,
        idquestionNueve
    })
}
const idusuario = localStorage.getItem("iduserItem")

const enviarAnswer = async(e) =>{
    e.preventDefault()
    const Array ={
        answer
    }
    const Arraydos = {
        respuesta
    }
    const questions = {
        ...Array,
        ...Arraydos
    }


    const newArray = {
        "idaction": 1,
        "student": {
            "names": questions.answer.names,
            "lastnames": questions.answer.lastnames,
            "iddoctype": parseInt(questions.answer.iddoctype),
            "docnumber": questions.answer.docnumber,
            "phone": questions.answer.phone,
            "cellphone": questions.answer.cellphone,
            "email": questions.answer.email,
            "address": questions.answer.address,
            "idcountry": parseInt(questions.answer.idcountry),
            "maritalstatus": parseInt(questions.answer.maritalstatus),
            "numberchildren": parseInt(questions.answer.numberchildren),
            "sex": parseInt(questions.answer.sex),
            "birthdate": "2022/05/25",
            "activework": parseInt(questions.answer.activework),
            "ideducationlevel": parseInt(questions.answer.ideducationlevel),
            "idjobtype": parseInt(questions.answer.idjobtype),
            "idjob": parseInt(questions.answer.idjob),
            "userlastmod": parseInt(idusuario),
            "questions": [
                {
                    "idquestion":parseInt(questions.respuesta.idquestionUno),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answersuno)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionDos),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answersdos)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionTres),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answerstres)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionCuatro),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answerscuatro)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionCinco),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answerscinco)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionSeis),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answersseis)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionSiete),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answerssiete)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionOcho),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answersoscho)
                    }
                },
                {
                    "idquestion": parseInt(questions.respuesta.idquestionNueve),
                    "answers": {
                        "idanswer": parseInt(questions.respuesta.answersnueve)
                    }
                }
            ]
        }
    }
    await axios.post("https://api-iglesiapeniel-qa.herokuapp.com/services/students/create",newArray).
    then(Response=>{
        Swal.fire(
            'Exelente',
            'Se guardo cone exito!',
            'success'
          )
     window.location.href ="/panel/Estudiante" ;
    })
}

/// mandar usuario logeado
/// redigirir
const regresar = () =>{
    history.push("/panel/Estudiante")
}


useEffect(()=>{
  
    consultarDoc();
    consultarSexo();
    consultarEducation();
    consultarTipojob();
    consultarMarital();
    consultarContry();
    consultarPreguntas();
    opciones();
    
},[])
  return (
    <Fragment>
        <Header />
        <div className="container-fluid">
            <div className="full m-auto bg-white p-3">
                <h2 className="mt-5 mb-3">Gestion del Estudiante: Registro</h2>
                <h4>Datos de la clase</h4>
                <form  className="full mt-1">
                    <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-4">
                            <div className="form-group full">
                                <label className="text-black">Nombre</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name="names"
                                    onChange={registerAnswer}
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Tipo de documento</label>
                                <select className="form-select border__gray text-black"
                                name='iddoctype' onChange={registerAnswer}
                                >
                                    <option>-- Seleccionar --</option>
                                    {
                                      master.map(document =>(
                                        <option
                                            key={document.iddoctype}
                                            value={document.iddoctype}
                                        >{document.doctype}</option>
                                      ))
                                    }
                                </select>
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Telefono</label>
                                <input 
                                    type="tel" 
                                    className="form-control text-black" 
                                    name='phone'
                                    onChange={registerAnswer}
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Correo</label>
                                <input 
                                    type="email" 
                                    className="form-control text-black" 
                                    name="email"
                                    onChange={registerAnswer}
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Pais</label>
                                <select className="form-select border__gray text-black"
                                name="idcountry" onChange={registerAnswer}
                                >
                                    <option>-- Seleccionar --</option>
                                    {
                                      masterContry.map(paises =>(
                                        <option
                                            key={paises.idcountry}
                                            value={paises.idcountry}
                                        >{paises.country}</option>
                                      ))
                                    }
                                </select>
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">N° de hijos</label>
                                <input 
                                    type="number"  
                                    max="10" min="0" 
                                    className="form-control text-black" 
                                    name="numberchildren"
                                    onChange={registerAnswer}
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Fecha de nacimiento</label>
                                <input 
                                    type="date" 
                                    className="form-control text-black" 
                                    name='birthdate'
                                    onChange={registerAnswer}
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Nivel de estudio</label>
                                <select className="form-select border__gray text-black"
                                name='ideducationlevel' onChange={registerAnswer}
                                >
                                    <option>-- Seleccionar --</option>
                                    {
                                        masterEduacation.map(education =>(
                                            <option
                                                key={education.ideducationlevel}
                                                value={education.ideducationlevel}
                                            >{education.educationlevel}</option>
                                        ))
                                        }
                                </select>
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Tipo de trabajo</label>
                                <select className="form-select border__gray text-black" 
                                 onClick={opciones}
                                 name="idjobtype"
                                 onChange={registerAnswer}
                                 >
                                    <option>-- Seleccionar --</option>
                                    {
                                        masterTipoJob.map(tipojob =>(
                                            <option
                                                key={tipojob.idjobtype}
                                                value={tipojob.idjobtype}
                                             >{tipojob.jobtype}</option>
                                        ))
                                        }
                                </select>
                            </div>
                            

                            <div className="form-group full mt-3">
                            <label className="text-black">Trabajo</label>
                                    <select className="form-select border__gray text-black"
                                    name='idjob' onChange={registerAnswer}
                                    >
                                        <option>-- Seleccionar --</option>
                                        {
                                        masterTrabajo.map(trabajoId =>(
                                            <option
                                                key={trabajoId.idjob}
                                                value={trabajoId.idjob}
                                            >{trabajoId.job}</option>
                                        ))
                                        }
                                    </select>
                            </div>
                            
                        </div>
                        
                        
                        <div className="col-4">
                            <div className="form-group full">
                                <label className="text-black">Apellido</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name="lastnames"
                                    onChange={registerAnswer}
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Numero de documento</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='docnumber'
                                    onChange={registerAnswer}
                                />
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Celular</label>
                                <input 
                                    type="tel" 
                                    className="form-control text-black"
                                    name="cellphone" 
                                    onChange={registerAnswer}
                                />
                            </div>

                            <div className="form-group full mt-3">
                                <label className="text-black">Direccion</label>
                                <input 
                                    type="text" 
                                    className="form-control text-black" 
                                    name='address'
                                    onChange={registerAnswer}
                                />
                            </div>

                            <div className="form-group full mt-3">
                            <label className="text-black">Estado civil</label>
                                    <select className="form-select border__gray text-black"
                                        name='maritalstatus' onChange={registerAnswer}
                                    >
                                        <option>-- Seleccionar --</option>
                                        {
                                        masterMarital.map(estadoCi =>(
                                            <option
                                                key={estadoCi.idmaritalstatus}
                                                value={estadoCi.idmaritalstatus}
                                            >{estadoCi.maritalstatus}</option>
                                        ))
                                        }
                                    </select>
                            </div>
                           
                            <div className="form-group full mt-3">
                                <label className="text-black">Sexo</label>
                                    <select className="form-select border__gray text-black"
                                    name='sex' onChange={registerAnswer}
                                    >
                                        <option>-- Seleccionar --</option>
                                        {
                                        mastrSexo.map(sexito =>(
                                            <option
                                                key={sexito.idsex}
                                                value={sexito.idsex}
                                            >{sexito.sex}</option>
                                        ))
                                        }
                                    </select>
                            </div>
                            <div className="form-group full mt-3">
                                <label className="text-black">Laborando</label>
                                <div className="d-flex flex-wrap justify-content-start align-items-center">
                                    <select className="form-select border__gray text-black"
                                        name='activework' onChange={registerAnswer}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="1">Si</option>
                                            <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <h4 className="mt-5 mb-3">Cuestionario</h4>
                    <div className="form-group full mt-3">
                                <label className="text-black"
                                >¿CUÁNTO TIEMPO TIENE DE CREYENTE CONGREGANDO A LA (UNA) IGLESIA?</label>
                                
                              
                               <input 
                                 value={1}
                                id="id"
                                onChange={traerId}
                                hidden
                               
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"uno"}
                                       
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="1">0-1 AÑO</option>
                                            <option value="2">2-5 AÑOS</option>
                                            <option value="3">MÁS DE 5 AÑOS</option>
                                            <option value="4">N/A</option>
                                    </select>
                              
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿DE SER EL CASO: ¿DE QUÉ IGLESIA Y DENOMINACIÓN PROVIENE?</label>
                                <input 
                                 value={2}
                                id="idDos"
                                onChange={traerId}
                                hidden
                               />
                                 <select className="form-select border__gray text-black"
                                        name={'answers'+"dos"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="5">LAS ASAMBLEAS DE DIOS DEL PERÚ</option>
                                            <option value="6">ACM</option>
                                            <option value="7">IB</option>
                                            <option value="8">IGLESIA LIBRE</option>
                                            <option value="9">N/A</option>
                                    </select>
                              
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿ES USTED BAUTIZADO EN AGUA?</label>
                                <input 
                                 value={3}
                                id="idTres"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"tres"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="10">SI</option>
                                            <option value="11">NO</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿QUÉ CURSOS HA LLEVADO FUERA DE ESTA IGLESIA?</label>
                                <input 
                                 value={4}
                                id="idCuatro"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"cuatro"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="12">DISCIPULADO COMPLETO</option>
                                            <option value="13">INSTITUTO BÍBLICO</option>
                                            <option value="14">N/A</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿HACE CUÁNTO TIEMPO LLEVÓ ESTE(OS) CURSO(S)?</label>idCinco
                                <input 
                                 value={5}
                                id="idCinco"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"cinco"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="15">0-1 AÑO</option>
                                            <option value="16">2-5 AÑOS</option>
                                            <option value="17">MÁS DE 5 AÑOS</option>
                                            <option value="18">N/A</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿QUÉ CURSOS A LLEVADO EN EL DMI?</label>idSeis
                                <input 
                                 value={6}
                                id="idSeis"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"seis"} 
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="19">CONSOLIDACIÓN I</option>
                                            <option value="20">CONSOLIDACIÓN II</option>
                                            <option value="21">DISCIPULADO</option>
                                            <option value="22">DOCTRINA I</option>
                                            <option value="23">DOCTRINA II</option>
                                            <option value="24">DOCTRINA III</option>
                                            <option value="25">DOCTRINA IV</option>
                                            <option value="26">DOCTRINA V</option>
                                            <option value="27">DOCTRINA VI</option>
                                            <option value="28">SERVIR I</option>
                                            <option value="29">SERVIR II</option>
                                            <option value="30">SERVIR II</option>
                                            <option value="31">SERVIR III</option>
                                            <option value="32">SERVIR MINISTERIAL</option>
                                            <option value="33">N/AL</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿HACE CUÁNTO TIEMPO LLEVÓ ESTE(OS) CURSO(S)?</label>
                                <input 
                                 value={7}
                                id="idSiete"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"siete"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="34">0-1 AÑO</option>
                                            <option value="35">2-5 AÑOS</option>
                                            <option value="36">MÁS DE 5 AÑOS</option>
                                            <option value="37">N/A</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">¿CON QUIÉN(ES) VIVE?</label>
                                <input 
                                 value={8}
                                id="idOcho"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"oscho"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="38">SOLO(A)</option>
                                            <option value="39">FAMILIA NUCLEAR</option>
                                            <option value="40">FAMILIA EXTENDIDA</option>
                                            <option value="41">N/A</option>
                                </select>
                    </div>
                    <div className="form-group full mt-3">
                                <label className="text-black">CURSO A INSCRIBIRSE:</label>
                                <input 
                                 value={9}
                                id="idNueve"
                                onChange={traerId}
                                hidden
                               />
                                <select className="form-select border__gray text-black"
                                        name={'answers'+"nueve"}
                                        onChange={traerId}
                                        >
                                            <option>-- Seleccionar --</option>
                                            <option value="42">CONSOLIDACIÓN I</option>
                                            <option value="43">CONSOLIDACIÓN II</option>
                                            <option value="44">DISCIPULADO</option>
                                            <option value="45">DOCTRINA I</option>
                                            <option value="46">DOCTRINA II</option>
                                            <option value="47">DOCTRINA III</option>
                                            <option value="48">DOCTRINA IV</option>
                                            <option value="49">DOCTRINA V</option>
                                            <option value="50">DOCTRINA VI</option>
                                            <option value="51">SERVIR I</option>
                                            <option value="52">SERVIR II</option>
                                            <option value="53">SERVIR II</option>
                                            <option value="54">SERVIR III</option>
                                            <option value="55">SERVIR MINISTERIAL</option>
                                            <option value="56">N/A</option>
                                </select>
                    </div>
                    
                    <div className="form-group full mt-3">
                        <button className="btn btn-success"
                        onClick={enviarAnswer}
                        >Guardar</button>
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

export default withRouter(Nuevo)