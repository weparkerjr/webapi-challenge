const express = require('express');

const server = express();


server.use(express.json());


const peopleArr = [
    { id: 1, name: "Luke" },
    { id: 2, name: "Han" },
    { id: 3, name: "Leia" },
    { id: 4, name: "Darth" },
    { id: 5, name: "Palpatine" },
    { id: 6, name: "Indiana" }
  ];
  
  let chores = [];
  let choreId = 1;

  // GET PEOPLE FROM DATABASE
server.get("/people", (req, res) => {
    peopleArr;
    res.status(200).json(peopleArr);
  });


module.exports = server; 
