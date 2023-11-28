const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false, // Set darkMode to false for light mode
      };
    }
    case "DARK": {
      return {
        darkMode: true, // Set darkMode to true for dark mode
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode, // Toggle darkMode
      };
    }

    default:
      return state;
  }
};

export default DarkModeReducer;
