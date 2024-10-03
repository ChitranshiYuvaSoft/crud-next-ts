import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id : number;
  name: string;
  email: string;
  phone: number;
  isVerified: boolean;
  date: Date;
  description: string;
}

interface InitialState {
  allUserData: UserData[];
  editUser: {
    user: any;
    isEdit: boolean;
  };
}

const initialState: InitialState = {
  allUserData: [
    {
      id : 1,
      name: "Rohan",
      email: "rohan@gmail.com",
      phone: 12344567676,
      isVerified: false,
      date: new Date(),
      description: "create todo with ts and nextjs.",
    },
  ],
  editUser: {
    user: {},
    isEdit: false,
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    deleteData: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const data = [...state.allUserData];
      data.splice(index, 1);
      return {
        ...state,
        allUserData: data,
      };
    },

    createData: (state, action) => {
      console.log(action.payload)
      console.log(action.payload);
      return {
        ...state,
        allUserData: [...state.allUserData, action.payload],
      };
    },

    editUserData: (state, action) => {
      return {
        ...state,
        editUser: { user: action.payload, isEdit: true },
      };
    },

    updateUserData: (state, action) => {
      return {
        ...state,
        allUserData : state.allUserData.map((item, index) => item.id === action.payload.id ? action.payload : item)
      }
    }
  },
});

export const { deleteData, createData, editUserData, updateUserData } = dataSlice.actions;
export default dataSlice.reducer;
