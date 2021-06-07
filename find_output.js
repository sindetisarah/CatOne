var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

///The following code outputs this for me :
        // outer func:  this.name = Lovelace
        // outer func:  this.name = Lovelace
        // inner func    this.name=undefined
        // inner func:   self.name=Lovelace
//BDD
// This is because our method function is a nested function and the made way by closures.
// A function within a function.
// That means the (IIFE) expression is within the (func) function.
//The variable self access the Object (myObject).
//This allows the method func to access some of the properties of the object like name.
//The nested (IIFE()) expression is defined within the func scope therefore it cannot access the attribute this.name.
//That is why we get undefined.Because of the func scope.Variable resolution occurs and since its chained within
//func method it cannot access attribute this.name.
//Child function can access the Parent function that is why the IIEF can access attribute self.name


//
// In simple terms when we call the method of the object myObject.func();
// What happens is that it carries the IIEF().Before it executes it has the ability to rememeber what was in the outer function which is func
// The outer function executes then the inner function which was immediately invoked inside func
