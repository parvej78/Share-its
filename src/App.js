import React, {useState, useCallback} from "react";
import {BrowserRouter as Router, Route,Redirect,Switch} from "react-router-dom";
import Users from "./users/pages/Users";
import NewLocation from "./locations/pages/NewLocation";
import MainNavigation from "./common/components/Navigation/MainNavigation";
import UserLocations from "./locations/pages/UsersLocations";
import Login from "./users/pages/Login";
import { LoginContext } from "./common/components/context";
const App =() =>{
 const [isloggedin, setIsloggedin] =useState(false);
 const login=useCallback(()=>{
   setIsloggedin(true);
 },[]);

 const logout=useCallback(()=>{
   setIsloggedin(false);

 },[]);
 let validroutes;

 if(isloggedin){
   validroutes=(
     <Switch>
        <Route path ="/" exact>
               <Users />
            </Route>
            <Route path="/:userid/locations">
              <UserLocations/>
            </Route>
            <Route path="/locations/new" exact>
             <NewLocation/>
            </Route>
            <Redirect to="/" />
     </Switch>

   );
   
 }
 else{
   validroutes=(
     <Switch>
       <Route path ="/" exact>
               <Users />
            </Route>
       <Route path="/login" exact>  
           <Login/>
          </Route>
          <Redirect to="/login" />
     </Switch>
   )
 }

   return ( 
     <LoginContext.Provider value={{isLoggedIn:isloggedin, login: login, logout: logout}}>
            <Router>
              <MainNavigation/>
              <main>
               {validroutes}
            </main>
   </Router>
   </LoginContext.Provider>

   );
};

export default App;