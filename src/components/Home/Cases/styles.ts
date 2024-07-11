import {Box, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";

export const CaseNotesContainerTop = styled(Box)`
    border-bottom: 1px solid #E8E8E8;
    padding: 16px 24px;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Title = styled(Typography)`
    line-height: normal; 
    font-size: 24px;
    color: #0A0A0A;
    font-weight: 700;
`

export const CaseNotesContainerBottom = styled(Box)`
    border-top: 1px solid #E8E8E8;
    padding: 16px 24px;
    height: 60px;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end
`

export const CaseNoteTextField = styled(TextField)`
    margin-top: 20px;
    width: 100%;
`

export const InfoAndTypeContainer = styled(Box)`
    margin: 24px;
`

export const ListContainer = styled(Box)`
    margin: 24px;
    border: 1px solid #E8E8E8;
    border-radius: 4px;
    height: 300px;
    max-height: 300px;
`

export const InfoContainer = styled(Box)`
    background: #ECF3FD;
    padding: 8px;
    border-radius: 4px;
`

export const InfoText = styled(Typography)`
    font-size: 16px;
    font-weight: 700;
    color: #0A0A0A;
    margin-left: 6px;
`

export const ViewElementListText = styled(Typography)`
    color: #007E7E;
    font-size: 16px;
    font-weight: 700;
`

export const ListItemText = styled(Typography)`
    font-weight: 400;
    font-size: 14px;
    color: #3D3C3C;
    margin-left: 10px;
`