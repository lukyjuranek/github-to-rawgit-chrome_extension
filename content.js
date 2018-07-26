let button = document.createElement("a");
button.innerHTML = "RawGit";
button.className = "btn btn-sm new-pull-request-btn";
button.id = "button";

let div = document.querySelector(".file-navigation.in-mid-page.d-flex.flex-items-start");
div.appendChild(button);

button.addEventListener("click",function(){
    let oldurl = window.location.href;
    let newurl = oldurl.replace("github.com", "rawgit.com").concat("/master/");
    var win = window.open(newurl, '_blank');
    win.focus();
});