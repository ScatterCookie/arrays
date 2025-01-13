console.log("hello Liam");

const blogPosts = ["My First Blog", "My Second Blog", "My Third Blog"];

console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

blogPosts[3] = "My fourth Blog Post";

console.log(blogPosts[3]);

const randomList = ["important reminder", 77, ["another array"], true];

const faveFoods = ["pizza", "pasta", "burger"];

console.log(faveFoods);

const faveColours = ["purple", "red", "blue"];

console.log(faveColours);

const faveNumbers = [7, 4, 3, 13];

console.log(faveNumbers);

// for (let i = 0; i < 5; i++) {
//   console.log("iteration", i);
// }

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keepLooping = true;
let i = Infinity;
while (keepLooping === true) {
  console.log("iteration", i);
  keepLooping = Math.random() < 0.1;
  i++;
}

const foods = ["pizza", "choccy", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}

const faveouriteNumbers = [1, 2, 3, 4, Infinity];
for (let number of faveouriteNumbers) {
  console.log(number);
}

foods.forEach(function (food) {
  console.log(food);
});

foods.forEach(function (food, index) {
  console.log(index, food);
});

const faveouriteAnimals = ["dog", "cat", "Snake"];
for (let animal of faveouriteAnimals) {
  console.log(animal);
}

for (colours of faveColours) {
  console.log(colours);
}

for (numbers of faveNumbers) {
  console.log(numbers[i]);
}

for (let i = 0; i < Infinity; i++) {
  counter++;
}
