let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "Went to work",
    "touched  tree": "Touched a tree"
};

let journal = [
    {events: ["work", "touched tree", "pizza",
	      "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
	      "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
	      "beer"],
     squirrel: true},
];
