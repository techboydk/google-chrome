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
const input = document.getElementById('search-text');
input.addEventListener('keydown',(e)=>{
  let keycode= e.keyCode;
  if(keycode == 13 && input.value != '') {
        let one = input.value;
        let two = 'https://www.google.com/search?q=' + encodeURIComponent(one);
        window.location = two;
        input.value = ''
    }
});
