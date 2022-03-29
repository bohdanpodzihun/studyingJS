let getRandomNumer = function(size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function(event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

let getDistanceHint = function(distance) {
    if (distance < 10) {
        return "Very close!";
    } else if (distance < 20) {
        return "Close";
    } else if (distance < 40) {
        return "On the right way";
    } else if (distance < 80) {
        return "Somwhere nearby";
    } else if (distance < 160) {
        return "Not here";
    } else if (distance < 320) {
        return "This way is wrong";
    } else {
        return "Absolutely wrong way";
    }
};

let width = 400;
let height = 400;
let clicks = 0;
let target = {
    x: getRandomNumer(width),
    y: getRandomNumer(height)
};

$("#map").click(function(event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert("You found the treasure! Klicks: " + clicks);
    }
});