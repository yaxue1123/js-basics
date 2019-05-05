function StopWatch() {
  // duration should be accumulative.
  let startTime,
    endTime = null;
  let duration = 0;

  // flag variable.
  let running = false;
  this.start = () => {
    if (running) {
      throw new Error("Stopwatch has already started");
    }

    running = true;

    startTime = new Date();
  };

  this.stop = () => {
    if (!running) {
      throw new Error("Stopwatch has already stopped");
    }
    running = false;

    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

    duration += seconds;
  };

  this.reset = () => {
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };

  // read-only property: duration.
  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
