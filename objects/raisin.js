  const raisinAlarm = function (cookie) {
    // Loop through each element in the cookie array
    for (let i = 0; i < cookie.length; i++) {
      // Check if the current element is a raisin
      if (cookie[i] === "🍇") {
        // If a raisin is found, return "Raisin alert!"
        return "Raisin alert!";
      }
    }
    // If no raisin is found after the loop, return "All good!"
    return "All good!";
  };
  
  // Test cases
  console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
  console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
  console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
  