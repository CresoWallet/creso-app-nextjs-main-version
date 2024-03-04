// import { createSlice } from '@reduxjs/toolkit';

// export const sha256HashSlice = createSlice({
//     name: 'sha256Hash',
//     initialState: '',
//     // initialState: {
//     //     sha256Hash: null,
//     // },
//     reducers: {
//         // setSha256Hash: (state, action) => {
//         //     return action.payload;
//         // },
//         setSHA256Hash: (state, action) => {
//             state.sha256Hash = action.payload;
//         },
//     },
// });

// export const { setSha256Hash } = sha256HashSlice.actions;

// export default sha256HashSlice.reducer;
// sha256HashSlice.js

// import { createSlice } from '@reduxjs/toolkit';

// export const sha256HashSlice = createSlice({
//     name: 'sha256Hash',
//     initialState: {
//         storedSeedPhrase: null,
//     },
//     reducers: {
//         setStoredSeedPhrase: (state, action) => {
//             state.storedSeedPhrase = action.payload;
//         },
//     },
// });

// export const { setStoredSeedPhrase } = sha256HashSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const sha256HashSlice = createSlice({
    name: 'sha256Hash',
    initialState: {
        storedSeedPhrase: null,
    },
    reducers: {
        setStoredSeedPhrase: (state, action) => {
            state.storedSeedPhrase = action.payload;
        },
    },
});

export const { setStoredSeedPhrase } = sha256HashSlice.actions;

// Add a selector to get the storedSeedPhrase value
export const selectStoredSeedPhrase = (state) => state.sha256Hash?.storedSeedPhrase || null;

