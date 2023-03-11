const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
const button = document.querySelector(".button")

console.log(itemsArray)

button.addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

function displayItems(){
    let items = ""
    for(let i = 0; i < itemsArray.length; i++){
        items += `  <div class="item">
                        <div class="input-control">
                            <textarea disabled>${itemsArray[i]}</textarea>
                            <div class="edit-item">
                                <i class="fa-solid fa-check deleteBtn"></i>
                            </div>
                        </div>
                    </div>`
    }
    document.querySelector("#list").innerHTML = items
    activateDeleteListeners()
    activateClearListeners()

}

function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}
function deleteItem (i){
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

function activateClearListeners(){
    let clearAll = document.querySelector(".clear")
    clearAll.addEventListener("click", () => { 
        localStorage.clear()
        location.reload()
    })
}

function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()

  }



  window.onload = function(){
    document.getElementById("item").focus()
    displayItems()
  }