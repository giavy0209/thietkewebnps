var body = document.querySelector('body'),
    section = Array.from(document.querySelectorAll('section'));
    section.forEach(function(el,index){
            el.style.left = 101 * index + "%";
    })



body.addEventListener('wheel',function(event){
    var sectionActive = document.querySelector('section.active');
    var y = event.deltaY;

    
    setTimeout(function(){
        if(y > 0){
            var indexOfActive = section.indexOf(sectionActive) + 1;
            var index = 0;
            if(sectionActive.nextElementSibling != null){
                sectionActive.nextElementSibling.classList.add('active');
                sectionActive.classList.remove('active')
                for(indexOfActive; indexOfActive < section.length; indexOfActive++){
                    section[indexOfActive].style.left = 101 * index + "%";
                    index++;
                }
                var indexOfActive = section.indexOf(sectionActive);
                var index = 1;
                for(indexOfActive; indexOfActive >= 0; indexOfActive--){
                    section[indexOfActive].style.left = "-" + (101 * index) + "%";
                    index++;
                }
            }else{
                // var indexOfActive = section.indexOf(sectionActive) + 1;
                // var index = 0;
                section[0].classList.add('active')
                section[section.length - 1].classList.remove('active');
                section.forEach(function(el,index){
                    el.style.left = 101 * index + "%";
                })
            }
        }
    },300)

    setTimeout(function(){
        if(y < 0){
            var indexOfActive = section.indexOf(sectionActive) - 1;
            var index = 0;
            if(sectionActive.previousElementSibling != null){
                sectionActive.previousElementSibling.classList.add('active');
                sectionActive.classList.remove('active');
                for(indexOfActive; indexOfActive < section.length; indexOfActive++){
                    section[indexOfActive].style.left = 101 * index + "%";
                    index++;
                }
                var indexOfActive = section.indexOf(sectionActive) -2;
                var index = 1;
                for(indexOfActive; indexOfActive >= 0; indexOfActive--){
                    section[indexOfActive].style.left = "-" + (101 * index) + "%";
                    index++;
                }
            }else{
                // debugger
                section[section.length - 1].classList.add('active')
                section[0].classList.remove('active');
                var i = 0;
                for (let index = section.length - 1; index >= 0; index--) {
                    section[index].style.left = "-" + (101 * i) + "%";
                    i++;
                }
            }
        }
    },300)
}) 
