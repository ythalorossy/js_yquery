(function () {
    
    'use strict';
    
    var api = function (id) {
        var elem = document.getElementById(id);
        
        return {
            text: function (text) {
                if (text !== null && text !== "") {
                    if (isNaN(text)) {
                        this.elem.innerHTML = text;
                    } else {
                        this.elem.innerHTML = Number(text).toString();
                    }
                }
                return this.elem;
            },
            inner : function () {
                return this.elem.innerText;
            },
            upper: function () {
                var innerText = elem.innerHTML;
                elem.innerHTML = innerText.toUpperCase();
                return elem;
            }
        };
    };
    
    return api;
    
}());