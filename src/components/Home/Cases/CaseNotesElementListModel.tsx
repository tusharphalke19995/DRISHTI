import React from 'react';
import { 
  Box, 
  Modal, 
  Fade, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Checkbox
} from '@mui/material';
import { 
  CaseNotesContainerTop, 
  CaseNotesContainerBottom, 
  ListItemText,
  ListContainer,
  Title } from './styles';
import { CheckBox, CheckRounded, Close } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import { CONSTITUTION_ELEMENT_CASE_DATA } from '../../../utils/samples';
import { ConstituteElementCaseDataType } from '../../../types/data-types';
import './CaseNotesElementListModel.css';

const style = {
  position: 'absolute',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  boxShadow: 18,
  bottom: 20,
  right: 20,
  display: 'grid',
  borderRadius: '8px',
  outline: 'none',
  padding: '20px',
  transition: 'all 0.3s ease',
  '@media (min-width: 600px)': {
    width: 400,
    bottom: '10%',
    right: '10%',
  },
};

type CaseNotesElementListModelProp = {
  open: boolean, 
  title: string,
  handleClose: () => void,
  handleElementItemCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const CaseNotesElementListModel = ({ open, title, handleClose, handleElementItemCheck }: CaseNotesElementListModelProp) =>  {
  const [constituteElementData] = React.useState(CONSTITUTION_ELEMENT_CASE_DATA);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Fade in={open}>
        <Box sx={style}>
          <CaseNotesContainerTop>
            <Title id="modal-title">
              {title}
            </Title>
            <Close onClick={handleClose} style={{ cursor: 'pointer' }} />
          </CaseNotesContainerTop>
          <ListContainer>
            <List sx={{ width: '100%', height: '100%', overflowY: 'scroll', scrollbarWidth: 'none'}}>
              {constituteElementData.map((data: ConstituteElementCaseDataType, index: number) => (
                <ListItem key={data.id}>
                  <div style={{ alignSelf: 'flex-start', marginRight: 10 }}>
                    <Checkbox
                      key={data.id}
                      id={data.id}
                      checkedIcon = {<CheckIcon sx={{ color: '#3D3C3C'}} />}
                      onChange={handleElementItemCheck}
                    />
                  </div>
                  <ListItemText>
                    <Typography variant="body2">{data.item}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </ListContainer>
          <CaseNotesContainerBottom>
            <Button size="small" variant="outlined" sx={{ textTransform: 'none' }} onClick={handleClose}>Back</Button>
          </CaseNotesContainerBottom>
        </Box>
      </Fade>
    </Modal>
  );
}

export default CaseNotesElementListModel;
