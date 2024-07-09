import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StyledButton from '../commons/StyledButton';
import { SetActiveStepFunction } from '../../../../types/function-types';
import { VerificationSteps } from '../../../../utils/config';
import { VcDisplay, VcProperty, VcPropertyKey, VcPropertyValue, VcVerificationFailedContainer } from './styles';
import { convertToTitleCase, getDisplayValue } from '../../../../utils/misc';
import './vcDisplayCard.css';
function VcDisplayCard({vc, setActiveStep}: {vc: any, setActiveStep: SetActiveStepFunction}) {
    return (
        <Box className="vc-display-card">
        <VcDisplay container spacing={2}>
            {vc ? (
                <>
                    <VcProperty item xs={12} md={6}>
                        <VcPropertyKey>Case Name</VcPropertyKey>
                        <VcPropertyValue>{getDisplayValue(vc.credentialSubject.caseName)}</VcPropertyValue>
                    </VcProperty>
                    <VcProperty item xs={12} md={6}>
                        <VcPropertyKey>Case Types</VcPropertyKey>
                        <VcPropertyValue>{getDisplayValue(vc.credentialSubject.caseTypes)}</VcPropertyValue>
                    </VcProperty>
                    <VcProperty item xs={12} md={6}>
                        <VcPropertyKey>Issued By</VcPropertyKey>
                        <VcPropertyValue>{getDisplayValue(vc.credentialSubject.issuedBy)}</VcPropertyValue>
                    </VcProperty>
                    <VcProperty item xs={12} md={6}>
                        <VcPropertyKey>Filing Date</VcPropertyKey>
                        <VcPropertyValue>{getDisplayValue(vc.credentialSubject.filingDate)}</VcPropertyValue>
                    </VcProperty>
                    <VcProperty item xs={12} md={6}>
                        <VcPropertyKey>Case Number</VcPropertyKey>
                        <VcPropertyValue>{getDisplayValue(vc.credentialSubject.caseNumber)}</VcPropertyValue>
                    </VcProperty>
                    {Object.keys(vc.credentialSubject)
                        .filter(key => !["id", "type", "caseName", "caseTypes", "issuedBy", "filingDate", "caseNumber"].includes(key.toLowerCase()))
                        .map(key => (
                            <VcProperty item xs={12} md={6} key={key}>
                                <VcPropertyKey>{convertToTitleCase(key)}</VcPropertyKey>
                                <VcPropertyValue>{getDisplayValue(vc.credentialSubject[key])}</VcPropertyValue>
                            </VcProperty>
                        ))}
                </>
            ) : (
                <VcVerificationFailedContainer>
                    <DescriptionOutlinedIcon fontSize="inherit" color="inherit" />
                    <Typography variant="h6" color="inherit">
                        Verification Failed
                    </Typography>
                </VcVerificationFailedContainer>
            )}
        </VcDisplay>
        <Box className="centered-button">
            <StyledButton onClick={() => setActiveStep(VerificationSteps.ScanQrCodePrompt)}>
                Scan Another QR Code
            </StyledButton>
        </Box>
    </Box>
    );
}

export default VcDisplayCard;
