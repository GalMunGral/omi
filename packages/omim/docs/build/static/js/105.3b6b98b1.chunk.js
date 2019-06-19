webpackJsonp([105],{61:function(n,e){n.exports="# Omim\n\nCross-Frameworks components, powered by Material Design and [Omi](https://github.com/Tencent/omi).\n\n![](https://tencent.github.io/omi/packages/omim/assets/pv4.jpeg?a=1)\n\n## Features\n\n* Render by Custom Elements of Web Components\n* Any framework can use the components, such as Omi, React, Vue and Angular \n* Support both JSX and native HTML elements \n* Each element can be used independently\n* Super easy to change theme colors, fonts and rounded corners\n* Extended HTML capabilities, you can pass false attributes to elements through string `'0'` or string `'flase'`\n\n## Cross Frameworks\n\n* [Using Omim in React](https://tencent.github.io/omi/packages/omim/test-react/build/index.html) & [Source Code](https://github.com/Tencent/omi/blob/master/packages/omim/test-react/src/HookTest.js)\n* [Using Omim in Vue](https://tencent.github.io/omi/packages/omim/test-vue/dist/index.html) & [Source Code](https://github.com/Tencent/omi/blob/master/packages/omim/test-vue/app.vue)\n\n## Usage\n\n### Via script\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script src=\"https://unpkg.com/omim@latest/button/index.js\"><\/script>\n\n<m-button>I am button</m-button>\n```\n\n### Via npm\n\n``` bash\nnpm install omim\n```\n\nThen:\n\n```js\nimport 'omim/button'\n```\n\nThen use the element in Omi, React, Vue or Angular:\n\n``` html\n<m-button>I am button</m-button>\n```\n\nIt can also be used in pure js:\n\n```js\nvar button = document.createElement('m-button')\nbutton.innerHTML = 'I am button'\ndocument.body.append(button)\nbutton.addEventListener('click', function () {\n  console.log('Clicked!')\n})\n\n//or\n//document.body.innerHTML = '<m-button>I am button</m-button>'\n```\n\n## Change Theme Color\n\n```js\ndocument.body.style.setProperty('--mdc-theme-primary', 'red')\ndocument.body.style.setProperty('--mdc-theme-secondary', 'blue')\ndocument.body.style.setProperty('--mdc-theme-error', 'yellow')\n```\n\nAll the config:\n\n```css\n--mdc-theme-primary: #0072d9;\n--mdc-theme-secondary: #2170b8;\n--mdc-theme-error: #f5222d;\n--mdc-theme-surface: #ffffff;\n--mdc-theme-on-primary: #ffffff;\n--mdc-theme-on-secondary: #ffffff;\n--mdc-theme-on-error: #ffffff;\n--mdc-theme-on-surface: #000000;\n--mdc-theme-background: #ffffff;\n--mdc-shape-small-component-radius: 4px;\n--mdc-shape-medium-component-radius: 4px;\n--mdc-shape-large-component-radius: 0px;\n--mdc-typography--font-family: Roboto, sans-serif;\n```\n\n## HTML Extention \n\nYou can set boolean prop to false from markup by 0 or false string.\n\n```js\ndefine('my-element', class extends WeElement {\n  static defaultProps = {\n    show: true\n  }\n\n static propTypes = {\n    show: Boolean\n  }\n\n  render(props) {\n    ...\n    ...\n  }\n})\n```\n\nUse:\n\n```html\n<my-element show=\"false\"></my-element>\n```\n\nor\n\n```html\n<my-element show=\"0\"></my-element>\n```\n\n## Usage in React\n\n```jsx\n/** @jsx nativeEvents */\nimport nativeEvents from 'jsx-native-events'\nimport { useState } from 'react'\nimport 'omim/icon-button'\n\nexport default function SomeComponent(props) {\n    const [result, setSwitch] = useState(false)\n\n    return (\n      <div>\n        <p>The switch is {result ? 'on' : 'off'}</p>\n        <m-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" onEventChange={e => setSwitch(e.detail.isOn)}>\n        </m-icon-button>\n      </div>\n    )\n}\n```\n\nMany thanks to calebdwilliams's [jsx-native-events](https://github.com/calebdwilliams/jsx-native-events#readme).\n\n## Usage in Vue\n\n```html\n<script>\nimport 'omim/icon-button'\n\nexport default {\n  name: 'HelloWorld',\n  data: function() {\n    return {\n      result: false\n    }\n  },\n  methods: {\n    myEvent: function(evt) {\n      this.result = evt.detail.isOn\n    }\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"component\">\n    <p>The switch is {{result? 'on' : 'off'}}</p>\n    <m-icon-button color=\"red\" icons=\"['favorite', 'favorite_border']\" @change=\"myEvent\"></m-icon-button>\n  </div>\n</template>\n```\n\n> Note that in order to display icon in react or vue app, you need to put this in HTML:\n\n```html\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n```\n\n## Contribution\n\n### CMD\n\nBuild component:\n\n```bash\nnpm run build -- component-name\n```\n\nBuild all components:\n\n```bash\nnpm run build-all\n```\n\nBuild demo:\n\n```bash\nnpm start demo-name\n```\n\nPublish:\n\n```bash\nnpm publish --access public\n```\n\n## Links\n\n* [material.io docs](https://material.io/develop/web/components/buttons/) \n* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) \n* [material-theme-builder](https://material-theme-builder.glitch.me/)\n* [material-components-web](https://github.com/material-components/material-components-web)\n"}});
//# sourceMappingURL=105.3b6b98b1.chunk.js.map