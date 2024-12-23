# AsciiDocDoctor

Utility tool for AsciiDoc files.

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]

<img src="https://raw.githubusercontent.com/anderslatif/AsciiDocDoctor/main/asciidocdoctorlogo.png" alt="AsciiDoc asciidocdoctor logo" width="150" >

---

## How to run

The command will fun all `.adoc` files recursively starting from where you run it. 

Run the following and it will look recursively for .md files starting from the directory you are in.

```bash
$ npx asciidocdoctor
```

Or install it globally:

```bash
$ npm install -g asciidocdoctor
```

Now you can run it like this:

```bash
$ asciidocdoctor
```
---

## Flags


| Flags            | Description                                                                                           |
|------------------|-------------------------------------------------------------------------------------------------------|
| `--all` | Run all checks. Defaults to true of no other options have been given.                                          |
| `--validate-links` | Validates that the links defined in the AsciiDoc file exist on the file system.                     |



[npm-version-image]: https://img.shields.io/npm/v/asciidocdoctor.svg
[npm-url]: https://www.npmjs.com/package/asciidocdoctor
[npm-install-size-image]: https://packagephobia.com/badge?p=asciidocdoctor
[npm-install-size-url]: https://packagephobia.com/result?p=asciidocdoctor
