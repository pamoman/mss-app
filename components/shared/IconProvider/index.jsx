/*
 * Helper - Icons
 */

import React from 'react';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import AppleIcon from '@mui/icons-material/Apple';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RoomIcon from '@mui/icons-material/Room';
import BuildIcon from '@mui/icons-material/Build';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SaveIcon from '@mui/icons-material/Save';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CropFreeIcon from '@mui/icons-material/CropFree';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import RefreshIcon from '@mui/icons-material/Refresh';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Icon helper
const icons = {
    "Error": <ErrorIcon fontSize="large" color="error" key="Error" />,
    "Projektor": <TheatersIcon fontSize="large" key="Projektor" />,
    "Högtalare": <SpeakerIcon fontSize="large" key="Högtalare" />,
    "TV": <TvIcon fontSize="large" key="TV" />,
    "Apple TV": <AppleIcon fontSize="large" key="Apple TV" />,
    "Skärm": <TvIcon fontSize="large" key="Skärm" />,
    "View": <VisibilityIcon fontSize="large" key="View" />,
    "Up": <ArrowUpwardIcon fontSize="large" key="Up" />,
    "Down": <ArrowDownwardIcon fontSize="large" key="Down" />,
    "Add": <AddBoxIcon fontSize="large" key="Add" />,
    "Edit": <EditIcon fontSize="large" key="Edit" />,
    "Delete": <DeleteIcon fontSize="large" key="Delete" />,
    "Swap": <SwapVerticalCircleIcon fontSize="large" key="Swap" />,
    "Building": <HomeWorkIcon fontSize="large" key="Building" />,
    "Alla": <SelectAllIcon fontSize="large" key="Alla" />,
    "Room": <RoomIcon fontSize="large" key="Room" />,
    "Classroom2": <HomeWorkIcon fontSize="large" key="Classroom2" />,
    "Build": <BuildIcon fontSize="large" key="Build" />,
    "Drop-down": <ArrowDropDownIcon fontSize="large" key="Drop-down" />,
    "Drop-up": <ArrowDropUpIcon fontSize="large" key="Drop-up" />,
    "Level": <SupervisorAccountIcon fontSize="large" key="Level" />,
    "LeftArrow": <ChevronLeftIcon fontSize="large" key="Left" />,
    "RightArrow": <ChevronRightIcon fontSize="large" key="Right" />,
    "Save": <SaveIcon fontSize="large" key="Save" />,
    "expand": <ExpandMoreIcon fontSize="large" key="Expand" />,
    "keyboardUp": <KeyboardArrowUpIcon fontSize="large" key="keyboardUp" />,
    "keyboardDown": <KeyboardArrowDownIcon fontSize="large" key="keyboardDown" />,
    "ToggleOn": <ToggleOnIcon fontSize="large" style={{ color: "rgb(46, 174, 52)" }} key="ToggleOn" />,
    "ToggleOff": <ToggleOffIcon fontSize="large" style={{ color: "red" }} key="ToggleOff" />,
    "ToggleOnDefault": <ToggleOnIcon fontSize="large" style={{ color: "rgb(46, 174, 52)" }} key="ToggleOnDefault" />,
    "ToggleOffDefault": <ToggleOffIcon fontSize="large" style={{ color: "red" }} key="ToggleOffDefault" />,
    "Paid": <CheckCircleIcon fontSize="large" style={{ color: "green" }} key="Paid" />,
    "NotPaid": <ErrorOutlineIcon fontSize="large" style={{ color: "red" }} key="NotPaid" />,
    "Done": <CheckCircleOutlineIcon fontSize="large" key="NotPaid" />,
    "Cancel": <CancelIcon fontSize="large" key="Paid" />,
    "Link": <LinkIcon fontSize="large" key="Link" />,
    "AuthLink": <SupervisorAccountIcon fontSize="large" key="AuthLink" />,
    "AdminLink": <SettingsIcon fontSize="large" key="AdminLink" />,
    "Generate": <LibraryAddIcon fontSize="large" key="Generate" />,
    "Plus": <AddCircleIcon fontSize="large" key="Plus" />,
    "Minus": <RemoveCircleIcon fontSize="large" key="Remove" />,
    "Cart": <ShoppingCartIcon fontSize="large" key="Cart" />,
    "Basket": <ShoppingBasketIcon fontSize="large" key="Basket" />,
    "Me": <PersonIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Me" />,
    "Login": <VpnKeyIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Login" />,
    "Logout": <ExitToAppIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Logout" />,
    "Register": <PersonAddIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Register" />,
    "Scan": <CropFreeIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Scan" />,
    "Pay": <CreditCardIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Pay" />,
    "Manual": <KeyboardIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Manual" />,
    "Refresh": <RefreshIcon fontSize="large" style={{ backgroundColor: "inherit" }} key="Refresh" />,
    "SlideSelector": <FiberManualRecordIcon fontSize="large" style={{ backgroundColor: "inherit" }} />,
}

const IconProvider = name => icons[name];

export default IconProvider;
