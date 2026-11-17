
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
        });
document.querySelector(".prompt").textContent = `${localStorage.getItem("Name")}@hekX:~$`;

const output = document.getElementById("terminal-editor");
const input = document.getElementById("inputFromUser");

const backChat = [];
let backChatIndex = -1;

function print(text , className = ""){
  const line = document.createElement("p");
  line.className = `output-line ${className}`;
  line.textContent = text;
  output.appendChild(line);
  window.scrollTo(0, document.body.scrollHeight);
}

 async function type(text, className="", speed = 20){
  const line = document.createElement("p");
  line.className = `output-line ${className}`;
  line.textContent = "";
  output.appendChild(line);
  for(let i = 0;i<text.length ;  i++){
    line.textContent += text[i];
    await new Promise(resolve => setTimeout(resolve,speed));
  }
  window.scrollTo(0,document.body.scrollHeight); 
 }

async function userCommand(command){
  const parts = command.trim().split(/\s+/);
  const cmd = (parts[0] || "").toLowerCase();
  print(`${localStorage.getItem("Name")}@hekX:~$`);
  if(cmd === "help"){
    print(` 
█ █ █▀▀ █   █▀█
█▀▓ ▓▀  ▓░  ▓▀▀ 
▀ ▀ ▀▀▀ ▀▀▀ ▀  
      `);
print("about - About hekX");
print("whoami -  about you");
print("userdata - about your device");
print("date - current date");
print("time  -  to get current time");
print("clear");
print("darkweb");
print("hacknasa");
print("phising");
print("ddos");
print("damn");
  }
  else if(cmd === "about"){
    print(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣷⣶⣶⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢟⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣰⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣠⣾⢿⣿⣿⣿⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⣼⣿⢁⣿⣿⣿⣿⣿⢀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢘⣿⣿⣿⣿⣿⣿⣿⣿⠀⢡⠀⠀⠀
⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⢈⣿⣿⣿⣿⣿⣿⣿⣿⠀⣎⠆⠀⠀
⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⣿⣿⣿⣿⣿⣿⣿⣿⣷⢸⡰⠇⠀⠀
⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⡳⠁⠀⠀
⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣸⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣯⢳⠁⠀⠀
⡐⠁⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠧⣸⣿⣿⣿⣿⣿⣿⣧⡙⣿⣿⣿⣇⠃⠀⠀
⠙⠲⢦⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠻⠟⠫⠩⠍⠀⣰⠾⢹⣿⣿⣛⣛⣻⣿⣿⣌⠻⣷⣏⠆⠀⠀
⠀⠐⡈⣯⢴⠾⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠁⡀⢀⣠⣤⣦⣴⣤⡀⣠⣼⣦⠟⣠⡾⠟⠋⢉⠉⠉⠉⠉⠁⣘⢻⡇⠀⠀
⠀⠀⢡⣷⢸⣿⣿⣂⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠁⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⡿⣋⡅⠂⢸⣷⠀⡀⠀⠀⠀⠐⢻⣿⣿⣌⠆
⠀⠀⢀⣿⢸⣿⣿⣿⣷⣦⡻⣿⣿⣿⣿⡿⠻⣿⣿⣿⠿⠋⢠⣴⣾⣿⣿⣿⣿⣿⣿⡿⢿⣫⣶⣟⣿⣿⠢⠋⠀⠀⣿⡏⢠⣀⠒⢶⠀⣄⢂⠉⠙⠉⠀
⠀⠀⢸⣽⡇⢿⣿⣿⣿⣿⣷⣄⠉⢁⢠⣷⣤⣄⡈⣁⠀⣶⣿⣿⣿⣿⣿⣿⣿⣿⣶⡾⣿⡿⠟⣋⠉⠀⠀⠀⠀⢰⣾⡏⢰⢈⣿⣿⠀⢹⣾⢀⠀⠀⠀
⠀⣴⣿⣿⣷⣶⣮⣭⣟⣛⣛⡂⡼⠦⣾⣿⣻⣿⣿⣿⣳⣜⣛⣻⣭⣷⣾⣿⡿⣿⠽⠟⠁⣠⣶⣷⣆⠀⠀⠀⠀⢸⣿⡇⢸⣿⣿⣿⠀⠈⠣⠘⠀⠀⠀
⠚⢿⣿⣟⣿⣿⡈⠻⠍⢿⣿⡇⠄⠀⠈⢻⣿⣿⣻⣿⣿⣭⣿⡭⠉⠁⠄⠈⠁⠀⢀⢠⣇⠛⠉⠋⠀⠀⠀⠀⠀⢸⣿⠇⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠋⠁⠀⠈⠁⠀⢨⣿⡿⠀⡴⢰⢡⣿⣿⣿⣿⣿⣿⣿⢃⠖⡀⠔⢠⢊⢠⣼⠾⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣤⣽⡿⠃⣄⠶⠁⣰⣿⣿⣿⣿⢻⣿⡏⣰⠠⣽⣆⢹⣿⠘⣿⡇⡿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⢀⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡾⣿⣿⠀⣴⣿⣦⢰⣿⣿⣿⣿⣿⢸⣿⡇⣿⠀⣾⣿⡈⢿⣷⠹⡛⠁⠀⠀⠀⠀⠀⠀⠀⢠⣿⡏⢸⣿⣧⣿⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⡿⢧⡟⣷⡾⣿⣿⣆⣿⣿⣿⢹⣿⣧⢸⣿⢀⣿⠇⠛⣭⡄⢤⣤⠰⣿⠀⠀⠀⠀⠀⠀⠀⠀⣰⣾⡇⢸⣿⢿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠸⢧⡿⣾⣿⢱⣿⣇⠿⢿⡻⠟⠻⣛⠁⣈⣥⢠⣾⣶⡹⣿⣿⡜⣿⣧⠻⠃⠀⠀⠀⠀⠀⢀⣰⣿⣿⠁⣾⣿⢡⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡶⣶⣰⣦⢆⣴⡐⣴⣶⢶⣾⡇⢹⣿⢃⣻⣿⡘⣿⣧⡇⠻⠟⠃⢉⡄⠀⠂⣀⣀⣀⡤⠔⣫⣿⣿⠃⣸⡿⣿⣾⣿⣿⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣾⣼⣿⣿⢇⡞⣧⣽⣿⢟⣼⣿⢣⣿⣿⠄⢿⠟⢃⡍⣩⡴⠀⣘⡋⣀⠄⣀⣴⣭⣿⣿⣿⣿⡿⠟⢁⣼⡟⢠⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠟⡋⠿⠟⠸⠿⣉⣙⡛⡸⣿⠋⢀⣭⣬⡔⢠⣿⡏⢀⡿⠀⢠⣽⡀⣶⣾⠘⣿⣏⣠⣶⣛⣷⣶⣶⣿⣿⣷⣿⣿⣿⣿⣿⣟⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡇⣿⣿⣸⣿⡿⣿⣇⡁⣿⣷⠎⢿⡿⠁⡈⠏⣀⢸⣶⣶⢸⣿⠇⣿⣷⣾⣉⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⢿⣿⡿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣁⢛⣁⣈⣛⣂⣌⣉⣤⣤⣥⠶⣶⣶⡔⢿⣿⡿⠸⣿⣏⠸⣿⣶⢹⣿⣿⣿⣿⣿⣟⡻⠾⠿⠿⠿⠿⣭⣜⣛⣻⣿⡾⠛⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠹⡇⣾⡟⢿⣿⡿⢿⣿⣿⢿⣿⡧⣟⣽⠃⡘⣿⣧⠂⣿⣿⣜⣿⣷⣬⣿⣿⠿⠛⠋⠁⠀⠀⠀⠀⠀⠉⠐⠒⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⣤⢨⣀⡈⡏⣁⡀⣿⢹⣟⣿⠇⣬⣹⣆⢷⣿⣿⣆⠻⣿⣿⣿⡿⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣶⣟⣼⣿⣸⣷⣿⣇⣿⣾⣿⣿⣧⣸⣿⣿⣮⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠙⠾⠷⠿⠿⠿⢿⣿⣿⣿⣿⣿⠿⠿⠿⠟⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
      `)
    print(`
┌┐  ┐ ┌┬──┐ ┌┬──┐ ┌┬──┐ ┌┐ ┌┬──┐ ┌┬─┐ ┐      ┌┬──┐    ┌┬──┐    ─┬┐ 
└┤  │ ├┼─   ├┼─┬┘ └┴─┬┐ ├┤ ├┤  │ ├┤ │ │      ├┤/ │    ├┤/ │     ├┤ 
 └──┘ └┴──┘ └┘ └  └──┴┘ └┘ └┴──┘ └┘ └─┘      └┴──┘  o └┴──┘  o ─┴┴─
      `);
    print("hekX is a open source terminal where you can hack anyting hahah . ");
    print("made with love by Ayush.bug , a professoin bug .")
  }
  else if (cmd === "whoami"){
    type("You are a user of our hekx and you are the greates hacker of all time , the goat the myth .",50);
  }
  else if(cmd == "userdata"){
    print(`
⠀⠀⠀⠀⠀⠀⠀⣀⣤⣴⣶⣶⣶⣿⣿⣿⣷⣶⣶⣶⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⡀⠀⠀⠀⠀
⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀
⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀
⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡏⠉⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠋⠉⠉⣿⣿
⢻⣿⡇⠀⠀⠀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀⢀⣿⡇
⠘⣿⣷⡀⠀⠀⠀⠀⠀⠀⠉⠛⠿⢿⣿⣿⣿⠿⠛⠋⠀⠀⠀⠀⠀⠀⢀⣼⣿⠃
⠀⠹⣿⣿⣶⣦⣤⣀⣀⣀⣀⣀⣤⣶⠟⡿⣷⣦⣄⣀⣀⣀⣠⣤⣤⣶⣿⣿⡟⠀
⠀⠀⣨⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⡇⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀
⠀⢈⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣷⠀⣼⣷⠀⣸⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⡇⠀
⠀⠘⣿⣿⣿⡟⠋⠀⠀⠰⣿⣿⣿⣷⣿⣿⣷⣿⣿⣿⣿⡇⠀⠀⠀⣿⣿⠟⠁⠀
⠀⠀⠈⠉⠀⠈⠁⠀⠀⠘⣿⣿⢿⣿⣿⢻⣿⡏⣻⣿⣿⠃⠀⠀⠀⠈⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⣿⣿⢸⣿⡇⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡇⣿⣿⢸⣿⡇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⣿⣿⢸⣿⡇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⣿⣿⢸⣿⠃⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⡇⣿⣿⢸⣿⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠇⢿⡿⢸⡿⠀⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      `);
      print(`
┌┐  ┐ ┌┬──┐ ┌┬──┐ ┌┬──┐      ┬┬──┐ ┌┬──┐ ┌─┬┬─┐ ┌┬──┐
├┤  │ └┴─┬┐ ├┼─   ├┼─┬┘      ├┤  │ ├┼──┤   ├┤   ├┼──┤
└┴──┘ └──┴┘ └┴──┘ └┘ └       ┴┴──┘ └┘  ┘   └┘   └┘  ┘
        `);
    print(`User agent   -    ${navigator.userAgent}`);
    print(`user platfrom   -   ${navigator.platform}`);
    print(`language   -   ${navigator.language}`);
    print(`online status   -    ${navigator.onLine}`);
    print(`Effective type -    ${navigator.connection.effectiveType}`);
    print(`downlink   -    ${navigator.connection.downlink}`);
    print(`rrt    -    ${navigator.connection.rtt}`);
    print(`device ram    -    ${navigator.deviceMemory}gb`);
  }
  else if(cmd === "date"){
    print(new Date().toDateString());
  }
  else if(cmd === "time"){
    print(new Date().toLocaleTimeString());
  }
  else if(cmd === "clear"){
     output.innerHTML = "";
  }
else if(cmd === "darkweb"){
  print(`
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⡤⢤⣄⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣿⣿⠅⠀⣠⣴⣺⣿⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⡿⣻⣿⣿⣶⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⡿⠛⠛⢿⣿⣿⣿⣿⣿⣿⣭⣾⣿⣿⣿⣿⣿⣿⣭⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠘⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⡛⠛⠒⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣽⣯⣟⣿⣁⣉⣉⣀⣉⡙⠻⠿⣿⠿⠷⠦⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡤⠤⠔⠒⠒⣋⣛⣭⡥⠉⠂⣒⣒⣒⣀⣈⣍⣩⣉⣝⣛⣒⣶⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠔⠚⢉⣁⣤⣄⣶⡶⠿⣙⣮⣭⣶⡾⠿⣿⣿⣽⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣤⣒⣦⢠⠖⠋⣁⣤⡖⢼⡻⠜⣃⣭⣴⡾⣟⣹⣥⡵⠶⠟⠛⠛⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠛⠛⠳⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣾⡏⣽⣿⣿⣭⣤⡀⢠⣴⣾⢿⣿⡯⠶⠛⠋⠉⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣷⣸⣿⠋⠀⠀⢹⢟⡻⠗⠋⠁⠀⠀⠀⠀⠀⠀⢀⣾⣿⣶⣿⣯⣍⡛⠿⢖⣲⡶⢤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠿⣾⣿⠃⠀⠀⠘⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠠⠭⣙⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢿⣹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣹⣿⠿⠋⠉⠉⠉⠉⠳⠿⢷⣄⠀⠀⠀⠀⠉⠈⢝⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡏⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣞⣵⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⢻⣧⠀⠀⠀⠀⠀⠀⠑⡷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣷⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣾⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣬⢹⣷⠀⠀⠀⠀⠀⠀⠈⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢹⡾⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢸⣿⣿⢃⣀⣀⡀⣄⠀⢠⣴⣶⣶⣌⢻⣿⣿⣇⠀⠀⠀⠀⠀⠀⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⣿⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣷⢹⠂⣿⣿⣿⣿⣿⡎⣿⣿⣿⠀⢀⠇⠀⠀⡆⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢻⣼⣇⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⣿⡟⣿⣿⣿⠏⣘⡀⠸⢿⣿⣿⣿⣳⣿⢹⣿⠀⡎⡇⢿⣜⢼⣾⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣇⣿⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⣿⣧⣈⣭⡵⢸⣿⣿⡜⢶⣮⣭⣴⣟⣵⣿⣿⠘⣢⣧⣆⣷⡼⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢿⣸⡇⠀⠀⠀⠀⠀⠀⠀⣿⣻⣿⣿⣿⣿⣇⣘⢋⢛⢃⠘⣯⣿⣿⣷⣷⣿⣿⡆⢱⣿⣽⢻⣽⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢸⣏⣷⠀⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⢿⢼⢼⢿⣾⣿⣿⣿⣿⢿⣿⣿⣿⣦⢻⡟⣾⣿⣯⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⢻⡆⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡿⣹⢾⢾⣼⣞⣿⣿⣿⣧⣿⣿⣿⣿⡿⣜⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡟⣧⠀⠀⠀⠀⠀⢀⣸⣿⣿⣿⣿⣿⡗⠜⠹⠏⠟⠋⢚⣡⣾⣿⣿⣿⠿⠋⡾⢫⣿⣿⠋⠙⢿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⢿⡀⠀⠀⣀⣤⣾⠁⠙⢿⣿⣿⣿⣿⣶⢶⢶⢶⢾⡿⡿⣿⣿⡿⡟⠀⠀⡁⡜⠃⣿⡄⠀⠀⠙⢿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣇⡤⠚⠉⠉⠻⣦⡀⠈⠻⣿⣿⢿⣿⣿⢸⢸⣸⣷⣿⡿⡿⠃⠀⠀⣜⡜⠇⡾⡫⡂⡀⣠⠠⣻⡿⠻⢿⣦⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣷⣿⠀⠀⠀⠀⠀⠈⢇⠀⠀⠹⣿⣧⡟⣻⣿⣿⣿⣿⡿⠋⠀⠀⣠⣸⡷⣭⠅⠁⡇⣡⣎⣽⡔⠃⠀⠀⠀⣿⣧⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣠⣞⠃⠀⢿⣾⣇⡤⡀⢀⣄⢢⡪⣳⡀⠀⠙⣻⣻⣽⢺⣿⣿⣿⢁⠄⢀⣞⣿⣿⣻⣿⣷⣿⣾⣿⡿⣀⣀⡀⠀⠀⠀⢻⣿⣷⡄⠀⠀⠀
⠀⠀⠀⢀⣤⡶⢛⣻⣿⣷⣦⣸⣿⣷⣿⣯⣮⣫⡓⣝⣻⣷⠄⠀⠈⣷⡖⣧⢿⣿⣯⣿⡿⣿⣼⡿⠟⠋⠉⠁⠀⠉⠛⠿⣷⣶⣶⡦⠀⠀⠸⡯⣿⣿⣆⠀⠀
⠀⠀⣠⠟⠁⠀⠀⠀⠈⠉⠉⢹⠟⠛⣛⣿⣿⣿⣿⣾⣟⣾⣿⣢⡌⣷⣿⣿⢿⣿⣻⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣶⣦⡄⠀⠑⠈⣿⣿⣆⠀
⠀⣰⠃⠀⠀⠀⠀⠀⠀⡠⠒⣵⣶⠿⠟⠙⢻⠿⣿⣿⣿⣿⣿⣳⡿⣻⣿⣧⣾⣿⡿⣿⣿⢿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⡀⠀⢿⣿⡿⣿⣷⣤⣦⢾⣿⣿⡄
⠀⣿⣄⢀⢀⠀⠀⠀⢸⣗⡫⢟⣎⣭⣤⠾⣿⣶⣴⣹⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣷⣿⣽⣻⣿⣿⣿⣿⣷⣄⡀⠀⠈⡼⣵⡆⠘⣿⣿⡌⢻⣷⣪⢾⣿⣿⣇
⢸⡏⣹⢘⡼⡆⠀⢸⣼⣷⠿⠿⢛⣛⣡⣀⣹⣩⣛⢿⣿⣿⣿⣿⣿⣿⣿⠿⢛⣽⣾⣿⣿⢯⡿⣿⣿⣿⣿⣿⣯⢾⣀⡓⣿⣿⣷⢿⣿⣿⡀⠙⣷⣿⣿⣿⣿
⠘⣧⡟⣸⢷⣇⠀⢰⣿⣿⣿⣿⣟⣿⡿⣻⡿⠟⣛⣻⣿⣿⣿⣿⣿⠟⣡⣾⣿⢟⣿⡿⣱⣿⣽⣿⣿⣿⣿⣿⣿⣯⣯⣷⣿⠏⣯⣾⣿⣿⣷⣾⣿⣿⣿⣿⣿
⠀⣿⣵⣷⣯⣿⣆⠰⣿⣿⣿⣷⣾⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠉⠉⠁⠈⡉⣠⣬⣿⣿⣿⣿⣿⣿⣿⣿⣿⢻⠛⣬⡀⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠸⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣴⣤⣷⡇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠆⣿⣇⣿⣾⣹⡷⡊⢿⢸⢸⢸⣿⡆
⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣄⣆⢿⣷⣿⣿⣷⣷⣷⣿⢾⣽⣻⢷⠁
⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡻⢿⢈⣿⣿⣿⣿⣿⡿⣏⠗⡽⡻⠃⠀
⠀⠀⠀⠀⠛⣏⢿⣿⣿⣿⣽⡟⣿⣿⣅⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣻⣾⣿⣿⣿⣿⣿⣿⠃⢘⡶⢱⠃⠀⠀
⠀⠀⠀⠀⠀⠹⡾⣿⣿⣿⣾⣇⣼⡿⠎⠐⠿⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣳⣿⣿⣿⣿⣿⡟⡽⡟⠃⠀⠘⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⢆⠠⡻⣿⣿⣿⣿⣼⠇⠀⠀⠈⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⠸⠃⠋⣼⣿⡱⠃⡸⡫⣿⡟⠏⠀⠼⠀⠀⡠⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠈⠻⣦⡈⣿⢧⡀⠀⠀⠀⠛⡃⣶⣾⢻⣿⣿⣿⣿⣿⣿⡁⠀⠟⠀⠘⣽⡟⠀⠁⠈⠀⠠⠏⠀⡔⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠊⠁⢰⣄⠀⠀⠀⠉⠻⣫⣾⣿⣿⣿⣿⣿⣿⠃⡠⠀⣰⡞⠋⠀⠀⠀⠀⡴⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠓⠀⠀⢰⣼⣿⣿⣿⣿⣿⢫⣴⣿⠃⠀⠠⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⡻⣿⣿⣿⣿⡌⠁⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⡧⠀⠰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `);
await   type("Acessing dark web . . . . . . . . . . . success","",30);
 await  type("starting new tor server . . . . . . . . . . .  success","",60);
 await type("hiding your ip and changing per 30s . . . . . . . . . . . success","",70);
 await type("downloading packages  ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ ./ done.","",100);
 await type("opening a darkweb window . . . . . . . . . .   opening. . . . . .  ","",150);
 document.querySelector("#darkweb").style.display = "block";
}
else if(cmd === "hacknasa"){
 await type(`
⠀⠀⠀⠀⠀⠀⢀⣤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡼⠋⠀⣀⠄⡂⠍⣀⣒⣒⠂⠀⠬⠤⠤⠬⠍⠉⠝⠲⣄⡀⠀⠀
⠀⠀⠀⢀⡾⠁⠀⠊⢔⠕⠈⣀⣀⡀⠌⠆⠀⠀⠀⡍⠁⠀⠁⢂⠀⠈⣷⠀⠀
⠀⠀⣠⣾⠥⠀⠀⣠⢠⣞⣿⣿⣿⣉⠳⣄⠀⠀⣀⣤⣶⣶⣶⡄⠀⠀⣘⢦⡀
⢀⡞⡍⣠⠞⢋⡛⠶⠤⣤⠴⠚⠀⠈⠙⠁⠀⠀⢹⡏⠁⠀⣀⣠⠤⢤⡕⠱⣷
⠘⡇⠇⣯⠤⢾⡙⠲⢤⣀⡀⠤⠀⢲⡖⣂⣀⠀⠀⢙⣶⣄⠈⠉⣸⡄⠠⣠⡿
⠀⠹⣜⡪⠀⠈⢷⣦⣬⣏⠉⠛⠲⣮⣧⣁⣀⣀⠶⠞⢁⣀⣨⢶⢿⣧⠉⡼⠁
⠀⠀⠈⢷⡀⠀⠀⠳⣌⡟⠻⠷⣶⣧⣀⣀⣹⣉⣉⣿⣉⣉⣇⣼⣾⣿⠀⡇⠀
⠀⠀⠀⠈⢳⡄⠀⠀⠘⠳⣄⡀⡼⠈⠉⠛⡿⠿⠿⡿⠿⣿⢿⣿⣿⡇⠀⡇⠀
⠀⠀⠀⠀⠀⠙⢦⣕⠠⣒⠌⡙⠓⠶⠤⣤⣧⣀⣸⣇⣴⣧⠾⠾⠋⠀⠀⡇⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠶⣭⣒⠩⠖⢠⣤⠄⠀⠀⠀⠀⠀⠠⠔⠁⡰⠀⣧⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠲⢤⣀⣀⠉⠉⠀⠀⠀⠀⠀⠁⠀⣠⠏⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠛⠒⠲⠶⠤⠴⠒⠚⠁⠀⠀
    `,"",5);
  await  type(`
 █████   █████   █████████     █████████  █████   ████    ██████   █████   █████████    █████████    █████████  
░░███   ░░███   ███░░░░░███   ███░░░░░███░░███   ███░    ░░██████ ░░███   ███░░░░░███  ███░░░░░███  ███░░░░░███ 
 ░███    ░███  ░███    ░███  ███     ░░░  ░███  ███       ░███░███ ░███  ░███    ░███ ░███    ░░░  ░███    ░███ 
 ░███████████  ░███████████ ░███          ░███████        ░███░░███░███  ░███████████ ░░█████████  ░███████████ 
 ░███░░░░░███  ░███░░░░░███ ░███          ░███░░███       ░███ ░░██████  ░███░░░░░███  ░░░░░░░░███ ░███░░░░░███ 
 ░███    ░███  ░███    ░███ ░░███     ███ ░███ ░░███      ░███  ░░█████  ░███    ░███  ███    ░███ ░███    ░███ 
 █████   █████ █████   █████ ░░█████████  █████ ░░████    █████  ░░█████ █████   █████░░█████████  █████   █████
░░░░░   ░░░░░ ░░░░░   ░░░░░   ░░░░░░░░░  ░░░░░   ░░░░    ░░░░░    ░░░░░ ░░░░░   ░░░░░  ░░░░░░░░░  ░░░░░   ░░░░░ 
      `,"",3);
     await type("downloading packages . . . . . . . . . . . . . . . . . .  success.","",70);
     await type("unzipping the files . . . . . . . sucess","",30);
     await type("checking connections ./ ./ ./ ./ ./ ./ ./ , everything is fine success.","",60);
     await type("gathring infomation . . . . . . . . sucess","",80);
     await type("checking database . . . . . . . . . . . . , sucess ..... done","",100);
     await type(`Hacking . . . . 
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     
`,"",0);
await type("opening leaked data . . . . . done","",100);
await type("opening window . . . . . . ","",70);
 document.querySelector("#hacknasa").style.display = "block";

}
}



input.addEventListener("keydown", (Event) => {
  if(Event.key === "Enter"){
    const command = input.value.trim();
    if(command){
      backChat.push(command);
      backChatIndex = backChat.length;
      userCommand(command);
    }
    input.value = "";
  }
})

document.addEventListener("click" , ()=> input.focus());
input.focus();

document.getElementById("closedarkweb").addEventListener("click" , function(){
  document.querySelector("#darkweb").style.display = "none";
});

document.getElementById("closehacknasa").addEventListener("click", function(){
  document.querySelector("#hacknasa").style.display = "none";
});