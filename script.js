function get(){
    var a,b,c;
    a=window.prompt('Enter a value:');
    b=window.prompt('Enter b value:');
    c=Number(a)+Number(b);
    document.getElementById('demo').innerHTML='sum :'+c;
    // c=window.alert('Sum of a and b is:'+ (Number(a)+Number(b)))
}