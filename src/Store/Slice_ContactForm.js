// src/redux/Slice_ContactForm.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    email: '',
    message: ''
  },
  errors: {},
  isSubmitting: false,
  submitSuccess: false,
  isVisible: false
};

const contactFormSlice = createSlice({
  name: 'contactform',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitSuccess: (state, action) => {
      state.submitSuccess = action.payload;
    },
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isSubmitting = false;
      state.submitSuccess = false;
    }
  }
});

export const {
  setFormData,
  setErrors,
  setIsSubmitting,
  setSubmitSuccess,
  toggleVisibility,
  resetForm
} = contactFormSlice.actions;

export default contactFormSlice.reducer;
