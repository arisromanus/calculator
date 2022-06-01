let outputScreen = document.getElementById("textarea");

//insert angka
function input(num) {
   outputScreen.value += num;
}


//Fungsi Operasi
function equal(){
    var hasil = outputScreen.value;
        try {
            outputScreen.value = eval(hasil);
        } catch (error) {
            alert("invalid")
        }
    
}

//clean
function clean(){
    outputScreen.value ="";
}

//Delete
function hapus(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}