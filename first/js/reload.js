const container_top = document.querySelector('.container-top');
for (var i = 1; i <= 200; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container_top.appendChild(blocks);
}

function generate() {
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-1000, 800)
        },
        translateY: function() {
            return anime.random(-1000, 450)
        },
        scale: function() {
            return anime.random(1, 4)
        }
    })
}
var btn_generator = document.getElementById('GenerateButton');
var count = 1;
btn = setInterval(function() {
    btn_generator.click();
    if (count >= 3) clearInterval(btn);
    count++;
}, 1000);

// function stopSetInterval() {
//     clearInterval(btn);
//     btn = null;
// }
// var btn_stop_generator = document.getElementById('StopGenerateButton');
// setInterval(function() {
//     btn_stop_generator.click();
// }, 100);