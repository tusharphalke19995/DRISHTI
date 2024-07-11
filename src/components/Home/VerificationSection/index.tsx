import React, { useEffect, useState } from 'react';
import ScanQrCode from "./ScanQrCode";
import Verification from "./Verification";
import Result from "./Result";
import { verify } from "../../../utils/verification-utils";
import { QrScanResult, VcStatus } from "../../../types/data-types";
import { useActiveStepContext } from "../../../pages/Home";
import { useNavigate } from "react-router-dom";
import { decodeQrData } from "../../../utils/qr-utils";
import { VerificationSteps } from "../../../utils/config";
import { Button } from '@mui/material';
import CaseNotes from '../Cases/CaseNotesModel';
import BtnQr from "../../../assets/btnqr.svg";
import CaseNotesModel from '../Cases/CaseNotesModel';
import CaseNotesElementListModel from '../Cases/CaseNotesElementListModel';

const DisplayActiveStep = () => {
    const { getActiveStep, setActiveStep } = useActiveStepContext();
    const activeStep = getActiveStep();

    const navigate = useNavigate();

    const [qrData, setQrData] = useState("");
    const [vc, setVc] = useState(null);
    const [vcStatus, setVcStatus] = useState({ status: "Verifying", checks: [] } as VcStatus);

    useEffect(() => {
        if (qrData === "") return;
        try {
            setActiveStep(VerificationSteps.Verifying);
            decodeQrData(qrData).then((data) => {
                let vc = JSON.parse(data);
                // TODO: is it a vc? - check format
                verify(vc)
                    .then(status => {
                        console.log("Status: ", status);
                        // did-resolution fails if the internet is not available and proof can't be verified
                        if (status?.checks?.proof === "NOK"
                            && !window.navigator.onLine) {
                            navigate('/offline');
                        }
                        setVcStatus(status);
                        setVc(vc);
                    })
                    .catch(error => {
                        console.error("Error occurred while verifying the VC: ", error);
                        console.error("Error code: ", error.code);
                        if (!window.navigator.onLine) {
                            navigate('/offline');
                            return;
                        }
                        setVc(null);
                        setVcStatus({ status: "NOK", checks: [] });
                    }).finally(() => {
                        setQrData("");
                        setActiveStep(VerificationSteps.DisplayResult);
                    });
            })
        } catch (error) {
            console.error("Error occurred while reading the qrData: ", error);
            setQrData("");
            setVc(null);
            setVcStatus({ status: "NOK", checks: [] });
            setActiveStep(VerificationSteps.DisplayResult);
        }
    }, [qrData]);

    const setScanResult = (result: QrScanResult) => {
        if (!!qrData) {
            // show error message in snackbar
        }
        setQrData(result.data || "");
    }

    switch (activeStep) {
        case VerificationSteps.ScanQrCodePrompt:
            return (<ScanQrCode setScanResult={setScanResult} />);
        case VerificationSteps.ActivateCamera:
        case VerificationSteps.Verifying:
            return (<Verification setQrData={setQrData} />);
        case VerificationSteps.DisplayResult:
            return (<Result setActiveStep={setActiveStep} vc={vc} vcStatus={vcStatus} />);
        default:
            return (<></>);
    }
}

const VerificationSection = () => {
    const [isCaseNoteOpen, setIsCaseNoteOpen] = useState(false)
    const [isElementListOpen, setIsElementListOpen] = useState(false)

    return (
        <div>
            <Button
                sx={{ top: 20, left: 20 }}
                color="primary"
                variant='contained'
                size="small"
                onClick={() => setIsCaseNoteOpen(true)}            >
                Add Notes
            </Button>
            <DisplayActiveStep />

            <CaseNotesModel
                open={isCaseNoteOpen}
                handleClose={() => setIsCaseNoteOpen(false)}
                handleElementList={() => {
                    setIsElementListOpen(true)
                }}
            />

            <CaseNotesElementListModel
                open={isElementListOpen}
                title='Constituent Elements for NIA138 Cases'
                handleClose={() => setIsElementListOpen(false)}
            />
        </div>
    );
}

export default VerificationSection;
