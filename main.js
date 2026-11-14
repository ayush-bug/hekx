
if (!localStorage.getItem("old")) {
            document.querySelector(".welcome").textContent = "welcome to HekX , looks like you aree new to HekX .";
            document.querySelector(".new").style.display = "block";
        }

        document.getElementById("getStart").addEventListener("click", function(){
          if(document.getElementById("name").value == ""){
            Swal.fire({
  title: "Oops",
  text: "Are you a dumb unammed , please enter your name , it can't be empty",
  icon: "error"
});
          }
          else{
            localStorage.setItem("Name", document.getElementById("name").value);
            localStorage.setItem("old", "true");
               document.querySelector(".new").style.display = "none";
               window.location.reload();
          }
        });z
document.querySelector(".prompt").textContent = `${localStorage.getItem("Name")}@hekX:~$`;