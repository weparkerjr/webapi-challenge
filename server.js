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


//  CRUD ENPOINTS FOR **CHORES**

// POST CHORE
server.post("/", (req, res) => {
    const chore = req.body;
  
    chore.id = choreId;
    choreId = choreId + 1;
  
    chores.push(chore);
  
    res.status(201).json(chores);
  });

  // GET CHORE FROM ID
server.get("/:id", (req, res) => {
    const chore = chores.find(chore => chore.id === Number(req.params.id));
  
    if (chore) {
      res.status(200).json(chore);
    } else {
      res.status(404).json({ message: "Chore not found" });
    }
  });

  // PUT (UPDATE) CHORE BY ID
server.put("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    let item = chores.findIndex(chore => chore.id === id);
    if (!item) {
      res(404).json({ message: "Chore not found" });
    }
    if (!req.body.notes) {
      return res.status(400).send({
        success: "false",
        message: "notes is required"
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: "false",
        message: "description is required"
      });
    }
  
    const updatedChore = {
      notes: req.body.notes,
      description: req.body.description,
      assignedTo: req.body.assignedTo
    };
  
    chores.splice(item, 1, updatedChore);
  
    return res.status(201).send({
      success: "true",
      message: "Chore added successfully",
      updatedChore
    });
  });

// DELETE CHORE
server.delete("/:id", (req, res) => {
    chores = chores.filter(chore => chore.id !== Number(req.params.id));
  
    res.status(201).json(chores);
  });


  




module.exports = server; 
