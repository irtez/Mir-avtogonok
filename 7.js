$(document).ready(function(){
    const marker = document.querySelector('#marker');
    const item = document.querySelectorAll('.mynav a');

    function indicator (e) {
        marker.style.left = e.offsetLeft + 'px';
        marker.style.width = e.offsetWidth + 'px';
    }
    item.forEach(link => {
        link.addEventListener('mouseover', (e) => {
            indicator(e.target);
        });
    });
});