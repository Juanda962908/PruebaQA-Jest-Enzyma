import React from 'react'
import { FormControl,InputLabel,Input,Typography,FormHelperText,Checkbox,FormControlLabel, Box,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({

formulario:{
display:'flex',
flexDirection:'column',
justifyContent:'space-evenly',
alignItems:'space-evenly'
},
camposFormulario :{
color:'white',
width:'20rem'
},
botonEnviar:{
  backgroundColor:'rgb(24, 34, 60,90%)',
  marginTop:'2vh',
  width:'10vw',
  '&:hover': {
  backgroundColor: 'rgb(24, 34, 60,100%)',
  borderColor: '#0062cc',
  boxShadow: 'none',
  },
  },
textoLabel:{
  fontSize:'1rem',
  
}

})





function Formulario(props) {
const classes = useStyle();
return (
<>
<Typography variant='h3'>PRUEBA TECNICA QA - JUAN DANIEL DE LA HOZ F.</Typography>
  <form action="" marginTop="10rem">
<Box display='flex' flexDirection='column' marginTop="15rem">
    <FormControl>
      <InputLabel className={classes.camposFormulario} htmlFor="my-input">Nombre Completo</InputLabel>
      <Input className={classes.camposFormulario} id="Input1" aria-describedby="my-helper-text"
        onChange={props.handleChange}  />
      <FormHelperText className={classes.camposFormulario} id="my-helper-text">
      </FormHelperText>
    </FormControl>
    <FormControl>
      <InputLabel className={classes.camposFormulario} htmlFor="my-input">Apellido</InputLabel>
      <Input className={classes.camposFormulario} id={props.idInput2} aria-describedby="my-helper-text"
        onChange={props.handleChange} />
      <FormHelperText className={classes.camposFormulario} id="my-helper-text">
      </FormHelperText>
    </FormControl>

    <Box marginTop='2rem'>
      <Checkbox checked={props.checked} onChange={props.handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
      <label className={classes.textoLabel} htmlFor="">{props.textoDeLabel}</label>
    </Box>

    <Box width='20rem' display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
      <Button onClick={props.funcionButton} href="https://www.google.com/"  variant="contained" color="primary" className={classes.botonEnviar} type="submit">
        Enviar
      </Button>
      </Box>
    </Box>
  </form>
</>
)
}

export default Formulario