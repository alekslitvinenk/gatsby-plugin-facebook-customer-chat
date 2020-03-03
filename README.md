# gatsby-plugin-facebook-customer-chat

Forked from (drakang4/gatsby-plugin-facebook-sdk)[https://github.com/drakang4/gatsby-plugin-facebook-sdk]

Gatsby plugin to integrate [Facebook Javascript SDK](https://developers.facebook.com/docs/javascript)
and [Facebook Customer Chat Plugin](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/) on your project.

## Install

`npm install --save gatsby-plugin-facebook-customer-chat` or `yarn add gatsby-plugin-facebook-customer-chat`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-facebook-customer-chat`,
    options: {
      sdk: {
        appId: 'your-app-id',
        ...
      },
      chat: {
        pageId: 'your-page-id',
        loggedInGreeting: 'Hi! How can I help you?',
        loggedOutGreeting: 'Hi! How can I help you?',
      }
    },
  },
];
```

### Configuration

You can find all initialization options in [official Facebook SDK reference](https://developers.facebook.com/docs/javascript/reference/FB.init).
