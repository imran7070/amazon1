/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/beads/layouts/SimpleVerticalLayout.as
 * org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout');
/* Royale Dependency List: org.apache.royale.events.Event*/

goog.require('org.apache.royale.jewel.beads.layouts.StyledLayoutBase');



/**
 *  Constructor.
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @constructor
 * @extends {org.apache.royale.jewel.beads.layouts.StyledLayoutBase}
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout = function() {
  org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout, org.apache.royale.jewel.beads.layouts.StyledLayoutBase);


/**
 * @nocollapse
 * @const
 * @type {string}
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.LAYOUT_TYPE_NAMES = "layout vertical";


/**
 *  Add class selectors when the component is addedToParent
 *  Otherwise component will not get the class selectors when 
 *  perform "removeElement" and then "addElement"
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 * @override
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.prototype.beadsAddedHandler = function(event) {
  event = typeof event !== 'undefined' ? event : null;
  org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.superClass_.beadsAddedHandler.apply(this);
  this.hostComponent.replaceClass("layout");
  this.hostComponent.replaceClass("vertical");
};


/**
 *  Layout children vertically
 *
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.4
 *  @royaleignorecoercion org.apache.royale.core.WrappedHTMLElement
 * @override
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.prototype.layout = function() {
  
  return true;
};


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'SimpleVerticalLayout', qName: 'org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    methods: function () {
      return {
        'SimpleVerticalLayout': { type: '', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout'},
        'beadsAddedHandler': { type: 'void', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout', parameters: function () { return [ 'org.apache.royale.events.Event', true ]; }},
        'layout': { type: 'Boolean', declaredBy: 'org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.beads.layouts.SimpleVerticalLayout.prototype.ROYALE_COMPILE_FLAGS = 10;
