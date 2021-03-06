/**
 * Generated by Apache Royale Compiler from org/apache/royale/core/HTMLElementWrapper.as
 * org.apache.royale.core.HTMLElementWrapper
 *
 * @fileoverview
 *
 * @suppress {missingRequire|checkTypes|accessControls}
 */

goog.provide('org.apache.royale.core.HTMLElementWrapper');
/* Royale Dependency List: org.apache.royale.core.IBead,org.apache.royale.core.IBeadModel,org.apache.royale.core.ValuesManager,org.apache.royale.utils.sendStrandEvent,org.apache.royale.utils.Language*/

goog.require('org.apache.royale.core.ElementWrapper');



/**
 * @constructor
 * @extends {org.apache.royale.core.ElementWrapper}
 */
org.apache.royale.core.HTMLElementWrapper = function() {
  org.apache.royale.core.HTMLElementWrapper.base(this, 'constructor');
};
goog.inherits(org.apache.royale.core.HTMLElementWrapper, org.apache.royale.core.ElementWrapper);


/**
 * @protected
 * @type {org.apache.royale.core.IBeadModel}
 */
org.apache.royale.core.HTMLElementWrapper.prototype._model;


/**
 * @asparam bead The new bead.
 * @royaleignorecoercion org.apache.royale.core.IBeadModel 
 * @override
 */
org.apache.royale.core.HTMLElementWrapper.prototype.addBead = function(bead) {
  if (org.apache.royale.utils.Language.is(bead, org.apache.royale.core.IBeadModel)) {
    this._model = bead;
  }
  org.apache.royale.core.HTMLElementWrapper.superClass_.addBead.apply(this, [ bead] );
};


/**
 * @nocollapse
 * @export
 * @type {Object}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.model;


org.apache.royale.core.HTMLElementWrapper.prototype.get__model = function() {
  if (this._model == null) {
    var /** @type {Object} */ m =  /** @type {Object|null} */ (org.apache.royale.core.ValuesManager.valuesImpl.getValue(this, 'iBeadModel'));
    var /** @type {Object} */ b = new m();
    this.addBead(b);
  }
  return this._model;
};


org.apache.royale.core.HTMLElementWrapper.prototype.set__model = function(value) {
  if (this._model != value) {
    if (org.apache.royale.utils.Language.is(value, org.apache.royale.core.IBead))
      this.addBead(value);
    else
      this._model = value;
    org.apache.royale.utils.sendStrandEvent(this, "modelChanged");
  }
};


Object.defineProperties(org.apache.royale.core.HTMLElementWrapper.prototype, /** @lends {org.apache.royale.core.HTMLElementWrapper.prototype} */ {
/**
 * @type {Object}
 */
model: {
get: org.apache.royale.core.HTMLElementWrapper.prototype.get__model,
set: org.apache.royale.core.HTMLElementWrapper.prototype.set__model}}
);


/**
 * Metadata
 *
 * @type {Object.<string, Array.<Object>>}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.ROYALE_CLASS_INFO = { names: [{ name: 'HTMLElementWrapper', qName: 'org.apache.royale.core.HTMLElementWrapper', kind: 'class' }] };



/**
 * Reflection
 *
 * @return {Object.<string, Function>}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.ROYALE_REFLECTION_INFO = function () {
  return {
    accessors: function () {
      return {
        'model': { type: 'Object', access: 'readwrite', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', metadata: function () { return [ { name: 'Bindable', args: [ { key: '', value: 'modelChanged' } ] } ]; }}
      };
    },
    methods: function () {
      return {
        'addBead': { type: 'void', declaredBy: 'org.apache.royale.core.HTMLElementWrapper', parameters: function () { return [ 'org.apache.royale.core.IBead', false ]; }}
      };
    }
  };
};
/**
 * @const
 * @type {number}
 */
org.apache.royale.core.HTMLElementWrapper.prototype.ROYALE_COMPILE_FLAGS = 10;
