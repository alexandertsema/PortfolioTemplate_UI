import { FileType } from "app/models/fileType";

export let certificatesMock = [
    {
        id: 1,
        name: "Angular 2",
        authority: "Learning Tree",
        recieveDate: new Date("February 4, 2016 10:13:00"),
        image: {
            id: 1,
            name: "Angular 2",
            size: 1024,
            data: "../assets/images/proj.jpg",
            fileType: FileType.jpg
        },
        pdf: {
            id: 1,
            name: "Angular 2",
            size: 1024,
            data: "../assets/pdf/Alexander_Tsema_Resume.pdf",
            fileType: FileType.pdf
        }
    }
]