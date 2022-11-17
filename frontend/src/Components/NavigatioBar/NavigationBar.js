import {
  Box,
  Button,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";

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
        console.log(err);
      }
    }
    return (
      <Box id="topnav">
        <a href="#"  id="logo" className="nav-link">
          USER MANAGEMENT SYSTEM
        </a>

        <div id="about">
          <Button
            colorScheme="teal"
            variant="outline"
            id="about"
            onClick={(e) => {
              logout(e);
            }}
          >
            <AvatarGroup spacing="1rem">
              <Avatar size="sm" bg="teal.300" />
            </AvatarGroup>{" "}
            &nbsp;
            <a>Logout</a>
          </Button>
        </div>

        {/* <a id="about" class="nav-link" href="#">
          About Me
        </a> */}
      </Box>
      // <div id="view1">
      //   <Button id="view2" onClick={(e)=>{logout(e)}}><a>Logout</a></Button>
      // </div>
    );
}
export default NavigationBar;

