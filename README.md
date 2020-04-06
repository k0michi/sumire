# Sumire

Sumire is a library for building views, on browser and server.

## Example

```jsx
const view = (
  <div>
    <h1>Hello</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
);

// On server
const html = Sumire.renderToString(view);
// On browser
Sumire.render(view, document.getElementById("root"));
// Different from React's render(), this just renders an element into the target.
```

## Installation

```
yarn add sumire
```

Give the following options to @babel/plugin-transform-react-jsx.

```js
{
  pragma: "Sumire.createElement",
  pragmaFrag: "Sumire.Fragment"
}
```

## License

MIT License