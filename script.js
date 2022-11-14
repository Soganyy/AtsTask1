let currentDate = new Date();
i = 0;

class Messenger {

    history = [];

    show_history() {
        console.log(this.history);
    }

    send(author, message) {
        this.name = author;
        this.text = message;
        this.time = currentDate.getHours() + ":" + currentDate.getMinutes();
        this.history[i] = [this.time, this.name, this.text];
        i++;
    }
}

class Message extends Messenger{

    constructor(name, text, time) {
      this.name = name;
      this.text = text;
      this.time = time;
    }
    toString(){
        console.log(this.text, this.time, this.currentDate);
    }
}


let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()