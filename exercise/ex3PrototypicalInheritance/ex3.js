function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focused");
};

function HtmlSelectElement(item = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// inheritate both instance and prototype method.
// also set the constructor.
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement();

// baseHtmlSelectElement and baseHtmlElement
// in this way, only inheritate focus() but not instance method click()
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
