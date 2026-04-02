import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditState, Task } from '../todo';

const initialState: EditState = {
    editingTask: null,
};

const editSlice = createSlice({
    name: 'editingTask',
    initialState,
    reducers: {
        setEditingTask: (state, action: PayloadAction<Task | null>) => {
            state.editingTask = action.payload;
        },
    },
});

export const { setEditingTask } = editSlice.actions;
export default editSlice.reducer;