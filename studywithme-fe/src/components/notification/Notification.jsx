import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = {
    success: (message,position) => toast.success(message, { position: position }),
    error: (message) => toast.error(message, { position: toast.POSITION.TOP_RIGHT }),
    warn: (message) => toast.warn(message)
};

export default notify;
