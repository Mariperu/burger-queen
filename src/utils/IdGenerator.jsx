// Unique id generator

const IdGenerator = () => {
  const letters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";

  let idSuffix = "";

  for (let i = 0; i < 5; i++) {
    idSuffix += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return idSuffix;
};

export { IdGenerator };
