# REACT props

Props are a way to pass data from parent to child components. They are similar to function arguments in JavaScript.

The data is passed like this:

```jsx
// We are in the parent component
<ChildComponent data={data} />
```

And received like this:

```jsx
// We are in the child component
function ChildComponent(props) {
  console.log(props.data);
}
```
This is an excellent way to pass data in case we need to reuse the same component with different content.