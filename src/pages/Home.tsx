import React, { createContext, useContext, useState } from 'react';
import { Grid, Container, Box, CssBaseline } from "@mui/material";
import VerificationSection from "../components/Home/VerificationSection";
import Copyrights from "../components/Home/VerificationProgressTracker/Copyrights";
import { VerificationSteps } from "../utils/config";
import { AlertInfo } from "../types/data-types";
import AlertMessage from "../components/commons/AlertMessage";

let activeStep: number = 0;
const setActiveStep = (newValue: number) => {
    activeStep = newValue;
}
const getActiveStep = () => activeStep;
const ActiveStepContext = createContext({getActiveStep, setActiveStep});
export const useActiveStepContext = () => useContext(ActiveStepContext);

let alert: AlertInfo = {open: false};
let setAlertInfo: React.Dispatch<React.SetStateAction<AlertInfo>> = value => {};
const AlertsContext = createContext({alertInfo: alert, setAlertInfo});
export const useAlertMessages = () => useContext(AlertsContext);

function Home(_props:any) {
    const [activeStep, setActiveStep] = useState(VerificationSteps.ScanQrCodePrompt);
    const [alertInfo, setAlertInfo] = useState({
        open: false,
        severity: 'success',
        message: ''
    } as AlertInfo);

    const getActiveStep = () => activeStep;

    return (
        <AlertsContext.Provider value={{ alertInfo, setAlertInfo }}>
            <ActiveStepContext.Provider value={{ getActiveStep, setActiveStep }}>
                <CssBaseline />
                <Container maxWidth="lg" className="home-container">
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={6} className="tracker-container">
                            <VerificationSection />
                        </Grid>
                    </Grid>
                    <Box mt={4} width="100%" textAlign="center">
                        <Copyrights />
                    </Box>
                    <AlertMessage alertInfo={alertInfo} handleClose={() => setAlertInfo({ ...alertInfo, open: false })} />
                </Container>
            </ActiveStepContext.Provider>
        </AlertsContext.Provider>
    );
}

export default Home;
