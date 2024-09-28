


const container = document.getElementById("container");

const formAzul = document.getElementById("form-azul");

const formRojo = document.getElementById("form-rojo");

formAzul.addEventListener("submit", sendBlue);

function scrollToBottom() {
     container.scrollTop = container.scrollHeight;
   }

function sendBlue(event) {
     event.preventDefault();
     const inputblue = document.getElementById("input-azul")
     const blueMessage = inputblue.value

     if (blueMessage === "") {
          alert("Write something please")
     } else {
          container.innerHTML += `
          <div class="blue-textbox">
          <p>${blueMessage}</p>
          </div>
     ` 
     scrollToBottom()
     inputblue.value = " "; 
     }
}

formRojo.addEventListener("submit", sendRed);

function sendRed(event) {
     event.preventDefault();
     const inputred = document.getElementById("input-rojo")
     const redMessage = inputred.value
     if (redMessage === "") {
          alert("Write something please")
     } else {
          container.innerHTML += `
          <div class="red-textbox">
          <p>${redMessage}</p>
          </div>
     `
     scrollToBottom()
     inputred.value = " ";
     }
}
