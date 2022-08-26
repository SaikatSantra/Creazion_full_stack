import React from 'react'
import Head from 'next/head'
import CustomerMenu from '../../components/CustomerMenu'
import Container from 'react-bootstrap/Container';
import {Col,Row,Card} from 'react-bootstrap'
import {ButtonGroup,Button,Box} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Customer() {
  return (
    <>
    <Head>
        <title>Creazione Customer Support</title>
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
      </Head>
    <CustomerMenu></CustomerMenu>
    <div>
      <Container>
        
      </Container>
    </div>
    </>
  )
}
