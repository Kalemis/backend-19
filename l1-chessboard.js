const BOARD_SIZE = 8;
var boardToPrint = "";

for (var i = 0; i < BOARD_SIZE; i++)
{
    var hashOrSpace = (i % 2) == true; 
    for (var j = 0; j < BOARD_SIZE; j++)
    {
        if(hashOrSpace == true)
            boardToPrint += " ";
        else
            boardToPrint += "#";
         
        hashOrSpace = !hashOrSpace;
    }
    boardToPrint += "\n";
}

console.log(boardToPrint);


