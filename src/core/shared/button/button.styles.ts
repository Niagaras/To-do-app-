import { createUseStyles } from 'react-jss';
import colors from '../../../assets/styles/abstracts/color';

export const useStyles = createUseStyles({
    button: {
        border: 'none',
        borderRadius: '6px',
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s',
    },
    primary: {
        backgroundColor: colors.primaryButtonColor,
        color: colors.buttonTextColor,
        '&:hover': {
            backgroundColor: colors.btnBgColor,
        }
    },
    secondary: {
        backgroundColor: colors.secondaryButtonColor,
        color: colors.buttonTextColor,
    },
    danger: {
        backgroundColor: colors.dangerButtonColor,
        color: colors.buttonTextColor,
    },
    success: {
        backgroundColor: colors.successButtonColor,
        color: colors.buttonTextColor,
    },
    warning: {
        backgroundColor: colors.warningButtonColor,
        color: colors.buttonTextColor,
    },
    info: {
        backgroundColor: colors.infoButtonColor,
        color: colors.buttonTextColor,
    }
});
