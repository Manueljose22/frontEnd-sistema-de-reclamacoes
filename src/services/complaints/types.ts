export interface IData {
    name: string,
    email: string,
    purl: string,
}



export interface IGetcomplaints {
    id: string,
    client_id: string | null,
    createdAt: Date,
    updatedAt: Date | null,
    Client: {
        name: string;
        email: string;
    },
    Complaint_Message:[
        {
            area: string,
            message: string,
            user_id: string,
            client_id: string,
            attachments: string,
            createdAt: Date,
            User: {
                username: string,
            }
        }
    ],
    Complaint_status: [
        {
            status: string, 
            context: string
        }
    ] 
}

