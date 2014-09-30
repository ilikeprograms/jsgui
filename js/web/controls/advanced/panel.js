/**
 * Created by James on 04/08/2014.
 */

/*

if (typeof define !== 'function') { var define = require('amdefine')(module) }


// Also want to make an MDI window system (Multiple Document Interface)

define(["../../jsgui-html", "./horizontal-menu"],
    function(jsgui, Horizontal_Menu) {
*/

var jsgui = require('../../jsgui-html');
var Horizontal_Menu = require('./horizontal-menu');

        var stringify = jsgui.stringify, each = jsgui.each, tof = jsgui.tof, is_defined = jsgui.is_defined;
        var Control = jsgui.Control;

        var group = jsgui.group;

        var Panel = Control.extend({
            // panel name?

            // could have a title field.
            'fields': {
                'name': String
            },

            // maybe add before make would be better. add will probably be used more.
            'init': function(spec, add, make) {
                this._super(spec);

                this.__type_name = 'panel';

                this.set('dom.attributes.class', 'panel');
                //console.log('spec.el', spec.el);

                if (!spec.abstract && !spec.el) {


                    /*
                    var ctrl_fields = {
                        'ctrl_relative': div_relative._id(),
                        'title_bar': title_bar._id()
                    }


                    this.set('dom.attributes.data-jsgui-ctrl-fields', stringify(ctrl_fields).replace(/"/g, "'"));
                    */


                }

            },
            //'resizable': function() {
            //},
            'activate': function() {
                // May need to register Flexiboard in some way on the client.
                this._super();

                //

            }
        })

module.exports = Panel;
/*
        return Panel;
    }
);
    */