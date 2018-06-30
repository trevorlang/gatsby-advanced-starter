/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import GoogleTagManager from "./components/GoogleTagManager/GoogleTagManager";
import config from "../data/SiteConfig";
import favicon from "./favicon.png";

let inlinedStyles = "";
let gtmPreviewVars = "";

if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off"*/
    console.log(e);
  }
}

if (process.env.NODE_ENV === "qa") {
  gtmPreviewVars = config.googleTagManagerPreviewQA
}


if (process.env.NODE_ENV === "development") {
  gtmPreviewVars = config.googleTagManagerPreviewDevelopment
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <GoogleTagManager gtmId={config.googleTagManagerID} previewVariables={gtmPreviewVars} />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerID}`}
              height="0"
              width="0"
              style={{"display": "none", "visibility": "hidden"}}
              title="Google Tag Manager script"
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
