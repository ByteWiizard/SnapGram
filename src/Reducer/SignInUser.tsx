import { getCurrentAccount } from '@/lib/AppWrite/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  bio: string;
}

export interface UserDetailsState {
  user: User;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const initialState: UserDetailsState = {
  user: {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
  },
  isLoading: false,
  isAuthenticated: false,
}

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setIsAuthenticated, setLoading } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;