import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import scanQr from '../../../assets/scanner-ouline.svg';
import Loader from '../../commons/Loader';
import QrScanner from './QrScanner';
import { SetQrDataFunction } from '../../../types/function-types';
import { useActiveStepContext } from '../../../pages/Home';
import './Verification.css'
const Verification = ({ setQrData }: { setQrData: SetQrDataFunction }) => {
    const { setActiveStep } = useActiveStepContext();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading for demonstration
        const timer = setTimeout(() => setLoading(false), 2000); // Replace with actual verification logic

        // Cleanup timeout on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <Grid container className="verification-container">
            <Grid item xs={12} className="verification-text">
                <Typography variant="h5" gutterBottom>
                    Verification in Progress
                </Typography>
                <Typography variant="body1">
                    This verification will take some time, please don’t close the browser.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box className="verification-box">
                    {loading ? (
                        <Loader />
                    ) : (
                        <QrScanner
                            setActiveStep={setActiveStep}
                            setQrData={setQrData}
                        />
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

export default Verification;
