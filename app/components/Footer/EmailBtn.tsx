'use client';

import React from 'react';
import { MdEmail } from 'react-icons/md';

function EmailBtn() {
    return (
        <button onClick={() => {
            navigator.clipboard.writeText('binglerlee@gmail.com');
        }}>
            <MdEmail />
        </button>
    );
}

export default EmailBtn;
