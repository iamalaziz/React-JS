#REDUX BoilerPlate

*store.jsx*

```
import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./BooksSlice";
const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  }
})

export default store;
```

*BooksSlice.jsx*

```
import { createSlice } from "@reduxjs/toolkit";

import booksData from "../data/books";
const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: booksData,
    checked: ["test"],
  },
  reducers: {
    addBook(state, action) {state.checked.push(action.payload)},
  },
});
export const { addBook } = booksSlice.actions;

export default booksSlice;
```

_useSelector()_
>In order to use the state data in components, we select the state with _useSelector_ hook. The syntax is the following: 
>* const data = useSelector((state)=>state._ReducerName.StateName_)
