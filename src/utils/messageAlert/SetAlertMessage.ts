import Swal from 'sweetalert2';
import { ISetMessageProps } from './types';

export const SetAlertMessage = ({title= '', msg, type}: ISetMessageProps) =>{
    Swal.fire(title, msg, type);
}