import { Button } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";

function NavigationBar() {
  
  const history = useHistory();

      
  
    async function logout(e){
      try {
          

            e.preventDefault();

            
        const userInfo = localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : null;
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
              
        const { data } = await axios.get("/api/staff/logout", config);
        console.log(data);
        history.push("/");
        console.log("uhuh", data); 
        }catch(err){

        }
    }
    return(

       
        <div id="view1">
  
            <Button id="view2" onClick={(e)=>{logout(e)}}><a>Logout</a></Button>
        </div>
        
    )
}
export default NavigationBar;

