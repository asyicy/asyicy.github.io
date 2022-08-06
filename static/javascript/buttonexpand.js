document.querySelectorAll('.expandbutton').forEach(button => {
    button.addEventListener('click', ()=> {
        const content = button.nextElementSibling;
        const pict = document.getElementsByClassName('rect')[0];
        console.log(pict)
        button.classList.toggle('expandbutton--active');

        if (button.classList.contains('expandbutton--active')){
            content.style.maxHeight = content.scrollHeight + 'px';
            pict.style.maxHeight= 0;
        }
        else {
            content.style.maxHeight = 0;
            pict.style.maxHeight= 100 +'%';
        }
});
});