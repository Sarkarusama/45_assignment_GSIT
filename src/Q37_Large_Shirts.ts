// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

function T_shirt( size : string = 'Large', text : string = 'I love Typescript'){
    console.log(`Create a ${size} t_shirt ${text}`); 
}

T_shirt();
T_shirt('Medium','I love java');
T_shirt('small','I love Typescript');

