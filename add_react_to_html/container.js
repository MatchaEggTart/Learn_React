/*
function c() {
  const element = (
    <div>
    <h1>Hello, World!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // ReactDOM.render(element, document.getElementById('react-container'));
  const container = ReactDOM.createRoot(document.getElementById('react-container'));
  container.render(element);
}
*/

setInterval(c, 1000);
const element = (
  <div>
  <h1>Hello, World!</h1>
  </div>
);

ReactDOM.createRoot(document.getElementById('react-container')).render(element);
