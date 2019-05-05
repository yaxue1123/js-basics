// modify based on ex1
// change instance methods to prototype methods

// Results: This is not practical nor worthy. Since it broke the abstraction principle, and
// it is not necessary to do so since we usually only need one stop watch instead of 1000 ones.
// we don't need worry about repetative instance members take up much memory.

// Abstraction. Interface: four public members, 3 methods and one read-only property.
// if change private propertiesto read-only public properties, will pollute the interface.
// !!! make interface clean and simple, don't expose too many details.
function StopWatch() {
  // duration should be accumulative.
  let startTime,
    endTime = null;
  let duration = 0;

  // flag variable.
  let running = false;

  // read-only property: duration.
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    },
    // the setter is contradictory to the interface.
    set: function(value) {
      duration = value;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    }
  });

  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    }
  });

  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    }
  });
}

// ########### Prototype Members ############
StopWatch.prototype.start = function() {
  if (this.running) {
    throw new Error("Stopwatch has already started");
  }

  this.running = true;

  this.startTime = new Date();
};

StopWatch.prototype.stop = function() {
  if (!running) {
    throw new Error("Stopwatch has already stopped");
  }
  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

  // !!! cannot modify since this property is read-only to the outside of the instance.
  // if give it a setter, then anyone can change the state of duration.
  duration += seconds;
};

StopWatch.prototype.reset = () => {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  duration = 0;
};

const sw = new StopWatch();
