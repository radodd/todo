import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import {
  ChakraProvider,
  Button,
  Box,
  Text,
  Input,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

type NameObject = {
  name: string;
  id: number;
};

function App() {
  const [names, setNames] = useState([]);
  const [inputName, setInputName] = useState();

  useEffect(() => {
    axios.get("http://localhost:3030/names").then((response) => {
      setNames(response.data);
    });
  }, []);

  const handleChange = (e: any) => {
    setInputName(e?.target.value);
  };

  const handleClick = async () => {
    const response = await axios.post("http://localhost:3030/name", {
      name: inputName,
    });
    setNames(response.data);
    console.log("RESPONSE", response);
  };
  return (
    <>
      <ChakraProvider>
        <Flex gap={4} m={20}>
          <Input placeholder="Type in your name" onChange={handleChange} />
          <Button onClick={handleClick}>Click Here</Button>
        </Flex>
        <Box>All Names:</Box>

        {names.map((name: NameObject) => {
          return <Text key={name.id}>{name?.name}</Text>;
        })}
      </ChakraProvider>
    </>
  );
}

export default App;
