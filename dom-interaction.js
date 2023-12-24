const domCache = (function() {
    const bodyElement = document.querySelector('body');
    const roomName  = document.querySelector('#room-name');
    const doorOne = document.querySelector('#door-one');
    const doorTwo = document.querySelector('#door-two');
    const doorThree = document.querySelector('#door-three');
    const deathDialog = document.querySelector('#death-dialog');
    const winDialog = document.querySelector('#win-dialog');

    return{
        bodyElement,
        roomName,
        doorOne,
        doorTwo,
        doorThree,
        deathDialog,
        winDialog
    }
})();

const domInteraction = (function() {

    const roomColors = {
        red: 'rgb(185, 107, 107)',
        orange: 'rgb(189, 144, 86)',
        yellow: 'rgb(198, 201, 61)',
        green: 'rgb(107, 185, 107)',
        blue: 'rgb(61, 168, 201)',
        purple: 'rgb(154, 106, 177)',
        }

    function matchRoomColor(color) {
        domCache.bodyElement.style.backgroundColor = color;
        const roomTitle = color + ' ROOM';
        domCache.roomName.textContent = roomTitle.toUpperCase();
    }

    function openDeathDialog() {
        domCache.deathDialog.showModal();
    }
    
    function openWinDialog() {
        domCache.winDialog.showModal();
    }

    domCache.doorOne.addEventListener('click', () => {
        maze.gameEndCheck(maze.doors.doorOne);
        matchRoomColor(maze.doors.doorOne)
        maze.moveToNextRoom();
    })

    domCache.doorTwo.addEventListener('click', () => {
        maze.gameEndCheck(maze.doors.doorTwo);
        matchRoomColor(maze.doors.doorTwo)
        maze.moveToNextRoom();
    })

    domCache.doorThree.addEventListener('click', () => {
        maze.gameEndCheck(maze.doors.doorTwo);
        matchRoomColor(maze.doors.doorTwo)
        maze.moveToNextRoom();
    })

    return{
        roomColors,
        matchRoomColor,
        openDeathDialog,
        openWinDialog
    }
})();