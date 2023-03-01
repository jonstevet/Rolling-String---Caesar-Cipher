export default function rotar(x, y){
    let abcArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    if (y=='L'){
        if(x=='a') return 'z';
        return abcArray[abcArray.indexOf(x)-1];
    } else if (y=='R'){
        if(x=='z')return 'a';
        return abcArray[abcArray.indexOf(x)+1];
    }
}