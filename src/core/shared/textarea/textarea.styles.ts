import { createUseStyles } from 'react-jss';
import colors from '../../../assets/styles/abstracts/color';

export const useStyles = createUseStyles({
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    },
    textarea: {
        padding: '8px 10px',
        border: `1px solid ${colors.inputBorderColor}`,
        borderRadius: '6px',
        fontSize: '14px',
        color: colors.inputTextColor,
        resize: 'vertical',
        minHeight: '80px',
        '&:focus': {
            outline: 'none',
            borderColor: colors.inputBorderFocusColor,
            boxShadow: `0 0 0 3px ${colors.inputFocusShadowColor}`,
        }
    }
});
