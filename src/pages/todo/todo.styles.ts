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
    submitButton: {
        backgroundColor: 'green',
        color: 'white', 
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    button: {
        backgroundColor: 'red',
        color: 'white', 
        padding: '5px 10px', 
        borderRadius: '5px', 
        cursor: 'pointer' 
    },
    editButton: {
        backgroundColor: 'yellow', 
        padding: '5px 10px', 
        borderRadius: '5px', 
        cursor: 'pointer'
    },
    column: {
        flex: 1,
        padding: '10px',
        minHeight: '300px',
        border: '1px solid #3806ff',
        borderRadius: '15px',
    },
    columnHeader: {
        backgroundColor: '#b99bff',
        padding: '10px',
        borderRadius: '15px',
    },
    taskItem: {
        border: '2px solid #0095ff',
        borderRadius: '10px',
        padding: '10px',
        marginTop: '10px',
        backgroundColor: '#e6fbff',
    },
    taskTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
        textTransform: 'capitalize',
    },
    taskDate: {
        fontSize: '12px',
        color: '#888',
        marginBottom: '8px'
    },
    taskDesc: {
        fontSize: '14px',
        color: '#555',
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
        border: '2px solid #ffffff',
        fontSize: '10px',
        backgroundColor: '#a5f1ff',
        fontWeight: 'bold',
    },
    scrollable: {
        maxHeight: '600px',
        overflowY: 'auto',
    }
});