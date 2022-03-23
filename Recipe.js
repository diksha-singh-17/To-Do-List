
displayData();
function displayData(){
  var str = localStorage.getItem("localData");
    console.log(str);
    if (str!= null)
        arr = JSON.parse(str);
        console.log(arr);
        document.getElementById('title').innerText=arr[0].title;
        document.getElementById('description').innerText=arr[0].desc;
        document.getElementById('textArea').innerText=arr[0].textArea;
}
//  deleteData();

function deleteData(){
  document.getElementById('title').innerText='';
  document.getElementById('description').innerText='';
  document.getElementById('textArea').innerText='';
localStorage.clear();
}