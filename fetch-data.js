// Define the async function to fetch user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a list to display user names
    const userList = document.createElement("ul");

    // Loop through each user and create list items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // Append the list to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle any errors that occur during fetch
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

// Fetch user data when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
