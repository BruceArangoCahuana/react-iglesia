import React,{Fragment} from 'react';
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import Login from './component/Login';
import Panel from './component/Panel';
import Gestion from './component/estudiantes/Gestion';
import Nuevo from './component/estudiantes/Nuevo';
import Editar from './component/estudiantes/Editar';
import Ver from './component/estudiantes/Ver';
import './app.css';



function App() {
 
return (
    
    <Router>
          <Fragment>
            
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                 <Route exact path="/panel" component={Panel}/>
                <Route exact path="/panel/Estudiante" component={Gestion}/>
                <Route exact path="/panel/ver/:idver" component={Ver}/>
                <Route exact path="/panel/editar/:id" component={Editar}/>
                
                <Route exact path="/panel/nuevo" component={Nuevo}/>
              </Switch>
            
         </Fragment>
    </Router>
   
  );
}

export default App;
