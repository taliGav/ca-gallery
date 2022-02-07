'use strict';

$(initPage);

function initPage() {
    createProjects();
    renderProjects();

}



function renderProjects() {
    console.log(gProjs);
    var strHtml = gProjs.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" onclick="renderModal('${proj.id}')" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}-thumbnail.png" onclick="renderModal(${proj.id})" alt="${proj.id}">
        </a>
        <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
            </div>
            </div>
            `;
    }).join('');

    // $('.img-fluid').click(renderModal(proj.id));
    $('#portfolio .container').html(strHtml);
}


function renderModal(projId) {
    var currProj = getProj(projId);
    console.log('currProj', currProj);

    var strHtml = `
    <h2>${currProj.name}</h2>
    <p class="item-intro text-muted">${currProj.desc}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${currProj.id}-full.png" alt="${currProj.id}">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
      blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
      cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
      <li>Date: ${getTime(currProj.publishedAt)}</li>
      <li>Client: ${currProj.name}</li>
      <li>Category: ${currProj.title}</li>
    </ul><br><br>
    <button type="button" class="btn btn-info"><a href="${currProj.link}" target="_blank">
    Check it out!</button>
    <br><br>
    `;

    for (var i = 0; i < currProj.labels.length; i++) {
        strHtml += `<span class="badge rounded-pill bg-primary">${currProj.labels[i]}</span>  `;
    }

    strHtml += `<br><br><button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`;

    $('#portfolioModal .modal-body').html(strHtml);
}


$('.submit-message').click(onSubmit);

function onSubmit() {
    var subject = $('input[placeholder="Subject"]').val();
    var message = $('textarea[placeholder="Message"]').val();
    window.open(`http://mail.google.com/mail/?view=cm&fs=1&to=taligavrielov@gmail.com&su=${subject}&body=${message}`);
}

function getTime() {

    var date = new Date();
    date = date.getDate() +
        '/' + (date.getMonth() + 1) +
        '/' + date.getFullYear() +
        ' ' + date.getHours() +
        ':' + date.getMinutes() +
        ':' + date.getSeconds();
    return date;
}
