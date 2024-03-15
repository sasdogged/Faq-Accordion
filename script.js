const faq = document.getElementsByClassName('Q__A');
 
for(i = 0; i < faq.length; i++) {

    faq[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
};