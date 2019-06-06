var body = document.querySelector('body'),
    section = Array.from(document.querySelectorAll('section'));
    section.forEach(function(el,index){
            el.style.left = 110 * index + "%";
    })



body.addEventListener('wheel',function(event){
    var sectionActive = document.querySelector('section.active');
    var y = event.deltaY;

    
    console.log(indexOfActive, section.length)
    if(y > 0){
        var indexOfActive = section.indexOf(sectionActive) + 1;
        var index = 0;
        if(sectionActive.nextElementSibling != null){
            sectionActive.nextElementSibling.classList.add('active');
            sectionActive.classList.remove('active')
            // sectionActive.style.left = "-110%"
            for(indexOfActive; indexOfActive < section.length; indexOfActive++){
                section[indexOfActive].style.left = 110 * index + "%";
                index++;
            }
            var indexOfActive = section.indexOf(sectionActive);
            var index = 1;
            for(indexOfActive; indexOfActive >= 0; indexOfActive--){
                section[indexOfActive].style.left = "-" + (110 * index) + "%";
                index++;
            }
        }
    }
    if(y < 0){
        var indexOfActive = section.indexOf(sectionActive) - 1;
        var index = 0;
        if(sectionActive.previousElementSibling != null){
            sectionActive.previousElementSibling.classList.add('active');
            sectionActive.classList.remove('active');
            for(indexOfActive; indexOfActive < section.length; indexOfActive++){
                section[indexOfActive].style.left = 110 * index + "%";
                index++;
            }
            var indexOfActive = section.indexOf(sectionActive) -2;
            var index = 1;
            for(indexOfActive; indexOfActive >= 0; indexOfActive--){
                section[indexOfActive].style.left = "-" + (110 * index) + "%";
                index++;
            }
        }
    }
}) 
