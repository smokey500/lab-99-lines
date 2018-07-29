//for (let x = 0; x <= 5; x++) {
 //   for (let j = 100; j >= 0; j--) {
//        console.log('First loop:' + x + " -IL:" - j);
 //   }
// }
//

let friends = ["Henry", "Ora", "John", "Mark", "Van"];
for (let x = 0; x < friends.length; x++) {
    console.log(friends[x] + ":");
    for (let j = 99; j > 0; j--) {
        if(j === 1) {
            console.log(j + " line of code in the file, " + j + " line of code, " + friends[x] + " strikes one out," + " clears it all out,"  + " no more lines of code in the file");
        } else {
            console.log (j + " lines of code in the file, " + j + " lines of code, " + friends[x] + " strikes one out," + " clears it all out, " + (j - 1) + " lines of code in the file");
        }
    }
}