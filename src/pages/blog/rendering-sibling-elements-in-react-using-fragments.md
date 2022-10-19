---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/rendering-sibling-elements-react-fragments/
categories:
  - programming
date: "2019-12-09"
tags:
  - react
title: Rendering Sibling Elements in React Using Fragments
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/rendering-sibling-elements-react-fragments/).*

One of the advantages of using [React](https://reactjs.org/) to render a user
interface is that it’s easy to break up the UI into components. However, a
common problem that arises is when we want to return
[sibling](https://javascript.info/dom-navigation#siblings-and-the-parent)
elements with no parent. React has a feature called Fragments that provides the
solution.

## The Problem

If you aren’t familiar with the problem, consider this example.

```jsx
function FAQ() {
    return (
        <p>Q. What is React?</p>
        <p>A. A JavaScript library for building user interfaces</p>
        <p>Q. How do I render sibling elements?</p>
        <p>A. Use Fragments</p>
    );
}
```

This code results in an error: `Adjacent JSX elements must be wrapped in an
enclosing tag.`

## The Solutions

One option is to wrap the elements with a parent element.

```jsx
function FAQ() {
    return (
        <div>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </div>
    );
}
```

But this method introduces an extraneous element into the DOM, adding an extra
level of nesting that we don’t actually need.

React [v16.0](https://github.com/facebook/react/releases/tag/v16.0.0) introduced
another option, which is to return an array of elements.

```jsx
function FAQ() {
    return [
        <p>Q. What is React?</p>,
        <p>A. A JavaScript library for building user interfaces</p>,
        <p>Q. How do I render sibling elements?</p>,
        <p>A. Use Fragments</p>
    ];
}
```

Now we need to add commas in between elements. More importantly, this code
produces a [key](https://reactjs.org/docs/lists-and-keys.html#keys) warning:
`Warning: Each child in a list should have a unique "key" prop.` Adding a key to
every element fixes the issue but is quite cumbersome.

```jsx
function FAQ() {
    return [
        <p key="q1">Q. What is React?</p>,
        <p key="a1">A. A JavaScript library for building user interfaces</p>,
        <p key="q2">Q. How do I render sibling elements?</p>,
        <p key="a2">A. Use Fragments</p>
    ];
}
```

React [v16.2](https://github.com/facebook/react/releases/tag/v16.2.0) gave us a
cleaner solution, which is to use Fragments.

```jsx
function FAQ() {
    return (
        <React.Fragment>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </React.Fragment>
    );
}
```

We no longer need to provide keys, we don’t need to add array commas, and we
still avoid adding an extraneous DOM element because `React.Fragment` doesn’t
become an actual element during rendering.

We can import `Fragment` to avoid having to fully write out `React.Fragment`.

```jsx
import React, {Fragment} from "react";

function FAQ() {
    return (
        <Fragment>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </Fragment>
    );
}
```

However, an even better method is to use the shorthand syntax for Fragments,
which looks like empty tags: `<>` and `</>`.

```jsx
function FAQ() {
    return (
        <>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </>
    );
}
```

This gives us the same benefits as using `React.Fragment`, but we don’t need to
import anything else, and our code looks cleaner.

The only thing that the shorthand syntax doesn’t support for now is adding a
`key`. This could be problematic if you are creating a [description
list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl), for
example. In this case, use the standard syntax.

```jsx
function Dictionary(props) {
    return (
        <dl>
            {props.terms.map(({word, definition}) =>
                <React.Fragment key={word}>
                    <dt>{word}</dt>
                    <dd>{definition}</dd>
                </React.Fragment>
            )}
        </dl>
    );
}
```

We need to provide a key to avoid a key warning.

In most cases, however, the shorthand method is the best solution for our
original problem of returning sibling elements. This solution has worked out
well enough that [Vue.js](https://vuejs.org/) will also natively support the
concept of Fragments [when v3 is
released](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf).

## Using Fragments

In the last two years, the JavaScript ecosystem has added widespread support for
Fragments.

- React added support for the shorthand syntax in
  [version 16.2.0](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
  (2017-11-28)
- [TypeScript](https://www.typescriptlang.org/) added support in
  [version 2.6.2](https://github.com/Microsoft/TypeScript/releases/tag/v2.6.2)
  (2017-11-27)
- [Babel](https://babeljs.io/) added support in
  [version 7](https://babeljs.io/blog/2018/08/27/7.0.0#jsx-fragment-support)
  (2018-8-27)
- [Prettier](https://prettier.io/) added support in
  [version 1.9](https://prettier.io/blog/2017/12/05/1.9.0.html#jsx-fragment-syntax-3237-https-githubcom-prettier-prettier-pull-3237-by-duailibe-https-githubcom-duailibe)
  (2017-12-05)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) added
  a [jsx-fragments rule](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md)
  in [version 7.12.0](https://github.com/yannickcr/eslint-plugin-react/releases/tag/v7.12.0)
  (2018-12-28) to enforce using the standard or shorthand syntax

If you upgrade your dependencies, you will probably be able to use Fragments
without any additional configuration.
