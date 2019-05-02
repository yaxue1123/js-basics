function StopWatch() {
  let start = -1;
  let end = -1;
  this.duration = 0;
  this.start = () => {
    // If already started, alert error.
    if (start !== -1) {
      alert("You have already started!");
    } else {
      // clear old data.
      end = -1;
      duration = 0;
      let time = new Date();
      start = time.getTime();
      console.log("start time: ", start);
    }
  };

  this.stop = () => {
    if (end !== -1) {
      alert("You have already stopped. ");
    } else {
      let time = new Date();
      end = time.getTime();
      this.duration = (end - start) / 1000;
      start = -1;
      console.log("end time: ", end);
      console.log("duration", this.duration, "s");
    }
  };
}

const sw = new StopWatch();
