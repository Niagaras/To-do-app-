import {ILang} from '../assets/lang/lang';
import { EditState } from '../pages/todo/models/todo.model';

export interface IState {
    loader: boolean;
    leftMenu: boolean;
    languages: ILanguages[];
    locale: any;
    user: any | null;
    editingTask: EditState;
}


export interface ILanguages {
    id: number;
    key: ILang;
    value: string;
}
