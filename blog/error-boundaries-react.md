---
title: Error Boundaries in React
date: 2022-25-12
tags: ["React", "error-handling" ]
---

You may have heard that handling error is an important programming skill. But why? What will happen if you don’t handle errors in React?

I am sure you must have wondered it.

It depends. But most of the time react will not show anything. It will show that white screen of death with no way of getting back to the application.

[Visit this project to check for yourself](https://romantic-engelbart-e13910.netlify.app/)

By handling errors yourself, you can:

1. provide a useful message for the user; and also
2. allow users to recover from the error.

Now you know how important error handling is, where do we go from here?

There are 2 ways to handle errors in react. Let’s see both of them one by one.

## Method 1: Using `try-catch`

`try-catch` is one way of handling errors. It is straightforward to implement.

```jsx
function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

const YourName = ({ name }) => {
  try {
    return <p>HELLO {name.toUpperCase()}</p>
  } catch(e) {
    return <ErrorFallback error={e} />
  }
};

export default function ui() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        id="pokemon"
        value={name}
        onChange={handleInputChange}
        placeholder='Your Name'
      />
      <button onClick={() => setName(undefined)}>Throw an error!</button>
      <YourName name={name} />
      </>
  )
}
```

In this example I’ve created an input which changes `name` prop of `YourName` component. When you click the button, it will set name to `undefined` and throw an error.

But `try-catch` is [not recommended for error handling](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) in react. Why?

### `try-catch` statements are imperative

Imperative means that `try-catch` explicitly spell out each step of how you want something done. Whereas in declarative code, you merely say what it is that you want done.

If you compare `try-catch` with `Error Boundaries` you will know what is imperative and what is declarative.

### `try-catch` statements need to explicitly check errors for each component

You can’t add `try-catch` block at the top level of your application.

```jsx
export default function ErrorHandlingTry() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

 try {
   return (
     <>
       <input
         type="text"
         id="pokemon"
         value={name}
         onChange={handleInputChange}
         placeholder='Your Name'
       />
       <button className='outline secondary' onClick={() => setName(undefined)}>Click me to throw an error!</button>
       <YourName name={name} />
       </>
   )
 } catch(e) {
  return <ErrorFallback error={e} />
 }
}
```

This is because we are not calling components ourselves. React is calling this component when rendering the application UI.

So if you want to use `try-catch`, you need to check for each individual component that might throw an error.

## Method #2: React Error Boundary

Error boundaries were a new feature introduced in React 16. React docs defined error boundaries as:

> React components that **catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI** instead of the component tree that crashed.
>

And one of the best things 💕 ?

**You can declare an error boundary component once and use it throughout your application.**

Here’s how you build an error boundary comopnent:

```jsx
class ErrorBoundary extends React.Component {
 constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
  }

  render() {
    const {hasError} = this.state
    if (hasError) {
      return <this.props.FallbackComponent error={hasError} />
    }

    return this.props.children
  }
}
```

Here are a few things to remember about the error boundary component:

1. It must be a class component.
2. It must implement either `getDerivedStateFromError` or `componentDidCatch`.

I know building a class component isn’t super inspiring 😢. This is why I use the `[react-error-boundary](https://github.com/bvaughn/react-error-boundary)` component.

### Step 1: Getting Started with React Error Boundary

Here’s how to use it:

```jsx
import {ErrorBoundary} from 'react-error-boundary'

export default function ui() {
  const [name, setName] = React.useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <input
        type="text"
        id="pokemon"
        value={name}
        onChange={handleInputChange}
        placeholder='Your Name'
      />
      <button onClick={() => setName(undefined)}>Throw an error!</button>
      <YourName name={name} />
     </ErrorBoundary>
  )
}
```

### Step 2: How to recover from error?

One of the best feature of `react-error-boundary` is error recovery. You can pass `onReset` and `resetKeys` props to recover from the error.

```jsx
const ui = (
 <ErrorBoundary
     FallbackComponent={ErrorFallback}
     onReset={() => setName('')}
     resetKeys={[name]}
  >
  {children}
 </ErrorBoundary>
)
```

And then in your fallback component you can accept `resetErrorBoundary` prop and pass it any element.

```jsx
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset Error</button>
    </div>
  );
}
```

### Errors that can’t be handled by Error Boundary

Everything isn’t hunky-dory with error boundaries. They can’t catch some errors in your component. [To quote react docs](https://reactjs.org/docs/error-boundaries.html):

> Error boundaries do not catch errors for:
>
> - Event handlers ([learn more](https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers))
> - Asynchronous code (e.g. `setTimeout` or `requestAnimationFrame` callbacks)
> - Server-side rendering
> - Errors are thrown in the error boundary itself (rather than its children)

For catching errors thrown in event handlers or asynchronous code, I use `useErrorHandler` hook provided by `react-error-boundary`.

You can pass errors to this hook to show your fallback component.
