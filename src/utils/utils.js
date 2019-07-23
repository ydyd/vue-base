// 数据本地缓存
export function setCache(key, data, isLocalStorage) {
  let storage = isLocalStorage ? localStorage : sessionStorage;
  let dataType = typeof data;
  if (dataType == "string") {
    storage.setItem(key, "string" + data);
  } else {
    storage.setItem(key, JSON.stringify(data));
  }
}
// 获取缓存数据
export function getCache(key, isLocalStorage) {
  let storage = isLocalStorage ? localStorage : sessionStorage;
  let data = storage.getItem(key);
  if (data) {
    if (data.indexOf("string") === 0) {
      data = data.replace("string", "");
      return data;
    } else {
      return JSON.parse(data);
    }
  } else {
    return null;
  }
}
// 移除本地缓存
export function removeCache(key, isLocalStorage) {
  let storage = isLocalStorage ? localStorage : sessionStorage;
  storage.removeItem(key);
}
