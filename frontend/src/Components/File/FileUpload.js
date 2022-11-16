import { useState } from "react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

const FileUpload = () => {

  const [title, setTitle] = useState();
  const [doc, setDoc] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const postDetails = (docs) => {
    setLoading(true);
    if (docs === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    console.log(docs);
    if (docs.type === "application/pdf" || docs.type === "application/doc") {
      const data = new FormData();
      data.append("file", docs);
      data.append("upload_preset", "AuthApp");
      data.append("cloud_name", "dknz5gzxz");
      fetch("https://api.cloudinary.com/v1_1/dknz5gzxz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setDoc(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!title) {
      toast({
        title: "Please Fill the Title",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setLoading(false);
      return;
    }
    
    console.log(title, doc);
    try {
      const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/file/upload",
        {
          title, doc
        },
        config
      );
      console.log(data);
      toast({
        title: "Upload File Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/managerDashboard");
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
      <FormControl id="title" isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          placeholder="Enter the Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>

      <FormControl id="doc">
        <FormLabel>Upload your File</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="application/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Upload
      </Button>
    </VStack>
  );
};

export default FileUpload;
