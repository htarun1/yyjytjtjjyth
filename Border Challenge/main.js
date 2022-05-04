// Animation Intro

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width= 600;
cnv.height = 400;

// Global Variable
let rectX = 100;
let rectY = 150;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;
let mouseX;
let mouseY;
let circX = 100;
let circY = 150;
let circSize = 80;
let circGreen = 255;
let circBlue = 255;
let circRed = 0;





let animate = false;
let circanimate = false;

// Main Program Loop (60 fps)
requestAnimationFrame(loop);
function loop() {
    // Update Variables
   
    if (mouseX > rectX && mouseX < rectX + rectSize && mouseY > rectY && mouseY < rectY + rectSize) {
    animate = true; 
    } else {
        animate = false;
    }

    if(animate) {
    rectX += Math.random() * 10 - 5;
    rectY += Math.random() * 10 - 5;
    rectSize += Math.random() * 2 - 1;
    rectBlue--;
    rectRed++;
    }

    // Draw a Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height)

    // Draw a Square

    ctx.fillStyle = "rgb(" + rectRed +", 0," + rectBlue + ")";
    ctx.fillRect(rectX, rectY, rectSize, rectSize);

   
    if (mouseX > circX && mouseX < circX + circSize && mouseY > circY && mouseY < circY + circSize) {
        circanimate = true; 
        } else {
            circanimate = false;
        }
    
        if(circanimate) {
        circX += Math.random() * 10 - 5;
        circY += Math.random() * 10 - 5;
        circSize += Math.random() * 2 - 1;
        circGreen--;
        circRed++;
        }
    // Draw a Circle

    ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(250, 300, 30, 0, 2 * Math.PI);
ctx.fill();
   
ctx.fillStyle = "green";
ctx.beginPath();
ctx.arc(circX, circY, 0, circSize, 2 * Math.PI);
ctx.fill();

    requestAnimationFrame(loop);
}



// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);
   

function mousemoveHandler(event) {  

    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);

}
