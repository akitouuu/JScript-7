
do{
    var num = +prompt('Введите количество ступенек')
}while(num == 0)

if(isNaN(num)) {
    num = 5
}else {}

console.log(num);

do{
    var sym = prompt('Введите символ отступов')
}while(!isNaN(sym) || '')


console.log(sym);

do{
    var last = prompt('Введите rконечный символ')
}while(!isNaN(last) || '');

console.log(last);

for(var i = 1; i <= num; i++) {
    console.log(i);
    var st = sym + sym;
    st = st + last;
    console.log(st);
}



