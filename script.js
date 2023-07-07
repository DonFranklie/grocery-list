const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById("pencil");
const allItems = document.getElementById("allItems");

const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function(){
    allItems.innerHTML = "";
})

pencil.style.cursor = "pointer";

userInput.addEventListener("keydown", function(event){
    if (event.key == "Enter") {
        addItem();
    }
});

function addItem(){
    var h2 = document.createElement("h2");
    h2.innerHTML = " - " +userInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px 8px";
    deleteButton.style.borderRadius = "50%";
    deleteButton.style.border = "none";
    deleteButton.style.backgroundColor = "orange";
    deleteButton.style.cursor = "pointer";
    // deleteButton.style.marginright = "120px";


    h2.style.display = "flex";
    h2.style.alignItems = "center";
    h2.style.justifyContent = "space-between";
    

    
    deleteButton.addEventListener("click", function(){
        h2.remove();
    })

    h2.appendChild(deleteButton)

    h2.addEventListener("click", function(){
        h2.style.textDecoration = "line-through"
    });

    h2.style.cursor = "pointer";

    allItems.insertAdjacentElement("beforeend", h2)

    userInput.value = "";
}