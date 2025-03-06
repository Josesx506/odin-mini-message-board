const { v4: uuidv4 } = require('uuid');

const messages = [
    {
      text: "Hi there! Welcome to the Message Board",
      username: "Amando",
      added: new Date(),
      id: uuidv4()
    },
    {
      text: "Hello World! This is the Odin Project",
      username: "Charles",
      added: new Date(),
      id: uuidv4()
    },
    {
      text: "To the church in onipanu, una like wahala",
      username: "P. Gams",
      added: new Date(),
      id: uuidv4()
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sit ad explicabo rerum alias voluptatem dolore quod",
      username: "Guest",
      added: new Date(),
      id: uuidv4()
    },
    {
      text: "Lorem quibusdam odio molestias a quam quia numquam fuga neque minima, sapiente fugiat vero ducimus non. Quae, repellendus?",
      username: "Guest",
      added: new Date(),
      id: uuidv4()
    },
    {
      text: "Labore nulla deleniti possimus magnam ipsa cumque eius, ab, totam, odit tempore cupiditate praesentium molestiae consectetur",
      username: "Guest",
      added: new Date(),
      id: uuidv4()
    }
];

const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
}

const dateOptions = {
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
}


module.exports = { messages,timeOptions,dateOptions }