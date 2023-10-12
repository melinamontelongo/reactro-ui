# Reactro UI

Reactro UI is a retro-inspired React component library with Typescript support.

[![npm version](https://badge.fury.io/js/reactro-ui-lib.svg)](https://badge.fury.io/js/reactro-ui-lib)

<div align="center">
<img src="https://repository-images.githubusercontent.com/695400128/5b5e462e-ec6a-4ad1-b054-2bfe554115a3" alt="reactro logo" />  
</div>

See all the available components on [Reactro UI's Storybook](https://melinamontelongo.github.io/reactro-ui)

## Installation

Run the following on your terminal inside the directory of any React project:
```shell


npm install reactro-ui-lib


```

Reactro UI uses [styled-components](https://styled-components.com/), so if you haven't already installed it, run the following as well:
```shell


npm install styled-components


```
## Usage

Once everything is installed, you can import any Reactro UI's component as seen on Storybook. 

Wrap everything with `ThemeProvider` so both theming and styles are correctly applied.

```js
import { Button, ThemeProvider } from 'reactro-ui-lib';

<ThemeProvider>
    <Button text="Click me" />
</ThemeProvider>
```

`ThemeProvider` accepts both a `theme` and a `font` prop, where you can choose from the currently available themes and fonts. 

```js
import { Button, ThemeProvider } from 'reactro-ui-lib';

<ThemeProvider theme="cherry" font="venice">
    <Button text="Click me" />
</ThemeProvider>
```

##  Copyright
This library was built by [Melina Montelongo](https://github.com/melinamontelongo) and is provided under the MIT license.
