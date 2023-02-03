const container = document.querySelector(".post-container");

container.addEventListener("click", async (e) => {
  e.preventDefault();

  const button = e.target;
  const id = button.dataset.btnid;

  try {
    // if()
    const response = await fetch(`/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (result) {
      button.style.color = "blue";
      button.style.cursor = "not-allowed";
      button.style.pointerEvents = "none";

      const text = document.querySelector("h3");

      text.style.textDecoration = "line-through";
    }
  } catch (e) {
    console.log(e);
  }
});
