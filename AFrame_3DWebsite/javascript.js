
AFRAME.registerComponent("trigger-poster1-click", {
  init: function () {
    var el = this.el; // The source object
    el.addEventListener("click", function () {
      var targetEl = document.querySelector("#poster1"); // The target object
      if (targetEl) {
        targetEl.emit("runP1Animation"); // Emit the custom event
      }
    });
  },
});

