// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.

function default_cities(city:string , country:string =`Default Message`){

    console.log(`${city} is in ${country}`);
    
}

default_cities(`Karachi`,`Pakistan`);
default_cities(`Istambul`,`Italy`);
default_cities(`Hongkong`);