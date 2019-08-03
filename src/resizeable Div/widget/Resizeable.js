import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

import $ from 'jquery';
import 'jquery-ui/themes/base/core.css';
import 'jquery-ui/themes/base/theme.css';
import 'jquery-ui/themes/base/resizable.css';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widgets/resizable';



export default defineWidget('Resizeable', false, {

    //_obj: null,


    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
        log.call(this, 'find class: '+ this.findClass, this._WIDGET_VERSION);

        $('.' + this.findClass).resizable({
            direction: 'vertical'
        });
        
    },
});
