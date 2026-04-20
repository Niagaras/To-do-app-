import { createUseStyles } from 'react-jss';
import colors from '../../assets/styles/abstracts/color';

export const useStyles = createUseStyles({
    pageTitle: {
        textAlign: 'center',
        color: colors.darkBlue,
        marginTop: '20px',
    },
    container: {
        display: 'flex',
        gap: '20px',
        padding: '20px',
    },
    loading: {
        padding: 20,
        color: colors.main,
        textAlign: 'center',
    },
    error: {
        padding: 20,
        color: colors.alertDanger,
        textAlign: 'center',
    },
    column: {
        flex: 1,
        padding: '10px',
        minHeight: '300px',
        border: `1px solid ${colors.main}`,
        borderRadius: '15px',
    },
    columnHeader: {
        backgroundColor: colors.alertPrimary,
        padding: '10px',
        borderRadius: '15px',
    },
    columnTitle: {
        margin: '0',
        textAlign: 'center',
    },
    taskItem: {
        border: `2px solid ${colors.infoButtonColor}`,
        borderRadius: '10px',
        padding: '10px',
        marginTop: '10px',
        backgroundColor: colors.alertInfo,
    },
    taskTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
        textTransform: 'capitalize',
    },
    taskDate: {
        fontSize: '12px',
        color: colors.txtLight,
        marginBottom: '8px'
    },
    taskDesc: {
        fontSize: '14px',
        color: colors.text,
        marginBottom: '10px'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
        marginTop: '10px'
    },
    taskForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '20px',
        margin: '20px',
    },
    taskStatus: {
        padding: '4px 8px',
        borderRadius: '5px',
        border: `2px solid ${colors.white}`,
        fontSize: '10px',
        backgroundColor: colors.tableHeaderBgColor,
        fontWeight: 'bold',
    },
    scrollable: {
        maxHeight: '600px',
        overflowY: 'auto',
    }
});