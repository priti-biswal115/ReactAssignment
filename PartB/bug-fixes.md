# Part B – Bug Hunt

## Bug 1

### Problem
The alert appears as soon as the page loads instead of when the button is clicked.

### Incorrect Code

```jsx
<button onClick={handleSave()}>Save</button>
```

### Correct Code

```jsx
<button onClick={handleSave}>Save</button>
```

### Explanation

In React, we pass the function reference to `onClick` instead of calling the function directly. Calling `handleSave()` executes the function immediately when the component renders.

---

## Bug 2

### Problem
The array is updated using `.push()`, but the UI does not update.

### Incorrect Code

```jsx
todos.push('New task');
setTodos(todos);
```

### Correct Code

```jsx
setTodos([...todos, 'New task']);
```

### Explanation

State should never be modified directly. Instead, create a new array and update the state with that new array so React can detect the change and re-render the component.

---

## Bug 3

### Problem
The list renders correctly, but React shows a warning in the console.

### Incorrect Code

```jsx
<li>{skill.name}</li>
```

### Correct Code

```jsx
<li key={skill.id}>{skill.name}</li>
```

### Explanation

The `key` prop helps React uniquely identify each item in a list. This allows React to efficiently update and render only the necessary items when changes occur.

---