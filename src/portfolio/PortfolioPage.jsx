import React from 'react'
import { Grid, Link, Typography, Box } from '@mui/material'
import Avatar from '@mui/material/Avatar';


export const PortfolioPage = () => {
  return (
    <>
      <Grid 
        container 
        width="100%" 
        height="50px"
        backgroundColor="#30336b"  
        margin="0 auto"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom="20px"

      >
        <Grid item xs={4}>
          <Link href="#" underline="none" color="white">
            <Typography 
              marginLeft="20px" 
              variant="h6" 
              fontFamily="Satisfy"
              fontSize="35px"
            >
              David Calderón
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="#" underline="none" color="#ffffff"><b>INICIO</b></Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="#" underline="none" color="#ffffff"><b>SOBRE MÍ</b></Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="#" underline="none" color="#ffffff"><b>PORTAFOLIO</b></Link>
        </Grid>

        <Grid item xs={2}>
          <Link href="#" underline="none" color="#ffffff"><b>CONTACTO</b></Link>
        </Grid>

      </Grid>

      <Grid 
        container
        flexDirection="row"
        alignItems="center"
        marginBottom="20px"
        backgroundColor=""
      >
        <Grid item xs={6}>
          <Avatar 
            alt="David Calderón" 
            src="https://cdn.discordapp.com/attachments/912489557100990538/1050252104847077416/img3.JPG"  
            style={{
              width: 500,
              height: 500,
              marginLeft: 150
            }}
            
          />
        </Grid>

        <Grid item xs={6} fontSize="25px">
          <h1>Perfil</h1>
          <p>
              Estudiante de 4to de la carrera Ingeniería Civil Informática en la Universidad Andres Bello.
              <br/> 
              Mi objetivo es colocar mi mayor empeño y dedicación 
              <br/> 
              para el área en el que esté apoyando de la cadena productiva.

              <br/>
              <br/>
              Pese a mi poca experiencia en el ámbito del desarrollo de software 
              <br/>
              me gustaría poder apoyar en la mejora continua del negocio 
              <br/>
              en el que pueda venir a formar parte. 
          </p>
        </Grid>

      </Grid>

      <hr/>
      
    </>
    
  )
}
