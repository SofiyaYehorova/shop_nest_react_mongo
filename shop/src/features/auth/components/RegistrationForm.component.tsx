import React, {FC, FormEvent, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import {validateNameLength, validatePasswordLength} from '../../../shared/utils/validation/lenght';

import {useInput} from '../../../hooks/input/use-input';
import {validateEmail} from '../../../shared/utils/validation/email';
import {NewUser} from "../models";
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {register, reset} from "../authSlice";

import {Box, Button, CircularProgress, Divider, Grid, InputLabel, TextField, Typography} from "@mui/material";


const RegistrationFormComponent: FC = () => {

    const {
        text: name,
        textChangeHandler: nameChangeHandler,
        inputBlueHandler: nameBlurHandler,
        clearHandler: nameClearHandler,
        shouldDisplayError: nameHasError
    } = useInput(validateNameLength);

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

    const {
        text: confirmPassword,
        textChangeHandler: confirmPasswordChangeHandler,
        inputBlueHandler: confirmPasswordBlurHandler,
        clearHandler: confirmPasswordClearHandler,
        shouldDisplayError: confirmPasswordHasError
    } = useInput(validatePasswordLength);

    const clearForm = () => {
        nameClearHandler();
        emailClearHandler();
        passwordClearHandler();
        confirmPasswordClearHandler();
    };

    const dispatch = useAppDispatch();

    const {isLoading, isSuccess} = useAppSelector((state) => state.auth);

    const navigate = useNavigate();

    useEffect(()=>{
       if(isSuccess) {
           dispatch(reset());
           clearForm();
           navigate('/signin');
       }
    }, [isSuccess, dispatch])

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (password !== confirmPassword) return;

        if (nameHasError || emailHasError || passwordHasError || confirmPasswordHasError) return;

        if (name.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0) return;


        const newUser: NewUser = {
            name, email, password
        };

        dispatch(register(newUser));
    };

    if (isLoading) return <CircularProgress sx={{marginTop: '64px'}} color='primary'/>;

    return (
        <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
            <form onSubmit={onSubmitHandler}>
                <Grid container direction='column' justifyContent='flex-start'>

                    <Typography variant='h4' component='h1'>
                        Create account
                    </Typography>

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='name'>Your
                        name</InputLabel>
                    <TextField value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler} error={nameHasError}
                               helperText={nameHasError ? 'Enter your name' : ''} type='text' name='name' id='name'
                               variant='outlined' size='small'/>

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}}
                                htmlFor='email'>Email</InputLabel>
                    <TextField value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler}
                               error={emailHasError} helperText={emailHasError ? 'Enter your email' : ''} type='email'
                               name='email' id='email' variant='outlined' size='small'/>

                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}}
                                htmlFor='password'>Password</InputLabel>
                    <TextField value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler}
                               error={passwordHasError}
                               helperText={passwordHasError ? 'Minimum 6 characters required' : ''} type='password'
                               name='password' id='password' variant='outlined' size='small'
                               placeholder='Minimum 6 characters required'/>


                    <InputLabel sx={{fontWeight: 500, marginTop: 1, color: '#000000'}} htmlFor='confirmPassword'>Re-enter
                        password</InputLabel>
                    <TextField value={confirmPassword} onChange={confirmPasswordChangeHandler}
                               onBlur={confirmPasswordBlurHandler}
                               error={confirmPassword.length > 0 && password !== confirmPassword}
                               helperText={confirmPassword.length > 0 && password !== confirmPassword ? 'Passwords must match' : ''}
                               type='password'
                               name='confirmPassword' id='confirmPassword' variant='outlined' size='small'
                               placeholder='Minimum 6 characters required'/>
                    <Button variant='contained' style={{
                        marginTop: '16px',
                        height: '31px',
                        backgroundColor: '#f0c14b',
                        color: 'black',
                        borderColor: '#a8873 #9c7e31 #846a29',
                        textTransform: 'none'
                    }} type='submit'>Register</Button>
                </Grid>
            </form>

            <div style={{marginTop: '30px'}}>
                <small>
                    <span>By creating an account, you agree to Shop's</span>
                </small>
            </div>


            <Divider sx={{marginTop: '16px', marginBottom: '16px'}}/>

            <div>
                <small>
                    Already have an acconnt?{' '}
                    <Link to='/signin' style={{textDecoration: 'none', color: '#0000ee'}}>Sign-in</Link>
                </small>
            </div>

            <Divider sx={{marginTop: '16px', marginBottom: '16px'}}/>

            <div>
                <small>
                    Buying for work?
                    <a href='#' style={{textDecoration: 'none'}}>
                        {' '}
                        Create a free business account
                    </a>{' '}

                </small>
            </div>


        </Box>
    );
};


export {
    RegistrationFormComponent
};