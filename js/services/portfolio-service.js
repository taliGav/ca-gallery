'use strict';

var gProjs = [];


function createProjects() {
    gProjs = [
        _createProject('ball-board','games','https://taligav.github.io/ball-board/',["JS","CSS", "HTML","FULL STACK"]),
        _createProject('minesweeper','games','https://taligav.github.io/minesweeper/',["JS","CSS","HTML","FULL STACK"]),
        _createProject('book-shop','inventory management','https://taligav.github.io/book-shop/',["JS","CSS","HTML","FULL STACK"]),
    ];
}

function _createProject(name, title,link, labels) {
    return {
        id: name,
        name,
        title,
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        link,
        publishedAt: 1448693940000,
        labels,
    };
}

function getProjects() {
    return gProjs;
}

function getProj(projId) {
    return gProjs.find(proj => projId === proj.id);
}