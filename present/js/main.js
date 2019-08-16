document.querySelector('.background').addEventListener('mousemove', parallax, false);

    function parallax(event){
         let layers = this.querySelectorAll('.background__layer');
         layers.forEach(element => {
               let speed = element.getAttribute('data-speed');
               element.style.transform = `translateX(${event.clientX * speed / 1000}px) translateY(${event.clientY * speed / 1000}px)`
         });
        
    }