let lastId = 0;

const NewID = (prefix = "id") => {
  lastId++;
  return `${prefix}${lastId}`;
}

export default NewID;