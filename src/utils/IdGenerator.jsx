// Unique id generator

const IdGenerator = () => {
  const letters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";

  let idGenerated = "";

  //4 dígitos
  for (let i = 0; i < 4; i++) {
    idGenerated += letters.charAt(Math.floor(Math.random() * letters.length));
  }

  return idGenerated;
};

export { IdGenerator };
