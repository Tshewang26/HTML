function displayFunction(){
    alert("This is an Alret");
}
function displayConfirm(){
    if(confirm("Are you sure")){
        document.getElementById("para_1").innerHTML="You have pressed okey";
    }else{
        document.getElementById("para_1").innerHTML="You have pressed Cancle";
    }
}
function displayPrompt(){
    let color=prompt("Please enter your favorite color:");
    if (color == null || color == ""){
        document.getElementById("para_2").innerHTML="You didn't  enter anything!";
    }else{
        document.getElementById("para_2").innerHTML="Your faviourte color is " + color;
    }
     
}

function calculateNumbers(){
    // let x = 5;
     let x = "5" + 2 + 3;
    // const y = 10;
     document.getElementById("para_1").innerHTML= x ;
}