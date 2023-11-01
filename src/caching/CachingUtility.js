function getFromCache(key) {
  try {
    const cachedData = localStorage.getItem(key);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      const now = new Date().getTime();
      if (now - timestamp <= 1000 * 60 * 5) {
        return data;
      }
    }
  } catch (error) {
    console.error('Error while getting data from local storage:', error);
  }
  return null;
}

function setInCache(key, data) {
  try {
    const timestamp = new Date().getTime();
    const cacheData = JSON.stringify({ data, timestamp });
    localStorage.setItem(key, cacheData);
  } catch (error) {
    console.error('Error while setting data in local storage:', error);
  }
}

export { getFromCache, setInCache };
