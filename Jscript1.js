

function show_pic(){
//alert('hi');
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
c1_elem.style.display='none';
c2_elem.style.display = 'block';
c3_elem.style.display = 'none';
}

function show_text(){
var c1_elem = document.getElementById("c1");
var c2_elem = document.getElementById("c2");
var c3_elem = document.getElementById("c3");
c1_elem.style.display='block';
c2_elem.style.display = 'none';
c3_elem.style.display = 'none';
}

function show_game() {
    var c1_elem = document.getElementById("c1");
    var c2_elem = document.getElementById("c2");
    var c3_elem = document.getElementById("c3");
    c1_elem.style.display = 'none';
    c2_elem.style.display = 'none';
    c3_elem.style.display = 'block';
}
function check() {
    x = document.getElementById("q1");
    if (x.checked) {
        alert("Yes")
    } else {
        alert("No")
    }
    ;
    q3e = document.getElementById("q3");
    answer = q3e.value;
    rese = document.getElementById('res');
    rese.innerHTML= "Вы уверены, что " + answer + '?';

}
