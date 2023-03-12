var x = document.getElementsByClassName('subsec');

for (var i = 0; i< x.length; i++){
    x[i].addEventListener("click", function(){
        window.open('nopoverty.html')
    })
}