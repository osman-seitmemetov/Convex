document.addEventListener('DOMContentLoaded', () => {

    $(document).ready(function () {

        // var
        var $nav = $('.account-head__tabs'),
            $line = $('<div>').appendTo($nav),
            $activeLi,
            lineWidth,
            liPos;

        function refresh() {
            $activeLi = $nav.find('button.account-head__tab--active');
            lineWidth = $activeLi.outerWidth();
            liPos = $activeLi.position().left;
        }

        refresh();

        $nav.css('position', 'relative');

        // line setup
        function lineSet() {
            $line.css({
                'position': 'absolute',
                'background-color': '#46C578',
                'bottom': '-10px',
                'height': '4px',
                'border-radius': '5px',
            }).animate({
                'left': liPos,
                'width': lineWidth,
            }, 200);
        }

        lineSet();

        // on click
        $nav.find('button.account-head__tab').on('click', function () {
            $activeLi.removeClass('account-head__tab--active');
            $(this).addClass('account-head__tab--active');
            refresh();
            lineSet();
        });
    }); //end ready
});
