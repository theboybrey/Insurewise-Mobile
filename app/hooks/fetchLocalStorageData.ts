var localStorage: Storage;

export const fetchUser = () => {
  let userInfo = null;

  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("user");

    if (storedUser && storedUser !== "undefined") {
      userInfo = JSON.parse(storedUser);
    } else {
      // Debugging: Log a message if user information is not found in localStorage
      console.warn("User information not found in localStorage");
    }
  } else {
    // Debugging: Log a message if the code is running in a non-browser environment
    console.warn(
      "Window object not available; running in a non-browser environment"
    );
  }

  // Debugging: Log the retrieved user information
  console.log("User Information:", userInfo);

  return userInfo;
};

export const fetchAdmin = () => {
  let adminInfo = null;

  if (typeof window !== "undefined") {
    const storedAdmin = localStorage.getItem("admin");

    if (storedAdmin && storedAdmin !== "undefined") {
      adminInfo = JSON.parse(storedAdmin);
    } else {
      // Debugging: Log a message if user information is not found in localStorage
      console.warn("Admin information not found in localStorage");
    }
  } else {
    // Debugging: Log a message if the code is running in a non-browser environment
    console.warn(
      "Window object not available; running in a non-browser environment"
    );
  }

  console.log("Admin Information:", adminInfo);
  return adminInfo;
};
