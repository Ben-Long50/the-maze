const maze = (function() {

    let mazeCounter = 1;
    let roomPosition1 = 0;
    let roomPosition2 = 3;

    const rooms = {
        warmRoom: ['red', 'orange', 'death', 'yellow'],
        coldRoom: ['green', 'death', 'purple', 'blue'],
        monochromeRoom: ['white', 'black', 'grey', 'death']
    }

    let doors = {
        doorOne: '',
        doorTwo: '',
        doorThree: ''
    }

    function countForwards() {
        if(roomPosition1 === 4) {
            roomPosition1 = 0;
        }
        return roomPosition1++;
    }

    function countBackwards() {
        if(roomPosition2 === -1) {
            roomPosition2 = 3;
        }
        return roomPosition2--;
    }

    function assignDoors() {
        if(mazeCounter % 2 !== 0 && mazeCounter % 3 !== 0) {
            doors.doorOne = rooms.warmRoom[countForwards()];
            doors.doorTwo = rooms.warmRoom[countBackwards()];
            doors.doorThree = rooms.warmRoom[countForwards()];
        }
        else if(mazeCounter % 2 === 0) {
            doors.doorOne = rooms.coldRoom[countBackwards()];
            doors.doorTwo = rooms.coldRoom[countForwards()];
            doors.doorThree = rooms.coldRoom[countBackwards()];
        }
        else if(mazeCounter % 3 === 0) {
            doors.doorOne = rooms.monochromeRoom[countForwards()];
            doors.doorTwo = rooms.monochromeRoom[countBackwards()];
            doors.doorThree = rooms.monochromeRoom[countForwards()];
        }
        console.log(doors.doorOne, doors.doorTwo, doors.doorThree)
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
        else if(currentCount === 31) {
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