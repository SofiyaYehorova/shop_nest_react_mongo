import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DisplayUser, Jwt, NewUser} from "./models";
import {grey} from "@mui/material/colors";
import {authService} from "./services";

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

const initialState: AuthState = {
    user: null, //user;
    jwt: null, //jwt;
    isAuthenticated: false,
    isLoading: false,
    isSuccess: false,
    isError: false,

};

export const register = createAsyncThunk(
    'auth/register',
    async (user: NewUser, thunkAPI) => {
        try {
            return await authService.register(user);
        } catch (error) {
            return thunkAPI.rejectWithValue('Unable to register!')
        }
    }
);

export const authSlice = createSlice({
        name: 'auth',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                //     REGISTER
                .addCase(register.pending, (state) => {
                    state.isLoading = true
                })
                .addCase(register.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload;
                })
                .addCase(register.rejected, (state) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.user = null;
                })
        }
    }
)