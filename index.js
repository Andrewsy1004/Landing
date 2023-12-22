document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector("body");

    var snowCanvas = document.createElement("canvas");
    snowCanvas.width = window.innerWidth;
    snowCanvas.height = window.innerHeight;
    snowCanvas.style.position = "fixed";
    snowCanvas.style.top = "0";
    snowCanvas.style.left = "0";
    snowCanvas.style.pointerEvents = "none";

    body.appendChild(snowCanvas);

    var snowCtx = snowCanvas.getContext("2d");
    var numSnowflakes = 300;
    var snowflakes = [];

    for (var i = 0; i < numSnowflakes; i++) {
      var snowflake = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 3,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 3 + 1
      };
      snowflakes.push(snowflake);
    }

    function drawSnowflakes() {
      snowCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      snowCtx.fillStyle = "white";

      for (var i = 0; i < numSnowflakes; i++) {
        var snowflake = snowflakes[i];
        snowCtx.beginPath();
        snowCtx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
        snowCtx.fill();

        snowflake.x += snowflake.speedX;
        snowflake.y += snowflake.speedY;

        if (snowflake.y > window.innerHeight) {
          snowflake.y = 0;
        }
        if (snowflake.x > window.innerWidth || snowflake.x < 0) {
          snowflake.x = Math.random() * window.innerWidth;
        }
      }

      requestAnimationFrame(drawSnowflakes);
    }

    drawSnowflakes();
  });