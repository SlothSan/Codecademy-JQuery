$(document).ready(() =>{
    

    function toggleMore(){
        const $moreBtn = $('.more-btn');

        $moreBtn.on('click', (event) =>{
            const $currentEvent = $(event.currentTarget);
            $currentEvent.siblings('.more-menu').toggle();
        })
    }

    function shareMenu(){
        const $share = $('.share');

        $share.on('click', () =>{
            const $shareMenu = $('.share-menu');
            $shareMenu.toggle();
        })
    }

    function notificationBell(){
        const $notificationBell = $('.notification');

        $notificationBell.on('click', (event) =>{
            const $currentEvent = $(event.currentTarget);
            $currentEvent.toggleClass('active');
        })
    }

    toggleMore();
    shareMenu();
    notificationBell();

})