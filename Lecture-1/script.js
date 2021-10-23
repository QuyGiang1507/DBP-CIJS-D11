// Random color

var btnRns = document.querySelectorAll('.box')
btnRns.forEach(function(btnRn){
    btnRn.onclick = function(){
        btnRn.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    }
})


// Caesars Cipher

function rot13(str){
    let newStr = ''
    let newArr = []
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    for(let i=0; i < str.length; i++){
        if(input.indexOf(str[i]) !== -1){
            newArr.push(output[input.indexOf(str[i])])
        } else {
            newArr.push(str[i])
        }
    }
    newStr = newArr.join('')
    return newStr
}
// Pig Latin

function pigLatin(strPig){
    let newStrPig = ''
    let vowel = ['u' , 'e', 'o', 'a', 'i']
    if(vowel.indexOf(strPig[0]) !== -1){
        newStrPig = strPig + 'way'
    } else {
        for(let i = 1; i < strPig.length; i++){
            if(vowel.indexOf(strPig[i]) !== -1){
                var moveWord = strPig.slice(0, i)
                var firstWord = strPig.slice(i, strPig.length)
                newStrPig = firstWord + moveWord + 'ay'
                break;
            }
        }
    }
    return newStrPig
}

// Padovan Sequence

function padSequence(i1, i2){
    let padArr = []
    for (let num = 0; num <= i2; num++) {
        function positivePadovan(num = 1){
            let secondPrev = 1, pPrev = 1, pCurr = 1, pNext = 1;
            for (let i = 3; i <= num; i++){
                pNext = secondPrev + pPrev;
                secondPrev = pPrev;
                pPrev = pCurr;
                pCurr = pNext;
            };
        return pNext;
        };
     padArr.push(positivePadovan(num));
    };
    return padArr
}



