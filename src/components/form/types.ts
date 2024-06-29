



export interface IComplaint{
    email: string;
    name: string;
    area: string;
    message: string;
    attachments: File | string;
}

export interface IFormComplaintsProps {
    textBtn: string;
    handleSubmit: (complaint: any) => void;
}