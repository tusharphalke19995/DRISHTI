import React from 'react';
import { 
    Box, 
    Modal, 
    Fade, 
    Button,
    List,
    ListItem,
    ListItemIcon,
} from '@mui/material';
import { 
    CaseNotesContainerTop, 
    CaseNotesContainerBottom, 
    ListItemText,
    ListContainer,
    Title} from './styles';
import {
    Close,
} from '@mui/icons-material';

import CheckIcon from '@mui/icons-material/Check'
import { CONSTITUTION_ELEMENT_CASE_DATA } from '../../../utils/samples';
import { ConstituteElementCaseDataType } from '../../../types/data-types';

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

type CaseNotesElementListModelProp = {
    open: boolean, 
    title: string,
    handleClose: () => void
}

const CaseNotesElementListModel = ({open, title, handleClose}: CaseNotesElementListModelProp) =>  {

    const [constituteElementData, setConstituteElementData] = React.useState(CONSTITUTION_ELEMENT_CASE_DATA)

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
                            {title}
                        </Title>
                        <Close onClick={handleClose} />
                    </CaseNotesContainerTop>
                    <ListContainer>
                        <List sx={{ width: '100%', height: '100%', overflowY: 'scroll', scrollbarWidth: 'none'}}>
                            {constituteElementData.map((data: ConstituteElementCaseDataType, index: number) => {
                                return (
                                    <ListItem
                                        key={index} 
                                    >
                                        <ListItemIcon sx={{ width: '100%'}}>
                                            <CheckIcon sx={{ color: '#3D3C3C'}} />
                                            <ListItemText>{data.item}</ListItemText>
                                        </ListItemIcon>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </ListContainer>
                    <CaseNotesContainerBottom>
                        <Button size='small' variant='outlined' sx={{textTransform: 'none'}} onClick={handleClose}>Back</Button>
                    </CaseNotesContainerBottom>
                </Box>
            </Fade>
        </Modal>
    );
}

export default CaseNotesElementListModel;
