import { useState } from "react";
import { Input, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import bcrypt from "bcryptjs"

const SaveMessage = () => {
  
  const [writerName, setWriterName] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const submitHandler = async (getState) => {
    setLoading(true);
    if (!writerName || !date || !description ) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    const hash = bcrypt.hashSync(description, 10);
    console.log(writerName, date, description);
    try {
      const userInfo = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem('userInfo')):null
      // const {
      //   userLogin: { userInfo },
      //  } = getState()
      const config = {
        
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      console.log(userInfo);
      const { data } = await axios.post(
        "/api/message/save",
        {
          writerName,
          date,
          description : bcrypt.hashSync(description, 10),
        },
        config
      );
      console.log(data);
      toast({
        title: "Message Save Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/message");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="writerName" isRequired>
        <FormLabel>Writer Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setWriterName(e.target.value)}
        />
      </FormControl>
      <FormControl id="date" isRequired>
        <FormLabel>Date</FormLabel>
        <Input
          type="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
      </FormControl>
      <FormControl id="description" isRequired>
        <FormLabel>Message</FormLabel>
        <InputGroup size="md">
          <Input
            type="text"
            placeholder="message"
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>
      </FormControl>
      
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Save
      </Button>
    </VStack>
  );
};

export default SaveMessage;
