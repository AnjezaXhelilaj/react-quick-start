
// document.querySelector("#blue-quick-start").addEventListener("click", function(e) {
//     e.preventDefault();
//     this.parentElement.parentElement.classList.toggle("active");
// });

function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const aside = document.getElementsByClassName("left-sidebar")[0];
    const li = aside.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

