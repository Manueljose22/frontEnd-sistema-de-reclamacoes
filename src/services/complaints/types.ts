export interface IData {
    name: string,
    email: string,
    purl: string,
}

export interface IGetCompalint {
    id: string;
    client_id: string | null;
    area: string;
    message: string;
    attachments:{
        name: string;
        newName:string;
    };
    status: string; 
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    Client: {
        name: string;
        email: string;
    }
}

export interface IGetcomplaints {
    id: string;
    client_id: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    Complaint_Message:{
        user_id: string;
        area: string;
        message: string;
        attachments:{
        name: string;
        newName:string;
    };
        createdAt: Date;
    }
    Complaint_status: {
        status: string; 
        context: string;
    }	
    Client: {
        name: string;
        email: string;
    }
}

