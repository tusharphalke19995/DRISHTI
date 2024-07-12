import React, { useState } from 'react';
import { 
    Box, 
    Menu, 
    MenuItem, 
    Button, 
    Divider, 
    Typography,
    Grid,
    IconButton,
    MenuProps
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from "../../../assets/logobase.svg";
import { styled, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CaseTab from './CaseTab';
import CaseNotesModel from './CaseNotesModel';
import CaseNotesElementListModel from './CaseNotesElementListModel';
import './Case.css';

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: `
            0px 4px 6px -1px rgba(0,0,0,0.13),
            0px 2px 4px -1px rgba(0,0,0,0.11)
        `,
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const Case = () => {
    const [isCaseNoteOpen, setIsCaseNoteOpen] = useState(false);
    const [isElementListOpen, setIsElementListOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="p-4">
                <header className="flex justify-between items-center mb-4">
                <img src={logo} className="logo-base-image" alt="QR Code" width={40} height={40} />
                <IconButton aria-label="logout" onClick={() => console.log('Logout')}>
                    <ExitToAppIcon />
                </IconButton>
            </header>
            <Divider />
            <div className="flex justify-between items-center my-4">
                <Typography variant="subtitle2">Home / Cases / P1234567</Typography>
            </div>
            <Divider />
            <Grid container spacing={1} my={1}>
                <Grid item xs={12} lg={9}>
                    <div className="flex flex-col lg:flex-row items-center">
                        <Typography variant="h5" className="font-medium">Aparna VS Subarna</Typography>
                        <span className="text-gray-600 mx-2">| NIA138</span>
                        <span className="text-gray-600 mx-2">| Summons</span>
                    </div>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <div className="flex flex-wrap justify-end items-center space-x-2">
                        <Button
                            onClick={() => setIsCaseNoteOpen(true)}
                            variant="contained"
                            startIcon={<EditNoteIcon />}
                            className="mb-2 lg:mb-0"
                        >
                            Add Note
                        </Button>
                        <Button
                            id="take-action-button"
                            aria-controls={open ? 'demo-customized-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="contained"
                            disableElevation
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                        >
                            Take Action
                        </Button>
                        <StyledMenu
                            id="demo-customized-menu"
                            MenuListProps={{ 'aria-labelledby': 'demo-customized-button' }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose} disableRipple>
                                <EditIcon />
                                Edit
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <FileCopyIcon />
                                Duplicate
                            </MenuItem>
                            <Divider sx={{ my: 0.5 }} />
                            <MenuItem onClick={handleClose} disableRipple>
                                <ArchiveIcon />
                                Archive
                            </MenuItem>
                            <MenuItem onClick={handleClose} disableRipple>
                                <MoreHorizIcon />
                                More
                            </MenuItem>
                        </StyledMenu>
                        {/* <IconButton className="more-vert">
                            <MoreVertIcon />
                        </IconButton> */}
                    </div>
                </Grid>
            </Grid>
            <CaseNotesModel
                open={isCaseNoteOpen}
                handleClose={() => setIsCaseNoteOpen(false)}
                handleElementList={() => { setIsElementListOpen(true) }}
            />
            <CaseNotesElementListModel
                open={isElementListOpen}
                title="Constituent Elements for NIA138 Cases"
                handleClose={() => setIsElementListOpen(false)}
            />
            <CaseTab />
        </div>
    );
};

export default Case;
