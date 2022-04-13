const date = new Date(Date.UTC(2020, 0, 4, 20, 28, 30));
let gigasec = 1e12;

const gigasecond = (date) => {
  let dateNow = new Date(date.getTime() + gigasec);
  return dateNow;
};

console.log(gigasecond(date)); // 2051-09-12T22:15:10.000Z
