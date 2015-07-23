app
  .ui.container
    h1 Hello world
    h2 The current time is {currentTime}
    .ui.red.button(if="{timer}" onclick="{stop}") Stop Time
    .ui.blue.button(if="{!timer}" onclick="{start}") Start Time

  script.
    // update the current time
    updateTime() {
      this.currentTime = new Date();
      this.update();
    }

    // start the timer
    start() {
      this.timer = setInterval(this.updateTime, 1000);
      this.updateTime();
    }

    // stop the timer
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    }

    // start timer when tag is mounted
    this.on('mount', () => {
      this.start();
    });

  style(scoped).
    .ui.container {
      margin-top: 50px;
    }

    h2 {
      color: white;
      background-color: black;
    }
