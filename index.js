// property: radius, location.
// function: draw().
// const circle = {
//   radius: 1,
//   location: { x: 1, y: 1 },
//   draw: function() {
//     console.log("draw");
//   }
// };

// 1. A factory.
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function() {
//       console.log("draw 1");
//     }
//   };
// }

// const circle = createCircle(1);

// circle.draw();

// 2. A constructor function. Not a Class.
// no class concept in javascript.
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = () => {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      // validate value first.
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    }
  });
}

const circle = new Circle(1);

circle.draw();

console.log(circle.defaultLocation);

circle.defaultLocation = { x: 1, y: 2 };

console.log(circle.defaultLocation);
