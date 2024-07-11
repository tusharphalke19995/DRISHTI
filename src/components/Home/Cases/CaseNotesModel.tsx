import React, { useState } from 'react';
import { 
    Box, 
    Modal, 
    Fade, 
    Typography,
    Button
} from '@mui/material';
import { 
    CaseNoteTextField, 
    CaseNotesContainerTop, 
    CaseNotesContainerBottom, 
    InfoAndTypeContainer, 
    InfoContainer, 
    ViewElementListText, 
    InfoText, 
    Title 
} from './styles';

import {
    Close,
    Info
} from '@mui/icons-material';

const style = {
    position: 'absolute',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 18,
    bottom: 0,
    right: 0,
    display: "grid",
    borderRadius: '4px',
    outline: 'none',
};

type CaseModelProp = {
    open: boolean, 
    handleClose: () => void, 
    handleElementList: () => void
}

const CaseNotesModel = ({open, handleClose, handleElementList}: CaseModelProp) =>  {

    const [note, setNote] = useState<String>("")

    const submitCaseNote = () => {
        console.log("submitCaseNote", note);
        handleClose();
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <Fade in={open}>
                <Box sx={style}>
                    <CaseNotesContainerTop>
                        <Title>
                            Case Notes
                        </Title>
                        <Close onClick={handleClose} />
                    </CaseNotesContainerTop>
                    <InfoAndTypeContainer>
                        <InfoContainer>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                                <Info style={{ color: '#0F3B8C'}} />
                                <InfoText 
                                    variant='subtitle1' 
                                    style={{color: '#0A0A0A'}}
                                >Info</InfoText>
                            </Box>
                            <Typography variant='body2'>Enter notes pertaining to this case. They will only be visible to you.</Typography>
                        </InfoContainer>

                        <CaseNoteTextField
                            id='case-notes'
                            hiddenLabel
                            placeholder='Type here...'
                            variant='outlined'
                            multiline={true}
                            maxRows={8}
                            minRows={8}
                            onChange={(event) => {
                                let value = event.target.value
                                setNote(value)
                            }}
                        />
                    </InfoAndTypeContainer>
                    <CaseNotesContainerBottom>
                        <ViewElementListText 
                            variant='subtitle1' 
                            mr={2}
                            onClick={handleElementList}
                        >
                            View Constituent Elements List
                        </ViewElementListText>
                        <Button size='small' variant='contained' sx={{textTransform: 'none'}} onClick={submitCaseNote}>Done</Button>
                    </CaseNotesContainerBottom>
                </Box>
            </Fade>
        </Modal>
    );
}

export default CaseNotesModel;
