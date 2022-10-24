document.getElementById("select-folder").addEventListener("click", () => {
    window.electron.openDialog("showOpenDialog", { properties: ['openFolder'] }).then(result => console.log(result))
});
