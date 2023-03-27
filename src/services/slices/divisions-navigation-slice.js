import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openedDivision: false,
  openedPopup: false,
  divisionsSection: true,
  aboutUsSection: true,
  mainTitleSection: true,
  benefitSection: true,
  backButton: false,
  divisionData: []
};

const divisionsNavigationSlice = createSlice({
  name: 'divisionNavigation',
  initialState,
  reducers: {
    openDivision(state, action) {
        return {
          ...initialState,
          openedDivision: true,
          divisionsSection: false,
          aboutUsSection: false,
          mainTitleSection: false,
          benefitSection: false,
          divisionData: action.payload,
          backButton: true
        }
      },
      closeDivision() {
        return {
          ...initialState
        }
      },
      openPopup(state) {
        state.openedPopup = true
      },
      closePopup(state) {
        state.openedPopup = false
      }
  },
})

export default divisionsNavigationSlice.reducer;

export const { openDivision, closeDivision, openPopup, closePopup } = divisionsNavigationSlice.actions;