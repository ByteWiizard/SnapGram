import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
};

const userDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    checkAuthUser: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
}) as Slice<typeof initialState, 'userDetails'>;

export const { setUser, setIsAuthenticated, checkAuthUser } = userDetails.actions;

export default userDetails.reducer;