# Part A – Warm-up: Quick Concepts

## 1. What is a component in React?

A component is a reusable part of a React application. It helps developers build the user interface by dividing it into smaller sections that can be reused. 


## 2. This JSX is broken: `<div class="card">` — what is wrong, and what is the fix?

React does not use `class` for CSS classes because `class` is a reserved keyword in JavaScript. Instead, React uses `className`.

### Correct Code


<div className="card">



## 3. Props vs State: which one can a component change itself, and which one is read-only?

Props are read-only values that are passed from a parent component to a child component. State is managed inside a component and can be changed by the component itself using state update functions. 

## 4. What does the empty array do in `useEffect(() => { ... }, [])`?

The empty dependency array tells React to run the effect only once when the component is rendered for the first time. It prevents the effect from running again on subsequent updates. 


## 5. Why does React need a `key` prop when you render a list with `.map()`?

The `key` prop helps React uniquely identify each item in a list. This allows React to efficiently update and re-render only the items that have changed, improving performance and preventing unnecessary updates. 

---