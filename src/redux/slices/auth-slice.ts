import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { TokenDto } from '../../types/auth';
import { TokenServiceInstance } from '../../services/TokenService';

// Define a type for the slice state
interface AuthState {
  auth: boolean;
}

// Define the initial state using that type
const initialState: AuthState = {
  auth: !!TokenServiceInstance.getToken()
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TokenDto>) => {
      state.auth = true;
      TokenServiceInstance.setToken(action.payload);
    },
    deleteCredentials: (state) => {
      state.auth = false;
      TokenServiceInstance.deleteToken();
    }
  }
});

export const { setCredentials, deleteCredentials } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isAuth = (state: RootState) => !!state.auth.auth;

export default authSlice.reducer;
