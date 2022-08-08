$(document).ready(() => {
    const $cartButton = $('#cart');
    const $cartDropdown = $('#cartMenu');
    const $accountButton = $('#account');
    const $accountDropdown = $('#accountMenu');
    const $helpButton = $('#help');
    const $helpDropdown = $('#helpMenu');
    const $dropdownMenus = $('.dropdown-menu')
  
    $cartButton.on('click', () => {
      $cartDropdown.show();
    })
    $accountButton.on('click', () => {
      $accountDropdown.show();
    })
    $helpButton.on('click', () => {
      $helpDropdown.show();
    })
    
   $dropdownMenus.on('mouseleave', () => {
      $dropdownMenus.hide();
    })
  })