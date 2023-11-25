import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

export default function CustomInput(props) {
  console.log(props.content)
  return (
    <Box className={props.className} width={props.width}>
      <label style={{ fontWeight: '500' }} htmlFor={props.id}>
        {props.title}
      </label>
      <TextField
        className='customInput'
        fullWidth ={props.fullWidth? false: true }
        margin="dense"
        size={props.size || "medium"}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        type={props.type}
        InputProps={props.InputProps}
        select={props.select}
      //  label={props.label}
      >
        {props.content}
      </TextField>
    </Box>
  )
}
