---
title: How to Handle Errors in Javascript
date: 2022-08-11
tags: ["Javascript" ]
---

I think, handling errors is one of the most important skill in programming. This is because errors can occur anywhere in your code and if you don’t handle those errors carefully your users might face an issue.

Javascript being a dynamically typed language makes our work slightly difficult for programmers like us.

Let’s see various ways to handle errors in Javascript.

## Throwing Exceptions

When a piece of code runs into a problem, you raise (*or throw)* what is known as an **exception.** Throwing an exception immediately jumps out of the current flow of a program and returns the exception.

Let’s consider an example of a Cake 🎂  shop.

```jsx
const inventory = {
 ButterCake: 5,
 CarrotCake: 4,
 SpongeCake: 7,
}

const cart = [];

const addCakeToCart = (cakeName) => {
 if (!inventory.hasOwnProperty(cakeName)) {
  throw new Error(`No such cake: ${cakeName}`);
 }
 if (inventory[cakeName] <= 0) {
  throw new Error(`Sorry no ${cakeName} cakes left`)
 }
 cart.push(cakeName)
 inventory[cakeName] -= 1;
}
```

The `throw` keyword is for throwing exceptions. While `Error()` is a constructor function to create new error.

To catch an exception, you can use `try...catch` block.

```jsx
try {
 addCakeToCart(cakeName)
} catch(e) {
 console.log('Something went wrong', e)
}
```

And the best part about exceptions?

The functions in between the points where the error occurred and where it is handled, can completely forget about error.

## Selecting Catching

Can you figure out what’s wrong with this `try...catch` block?

```jsx
try {
 addCakeToCart(cakeName)
} catch(e) {
 showError('Invalid cake')
}
```

The problem is that the `catch` block is completely ignoring the error `e`. Even if error is, say, network failure, the code will still say `Invalid cake`.

So in general, you want to catch specific kinds of exception.

How do we do this?

We can defined a new type of error like this:

```jsx
class CakeInputError extends Error {}
```

Then use it:

```jsx
const addCakeToCart = (cakeName) => {
 if (!inventory.hasOwnProperty(cakeName)) {
  throw new CakeInputError(`No such cake: ${cakeName}`);
 }
 if (inventory[cakeName] <= 0) {
  throw new CakeInputError(`Sorry no ${cakeName} cakes left`)
 }
 cart.push(cakeName)
 inventory[cakeName] -= 1;
}
```

Here `CakeInputError` is not defining anything new. The only objective of this error class is so we can recognize errors by using `instanceof`. Using our new error class, we can selectively catch errors.

```jsx
try {
 addCakeToCart(cakeName)
} catch(e) {
 if (e instanceof CakeInputError) showError('Invalid cake')
 else throw e;
}
```

This will catch instances of `CakeInputError` and let unrelated exceptions through.

## Assertions

Assertions are simply checks inside a program to verify is something is working the way it is supposed to.

They are simply used to find programmer mistakes.

For example:

```jsx
const addCakeToCart = (cakeName) => {
 if (!cakeName) throw new Error("No cake name provided"); // ASSERTION
 if (!inventory.hasOwnProperty(cakeName)) {
  throw new CakeInputError(`No such cake: ${cakeName}`);
 }
 if (inventory[cakeName] <= 0) {
  throw new CakeInputError(`Sorry no ${cakeName} cakes left`)
 }
 cart.push(cakeName)
 inventory[cakeName] -= 1;
}
```

Now if you call `addCakeToCart` without providing a cakeName, it will blowup.

However, I wouldn’t recommend using assertions. Writing tests and using type checkers like Typescript is better than using assertions.

## Cleaning up exceptions

Cleaning up exceptions is very important, especially if you are program has several side effects.

Let’s go back to our example of cake shop:

```jsx
const inventory = {
 ButterCake: 5,
 CarrotCake: 4,
 SpongeCake: 7,
}

const cart = [];

const addCakeToCart = (cakeName) => {
 if (!inventory.hasOwnProperty(cakeName)) {
  throw new Error(`No such cake: ${cakeName}`);
 }
 if (inventory[cakeName] <= 0) {
  throw new Error(`Sorry no ${cakeName} cakes left`)
 }
 cart.push(cakeName)
 inventory[cakeName] -= 1;
}

const checkout = (userId) => {
 try {
  confirmPayment(userId)
 } catch(e) {
  console.log('error', e)
 }
}
```

Did you spot the problem?

Our `addCakeToCart` removes a cake from the inventory even before checking out. It never takes following scenarios into the account:

- A shopper never proceeds with the checkout
- Shopper’s payment fails

How do we solve this problem?

One way to address this is to use fewer side effects. Instead of removing items from the inventory by a function, why not compute values with the changed data.

The second way is to use `finally` block to reset everything.

For example:

```jsx
const addCakeToCart = (cakeName) => {
 if (!inventory.hasOwnProperty(cakeName)) {
  throw new Error(`No such cake: ${cakeName}`);
 }
 if (inventory[cakeName] <= 0) {
  throw new Error(`Sorry no ${cakeName} cakes left`)
 }
 cart.push(cakeName)

}

const checkout = () => {
 let paymentSuccessful = false;
 try {
  confirmPayment()
  paymentSuccessful = true;
 } catch(e) {
  paymentSuccessful = false;
  console.log('error', e)
 } finally {
  if (paymentSuccessful) removeItemsFromInventory()
 }
}
```

This version removes items from inventory, only if payment is successful.

## Conclusion

Error handling is quite a difficult topic to pick at first. I am always learning about various ways to handle errors without blowing up the program.

Finally, If you've made it this far you must think the ideas in this post are pretty useful! Consider retweeting this to get the word out: 🙌
