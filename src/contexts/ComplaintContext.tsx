import { createContext, useState} from "react";
import { IComplaintContext, IContextProps } from "./types";
// import { IData } from "../services/complaints/types";






export const ComplaintContext = createContext<IComplaintContext>({} as IComplaintContext);

export const ComplaintProvider = ({children}: IContextProps) =>{

    // Verificar os tipo
    const [data, setData] = useState<IComplaintContext>({} as IComplaintContext)

    return(
        <ComplaintContext.Provider value={{data, setData}}>
            {children}
        </ComplaintContext.Provider>
    )
}