import React from 'react';
import { Box } from '@chakra-ui/react';
import BillPill from './BillPill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function BillPillContainer ({ label, value, city, state, timestamp }) {
    return (
        <div class="billPillContainer">
            <p class="billPillTimestamp" >
                <span class="greyed" style={{ fontWeight: 600 }}>
                    <FontAwesomeIcon icon={faClock}/>
                    21 minutes ago
                </span>
            </p>
            <BillPill
                label={label}
                value={value}
                city={city}
                state={state}
            />
        </div>
    )
};