let person_name="Fahad aHmEd"
console.log(`Name in uppercase ${person_name.toUpperCase()}`)
console.log(`Name in lowercase ${person_name.toLowerCase()}`)
//      //For title case
console.log("Name in titlecase", person_name.split(' ').map(word =>word.charAt(0).toLocaleUpperCase() + word.slice(1).toLowerCase()).join(' '))