
displayData();
function displayData(){
  var str = localStorage.getItem("localData01");
    console.log(str);
    if (str!= null)
        arr1 = JSON.parse(str);
        console.log(arr1);
        document.getElementById('title').innerText=arr1[0].title;
        document.getElementById('description').innerText=arr1[0].desc;
        document.getElementById('textArea').innerText=arr1[0].textArea;
}
//  deleteData();

function deleteData(){
  document.getElementById('title').innerText='';
  document.getElementById('description').innerText='';
  document.getElementById('textArea').innerText='';
localStorage.clear();
}