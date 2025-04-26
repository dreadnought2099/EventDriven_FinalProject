// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed!");

  // Toggle Fun Facts functionality
  const toggleButton = document.getElementById("toggle-facts");
  const funFacts = document.getElementById("fun-facts");
  toggleButton.addEventListener("click", function () {
    funFacts.style.display =
      funFacts.style.display === "none" ? "block" : "none";
  });

  // Form validation for "Contact Me" section
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });

  // Fetch GitHub user data using Fetch API
  const fetchButton = document.getElementById("fetch-data");
  const userDataDiv = document.getElementById("user-data");
  fetchButton.addEventListener("click", function () {
    fetch("https://api.github.com/users/dreadnought2099") // Replace 'github' with your GitHub username
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        userDataDiv.innerHTML = `
            <p><strong>Name:</strong> ${data.name || "N/A"}</p>
            <p><strong>Bio:</strong> ${data.bio || "N/A"}</p>
            <p><strong>Location:</strong> ${data.location || "N/A"}</p>
          `;
      })
      .catch((error) => {
        console.error("Error:", error);
        userDataDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
      });
  });

  // Using jQuery for interactive elements and UI enhancements
  $(function () {
    // Initialize jQuery UI Accordion for Skills section
    $("#skills").accordion();

    // Example of applying jQuery to toggle visibility
    $("#toggle-facts").click(function () {
      $("#fun-facts").toggle();
    });

    // Add a Datepicker to the form (if needed)
    $(
      '<label for="date">Pick a Date:</label><input type="text" id="date" class="form-control">'
    ).insertAfter("#message");
    $("#date").datepicker();
  });
});
