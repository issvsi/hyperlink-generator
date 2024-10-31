function generate(){
    var text = document.getElementById("DisplayText").value
    var link = document.getElementById("Link").value
    document.getElementById("disclaimer").innerHTML = "COPY-PASTE HYPERLINK:";
    document.getElementById("hyperlink").innerHTML = "[" + text + "](" + link + ")";
}