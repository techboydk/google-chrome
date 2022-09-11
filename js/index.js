addEventListener("click", function() {
    var
          el = document.documentElement
        , rfs =
               el.requestFullScreen
            || el.webkitRequestFullScreen
            || el.mozRequestFullScreen
    ;
    rfs.call(el);
});
document.addEventListener('scroll', ()=>{
  if (window.scrollY>200) {
    document.querySelector('.search-bar').classList.add('sticky');
  }else{
    document.querySelector('.search-bar').classList.remove('sticky');
  }
})
