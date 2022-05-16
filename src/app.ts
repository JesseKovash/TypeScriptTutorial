const person = {
  name: 'jesse',
  age: 37,
  hobbies: ['climb', 'bake', 'woodwork', 'run']
};

console.log(person.name)
for (const hobby of person.hobbies) {
  console.log(hobby, typeof hobby)
}