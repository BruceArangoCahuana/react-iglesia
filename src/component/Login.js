import React,{Fragment,useState} from 'react'
import { withRouter} from 'react-router-dom';
import Spiner from '../layout/Spiner';
import Swal from 'sweetalert2';
import axios from 'axios'




function Login() {
//const[result,setAuth] = useContext(Context)

const[creadencial,guardarCredencial] = useState({})
const[spiner,setSpinner] = useState(false)



const inciarsession = async(e) =>{
    e.preventDefault();
    try {
       const respuesta = await axios.post("https://apipruebacaleb.herokuapp.com/services/dmi/login",creadencial)
       
       const{result,message,userdata}  = respuesta.data
       
       const nombreItem = userdata.names
       const roleItem = userdata.role
       const idroleItem = userdata.idrole
       const iduserItem = userdata.iduser
       const apellidoItem = userdata.lastnames
       localStorage.setItem("result",result)
       localStorage.setItem("nombreItem",nombreItem)
       localStorage.setItem("apellidoItem",apellidoItem)
       localStorage.setItem("roleItem",roleItem)
       localStorage.setItem("idroleItem",idroleItem)
       localStorage.setItem("iduserItem",iduserItem)
       
       
       const objUserdata = {
        "userdata": {
            "iduser": iduserItem,
            "idrole": idroleItem
        }
       }
       
      setSpinner(true)
     
       const respuestaModulo = await axios.post("https://api-iglesiapeniel-qa.herokuapp.com/services/dmi/access/getprofile",objUserdata)
      
       const arrayModulo = respuestaModulo
       localStorage.setItem("arrayModulo",JSON.stringify(arrayModulo))
       
       setTimeout(() => {
                 setSpinner(false)
        }, 2000);
  
       window.location.href ="/panel" ; 
       
     } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Login...',
            text: "usuario o contraseña invalida",
           })
    }
     
}

const registro = (e) =>{
    guardarCredencial({
        ...creadencial,
        [e.target.name]:e.target.value
    })
    
}


  return (
    <Fragment>
        <div className="col-3 m-auto mt-5 card__login">
            <form onSubmit={inciarsession} className="card__login p-3 full__media">
                <div className="col-2 m-auto">
                    <img src="./img/logoDMI.png" alt="logo" className="img-fluid" />
                </div>
                <div className="form-group">
                    <label className='text__bolder'>Usuario</label>
                    <input type="text" 
                           className="form-control" 
                           placeholder="Ingresar tu usuario" 
                           name="user"
                           onChange={registro}
                    />
                </div>
                <div className="form-group mt-3">
                    <label className='text__bolder'>Contraseña</label>
                    <input type="password" 
                           className="form-control" 
                           placeholder="Ingresar tu usuario" 
                           name="password"
                           onChange={registro}
                    />
                </div>
                <div className="form-group mt-4">
                    <button 
                        className="btn btn-danger p-2" 
                        style={{width:"100%",fontSize:"19px"}}
                    >
                            Iniciar Session
                    </button>
                </div>
            </form>
            {
            spiner ?  <Spiner /> : " "
            }
        </div>
        
       
    </Fragment>
  )
}

export default withRouter(Login)