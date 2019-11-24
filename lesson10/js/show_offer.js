function show_offer_msg (){
    var date = new Date();
    var messagediv = document.getElementsByClassName("offer");
    for (i = 0; i < messagediv.length; i++) {
        if (date.getDay() == 5){
            messagediv[i].style.display = "block";
        }
        else {
            messagediv[i].style.display = "none";
        }
    }
}
show_offer_msg();