

countElement = document.getElementById("cur-count")
curCount = 1


function change_cur_count(whichCountMake) {

    if (whichCountMake == "decrement"){
        curCount -= 1
        countElement.innerText = curCount
    }
    else if (whichCountMake == "increment"){
        curCount += 1
        countElement.innerText = curCount
    }

    else if (whichCountMake == "reset"){
        curCount = 0
        countElement.innerText = curCount
    }

}

change_cur_count("reset")
