var username;

function PostUsername()
{
    var button = document.getElementById("buttonRemove");
    button.remove();
    
    var box = document.getElementById("username");
    var actualName = box.value;
    box.remove();
    
    var usernameReplace = document.getElementById("replaceName");
    
    usernameReplace.innerHTML = actualName;
    username = actualName;   
}


function Post()
{
    var username = globalThis.username;
    var getBoard = document.getElementById("post");
    var insertText = getBoard.value;
    
    var board = document.getElementById("chat");
    var text = (username + ":" + " " + insertText + "<br>");
    board.innerHTML += text
}
