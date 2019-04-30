
function MyInfo () {
    var hello = document.getElementById("postPerson");
    var name = document.getElementById('name');
    // var age = document.getElementById('age');
    var city = document.getElementById('hobby');

    hello.innerHTML = "Hello "+name.value+"from "+city.value+"."
    
}