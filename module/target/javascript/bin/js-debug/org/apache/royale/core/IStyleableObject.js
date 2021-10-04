/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IStyleableObject.as
 * org.apache.royale.core.IStyleableObject
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IStyleableObject');
/* Royale Dependency List: */

goog.require('org.apache.royale.events.IEventDispatcher');



/**
 * @interface
 * @extends {org.apache.royale.events.IEventDispatcher}
 */
org.apache.royale.core.IStyleableObject = function() {
};
/**  * @type {string}
 */org.apache.royale.core.IStyleableObject.prototype.className;
/**  * @type {string}
 */org.apache.royale.core.IStyleableObject.prototype.id;
/**  * @type {Object}
 */org.apache.royale.core.IStyleableObject.prototype.style;


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IStyleableObject.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IStyleableObject', qName: 'org.apache.royale.core.IStyleableObject', kind: 'interface' }], interfaces: [org.apache.royale.events.IEventDispatcher] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IStyleableObject.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'className': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.core.IStyleableObject'},
        'id': { type: 'String', access: 'readonly', declaredBy: 'org.apache.royale.core.IStyleableObject'},
        'style': { type: 'Object', access: 'readonly', declaredBy: 'org.apache.royale.core.IStyleableObject'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IStyleableObject.prototype.ROYALE_COMPILE_FLAGS = 10;
