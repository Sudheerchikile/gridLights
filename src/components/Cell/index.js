import React from 'react';
import './index.css';

function Cell({ filled, onClick,  isDisabled }) {
    return <button type="button" onClick={() => !isDisabled && onClick()} disabled={isDisabled} className={filled ? "cell cell-activated" : "cell"}></button>;
}

export default Cell;
