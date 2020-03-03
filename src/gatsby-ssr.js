import React from 'react';
import { stripIndent } from 'common-tags';

exports.onRenderBody = ({ setPreBodyComponents }, pluginOptions) => {
  return setPreBodyComponents([
    (<script
      key={`gatsby-plugin-facebook-customer-chat`}
      dangerouslySetInnerHTML={{
        __html: stripIndent`
          fbAsyncInit = function() {
            FB.init(${JSON.stringify(pluginOptions.sdk)});
          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        `}}
      />),
      (
        <div
          key="fb-customer-chat"
          className="fb-customerchat"
          attribution="setup_tool"
          page_id={ pluginOptions.chat.pageId }
          logged_in_greeting={ pluginOptions.chat.loggedInGreeting ? pluginOptions.chat.loggedInGreeting : 'Hi! How can I help you?' }
          logged_out_greeting={ pluginOptions.chat.loggedOutGreeting ? pluginOptions.chat.loggedOutGreeting : 'Hi! How can I help you?' }
        />
      ),
  ]);
};
