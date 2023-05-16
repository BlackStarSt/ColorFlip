let btn = document.getElementById('button').addEventListener('click', () => {
    
    let input = document.getElementById('input');
    iValue = input.value;
    
    let corpo = document.getElementById('corpo');
    corpo.style.background = iValue;
    input.style.border = iValue;

    if(iValue == '#000000') {
        let title = document.getElementById('title');
        title.style.color = '#ffffff';
    } else {
        title.style.color = '#000000';
    }
});
