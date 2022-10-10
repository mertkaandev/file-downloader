const fileInput = document.querySelector("input");
const downloadButton = document.querySelector(".d-button");

downloadButton.addEventListener("click", e => {
       e.preventDefault();
       downloadButton.innerText = "Downloading file..";
       fetchFile(fileInput.value);
});

function fetchFile(fileUrl){
       fetch(fileUrl)
       .then(res => res.blob())
       .then(file=> {
              let templateUrl = URL.createObjectURL(file);
              let aTag = document.createElement("a");
              aTag.href = templateUrl;
              aTag.download = fileUrl.replace(/^.*[\\\/]/, '');
              document.body.appendChild(aTag);
              aTag.click(); 
              aTag.remove(); 
              downloadButton.innerText = "Download File"
       });
};