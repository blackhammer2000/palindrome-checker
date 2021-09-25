window.addEventListener('load', () => {
    let button = document.querySelector('button');
    let resetButton = document.querySelector('.reset');

    button.addEventListener('click', () => {
        let mainString = document.querySelector('.string').value
        let resultsDisplay = document.querySelector('.display')
        let word = mainString.toLowerCase();
        let arr = Array.from(word);
        let reverseArr = arr.reverse();
        let reverseString = reverseArr.join('');

        let inculudesNumber = 0;
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for( e of arr){
            for( n of numbers){
                if(e == n){
                    inculudesNumber++;
                }
            }
        }
            
          if(inculudesNumber < 1){    
          if(word === reverseString){
              resultsDisplay.textContent = `'${mainString}' is a palindrome.`
          }else{
              resultsDisplay.textContent = `'${mainString}' is not a palindrome`
          }
        }else{
            resultsDisplay.textContent = `numbers are not valid inputs in a word`
        }
    
    })

    
    resetButton.addEventListener('click', function(){
        document.querySelector('.string').value = '';
        document.querySelector('.display').textContent = '';
   
       })
})