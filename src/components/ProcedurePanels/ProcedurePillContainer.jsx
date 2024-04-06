import React from 'react';
import { Box } from '@chakra-ui/react';
import ProcedurePill from './ProcedurePill.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export default function BillPillContainer ({ image, procedure }) {
    return (
        <div class="billPillContainer">
            <p class="billPillTimestamp" >
                <span color="#a2a2a2" style={{ fontWeight: 600 }}>
                    <FontAwesomeIcon icon={faClock}/>
                     21 minutes ago
                </span>
            </p>
            <ProcedurePill
                image={image}
                procedure={procedure}
            />
        </div>
    )
};