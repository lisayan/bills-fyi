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
        src="https://app.youform.com/forms/d54nhr1i" 
        loading="lazy" 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0"
        title="Join Form"
      />
    </>
  );
};

export default JoinForm;
