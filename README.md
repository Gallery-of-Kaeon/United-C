<h1 align="center">United C</h1>

<h2 align="center">A Modernized C/C++ Hybrid Language</h2>

United C is a language designed to combine C and C++ into a single language,
and to update their syntaxes and build pipelines to match the conveniences of more modern languages such as Python and JavaScript.

However,
it seeks to do this without any compromise to their power or their low level nature,
or existing utilities.
As such,
it is 100% backwards compatible with C++ and almost entirely backwards compatible with C.

The utilities necessary for United C development are provided through the [Kaeon United](https://github.com/Gallery-of-Kaeon/Kaeon-United) API.

<h2 align="center">Example</h2>

The following is a hello world example in United C:

    use stdio.h

    printf("Hello, world!")

which,
if written in a file called "hello.uc",
may be compiled using the following command:

    npx kaeon-united ucc read hello.uc

_Note: You must have gcc and make installed for this command to work._