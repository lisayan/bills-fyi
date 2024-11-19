import React from 'react';
import { Helmet } from 'react-helmet';

const JoinForm = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <title>My Form</title>
        <style type="text/css">
          {`
            html {
              margin: 0;
              height: 100%;
              overflow: hidden;
            }
            iframe {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              border: 0;
            }
          `}
        </style>
      </Helmet>
      <iframe 
        id="JotFormIFrame-243075783472059"
        title="Rec form"
        onload="window.parent.scrollTo(0,0)"
        allowtransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/243075783472059"
        frameborder="0"
        style={{ minWidth: '100%', maxWidth: '100%', height: '100vh', border: 'none' }}
        scrolling="no"
      />
      <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-243075783472059']", "https://form.jotform.com/")`
      }} />
    </>
  );
};

export default JoinForm;
