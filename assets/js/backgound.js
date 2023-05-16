let btn = document.getElementById('button').addEventListener('click', () => {
    let input = document.getElementById('input');
    iValue = input.value;
    
    let corpo = document.getElementById('corpo');
    corpo.style.background = iValue;
});
