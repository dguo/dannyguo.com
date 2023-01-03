---
layout: ../../layouts/BlogPostLayout.astro
canonicalUrl: https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/
categories:
  - programming
date: "2019-11-22"
tags:
  - webassembly
  - assemblyscript
title: The Introductory Guide to AssemblyScript
---

*This post was originally written for the [LogRocket
blog](https://blog.logrocket.com/the-introductory-guide-to-assemblyscript/).*

[WebAssembly](https://webassembly.org/) (or Wasm) is a relatively recent
addition to web browsers, but it has the potential to drastically expand what
the web is capable of as a platform for serving applications.

While there can be a steep learning curve for web developers to get started with
WebAssembly, [AssemblyScript](https://assemblyscript.org/) provides a way to get
around that. Let’s first take a look at why WebAssembly is such a promising
technology, and then we’ll see how AssemblyScript can help to unlock its
potential.

## WebAssembly

WebAssembly is a low-level language for browsers, giving developers a
compilation target for the web besides JavaScript. It makes it possible for
website code to run at near-native speed in a safe, sandboxed environment.

It was developed with input from representatives of all the major browsers
(Chrome, Firefox, Safari, and Edge), who [reached a design
consensus](https://lists.w3.org/Archives/Public/public-webassembly/2017Feb/0002.html)
in early 2017.  All of these browsers now support WebAssembly, which is usable
in [about 87](https://caniuse.com/#feat=wasm)
[percent](https://caniuse.com/#feat=wasm) of all browsers.

WebAssembly is delivered in a binary format, which means that it has both size
and load time advantages over JavaScript. Yet it also has a [textual
representation](https://developer.mozilla.org/en-US/docs/WebAssembly/Understanding_the_text_format)
that is human readable.

When WebAssembly was first announced, some developers thought it had the
potential to eventually supplant JavaScript as the primary language of the web.
But it’s better to think of WebAssembly as a new tool that integrates well with
the existing web platform, which is one of its [high-level
goals](https://webassembly.org/docs/high-level-goals/).

Rather than replacing JavaScript for existing use cases, WebAssembly is
intriguing more because it enables new use cases. WebAssembly doesn’t have
direct access to the DOM yet, and most existing websites will want to stick with
JavaScript, which is already quite fast after going through years of
optimization. Here’s a sample of WebAssembly’s [own list of possible use
cases](https://webassembly.org/docs/use-cases/):

- Games
- Scientific visualization and simulation
- CAD applications
- Image/video editing

The common attribute here is that these are applications that we would typically
think of as desktop applications. By providing near-native performance for
CPU-intensive tasks, WebAssembly makes it feasible to move more of these
applications to the web.

Existing websites can also benefit from WebAssembly.
[Figma](https://www.figma.com/) provides a real-world example, having used
WebAssembly to significantly improve their load time. If a website uses code
that does a lot of computation, it can make sense to replace only that code with
WebAssembly to improve performance.

So maybe now you’re interested in getting started with WebAssembly. You could
learn the language itself and [write it
directly](https://blog.scottlogic.com/2018/04/26/webassembly-by-hand.html), but
it was really intended to be a [compilation target for other
languages](https://github.com/appcypher/awesome-wasm-langs). It [was
designed](https://webassembly.org/docs/c-and-c++/) to have good support for C
and C++, Go [added experimental support](https://golang.org/doc/go1.11#wasm) for
it in version 1.11, and Rust is also [investing
heavily](https://www.rust-lang.org/what/wasm) in it.

But maybe you don’t want to learn or use one of these languages in order to use
WebAssembly. This is where AssemblyScript comes into play.

## AssemblyScript

AssemblyScript is a TypeScript to WebAssembly compiler. Developed by Microsoft,
TypeScript adds types to JavaScript. It has become [quite
popular](https://insights.stackoverflow.com/survey/2019#most-popular-technologies),
and even for people who are not familiar with it, AssemblyScript only allows for
a limited subset of TypeScript features anyway, so it shouldn’t take long to get
up to speed.

Because it’s so similar to JavaScript, AssemblyScript lets web developers easily
incorporate WebAssembly into their websites without having to work with an
entirely different language.

## Trying It Out

Let’s write our first AssemblyScript module (all of the following code is
available in [this GitHub
repository](https://github.com/dguo/assemblyscript-demo)). We need
[Node.js](https://nodejs.org/) with a minimum version of 8 for [WebAssembly
support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly#Browser_compatibility).

Change to an empty directory, create a `package.json` file, and install
AssemblyScript. Note that we need to install it directly from [its GitHub
repository](https://github.com/AssemblyScript/assemblyscript). It isn’t
published on [npm](https://www.npmjs.com/) because the AssemblyScript developers
[don’t consider the compiler to be ready for general use
yet](https://github.com/AssemblyScript/assemblyscript/issues/442#issuecomment-458523778).

```sh
mkdir assemblyscript-demo
cd assemblyscript-demo
npm init
npm install --save-dev github:AssemblyScript/assemblyscript
```

Generate scaffolding files using the included `asinit` command.

```sh
npx asinit .
```

Our `package.json` should now include these scripts.

```json
{
  "scripts": {
    "asbuild:untouched": "asc assembly/index.ts -b build/untouched.wasm -t build/untouched.wat --sourceMap --validate --debug",
    "asbuild:optimized": "asc assembly/index.ts -b build/optimized.wasm -t build/optimized.wat --sourceMap --validate --optimize",
    "asbuild": "npm run asbuild:untouched && npm run asbuild:optimized"
  }
}
```

The top-level `index.js` looks like this.

```js
const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/optimized.wasm"));
const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});
```

It allows us to easily
[require](https://nodejs.org/api/modules.html#modules_require_id) our
WebAssembly module just like a plain JavaScript module.

The `assembly` directory contains our AssemblyScript source code. The generated
example is a simple addition function.

```ts
export function add(a: i32, b: i32): i32 {
  return a + b;
}
```

If you expect the function signature to look like `add(a: number, b: number):
number`, as it would in TypeScript, the reason it uses `i32` instead is that
AssemblyScript uses WebAssembly’s [specific integer and floating point
types](https://docs.assemblyscript.org/basics/types) rather than TypeScript’s
[generic](https://www.typescriptlang.org/docs/handbook/basic-types.html#number)
`[number](https://www.typescriptlang.org/docs/handbook/basic-types.html#number)`
[type.](https://www.typescriptlang.org/docs/handbook/basic-types.html#number)

Let’s build the example.

```sh
npm run asbuild
```

The `build` directory should now include the following files.

```sh
optimized.wasm
optimized.wasm.map
optimized.wat
untouched.wasm
untouched.wasm.map
untouched.wat
```

We get plain and optimized versions of the build. For each build version, we get
a `.wasm` binary, a `.wasm.map` [source
map](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Use_a_source_map),
and a `.wat` textual representation of the binary. The textual representation is
designed to be readable by humans, but for our purposes, we don’t need to read
or understand it. Part of the point of using AssemblyScript is that we don’t
need to work with raw WebAssembly.

Fire up Node, and use our compiled module just like any other module.

```sh
$ node
Welcome to Node.js v12.10.0.
Type ".help" for more information.
> const add = require('./index').add;
undefined
> add(3, 5)
8
```

And that’s all it took to call WebAssembly from Node!

## Add a Watch Script

For development, I recommend using [onchange](https://github.com/Qard/onchange)
to automatically rebuild the module whenever you change the source code because
AssemblyScript [doesn’t include a watch
mode](https://github.com/AssemblyScript/assemblyscript/issues/624) yet.

```sh
npm install --save-dev onchange
```

Add an `asbuild:watch` script to `package.json`. Include the `-i`
[flag](https://github.com/Qard/onchange#initial--i---initial) to run an initial
build as soon as you run the command.

```json
{
  "scripts": {
    "asbuild:untouched": "asc assembly/index.ts -b build/untouched.wasm -t build/untouched.wat --sourceMap --validate --debug",
    "asbuild:optimized": "asc assembly/index.ts -b build/optimized.wasm -t build/optimized.wat --sourceMap --validate --optimize",
    "asbuild": "npm run asbuild:untouched && npm run asbuild:optimized",
    "asbuild:watch": "onchange -i 'assembly/**/*' -- npm run asbuild"
  }
}
```

Now you can run `asbuild:watch` instead of having to constantly re-run
`asbuild`.

## Performance

Let’s write a basic benchmark test to get an idea of what kind of performance
boost we can get. WebAssembly’s specialty is handling CPU-intensive tasks like
numerical calculations, so let’s go with a function for determining if an
integer is a prime number or not. Our reference implementation looks like this.
It’s a naive, brute force solution because our goal is to perform a high number
of calculations.

```js
function isPrime(x) {
    if (x < 2) {
        return false;
    }

    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}
```

The equivalent AssemblyScript version just needs some type annotations.

```ts
function isPrime(x: u32): bool {
    if (x < 2) {
        return false;
    }

    for (let i: u32 = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}
```

We’ll use [Benchmark.js](https://benchmarkjs.com/).

```sh
npm install --save-dev benchmark
```

Create `benchmark.js`.

```js
const Benchmark = require('benchmark');

const assemblyScriptIsPrime = require('./index').isPrime;

function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}

const suite = new Benchmark.Suite;
const startNumber = 2;
const stopNumber = 10000;

suite.add('AssemblyScript isPrime', function () {
    for (let i = startNumber; i < stopNumber; i++) {
        assemblyScriptIsPrime(i);
    }
}).add('JavaScript isPrime', function () {
    for (let i = startNumber; i < stopNumber; i++) {
        isPrime(i);
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).on('complete', function () {
    const fastest = this.filter('fastest');
    const slowest = this.filter('slowest');
    const difference = (fastest.map('hz') - slowest.map('hz')) / slowest.map('hz') * 100;
    console.log(`${fastest.map('name')} is ~${difference.toFixed(1)}% faster.`);
}).run();
```

On my machine, I got these results when I ran `node benchmark`.

```sh
AssemblyScript isPrime x 74.00 ops/sec ±0.43% (76 runs sampled)
JavaScript isPrime x 61.56 ops/sec ±0.30% (64 runs sampled)
AssemblyScript isPrime is ~20.2% faster.
```

Note that this test is a
[microbenchmark](https://stackoverflow.com/a/2842707/1481479), and we should be
careful about reading too much into it.

For some more involved AssemblyScript benchmarks, I recommend checking out [this
WasmBoy benchmark](https://wasmboy.app/benchmark/) and [this wave equation
benchmark](https://jtiscione.github.io/webassembly-wave/index.html).

## Loading the Module

Next, let’s use our module in a website. Create `index.html`.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>AssemblyScript isPrime demo</title>
    </head>
    <body>
        <form id="prime-checker">
            <label for="number">Enter a number to check if it is prime:</label>
            <input name="number" type="number" />
            <button type="submit">Submit</button>
        </form>

        <p id="result"></p>

        <script src="demo.js"></script>
    </body>
</html>
```

Create `demo.js`. There are [multiple
ways](https://developers.google.com/web/updates/2018/04/loading-wasm) to load
WebAssembly modules, but the most efficient is to compile and instantiate them
in a streaming manner with the
[WebAssembly.instantiateStreaming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming)
function. Note that we need to [provide an abort
function](https://docs.assemblyscript.org/details/debugging#overriding-abort),
which is called if an
[assertion](https://docs.assemblyscript.org/basics/environment#utility) fails.

```js
(async () => {
    const importObject = {
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at index.ts:" + line + ":" + column);
            }
        }
    };
    const module = await WebAssembly.instantiateStreaming(
        fetch("build/optimized.wasm"),
        importObject
    );
    const isPrime = module.instance.exports.isPrime;

    const result = document.querySelector("#result");
    document.querySelector("#prime-checker").addEventListener("submit", event => {
        event.preventDefault();
        result.innerText = "";
        const number = event.target.elements.number.value;
        result.innerText = `${number} is ${isPrime(number) ? '' : 'not '}prime.`;
    });
})();
```

Now install [static-server](https://github.com/nbluis/static-server). We need a
server because in order to use `WebAssembly.instantiateStreaming`, the module
needs to be served with a [MIME
type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
of `application/wasm`.

```sh
npm install --save-dev static-server
```

Add a script to `package.json`.

```json
{
  "scripts": {
    "serve-demo": "static-server"
  }
}
```

Run `npm run serve-demo` and open the localhost URL in a browser. Submit a
number in the form, and you should get a message indicating whether the number
is prime or not. Now we’ve gone all the way from writing AssemblyScript to
actually using it in a website.

## Conclusion

WebAssembly, and by extension AssemblyScript, is not going to magically make
every website faster, but that was never the point. WebAssembly is exciting
because it can make the web viable for a much larger set of applications.

Similarly, AssemblyScript makes WebAssembly accessible for more developers,
making it easy for us to stick with JavaScript by default but bring in
WebAssembly when we have work that requires lots of number crunching.
