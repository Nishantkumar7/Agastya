import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FileItem {
  id: string;
  name: string;
  type: string;
  size: string;
  date: string;
}

interface FilesState {
  items: FileItem[];
  storageUsed: number;
  totalStorage: number;
}

const initialState: FilesState = {
  items: [
    { id: '1', name: 'Xd File', type: 'xd', size: '3.5mb', date: '01-03-2021' },
    { id: '2', name: 'Figma File', type: 'figma', size: '19mb', date: '27-02-2021' },
    { id: '3', name: 'Documents', type: 'doc', size: '19mb', date: '23-02-2021' },
    { id: '4', name: 'Sound File', type: 'mp3', size: '40mb', date: '21-02-2021' },
    { id: '5', name: 'Media', type: 'media', size: '15mb', date: '23-02-2021' },
    { id: '6', name: 'Sales PDF', type: 'pdf', size: '9mb', date: '21-02-2021' },
    { id: '7', name: 'Excel File', type: 'xlsx', size: '11mb', date: '23-02-2021' },
  ],
  storageUsed: 29.1,
  totalStorage: 100
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    addFile: (state, action: PayloadAction<FileItem>) => {
      state.items.push(action.payload);
    },
    removeFile: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(file => file.id !== action.payload);
    },
  },
});

export const { addFile, removeFile } = filesSlice.actions;
export default filesSlice.reducer;