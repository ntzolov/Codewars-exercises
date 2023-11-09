function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  if (even > odd) {
    return Number(integers.filter((el) => el % 2 !== 0));
  } else {
    return Number(integers.filter((el) => el % 2 === 0));
  }
}

console.log(findOutlier([121819584, 187474692, 117987870, -148616118, -170616438, -30687600, -14277599, 100295060]));
