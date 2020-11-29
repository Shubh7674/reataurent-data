import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import './App.css';
import Restaurents from '../components/restaurents/index'
import DataScheme from '../models/dataModel';
import UserInput from '../components/userInput/input'
import Global from '../StyledComponents/global';
import { Container, Box, BoxTitle, BoxText } from '../StyledComponents/homeStyles'

const App=()=> {

  const [pageData, setPageData] = useState([]);
  const [showResults, setshowResults] = useState(true);
  const [active, setActive] = useState(false);

  

  useEffect(() => {
    fetch(
      `http://localhost:3000/marketing`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setPageData(response);
        
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <Global />
    
     <Container>
     
        <Box >
        <Restaurents items={pageData} showRes={showResults} />
    
        </Box> 
        {/* <Box>
        <UserInput /> 
        </Box> */}
        </Container>
    </div>
  );
}

export default App;
