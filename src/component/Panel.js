import React,{Fragment,useState} from 'react'
import { Link } from 'react-router-dom'
import Header from '../layout/Header'


function Panel(props) {
  //const[result,setAuth] = useContext(Context)
  const nombreUsuario = localStorage.getItem("nombreItem")
  const rolUsuario = localStorage.getItem("roleItem")
  const apellido = localStorage.getItem("apellidoItem")
  let  arrayModulo = localStorage.getItem("arrayModulo")
  const newArraay = JSON.parse(arrayModulo)

 const[usuario,setUsuario] =useState({
     nombreUsuario,
     rolUsuario,
     apellido
  })

  console.warn(setUsuario)
  console.clear()
  const[modulos,setModulos] = useState(newArraay.data.modules)
  console.warn(setModulos)
  console.clear()
  const validarSession = () =>{
      const key = localStorage.getItem("result")
      if(key === false || key === undefined){
        window.location.href ="/" ;
      }
      return
  }
  validarSession()

 const redirigir = (e) =>{
   e.preventDefault()
   const url = "/panel/"+modulos[0].submodules[0].submodule_short
   window.location.href = url
 }
  return (
    <Fragment>
      
       <Header />
       <div className="container-fluid">
          <div className="bg-white p-3 mb-5 full__media">
          <h2 className="text-center mt-5 lowerCase__person" >Bienvenido {usuario.rolUsuario} <span style={{fontWeight:"bold"}}>{usuario.nombreUsuario+" "}{usuario.apellido} </span> </h2>
            
              <div className="col-9 d-flex flex-wrap m-auto just justify-content-evenly mt-5 full__media">
              {
                       modulos[0] ?
                  <div className="col-3.5 bg-primary card__heigth  p-3 full__media" 
                    style={{height:"130px",background:"rgb(21, 131, 21)"}}
                    >
                 
                      <ul className="navbar-nav me-auto text-center">
                      <li className="nav-item dropdown">
                          
                          {
                          modulos[0].module?
                          <Link className="nav-link dropdown-toggle text-white"  data-bs-toggle="dropdown"  role="button" aria-haspopup="true"   aria-expanded="false" to="/#">{ modulos[0].module}</Link>:" "
                          }
                         

                        <div className="dropdown-menu">
                        {
                          modulos[0].submodules?
                              modulos[0].submodules.map( submod =>(
                                  <Link key={submod.idsubmodule} className="dropdown-item" to={{pathname:"/panel/"+submod.submodule_short.replace(/\s+/g, '')}}
                                  onClick={redirigir}
                                  >
                                    {submod.submodule}
                                </Link>
                                
                              ))
                              :""
                            }
                        </div>
                      </li>
                    </ul>
                    <p className="text-center" style={{fontSize:"30px"}}
                    ><i className="fa-solid fa-folder-open text-white"></i></p>
                   
                  </div>
                   :"" } 
                  {
                       modulos[1] ?
                  <div className="col-3.5 bg-danger card__heigth  full__media p-3"
                    style={{height:"130px",background:"goldenrod!important"}}
                  >
                   
                    <ul className="navbar-nav me-auto text-center">
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" to="/#" role="button" aria-haspopup="true" aria-expanded="false">{modulos[1].module}</Link>

                        <div className="dropdown-menu">
                            
                            {
                              modulos[1].submodules.map( submod =>(
                                  <Link key={submod.idsubmodule} className="dropdown-item"
                                  to={submod.submodule_short.replace(/\s+/g, '')}
                                  >
                                    {submod.submodule}
                                </Link>
                                
                              ))
                            }
                        </div>
                      </li>
                    </ul>
                      <p className="text-center" style={{fontSize:"30px"}}
                      ><i className="fa-solid fa-file-lines text-white"></i></p>
                  </div>
                  :"" } 
                   
                   {   modulos[2] ?
                  <div className="col-4 bg-danger card__heigth full__media p-3 mt-3" 
                  style={{height:"130px"}}
                  >
                    <ul className="navbar-nav me-auto text-center">
                      <li className="nav-item dropdown">
                          <Link className="nav-link dropdown-toggle text-white"    data-bs-toggle="dropdown" to="/#" role="button" aria-haspopup="true"   aria-expanded="false">
                          {modulos[2].module}
                          </Link>

                        <div className="dropdown-menu">
                        {
                              modulos[2].submodules.map( submod =>(
                                  <Link key={submod.idsubmodule} className="dropdown-item"
                                  to={submod.submodule_short.replace(/\s+/g, '')}
                                  >
                                    {submod.submodule}
                                </Link>
                                
                              ))
                            }
                        </div>
                      </li>
                    </ul>
                    <p className="text-center" style={{fontSize:"30px"}}
                    ><i className="fa-solid fa-folder-open text-white"></i></p>
                  </div> 
                  :"" }  
              </div>
          </div>
        </div>

      
    </Fragment>
  )
}

export default Panel