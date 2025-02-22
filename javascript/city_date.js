const concerts = {
  Kyiv: new Date("2024-04-01"),
  Khmelnyskyi: new Date("2025-07-02"),
  Lviv: new Date("2024-04-21"),
  Kharkiv: new Date("2024-07-15"),
  Dnipro: new Date("2024-04-18"),
  Vinytsa: new Date("2025-07-10"),
};

function concertsToArray(concerts) {
  return Object.keys(concerts)
    .filter((city) => concerts[city] > new Date())
    .sort((a, b) => a - b);
}

console.log(concertsToArray(concerts));
