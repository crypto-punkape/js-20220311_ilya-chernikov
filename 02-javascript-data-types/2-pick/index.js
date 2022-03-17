/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export function pick (obj, ...fields) {
  const keys = [...arguments].splice(1);
  const newObj = {};

  for (const key of keys) {
    newObj[key] = obj[key];
  }

  return newObj;

};



