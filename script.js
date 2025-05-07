document.addEventListener('DOMContentLoaded',function(){
    const imgHeight = document.querySelector('.mv').offsetHeight;
    const header = document.querySelector('.header');
    const nav = document.querySelector('.lists');
    console.log
    window.addEventListener('scroll',function(){
      if(window.scrollY < imgHeight){
        header.classList.remove('change-color');
        nav.classList.remove('change-color');
      }else{
        header.classList.add('change-color');
        nav.classList.add('change-color');
     }
    })
  });