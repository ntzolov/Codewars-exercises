function getMiddle(s) {
  if (s.length % 2 === 1) {
    return s[Math.ceil((s.length - 1) / 2)];
  } else {
    return s[Math.ceil((s.length - 1) / 2 - 1)] + s[Math.ceil((s.length - 1) / 2)];
  }
}