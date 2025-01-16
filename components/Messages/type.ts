import { Dispatch, SetStateAction } from "react";

export interface MessageType {
    message?: string;
    incoming?: boolean;
    timestamp?: string

}

export type MessageInputType = {
    onSend?: () => void,
    setMessage: Dispatch<SetStateAction<string>>;
    message?: string;
}