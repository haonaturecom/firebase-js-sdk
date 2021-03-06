/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
goog.provide('fb.util.obj');

// See http://www.devthought.com/2012/01/18/an-object-is-not-a-hash/

fb.util.obj.contains = function(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

fb.util.obj.get = function(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key))
    return obj[key];
  // else return undefined.
};

/**
 * Enumerates the keys/values in an object, excluding keys defined on the prototype.
 *
 * @param {?Object.<K,V>} obj Object to enumerate.
 * @param {!function(K, V)} fn Function to call for each key and value.
 * @template K,V
 */
fb.util.obj.foreach = function(obj, fn) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      fn(key, obj[key]);
    }
  }
};

/**
 * Copies all the (own) properties from one object to another.
 * @param {!Object} objTo
 * @param {!Object} objFrom
 * @return {!Object} objTo
 */
fb.util.obj.extend = function(objTo, objFrom) {
  fb.util.obj.foreach(objFrom, function(key, value) {
    objTo[key] = value;
  });
  return objTo;
}


/**
 * Returns a clone of the specified object.
 * @param {!Object} obj
 * @return {!Object} cloned obj.
 */
fb.util.obj.clone = function(obj) {
  return fb.util.obj.extend({}, obj);
};


/**
 * Returns true if obj has typeof "object" and is not null.  Unlike goog.isObject(), does not return true
 * for functions.
 *
 * @param obj {*} A potential object.
 * @returns {boolean} True if it's an object.
 */
fb.util.obj.isNonNullObject = function(obj) {
  return typeof obj === 'object' && obj !== null;
};
