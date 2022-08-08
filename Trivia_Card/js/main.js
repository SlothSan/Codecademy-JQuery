$(document).ready(() =>{

    const $hintBox = $('.hint-box');
    const $hint = $('.hint');
    const $wrongAnswerOne = $('.wrong-answer-one');
    const $wrongAnswerTwo = $('.wrong-answer-two');
    const $wrongAnswerThree = $('.wrong-answer-three');
    const $wrongTextOne = $('.wrong-text-one');
    const $wrongTextTwo = $('.wrong-text-two');
    const $wrongTextThree = $('.wrong-text-three');
    const $frown = $('.frown');
    const $smiley = $('.smiley');
    const $answer = $('.correct-answer');
    
    $hintBox.on('click', () => {
      $hint.slideToggle(300);
    });
    
    $wrongAnswerOne.on('click', () => {
     $wrongTextOne.fadeOut('slow');
     $frown.show();
    });
    
    $wrongAnswerTwo.on('click', () => {
      $wrongTextTwo.fadeOut('slow');
      $frown.show();
    });
    
    $wrongAnswerThree.on('click', () => {
      $wrongTextThree.fadeOut('slow');
      $frown.show();
    });
    
    $answer.on('click', () => {
      $frown.hide()
      $smiley.show()
      $wrongTextOne.fadeOut('slow')
      $wrongTextTwo.fadeOut('slow')
      $wrongTextThree.fadeOut('slow') 
    });
    
    
    });