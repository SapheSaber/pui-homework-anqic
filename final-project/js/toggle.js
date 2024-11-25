document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.section-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const section = header.parentElement;
            const arrow = header.querySelector('i');
            const content = section.querySelector('.section-content');

            if (content.style.display === 'none' ) {
                content.style.display = 'block'; 
                arrow.classList.remove('fa-chevron-down');
                arrow.classList.add('fa-chevron-up');
            } else {
                content.style.display = 'none'; 
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');
            }
        });
    });
});
