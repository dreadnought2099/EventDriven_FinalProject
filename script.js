document.addEventListener("DOMContentLoaded", () => {
  // Toggle Fun Facts
  document.getElementById("toggleFacts").addEventListener("click", function () {
    const facts = document.getElementById("funFacts");
    facts.classList.toggle("hidden");
  });

  // jQuery UI: Accordion & Datepicker
  $("#accordion").accordion();
  $("#datepicker").datepicker();

  // Fetch GitHub Data
  document.getElementById("fetchGitHub").addEventListener("click", () => {
    const username = document.getElementById("githubUsername").value.trim();
    if (!username) return alert("Please enter a GitHub username.");

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("githubData").innerHTML = `
            <div class="mt-4">
              <img src="${data.avatar_url}" alt="${
          data.login
        }" class="w-20 h-20 rounded-full">
              <p><strong>Name:</strong> ${data.name || "N/A"}</p>
              <p><strong>Bio:</strong> ${data.bio || "N/A"}</p>
              <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            </div>
          `;
      })
      .catch((err) => {
        console.error("GitHub API error", err);
        alert("Error fetching GitHub user data.");
      });
  });

  // Contact Form Validation
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (name && isEmailValid && message) {
        $("#formSuccess").fadeIn().delay(3000).fadeOut();
        this.reset();
      } else {
        alert("Please fill in all fields with a valid email.");
      }
    });
});
