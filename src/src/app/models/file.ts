import { FileType } from 'app/models/fileType';
import { IResponsiveString } from 'app/models/responsiveString';

export interface File {
    id: number;
    name: string;
    size: number;
    data?: string;
    responsiveData?: IResponsiveString;
    fileType: FileType;
}
