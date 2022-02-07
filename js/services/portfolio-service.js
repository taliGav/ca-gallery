'use strict';

var gProjs = [];


function createProjects() {
    gProjs = [
        _createProject('ballgame','games','url',["JS","CSS", "HTML","FULL STACK"]),
        _createProject('minesweeper','games','https://taligav.github.io/minesweeper/',["JS","CSS","HTML","FULL STACK"]),
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