import React, {FC, FormEvent} from 'react';
import {Link} from "react-router-dom";

import {useInput} from "../../../hooks/input/use-input";
import {validateEmail} from "../../../shared/utils/validation/email";
import {validatePasswordLength} from "../../../shared/utils/validation/lenght";

import {Box, Button, Divider, Grid, InputLabel, TextField, Typography} from "@mui/material";
import {NewUser} from "../models";

const SigninFormComponent: FC = () => {

    const {
        text: email,
        textChangeHandler: emailChangeHandler,
        inputBlueHandler: emailBlurHandler,
        clearHandler: emailClearHandler,
        shouldDisplayError: emailHasError
    } = useInput(validateEmail);

    const {
        text: password,
        textChangeHandler: passwordChangeHandler,
        inputBlueHandler: passwordBlurHandler,
        clearHandler: passwordClearHandler,
        shouldDisplayError: passwordHasError
    } = useInput(validatePasswordLength);

    const clearForm = () => {
        emailClearHandler();
        passwordClearHandler();
    }
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        if (emailHasError || passwordHasError) return;

        if (email.length === 0 || password.length === 0) return;


        console.log("USER: ", email, password);

        clearForm();
    }

    return (
        <>

            <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
                <form onSubmit={onSubmitHandler}>
                    <Grid container direction='column' justifyContent='flex-start'>

                        <Typography variant='h4' component='h1'>
                            Sign-In
                        </Typography>

                        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}}
                                    htmlFor='email'>Email</InputLabel>
                        <TextField value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}
                                   error={emailHasError} helperText={emailHasError ? 'Enter your email' : ''} type='email' name='email' id='email' variant='outlined' size='small'/>

                        <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}}
                                    htmlFor='password'>Password</InputLabel>
                        <TextField value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}
                                   error={passwordHasError}
                                   helperText={passwordHasError ? 'Minimum 6 characters required' : ''}  type='password' name='password' id='password' variant='outlined' size='small'
                                   placeholder='Minimum 6 characters required'/>

                        <Button variant='contained' style={{
                            marginTop: '16px',
                            height: '31px',
                            backgroundColor: '#f0c14b',
                            color: 'black',
                            borderColor: '#a8873 #9c7e31 #846a29',
                            textTransform: 'none'
                        }} type='submit'>Sign-In</Button>
                    </Grid>
                </form>

                <div style={{marginTop: '30px'}}>
                    <small>
                        <span>By continuing, you agree to Shop's</span>
                    </small>
                </div>

                <div>
                    <small>
                        <a href='#' style={{textDecoration: 'none'}}>
                            {' '}
                            Conditions of use
                        </a>{' '}
                        <a href='#' style={{textDecoration: 'none'}}>
                            Privacy policy
                        </a>
                    </small>
                </div>
            </Box>
            <div style={{marginTop: '16px'}}>
                <Divider>
                <small style={{color: '#767676'}}>New to Shop?</small>
                    </Divider>
                <Link to='/register' style={{textDecoration: 'none', color: '#0000ee'}}>
                    <Button
                        variant='contained'
                        style={{
                            width: '100%',
                        marginTop: '12px',
                        height: '31px',
                        backgroundColor: '#f1f1f1',
                        color: 'black',
                        textTransform: 'none'
                    }}>Register</Button>
                </Link>
            </div>
        </>
    );
};

export {
    SigninFormComponent
};