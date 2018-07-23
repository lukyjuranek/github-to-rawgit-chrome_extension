const button = document.createElement("button");
button.innerHTML = "RawGit";
button.className = "btn btn-sm float-right";
button.id = "button";

button.addEventListener("click",function(){
    let oldurl = window.location.href;
    let newurl = oldurl.replace("github.com", "rawgit.com").concat("/master/");
    var win = window.open(newurl, '_blank');
    win.focus();
});

const child = document.querySelector(".edit-link");

const div = document.createElement("div");
div.className = "edit-link";
div.appendChild(button);

child.before(div);

