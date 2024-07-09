import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from "@mui/material";
import qr from "../../../assets/drishti.svg";
import Content from "../../../assets/drishti_content.svg";
import BtnQr from "../../../assets/btnqr.svg";
import { useActiveStepContext, useAlertMessages } from "../../../pages/Home";
import { SetScanResultFunction } from "../../../types/function-types";
import { QrScanResult, ScanStatus } from "../../../types/data-types";
import { AlertMessages, VerificationSteps } from "../../../utils/config";
import './ScanQrCode.css';

const ScanQrCode = ({ setScanResult }: { setScanResult: SetScanResultFunction }) => {
    const { setActiveStep } = useActiveStepContext();
    const { setAlertInfo } = useAlertMessages();
    const [scanStatus, setScanStatus] = useState("NotScanned" as ScanStatus);

    function checkScanResult(scanResult: QrScanResult) {
        let alertInfo = !!scanResult.data ? AlertMessages.qrUploadSuccess : AlertMessages.qrNotDetected;
        setAlertInfo({
            message: alertInfo.message,
            severity: alertInfo.severity,
            open: true
        });
        setScanResult(scanResult);
    }

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center" className="scan-qr-container">
            <Grid item xs={12}>
                <Typography variant="h5" className="header-title" style={{fontWeight:"bolder"}}>
                    DRISHTI
                </Typography>
                <img src={Content} alt="Drishti Content" />
            </Grid>
            <Grid item xs={12} className="qr-box">
                <Box className="qr-image-container">
                    <img src={qr} className="qr-image" alt="QR Code" />
                </Box>
            </Grid>
            <Grid item xs={12} textAlign="center">
                <Typography variant="h5" className="description-text">
                    Dispute resolution made <span style={{color:"#007E7E", fontStyle:"italic"}}> simple</span>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={() => setActiveStep(VerificationSteps.ActivateCamera)}
                    className="scan-button"
                    startIcon={<img src={BtnQr} alt="QR Icon" style={{ marginRight: 8 }} />} // Add startIcon prop
                    
                >
                    Scan the QR Code
                </Button>
            </Grid>
            {scanStatus !== "Failed" && (
                <Grid item xs={12} className="info-text">
                    <Typography variant="body2">
                        Want to know more? Read here
                    </Typography>
                </Grid>
            )}
        </Grid>
    );
}

export default ScanQrCode;
