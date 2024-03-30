/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
function compactObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }

  const compactedObj = {};
  for (const key in obj) {
    const value = obj[key];
    if (value) { 
      compactedObj[key] = typeof value === 'object' ? compactObject(value) : value;
    }
  }
  return compactedObj;
};
