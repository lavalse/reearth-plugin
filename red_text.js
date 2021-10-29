const getText = () => reearth.widget.property && reearth.widget.property.default ? reearth.widget.property.default.text || "" : "";
const html = `
<h1 id="text"></h1>
<style>
  html, body {
    margin: -6px;
    background: rgba(255, 0, 0, 0.2);
    border: solid;
  }
</style>
<script>
  const cb = text => {
    document.getElementById("text").textContent = text;
  };
  addEventListener("message", e => {
    if (e.source !== parent) return;
    cb(e.data);
  });
  cb(${JSON.stringify(getText())});
</script>
`;

reearth.ui.show(html);
reearth.on("update", () => {
  reearth.ui.postMessage(getText());
});
