const jokeSetup = document.querySelector("#joke-setup");
const jokepuchline = document.querySelector("#joke-puchline");
const jokebtn = document.querySelector("#joke-btn");

async function fetchjokes() {
  try {
    const responce = await fetch(
      " https://hindi-jokes-api.onrender.com/jokes?api_key=da33bc005f0ec16f0cfabd2f52e1"
    );
    const data = await responce.json();
    console.log(data);
    jokeSetup.textContent = data.jokeContent;
  } catch (error) {
    jokeSetup.textContent = "Error fatching joke";
    jokepuchline.textContent = "please try again...";
  }
}

jokebtn.addEventListener("click", fetchjokes);
fetchjokes();
