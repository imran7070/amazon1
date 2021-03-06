/**
 * Generated by Apache Royale Compiler from org/apache/royale/jewel/ModuleLoader.as
 * org.apache.royale.jewel.ModuleLoader
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.jewel.ModuleLoader');
/* Royale Dependency List: org.apache.royale.utils.UIModuleUtils*/

goog.require('org.apache.royale.core.StyledUIBase');



/**
 *  Constructor.
 *  
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 * @constructor
 * @extends {org.apache.royale.core.StyledUIBase}
 */
org.apache.royale.jewel.ModuleLoader = function() {
  
  this.org_apache_royale_jewel_ModuleLoader_utils = new org.apache.royale.utils.UIModuleUtils();
  org.apache.royale.jewel.ModuleLoader.base(this, 'constructor');
};
goog.inherits(org.apache.royale.jewel.ModuleLoader, org.apache.royale.core.StyledUIBase);


/**
 * @private
 * @type {boolean}
 */
org.apache.royale.jewel.ModuleLoader.prototype.org_apache_royale_jewel_ModuleLoader__autoLoad = true;


/**
 * @override
 */
org.apache.royale.jewel.ModuleLoader.prototype.addedToParent = function() {
  org.apache.royale.jewel.ModuleLoader.superClass_.addedToParent.apply(this);
  if (this.org_apache_royale_jewel_ModuleLoader__autoLoad && this.org_apache_royale_jewel_ModuleLoader_utils.moduleName)
    this.loadModule();
};


/**
 * @private
 * @type {org.apache.royale.utils.UIModuleUtils}
 */
org.apache.royale.jewel.ModuleLoader.prototype.org_apache_royale_jewel_ModuleLoader_utils;


/**
 *  Load the module.  Will be called automatically if modulePath
 *  is set as the UIModuleLoader is added to the display list.
 * 
 *  @langversion 3.0
 *  @playerversion Flash 10.2
 *  @playerversion AIR 2.6
 *  @productversion Royale 0.9.6
 */
org.apache.royale.jewel.ModuleLoader.prototype.loadModule = function() {
  this.org_apache_royale_jewel_ModuleLoader_utils.loadModule(this);
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.jewel.ModuleLoader.prototype.modulePath;


org.apache.royale.jewel.ModuleLoader.prototype.get__modulePath = function() {
  return this.org_apache_royale_jewel_ModuleLoader_utils.modulePath;
};


org.apache.royale.jewel.ModuleLoader.prototype.set__modulePath = function(value) {
  this.org_apache_royale_jewel_ModuleLoader_utils.modulePath = value;
};


/**
 * @nocollapse
 * @export
 * @type {string}
 */
org.apache.royale.jewel.ModuleLoader.prototype.moduleName;


org.apache.royale.jewel.ModuleLoader.prototype.get__moduleName = function() {
  return this.org_apache_royale_jewel_ModuleLoader_utils.moduleName;
};


org.apache.royale.jewel.ModuleLoader.prototype.set__moduleName = function(value) {
  this.org_apache_royale_jewel_ModuleLoader_utils.moduleName = value;
};


/**
 * @nocollapse
 * @export
 * @type {boolean}
 */
org.apache.royale.jewel.ModuleLoader.prototype.autoLoad;


org.apache.royale.jewel.ModuleLoader.prototype.get__autoLoad = function() {
  return this.org_apache_royale_jewel_ModuleLoader__autoLoad;
};


org.apache.royale.jewel.ModuleLoader.prototype.set__autoLoad = function(value) {
  this.org_apache_royale_jewel_ModuleLoader__autoLoad = value;
};


Object.defineProperties(org.apache.royale.jewel.ModuleLoader.prototype, /** @lends {org.apache.royale.jewel.ModuleLoader.prototype} */ {
/**
 * @type {string}
 */
modulePath: {
get: org.apache.royale.jewel.ModuleLoader.prototype.get__modulePath,
set: org.apache.royale.jewel.ModuleLoader.prototype.set__modulePath},
/**
 * @type {string}
 */
moduleName: {
get: org.apache.royale.jewel.ModuleLoader.prototype.get__moduleName,
set: org.apache.royale.jewel.ModuleLoader.prototype.set__moduleName},
/**
 * @type {boolean}
 */
autoLoad: {
get: org.apache.royale.jewel.ModuleLoader.prototype.get__autoLoad,
set: org.apache.royale.jewel.ModuleLoader.prototype.set__autoLoad}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.jewel.ModuleLoader.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'ModuleLoader', qName: 'org.apache.royale.jewel.ModuleLoader', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.jewel.ModuleLoader.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'modulePath': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.ModuleLoader'},
        'moduleName': { type: 'String', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.ModuleLoader'},
        'autoLoad': { type: 'Boolean', access: 'readwrite', declaredBy: 'org.apache.royale.jewel.ModuleLoader'}
      };
    },
    methods: function () {
      return {
        'ModuleLoader': { type: '', declaredBy: 'org.apache.royale.jewel.ModuleLoader'},
        'addedToParent': { type: 'void', declaredBy: 'org.apache.royale.jewel.ModuleLoader'},
        'loadModule': { type: 'void', declaredBy: 'org.apache.royale.jewel.ModuleLoader'}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.jewel.ModuleLoader.prototype.ROYALE_COMPILE_FLAGS = 10;
