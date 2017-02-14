const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice', id: 542328 }
];


//Tasks
    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
//one way
//    const isAdult = people.some(function(person) { 
//        (new Date().getFullYear() - person.year ) > 18; return true;
//    });
    //console.log(isAdult);
    //// cool thing is if you consol isAdult in {} it will show object and then true
    //console.log({isAdult});
//second vertion - shorter version
    const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year > 18 );
    console.log({isAdult});

    // Array.prototype.every() // is everyone 19 or older?
    const isEvery = people.every(person => ((new Date()).getFullYear()) - person.year > 18 );
    console.log({isEvery});



//    const areAllAdults = people.every( function () {
//        if (people[i] > 18) {
//            return true;
//        }
//    });
//    console.log(areAllAdults);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423