export const StringRandom = () => {
  const seedTitles = "abcdefghijklmnopqrstuvwxyz1234567890";
  const str = Math.floor(Math.random() * seedTitles.length);
  return str;
};
