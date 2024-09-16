let password = document.getElementById("password")
let generate = document.getElementById("gen-btn")
let copy = document.getElementById("copy-btn")
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let numeric = document.getElementById("numeric")
let pass_length = document.getElementById("num")
let range = document.getElementById("volume")
let special_chr = document.getElementById("special-chr")

    function generatePass() {
      let pass = "";
      let str = "";
      // Build the character string based on checkbox states
      if (uppercase.checked) {
        str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (lowercase.checked) {
        str += "abcdefghijklmnopqrstuvwxyz";
      }
      if (numeric.checked) {
        str += "0123456789";
      }
    if (special_chr.checked){
        str += "!@#$%^&*()_+~`|}{[];?><,./-="
    }
      if (str.length === 0) {
        // Handle the case where no character types are selected
        return "Please select at least one character type";
      }

    let length = parseInt(pass_length.value,10) || 8;
  for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return pass;
}


generate.addEventListener("click", () =>{
    event.preventDefault();
password.value = generatePass();
})
console.log(generatePass());

copy.addEventListener( "click", () => {
    event.preventDefault();
  password.select();
  document.execCommand("copy");
})
range.addEventListener( "click", () => {
pass_length.value = range.value;
})


// Why not?

// I just modify your code and add it to your file, it works.

$("input[name=values]").on("change input", function(){
    if ($(this).val()==='' || isNaN($(this).val())){
       $("input[type=range]").val(0);
    } else {
       $("input[type=range]").val($(this).val());
    }
})