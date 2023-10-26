import {LRUCache} from 'lru-cache';

const cache = new LRUCache({ max: 100, maxAge: 1000 * 60 * 5 });

function getFromCache(key) {
  return cache.get(key);
}

function setInCache(key, data) {
  cache.set(key, data);
}

export { getFromCache, setInCache };
