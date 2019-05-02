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

  let computeOptimumLocation = function() {
    //
  };

  this.draw = () => {
    computeOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(1);

circle.draw();
