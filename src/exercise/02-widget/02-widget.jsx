import './02-widget.css';

import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

// DOM Script === Vanilla Script
function bodyStyling() {
  document.body.style.backgroundColor = `#f4f6f8`;
}

bodyStyling();

const data = {
    message: '859.65',
    widgetStock: ['코스닥', '0.97%']
}

const renderWidget = () => {
    
}

createRoot(document.getElementById('root')).render(renderWidget());