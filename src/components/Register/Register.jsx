import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState, useEffect, useContext } from "react";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import InputAdornment from "@mui/material/InputAdornment";
import Paper from "@mui/material/Paper";
import CustomInput from "~/assets/custom/CustomInput";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { t } from "i18next";
import "./Register.scss";

export default function Register(props) {
  const [register, setRegister] = useState(RegisterRequest);
  // const email = props.email
  // setRegister({...register,email:email})
  const { setUserCurrent, setAccessToken, setRefreshToken } = useContext(AuthContext)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrors(validate(register));
    if (!errors)
      {return}
    const registerUser = await registerRequest(register);
    if (registerUser.status === 200) {
      setTimeout(function () {
        document.location = '/';
      }, 500);
      setLoading(false)
    } else {
      Register(errors)
    }
    setLoading(false)
  }

  const handleChange = (event) => {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const [formValid, setformValid] = useState(false);
  useEffect(() => {
    setRegister({ ...register, email: props.email })
    if(register.password.length <8 || !register.firstName || !register.lastName )
    {
      setformValid(false)
    }
    else{
      setformValid(true)
    }
  }, [register])
  // useEffect(() => {
    
  // }, [register]);



  return (
    <Container component="main" maxWidth="xs">
      {/* <h3>{t('label.email')}/{t('label.phone')}</h3> */}
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <div className="form-element">
          <CustomInput
            title={t("title.hasBeenVerified")}
            value="0346353913"
            disabled="true"
            InputProps={{
              startAdornment: <CheckCircleRoundedIcon color="green" />,
            }}
          />
        </div>
        <div className="form-element">
          <CustomInput
            title={t("label.lastName")}
            label="Nhập họ và tên của bạn"
            name="lastname"
            id="lastname"
          />
         {errors.firstName && <h5>{errors.firstName}</h5>}
        </div> 
        <div className='form-element'>
          <CustomInput
            title={t("label.firstName")}
            label="Nhập họ và tên của bạn"
            value={register.lastName}
            onChange={handleChange}
          /> {errors.lastName && <h5>{errors.lastName}</h5>}
        </div>
        <div className="form-element">
          <CustomInput
            title={t("label.password")}
            name="password"
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />{errors.password && <h5>{errors.password}</h5>}
        </div>
        <div className="form-element">
          <Button
            className="form-button"
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isPasswordValid}
          >
            {t("title.signup")}
          </Button>
        </div>
      </Box>
    </Container>
  );
}