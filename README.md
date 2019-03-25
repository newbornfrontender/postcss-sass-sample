<h1 align="center">
  PostCSS and SASS sample
</h1>

Example of how to use PostCSS and SASS

<h2 align="center">Used PostCSS dependencies</h2>

- [PreCSS](https://github.com/jonathantneal/precss)
- [PostCSS Mixins](https://github.com/postcss/postcss-mixins)
- [CSSNANO](https://github.com/cssnano/cssnano)
- [PostCSS Sorting](https://github.com/hudochenkov/postcss-sorting)

<h2 align="center">Used Stylelint dependencies</h2>

- [stylelint-order](stylelint-order)
- [stylelint-config-standard](stylelint-config-standard)
- [stylelint-config-prettier](stylelint-config-prettier)
- [stylelint-prettier](stylelint-prettier)

<h2 align="center">Install dependencies</h2>

```
$ yarn
```

<h2 align="center">List of available commands</h2>

```
$ yarn <command name>
```

<table>
  <thead>
    <tr>
      <th>Commands</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>
        <code>format</code>
      </td>
      <td>
        Formatting code with Prettier
      </td>
    </tr>
    <tr>
      <td>
        <code>lint:check</code>
      </td>
      <td>
        Check conflict CSS rules in Stylelint
      </td>
    </tr>
    <tr>
    <tr>
      <td>
        <code>lint:fix</code>
      </td>
      <td>
        Fix conflicts in CSS files with Stylelint and format with Prettier
      </td>
    </tr>
    <tr>
      <td>
        <code>clean</code>
      </td>
      <td>
        Remove dist directory
      </td>
    </tr>
    <tr>
      <td>
        <code>compile</code>
      </td>
      <td>
        Transpile code with PostCSS
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:start</code>
      </td>
      <td>
        Watch for transpiling code with PostCSS in development mode
      </td>
    </tr>
    <tr>
      <td>
        <code>compile:build</code>
      </td>
      <td>
        Transpile code with PostCSS in production mode
      </td>
    </tr>
  </tbody>
</table>

<h2 align="center">License</h2>

[MIT](/LICENSE)
