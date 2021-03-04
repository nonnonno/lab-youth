const URL = 'http://localhost:8000/'

var inputFiles = document.getElementById('inputfiles');
inputFiles.addEventListener("change", function(e) {
 console.log(e.target.files)
},false);

inputFiles.addEventListener("change", function(e) {

var file = e.target.files 
var reader = new FileReader()
reader.readAsDataURL(file[0])
// reader.readAsText('./secure.txt')
reader.onload = function() {
console.log("file read")
}
}, false)

///secure.txtのファイルを読み込ませて、index.htmlに渡したい
const OnButtonClick = () =>{
    console.log("button was pushed")
    
    // readTextFile('./secure.txt')
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
    console.log("file read");
}