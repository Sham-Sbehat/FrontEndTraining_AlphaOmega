async function getData() {
  const response = await fetch(
    "https://forkify-api.herokuapp.com/api/search?q=pizza"
  );
  const data = await response.json();
  const recipes = data.recipes;

  let html = recipes
    .map(
      (item) => `
      <div class="recipe-card">
        <img src="${item.image_url}" />
        <h3>${item.title}</h3>
        <button class="details-btn" data-recipe-id="${item.recipe_id}">Details</button>
      </div>
    `
    )
    .join("");

  const recipesContainer = document.getElementById("recipes");
  recipesContainer.innerHTML = html;

  document.querySelectorAll(".details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-recipe-id");
      showDetails(id);
    });
  });
}

async function showDetails(id) {
  const response = await fetch(
    `https://forkify-api.herokuapp.com/api/get?rId=${id}`
  );
  const data = await response.json();
  const recipe = data.recipe;

  let { title, image_url, ingredients } = recipe;
  document.querySelector(".title").innerText = recipe.title;
  document.querySelector(".typeImage").src = recipe.image_url;
  document.querySelector(".ingredients").innerHTML = recipe.ingredients
    .map((ing) => `<li>${ing}</li>`)
    .join("");

  document.getElementById("recipes-view").classList.add("hidden");
  document.getElementById("details-view").classList.remove("hidden");
}

document.getElementById("back").addEventListener("click", () => {
  document.getElementById("details-view").classList.add("hidden");
  document.getElementById("recipes-view").classList.remove("hidden");
});

getData();
