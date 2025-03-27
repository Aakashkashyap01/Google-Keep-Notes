import React from "react";
import LightbulbOutlined from "@mui/icons-material/LightbulbOutlined";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Light = styled(LightbulbOutlined) 
`
font-size: 120px;
color: #F5F5F5;
`
const Text = styled(Typography)`
color: #80868b;
font-size: 22px;`
 
const Container = styled(Box)   
`
display: flex;
flex-direction: column;
align-items: center;
font-size: 20vh;
margin-top: 20vh;
`

const EmptyNotes = () => {
  return (
    <Container>
      <Light />
      <Text>Notes you add appear here</Text>
    </Container>
  );
};

export default EmptyNotes;
