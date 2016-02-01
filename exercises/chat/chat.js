var firebase = new Firebase("https://blinding-inferno-7422.firebaseio.com");

var newMessageForm = document.querySelector("#new-message-form");
var newMessageBodyField = document.querySelector("#new-message-body");
var messageList = document.querySelector("#messages");
var noMessagesContainer = document.querySelector("#no-messages");
var username = localStorage.getItem("username");

newMessageForm.addEventListener("submit", sendMessage);

function sendMessage(event) {
  event.preventDefault();

  if (username == undefined) {
    username = prompt("What would you like your username to be?");
    localStorage.setItem("username", username);
  }

  var messageBody = newMessageBodyField.value;

  if (messageBody.length == 0) {
    newMessageBodyField.focus();
  } else {
    firebase.push({
      username: username,
      messageBody: messageBody,
      createdAt: (new Date()).getTime()
    })

    newMessageForm.reset();
  }
}

function createMessage(username, messageBody, createdAt) {
  var li = document.createElement("li");
  var messageBodyContainer = document.createElement("div");
  var usernameContainer = document.createElement("div");
  var createdAtContainer = document.createElement("span");

  messageBodyContainer.textContent = messageBody;
  usernameContainer.textContent = username || "Anonymous";

  if (createdAt) {
    createdAtContainer.textContent = strftime('%a %l:%M %P', (new Date(createdAt)));
  }

  usernameContainer.appendChild(createdAtContainer);
  li.appendChild(messageBodyContainer);
  li.appendChild(usernameContainer);
  messageList.appendChild(li);

  window.scrollTo(0,document.body.scrollHeight);
}

firebase.limitToLast(100).on('child_added', function (snapshot) {
  var data = snapshot.val();

  noMessagesContainer.classList.add("hidden");
  createMessage(data.username, data.messageBody, data.createdAt);

  messageList.scrollTop = messageList.scrollHeight;
});
