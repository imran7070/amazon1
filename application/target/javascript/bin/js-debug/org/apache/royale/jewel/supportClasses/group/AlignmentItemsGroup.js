/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/group/AlignmentItemsGroup.as
 * org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup');
/* Royale Dependency List: org.apache.royale.jewel.beads.layouts.StyledLayoutBase,org.apache.royale.utils.StringUtil*/

goog.require('org.apache.royale.jewel.Group');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @constructor
 * @extends {org.apache.royale.jewel.Group}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup = function() {
  org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup, org.apache.royale.jewel.Group);


/**
 * @protected
 * @type {org.apache.royale.jewel.beads.layouts.StyledLayoutBase}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype._layout;


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.itemsHorizontalAlign;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsHorizontalAlign = function() {
  return this._layout.itemsHorizontalAlign;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsHorizontalAlign = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " " + this._layout.itemsHorizontalAlign);
  this._layout.itemsHorizontalAlign = value;
  this.typeNames += " " + this._layout.itemsHorizontalAlign;
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.itemsVerticalAlign;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsVerticalAlign = function() {
  return this._layout.itemsVerticalAlign;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsVerticalAlign = function(value) {
  if (value == "itemsCenter")
    value += "ed";
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " " + this._layout.itemsVerticalAlign);
  this._layout.itemsVerticalAlign = value;
  this.typeNames += " " + this._layout.itemsVerticalAlign;
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.itemsExpand;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsExpand = function() {
  return this._layout.itemsExpand;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsExpand = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " itemsExpand");
  this._layout.itemsExpand = value;
  if (value)
    this.typeNames += " itemsExpand";
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.itemsReverse;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsReverse = function() {
  return this._layout.itemsReverse;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsReverse = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " itemsReverse");
  this._layout.itemsReverse = value;
  if (this._layout.itemsReverse) {
    this.typeNames += " itemsReverse";
  }
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


Object.defineProperties(org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype, /** @lends {org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype} */ {
/**
 * @type {string}
 */
itemsHorizontalAlign: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsHorizontalAlign,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsHorizontalAlign},
/**
 * @type {string}
 */
itemsVerticalAlign: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsVerticalAlign,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsVerticalAlign},
/**
 * @type {boolean}
 */
itemsExpand: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsExpand,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsExpand},
/**
 * @type {boolean}
 */
itemsReverse: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.get__itemsReverse,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.set__itemsReverse}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AlignmentItemsGroup', qName: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'itemsHorizontalAlign': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup'},
        'itemsVerticalAlign': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup'},
        'itemsExpand': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup'},
        'itemsReverse': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup'}
      };
    },
    methods: function () {
      return {
        'AlignmentItemsGroup': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup.prototype.ROYALE_COMPILE_FLAGS = 10;
