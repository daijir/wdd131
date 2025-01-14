const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener("click", function() {
    if (inputElement.value.trim() !== '') {
        //create elements
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        //add text content
        li.textContent = inputElement.value;
        deleteButton.textContent = "❌";
        //append elements
        li.appendChild(deleteButton);
        listElement.appendChild(li);
        //delete button event listener
        deleteButton.addEventListener("click", function() {
            listElement.removeChild(li);
            inputElement.focus();
            inputElement.value = '';
        });
    }
})
