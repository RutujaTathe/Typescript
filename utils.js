"use strict";
var userUtils;
(function (userUtils) {
    class Parent {
        constructor() {
            this.name = " "; // Specify the type of 'name'
        }
        setname(Name) {
            this.name = Name;
            return this.name;
        }
    }
    userUtils.Parent = Parent;
})(userUtils || (userUtils = {}));
