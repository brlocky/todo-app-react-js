import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { TokenDto } from '../../types/Auth';
import { TokenServiceInstance } from '../../services/TokenService';

// Define a type for the slice state
interface AuthState {
  token: TokenDto | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  token: TokenServiceInstance.getToken()
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<TokenDto>) => {
      state.token = action.payload;
      TokenServiceInstance.setToken(action.payload);
    },
    deleteCredentials: (state) => {
      state.token = null;
      TokenServiceInstance.deleteToken();
    }
  }
});

export const { setCredentials, deleteCredentials } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const isAuth = (state: RootState) => !!state.auth.token;

export default authSlice.reducer;
