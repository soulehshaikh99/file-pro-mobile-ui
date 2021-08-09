const recordList = document.getElementById("records-list");
const sortRecords = document.getElementsByClassName("filter-image")[0];
const clearRecords = document.getElementsByClassName("delete-image")[0];
const noHistoryFound = document.getElementsByClassName("no-history-found")[0];

const firstRecord = document.getElementById('first');
const secondRecord = document.getElementById('second');
const thirdRecord = document.getElementById('third');
const fourthRecord = document.getElementById('fourth');
const fifthRecord = document.getElementById('fifth');
const sixthRecord = document.getElementById('sixth');
const seventhRecord = document.getElementById('seventh');
const eightRecord = document.getElementById('eight');

window.onload = function () {
    //adding the event listerner for Mozilla
    if (window.addEventListener)
        document.addEventListener('DOMMouseScroll', moveObject, false);

    //for IE/OPERA etc
    document.onmousewheel = moveObject;
}

function moveObject(event) {
    var delta = 0;

    if (!event) event = window.event;

    // normalize the delta
    if (event.wheelDelta) {
        delta = event.wheelDelta / 60;

    } else if (event.detail) {
        delta = -event.detail / 2;
    }

    let currPos = recordList.offsetTop;

    //calculating the next position of the object
    currPos = parseInt(currPos) - (delta * 10);

    // Stops from scrolling down further
    if (delta > 0 && currPos <= -350) return;

    // Stops from scrolling up further
    if (delta < 0 && currPos >= 25) return;

    //moving the position of the object
    recordList.style.top = currPos + "px";
}

let isSorted = false;
let isEmpty = false;

function resetAnimation() {
    firstRecord.style.top = "0px";
    secondRecord.style.top = "107px";
    thirdRecord.style.top = "214px";
    fourthRecord.style.top = "321px";
    fifthRecord.style.top = "429px";
    sixthRecord.style.top = "536px";
    seventhRecord.style.top = "643px";
    eightRecord.style.top = "750px";
    firstRecord.style.transform = "translateX(0px)";
    secondRecord.style.transform = "translateX(0px)";
    thirdRecord.style.transform = "translateX(0px)";
    fourthRecord.style.transform = "translateX(0px)";
    fifthRecord.style.transform = "translateX(0px)";
    sixthRecord.style.transform = "translateX(0px)";
    seventhRecord.style.transform = "translateX(0px)";
    eightRecord.style.transform = "translateX(0px)";
    noHistoryFound.style.transform = "translateX(-375px)";
}

sortRecords.addEventListener('click', () => {
    if (isSorted || isEmpty) {
        isSorted = false;
        isEmpty = false;
        resetAnimation();
        return;
    } else isSorted = true;
    recordList.style.transition = 'all 800ms ease-in-out';
    secondRecord.style.transform = "translateX(190px)";
    thirdRecord.style.transform = "translateX(-190px)";
    setTimeout(() => {
        secondRecord.style.top = '214px';
        thirdRecord.style.top = '107px';
    }, 600);
    setTimeout(() => {
        secondRecord.style.transform = "translateX(0px)";
        thirdRecord.style.transform = "translateX(0px)";
    }, 1100);
    setTimeout(() => {
        fourthRecord.style.transform = "translateX(-375px)";
    }, 1600);
    setTimeout(() => {
        secondRecord.style.top = '321px';
        thirdRecord.style.top = '214px';
        fourthRecord.style.top = '107px';
    }, 2100);
    setTimeout(() => {
        fourthRecord.style.transform = "translateX(0px)";
    }, 2600);
    setTimeout(() => {
        recordList.style.transform = "translateY(-325px)";
    }, 3100);
    setTimeout(() => {
        eightRecord.style.transform = "translateX(-375px)";
    }, 4000);
    setTimeout(() => {
        eightRecord.style.top = "214px";
        thirdRecord.style.top = "321px";
        secondRecord.style.top = "429px";
        fifthRecord.style.top = "536px";
        sixthRecord.style.top = "643px";
        seventhRecord.style.top = "750px";
    }, 4600);
    setTimeout(() => {
        recordList.style.transform = "translateY(0px)";
    }, 5200);
    setTimeout(() => {
        eightRecord.style.transform = "translateX(0px)";
    }, 6100);
    setTimeout(() => {
        recordList.style.transform = "translateY(-325px)";
    }, 6600);
    setTimeout(() => {
        fifthRecord.style.transform = "translateX(-375px)";
    }, 7500);
    setTimeout(() => {
        thirdRecord.style.top = "429px";
        secondRecord.style.top = "536px";
    }, 8100);
    setTimeout(() => {
        fifthRecord.style.top = "321px";
        recordList.style.transform = "translateY(0px)";
    }, 8600);
    setTimeout(() => {
        fifthRecord.style.transform = "translateX(0px)";
    }, 9500);
    setTimeout(() => {
        firstRecord.style.transform = "translateX(190px)";
        fourthRecord.style.transform = "translateX(-190px)";
    }, 10100);
    setTimeout(() => {
        firstRecord.style.top = '107px';
        fourthRecord.style.top = '0px';
    }, 10600);
    setTimeout(() => {
        firstRecord.style.transform = "translateX(0px)";
        fourthRecord.style.transform = "translateX(0px)";
        recordList.style.transition = 'none';
    }, 11100);
});

clearRecords.addEventListener('click', () => {
    if (isEmpty) {
        isEmpty = false;
        resetAnimation();
        return;
    } else isEmpty = true;
    const baseShift = 360;
    const records = recordList.children;
    for (let record of records) {
        record.style.transition = 'all 1500ms cubic-bezier(0.68, -0.6, 0.32, 1.6)';
    }
    for (let i = 1; i <= records.length; i++) {
        records[i - 1].style.transform = "translateX(" + (baseShift * i) + "px)";
    }
    noHistoryFound.style.transform = "translateX(0px)"
});