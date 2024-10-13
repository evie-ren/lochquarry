const teamData = [
    {
        "name" : "Claire Jack",
        "image" : "assets/ClaireJack.png",
        "position" : "Centre Manager",
        "responsibility": "The overall running of the centre and all of its activities.",
        "favorite": "Favorite Part: Pole climb"
    },

    {
        "name" : "Robbie Elliot",
        "image" : "assets/RobbieElliot.png",
        "position" : "Senior Instructor (Land)",
        "responsibility": "Overseeing all of the land based activities.",
        "favorite": "Favorite Part: Hillwalking in the beautiful Scottish highlands"
    },

    {
        "name" : "Marion Hunter",
        "image" : "assets/MarionHunter.png",
        "position" : "Centre Administrator",
        "responsibility": "Making bookings and arranging activity slots for groups.",
        "favorite": "Favorite Part: Making sure everyone has a great time when the visit Lochquarry"
    }
]

let index = -1;

//Do this when page is loaded
window.onload = nextPerson;

function nextPerson()
{
    var element;
    index = (index + 1) % 3;

    element = document.getElementById("team-name");
    element.innerHTML = teamData[index].name;

    element = document.getElementById("team-image");
    element.src = teamData[index].image;

    element = document.getElementById("team-position");
    element.innerHTML = teamData[index].position;

    element = document.getElementById("team-responsibility");
    element.innerHTML = teamData[index].responsibility;

    element = document.getElementById("team-favorite");
    element.innerHTML = teamData[index].favorite;
}