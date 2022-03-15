// Get the input field
const input = document.getElementById("count-fild");
const input2 = document.getElementById("writing-fild");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});
input2.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.key === "Enter") {
    document.getElementById("submit").click();
  }
});
document.getElementById("submit").addEventListener("click", () => {
  const ul = document.getElementById("ul");
  ul.innerHTML = "";
  if (input.value && input2.value) {
    for (let i = 1; i <= input.value; i++) {
      const li = document.createElement("li");
      li.innerText = `${i} ${input2.value}`;
      // console.log(i, input2.value);
      ul.appendChild(li);
    }
  } else {
    alert("Please type a value");
  }
  //   console.log(input.value);
  input.value = "";
  input2.value = "";
});
