document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  
  const mainBoxButton = document.querySelector(".reserve-link");
  mainBoxButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".form-section").scrollIntoView({ behavior: "smooth" });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      contact: form.querySelectorAll('input[type="text"]')[1].value,
      eventType: form.querySelectorAll('input[type="text"]')[2].value,
      date: form.querySelector('input[type="date"]').value,
      notes: form.querySelector("textarea").value,
    };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert("Reservation submitted successfully! ID: " + data.id);
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to submit reservation.");
    }
  });
});