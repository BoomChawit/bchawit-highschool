let count = 0;
function increase(i){
    let a = "#result";
    let b = i.toString();
    let c = a.concat(b);
    count++;
    document.querySelector(c).innerHTML = count;
}