'use strict';

$(document).ready(function() {

  const allHorns = [];

  function Horn(horn){
    this.image_url = horn.image_url;
    this.title = horn.title;
    this.description = horn.description;
    this.keywords = horn.keywords;
    this.horns = horn.horns
    allHorns.push(this);
  }
  Horn.prototype.render = function () {
    let hornSectionHtml = $('#hornAnimal').html();
    console.log('3')
    $('main').append('<section id="clone"></section>');
    $('#clone').html(hornSectionHtml);
    
    $('#clone').find('h2').text(this.title);
    $('#clone').find('img').attr('src', this.image_url);
    $('#clone').find('alt').attr('alt', this.description);
    $('#clone').attr('id', this.keyword);
    $('#clone').attr('id',this.horns);
}
  const testHornedAnimal = new Horn ({});
  testHornedAnimal.render();


  Horn.collectHorns = () =>{
    $.get('data/page-1.json','json').then(data =>{
      data.forEach(horn => new Horn(horn));
      allHorns.forEach(horn => horn.render());
    });
  };
  Horn.collectHorns();


});
