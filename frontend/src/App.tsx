import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import { ChakraProvider, Button, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

// type NameObject = {
//   name: string;
//   id: number;
// };

function App() {
  // const [names, setNames] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3030/names").then((response) => {
  //     setNames(response.data);
  //   });
  // }, []);

  // const handleClick = async () => {
  //   const response = await axios.post("http://localhost:3030/name", {
  //     name: "Trixie Mattel",
  //   });
  //   console.log("RESPONSE", response);
  // };
  return (
    <>
      <ChakraProvider>
        <Header />
        <Outlet />

        {/* <Button onClick={handleClick}>Click Here</Button>
        {names.map((name: NameObject) => {
          return <Text key={name.id}>{name?.name}</Text>;
        })} */}
      </ChakraProvider>
    </>
  );
}

export default App;
