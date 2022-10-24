const selectedModule = document.getElementById("modules")
const addModule = document.getElementById("add-module")
const loadedModules = document.getElementById("loaded-modules")

addModule.addEventListener("click", (e) => {
    const newModule = document.createElement("div")
    newModule.addEventListener("click", () => {
        newModule.remove()
    })

    const removeBtn = document.createElement("button")
    removeBtn.innerText = "remove"

    newModule.innerText = selectedModule.value + "  "
    newModule.appendChild(removeBtn)
    
    loadedModules.appendChild(newModule)
})
