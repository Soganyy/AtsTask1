let currentDate = new Date();
const inputText = document.querySelector("#txt");
const sendBtn = document.querySelector(".btnSend");
const textDiv = document.querySelector(".container");


class Messenger {

    history = [];

    toHTML() {
        let textToDiv = "";
        for(let i = 0; i < this.history.length; i++) {
            textToDiv += this.history[i];
        }
        textDiv.innerHTML = textToDiv;
    }
}

class Message extends Messenger{

    constructor(name, text, time) {
      this.name = name;
      this.text = text;
      this.time = time;
    }

}

const msg = new Messenger();
let arrHoldsInput = [];

sendBtn.addEventListener('click', () => {
    arrHoldsInput = inputText.value.split(" ");
    msg.time = currentDate.getHours() + ":" + currentDate.getMinutes();
    msg.name = arrHoldsInput[0];
    msg.text = arrHoldsInput[1];

    msg.history = [msg.time + " " + msg.name + " " + msg.text];

    msg.toHTML();
})