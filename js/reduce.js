const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// [
//   "js",
//   "nodejs",
//   "html",
//   "css",
//   "html",
//   "js",
//   "nodejs",
//   "css",
//   "react",
//   "js",
//   "nodejs",
//   "react",
// ];

// мутабельный код

// const tagsStats1 = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});

// console.log(tagsStats1);

// немутабельный код

// const tagsStats2 = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     return {
//       ...acc,
//       [tag]: acc[tag] + 1,
//     };
//   }

//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});

// console.log(tagsStats2);

// тернарная запись

const tagsStats3 = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});

console.log(tagsStats3);
