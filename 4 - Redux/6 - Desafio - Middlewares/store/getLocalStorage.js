const getlocalStorage = (key, initial) => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return initial;
  }
}

export default getlocalStorage;
