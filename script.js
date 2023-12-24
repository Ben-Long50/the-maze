const maze = (function() {

    let mazeCounter = 1;

    const rooms = {
        warmRoom: ['red', 'orange', 'yellow', 'death'],
        coldRoom: ['green', 'blue', 'purple', 'death'],
        monochromeRoom: ['white', 'black', 'grey', 'death']
    }

    let doors = {
        doorOne: '',
        doorTwo: '',
        doorThree: ''
    }

    function getRandomRoom() {
        return Math.floor(Math.random() * 4)
    }

    function assignDoors() {
        if(mazeCounter % 2 !== 0 && mazeCounter % 3 !== 0) {
            doors.doorOne = rooms.warmRoom[getRandomRoom()];
            doors.doorTwo = rooms.warmRoom[getRandomRoom()];
            doors.doorThree = rooms.warmRoom[getRandomRoom()];
        }
        else if(mazeCounter % 2 === 0) {
            doors.doorOne = rooms.coldRoom[getRandomRoom()];
            doors.doorTwo = rooms.coldRoom[getRandomRoom()];
            doors.doorThree = rooms.coldRoom[getRandomRoom()];
        }
        else if(mazeCounter % 3 === 0) {
            doors.doorOne = rooms.monochromeRoom[getRandomRoom()];
            doors.doorTwo = rooms.monochromeRoom[getRandomRoom()];
            doors.doorThree = rooms.monochromeRoom[getRandomRoom()];
        }
    }

    function advanceMazeCounter() {
        mazeCounter++;
    }

    function getMazeCounter() {
        return mazeCounter;
    }

    function moveToNextRoom() {
        advanceMazeCounter();
        assignDoors();
    }

    function gameEndCheck(chosenDoor) {
        const currentCount = getMazeCounter();
        if(chosenDoor === 'death') {
            domInteraction.openDeathDialog();
        }
        else if(currentCount === 15) {
            domInteraction.openWinDialog();
        }
    }

    return {
        doors,
        assignDoors,
        moveToNextRoom,
        gameEndCheck
    };
})();

(maze.assignDoors());