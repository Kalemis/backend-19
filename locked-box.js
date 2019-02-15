const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    // Check if box is locked
    let checkIfUnlocked;
    if (box.locked === false) {
        checkIfUnlocked = true;
    } else {
        checkIfUnlocked = false;
    }

    //unlock the box
    box.locked = false;

    try {
        // call the argument function
        return body();
    } finally {
        //lock the box
        box.locked = true;
    }

    // if box was locked, lock it again
    if (checkIfUnlocked === false) {
        box.locked = true;
    }
    
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  console.log(box.locked);
  // → true