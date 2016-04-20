'use strict';

$(function(){
  $('#calculate').on('click', doMath);
  $('#analyze').on('click', analyzeStr);
  $('#calcAge').on('click', calcAge);
  $('#getGravatar').on('click', getGravatar);
})

function doMath(){
  var num1 = $('#num1').val() || 1;
  var num2 = $('#num2').val() || 1;
  var operation = $('#operation').val();

  $.get(`/math/${operation}/${num1}/${num2}`)
  .done(function(data){
    $('#mathResult').text(`The result is: ${data}`);
  })
  .fail(function(err){
    console.log('error:', err);
  })
}

function analyzeStr() {
  var str = $('#sentence').val();
  if(!str) return;
  var analysis = $('#strAnal').val();

  $.get(`/stranal/${analysis}/${str}`)
  .done(function(data){
    $('#analResult').text(`The result is: ${data}`);
  })
  .fail(function(err){
    console.log('error:', err);
  })
}

function calcAge() {
  var year = $('#year').val();
  var month = $('#month').val();
  var day = $('#day').val();
  if(!year || !month || !day) return;
  var birthdate = encodeURIComponent([year,month,day].join('-'));
  $.get(`/calcage/${birthdate}`)
  .done(function(data){
    $('#ageResult').text(`The result is: ${data}`);
  })
  .fail(function(err){
    console.log('error:', err);
  })
}

function getGravatar() {
  var email = encodeURIComponent($('#gravatarInput').val());
  $.get(`/getgravatar/${email}`)
  .done(function(data){
    $('#gravatar').attr('src', data);
  })
  .fail(function(err){
    console.log('error:', err);
  })
}
