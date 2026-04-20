import { createUseStyles } from 'react-jss';
import colors from '../../../assets/styles/abstracts/color';

export const useStyles = createUseStyles({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    },
    select: {
        padding: '8px 10px',
        border: `1px solid ${colors.inputBorderColor}`,
        borderRadius: '6px',
        fontSize: '14px',
        color: colors.inputTextColor,
        backgroundColor: colors.white,
        '&:focus': {
            outline: 'none',
            borderColor: colors.inputBorderFocusColor,
            boxShadow: `0 0 0 3px ${colors.inputFocusShadowColor}`,
        }
    }
});
