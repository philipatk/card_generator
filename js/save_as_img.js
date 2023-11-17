import html2canvas from "html2canvas";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("hallo world");
  document
    .getElementById("download-btn")
    .addEventListener("click", function btn() {
      PrintDiv();
    });
  function PrintDiv() {
    console.log("click");
    var card_div = document.getElementById("card");
    html2canvas(card_div, {
      onrendered: function (canvas) {
        var myImage = canvas.toDataURL();
        downloadURI(myImage, "MaSimulation.png");
      },
    });
  }
  function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
  }
});
