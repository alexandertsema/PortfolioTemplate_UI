import { FileType } from "app/models/fileType";

export interface File {
    id: number,
    name: string,
    size: number,
    data: ByteString,
    fileType: FileType
}
