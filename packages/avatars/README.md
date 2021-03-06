# @zendeskgarden/react-avatars [![npm version](https://flat.badgen.net/npm/v/@zendeskgarden/react-avatars)](https://www.npmjs.com/package/@zendeskgarden/react-avatars)

This package includes components relating to avatars in the
[Garden Design System](https://zendeskgarden.github.io/).

## Installation

```sh
npm install @zendeskgarden/react-avatars

# Peer Dependencies - Also Required
npm install react react-dom prop-types styled-components @zendeskgarden/react-theming
```

## Usage

```jsx static
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Avatar } from '@zendeskgarden/react-avatars';

/**
 * Place a `ThemeProvider` at the root of your React application
 */
<ThemeProvider>
  <Avatar>
    <img src="images/user.png" alt="Example Avatar" />
  </Avatar>
</ThemeProvider>;
```
