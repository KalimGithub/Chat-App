// var socket = io();

// const userNameInput = document.querySelector(".username-input");
// const joinChatBtn = document.getElementById("join-chat");
// const userNameForm  = document.querySelector(".form-username");
// const chatContainer = document.querySelector(".chat-container");
// const messageInput = document.getElementById("message-input");
// const sendBtn = document.getElementById("send-btn");
// const messageContainer = document.querySelector(".message-container")

// let userName = "";


// joinChatBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     userName = userNameInput.value;
//     // checkig if username is empty or not if username is empty then we dont do anything 
//     // if username is entered by user in input then only change to chat page
//     if(userName){
//         userNameForm.style.display = "none";
//         chatContainer.style.display = "block";
//         console.log("welcome to chatroom");
//     }
// });




// sendBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     let data = {
//         id: socket.id,
//         username: username,
//         message: messageInput.value,
//     };
//     socket.emit("secret message", data);
//     appendMessage(data, "sent");
// });

// socket.on("secret message", (data) => {
//     if(data.id !==msocket.id){
//         appendMessage(data, "recieved");
//     }
// });


// function appendMessage(data, type){
//     var msgDiv = document.createElement('div');
//     msgDiv.innerText = `${data.username} : ${data.message}`;
//     if(type == "sent"){
//         msgDiv.setAttribute("class", "message sent");
//     } else{
//         msgDiv.setAttribute("class", "message");
//     }
//     messageContainer.append(msgDiv);
//     messageInput.value = "";
// }



