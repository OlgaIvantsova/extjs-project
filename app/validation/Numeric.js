Ext.define('Extjs.learning.validation.Numeric', {
    override: 'Ext.form.field.VTypes',
    numeric: function(value) {
      return this.numericRe.test(value);
    },
    numericRe: /^[1-9](\d+)?(\.\d{1,2})?$/,
    numericText: 'must contain only positive numbers with maximum 2 characters after comma'
  });
