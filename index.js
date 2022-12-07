

document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('button').forEach(function(button){
        button.onclick = function(){
            let number = button.value;
            let height = number*number;
    for (let i = 0; i < height;i++ ){
    const div = document.createElement('div');
    div.classList.add("grid");
    const container = document.getElementById('container');
    container.appendChild(div);
    }
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)` ;
    function sketch(e){
        this.classList.add('draw');
        console.log(this);
    };
    document.querySelectorAll('.grid').forEach(grid => grid.addEventListener('mousedown', sketch))
        };
    });


});




