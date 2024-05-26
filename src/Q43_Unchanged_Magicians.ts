
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

const magician :string[] =["Herry Porter","Harmione Granger","RON Wasely"] ;

function copyArray (arr :string[] ){
    
    return [...arr]
}

function make_great(magicianArray:string[]){

    for(let i = 0; i<magicianArray.length; i++ ){

        magicianArray[i] = 'The great ' + magicianArray[i];
    }
}

function show_magicians( magician:string[]){

    magician.forEach(element => {
        
        console.log(element);
        
    });
}

const copymagicianArr = copyArray(magician);

make_great(copymagicianArr);

console.log('\n\nThis is my orignal array');
show_magicians(magician);

console.log('\n\nThis is my modified copy of the array');
show_magicians(copymagicianArr);