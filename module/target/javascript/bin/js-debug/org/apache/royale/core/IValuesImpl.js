/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/IValuesImpl.as
 * org.apache.royale.core.IValuesImpl
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.IValuesImpl');
/* Royale Dependency List: org.apache.royale.core.IUIBase*/




/**
 * @interface
 */
org.apache.royale.core.IValuesImpl = function() {
};
/**
 *  Returns a value for a given object based on a property name,
 *  and optionally, the current state, and a set of property value pairs.
 *
 *  @asparam thisObject The object to get the value for.
 *  @asparam valueName The name of a property. e.g. fontFamily, color, etc.
 *  @asparam state The name of a state. e.g. hovered, visited
 *  @asparam attrs A map of property value pairs that may affect the returned value.
 *  @asreturn A value or undefined
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {string=} state
 * @param {Object=} attrs
 * @return {*}
 */
org.apache.royale.core.IValuesImpl.prototype.getValue = function(thisObject, valueName, state, attrs) {
};
/**
 *  Returns a new instance based on the value for a given object based on a property name,
 *  and optionally, the current state, and a set of property value pairs.  This is a way
 *  to avoid using the Class type in AS code.
 *
 *  @asparam thisObject The object to get the value for.
 *  @asparam valueName The name of a property. e.g. fontFamily, color, etc.
 *  @asparam state The name of a state. e.g. hovered, visited
 *  @asparam attrs A map of property value pairs that may affect the returned value.
 *  @asreturn A value or undefined
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} thisObject
 * @param {string} valueName
 * @param {string=} state
 * @param {Object=} attrs
 * @return {*}
 */
org.apache.royale.core.IValuesImpl.prototype.newInstance = function(thisObject, valueName, state, attrs) {
};
/**
 *  Returns a shared instance, instantiating the shared instance if
 *  it doesn't exist.  Often used to share "managers"
 *
 *  @asparam valueName The name of a shared instance.  Often, the fully
 *  qualified class name is used.
 *  @asreturn The shared instance.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {string} valueName
 * @return {Object}
 */
org.apache.royale.core.IValuesImpl.prototype.getInstance = function(valueName) {
};
/**
 *  MXML Documents that support &lt;fx:Style&gt; blocks should call
 *  init to install the styles for each instance.
 *
 *  @asparam mainClass An instance that may have styles from an &lt;fx:Style&gt; block.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} mainClass
 */
org.apache.royale.core.IValuesImpl.prototype.init = function(mainClass) {
};
/**
 *  Converts a color value into a uint.
 *
 *  @asparam value A string for a color.  Typically it is
 *  a color value like #ffffff or "red" in some cases.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {Object} value
 * @return {number}
 */
org.apache.royale.core.IValuesImpl.prototype.convertColor = function(value) {
};
/**
 *  Converts an HTML-like style format into an object.
 *
 *  @asparam value A string, such as "color:red;fontSize:10px".
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {string} value
 * @return {Object}
 */
org.apache.royale.core.IValuesImpl.prototype.parseStyles = function(value) {
};
/**
 *  Add a style rule like a class selector.
 *
 *  @asparam ruleName The name of the rule like '.myClassSelector'.
 *  @asparam values Name/value pairs.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {string} ruleName
 * @param {Object} values
 */
org.apache.royale.core.IValuesImpl.prototype.addRule = function(ruleName, values) {
};
/**
 *  Applies a set of styles to an instance.  This is used
 *  by implementations that wrap internal elements to
 *  propagate styles to the right internal elements.
 *
 *  @asparam instance An instance to apply styles to.
 *  @asparam styles An Object map of styles to apply.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.0
 * @param {org.apache.royale.core.IUIBase} instance
 * @param {Object} styles
 */
org.apache.royale.core.IValuesImpl.prototype.applyStyles = function(instance, styles) {
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.IValuesImpl.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'IValuesImpl', qName: 'org.apache.royale.core.IValuesImpl', kind: 'interface' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.IValuesImpl.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'getValue': { type: '*', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'Object', false ,'String', false ,'String', true ,'Object', true ]; }},
        'newInstance': { type: '*', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'Object', false ,'String', false ,'String', true ,'Object', true ]; }},
        'getInstance': { type: 'Object', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'String', false ]; }},
        'init': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'Object', false ]; }},
        'convertColor': { type: 'uint', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'Object', false ]; }},
        'parseStyles': { type: 'Object', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'String', false ]; }},
        'addRule': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'String', false ,'Object', false ]; }},
        'applyStyles': { type: 'void', declaredBy: 'org.apache.royale.core.IValuesImpl', parameters: function () { return [ 'org.apache.royale.core.IUIBase', false ,'Object', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.IValuesImpl.prototype.ROYALE_COMPILE_FLAGS = 10;
