document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    document.getElementById("form-view").classList.add("hidden");
    document.getElementById("success-view").classList.remove("hidden");

    console.log("Name:", name, "Email:", email);
  });

document.getElementById("back-button").addEventListener("click", function () {
  document.getElementById("success-view").classList.add("hidden");
  document.getElementById("form-view").classList.remove("hidden");
});
