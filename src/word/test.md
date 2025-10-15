<section class="indent-demo">
  <h3>Try it out</h3>
  <p>Adjust the sliders to see how left indent, first line indent, and hanging indent interact.</p>

  <div class="indent-controls" style="margin-bottom: 1em;">
    <label for="firstLineIndent">First line indent (cm):</label>
    <input type="range" id="firstLineIndent" min="0" max="5" step="0.25" value="0" oninput="updateIndent()">
    <span id="firstLineVal">0.00</span> cm

    <label for="hangingIndent">Hanging indent (cm):</label>
    <input type="range" id="hangingIndent" min="0" max="5" step="0.25" value="0" oninput="updateIndent()">
    <span id="hangingVal">0.00</span> cm

    <label for="leftIndent">Left indent (cm):</label>
    <input type="range" id="leftIndent" min="0" max="5" step="0.25" value="0" oninput="updateIndent()">
    <span id="leftVal">0.00</span> cm
  </div>

  <svg id="indentSVG" width="800" height="100" xmlns="http://www.w3.org/2000/svg">
    <text id="bullet" x="50" y="40" font-size="16px">•</text>
    <text id="text" x="70" y="40" font-size="16px">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</text>
  </svg>

  <script>
    function updateIndent() {
      const cmToPx = 37.8; // 1 cm ≈ 37.8 px

      const leftIndent = parseFloat(document.getElementById("leftIndent").value);
      const firstLineIndent = parseFloat(document.getElementById("firstLineIndent").value); // bullet
      const hangingIndent = parseFloat(document.getElementById("hangingIndent").value);     // base text indent

      document.getElementById("leftVal").textContent = leftIndent.toFixed(2);
      document.getElementById("firstLineVal").textContent = firstLineIndent.toFixed(2);
      document.getElementById("hangingVal").textContent = hangingIndent.toFixed(2);

      const baseX = 50 + leftIndent * cmToPx;
      const bulletX = baseX + firstLineIndent * cmToPx;
      let textX = baseX + hangingIndent * cmToPx;

      // If bullet gets within 0.5cm of text, push text right by 0.5cm per overlap
      const gap = textX - bulletX;
      if (gap < 0.5 * cmToPx) {
        const overlapSteps = Math.ceil((0.5 * cmToPx - gap) / (0.5 * cmToPx));
        textX += overlapSteps * 0.5 * cmToPx;
      }

      document.getElementById("bullet").setAttribute("x", bulletX);
      document.getElementById("text").setAttribute("x", textX);
    }

    window.onload = updateIndent;
  </script>
</section>
