import React,{useState} from "react";


const  Context = React.createContext([{},()=>{}])

const Provider = props =>{
    const[result,setAuth] = useState({
        iduser:"",
        result:false
    });
    return(
        <Context.Provider value={[result,setAuth]}>
            {props.children}
        </Context.Provider>
    )
}

export {Context,Provider}