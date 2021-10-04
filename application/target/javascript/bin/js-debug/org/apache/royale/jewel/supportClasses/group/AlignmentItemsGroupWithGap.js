/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/supportClasses/group/AlignmentItemsGroupWithGap.as
 * org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap');
/* Royale Dependency List: org.apache.royale.jewel.beads.layouts.GapConstants,org.apache.royale.jewel.beads.layouts.IGap,org.apache.royale.jewel.beads.layouts.IVariableRowHeight,org.apache.royale.utils.StringUtil,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.7
 * @constructor
 * @extends {org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap = function() {
  org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap, org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroup);


/**
 * @nocollapse
 * @export
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.gap;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.get__gap = function() {
  return org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.IGap).gap;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.set__gap = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " gap-" + org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.IGap).gap + "x" + org.apache.royale.jewel.beads.layouts.GapConstants.GAP_STEP + "px");
  if (value != 0)
    this.typeNames += " gap-" + value + "x" + org.apache.royale.jewel.beads.layouts.GapConstants.GAP_STEP + "px";
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
  org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.IGap).gap = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.variableRowHeight;


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.get__variableRowHeight = function() {
  return org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.IVariableRowHeight).variableRowHeight;
};


org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.set__variableRowHeight = function(value) {
  this.typeNames = org.apache.royale.utils.StringUtil.removeWord(this.typeNames, " variableRowHeight");
  org.apache.royale.utils.Language.as(this._layout, org.apache.royale.jewel.beads.layouts.IVariableRowHeight).variableRowHeight = value;
  if (value)
    this.typeNames += " variableRowHeight";
  if (this.parent)
    this.setClassName(this.computeFinalClassNames());
};


Object.defineProperties(org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype, /** @lends {org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype} */ {
/**
 * @type {number}
 */
gap: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.get__gap,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.set__gap},
/**
 * @type {boolean}
 */
variableRowHeight: {
get: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.get__variableRowHeight,
set: org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.set__variableRowHeight}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'AlignmentItemsGroupWithGap', qName: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'gap': { type: 'Number', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap'},
        'variableRowHeight': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap'}
      };
    },
    methods: function () {
      return {
        'AlignmentItemsGroupWithGap': { type: '', declaredBy: 'org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.supportClasses.group.AlignmentItemsGroupWithGap.prototype.ROYALE_COMPILE_FLAGS = 10;
