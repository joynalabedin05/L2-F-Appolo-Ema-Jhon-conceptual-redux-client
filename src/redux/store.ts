import { configureStore } from '@reduxjs/toolkit'
// ...
import cartReducer from "./features/cartSlice"
import themeReducer from "./features/themeSlice"
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    theme: themeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch