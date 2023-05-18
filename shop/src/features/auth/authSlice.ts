import {createSlice} from "@reduxjs/toolkit";
import {DisplayUser, Jwt} from "./models";

interface AsyncState {
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;

}

interface AuthState extends AsyncState {
    user?: DisplayUser | null;
    jwt?: Jwt;
    isAuthenticated?: boolean;
}

const initialState: AuthState={
    user: null, //user;
    jwt: null, //jwt;
    isAuthenticated: false,
    isLoading: false,
    isSuccess: false,
    isError: false,

};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
    //     REGISTER
            .addCase()
    }
})