import React, { useEffect, useRef } from 'react';

const YouFormWidget = ({ formId, position = 'center' }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button && window.YouFormWidget) {
      window.YouFormWidget.init();
    }
    return () => {
      if (button && button._youform) {
        button._youform.destroy();
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      data-youform-open={formId}
      data-youform-position={position}
    >
      Open Form
    </button>
  );
};

export default YouFormWidget;
