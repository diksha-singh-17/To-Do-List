var click = document.getElementById('submit');
click.addEventListener('click', addData);

var arr = new Array();

function addData(){
    arr.push({
        title:document.getElementById('title').value,
        desc:document.getElementById('description').value,
        textArea:document.getElementById('textArea').value,
    });
    // if (!localStorage.getItem("localData")){
        localStorage.setItem("localData", JSON.stringify(arr));
// }
}
