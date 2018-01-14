import { File } from "app/models/file"
import { FileType } from "app/models/fileType";

export let mockSchools = [
    {
        id: 1,
        name: "ITMO University",
        gpa: 3.5,
        description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        degree: "Masters",
        fieldOfStudy: "Computer Science",
        startDate: 2014,
        endDate: 2016,
        image: {
            id: 1,
            name: "Portfolio Template",
            size: 1024,
            data: "../assets/images/proj.jpg",
            fileType: FileType.jpg
        },
        thesis: {
            id: 1,
            name: "Face Recognition in Video Streams",
            description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
        },
        courses: [
            {
                id: 1,
                name: "Math"
            },
            {
                id: 1,
                name: "DB"
            },
            {
                id: 1,
                name: "Cloud"
            },
            {
                id: 1,
                name: "Programming"
            }
        ]
    },
    {
        id: 1,
        name: "ITMO University",
        gpa: null,
        description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        degree: "Masters",
        fieldOfStudy: "Computer Science",
        startDate: 2014,
        endDate: 2016,
        image: {
            id: 1,
            name: "Portfolio Template",
            size: 1024,
            data: "../assets/images/proj.jpg",
            fileType: FileType.jpg
        },
        thesis: {
            id: 1,
            name: "Face Recognition in Video Streams",
            description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
        },
        courses: [
            {
                id: 1,
                name: "Math"
            },
            {
                id: 1,
                name: "DB"
            },
            {
                id: 1,
                name: "Cloud"
            },
            {
                id: 1,
                name: "Programming"
            }
        ]
    },
    {
        id: 1,
        name: "ITMO University",
        gpa: null,
        description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        degree: "Masters",
        fieldOfStudy: "Computer Science",
        startDate: 2014,
        endDate: 2016,
        image: {
            id: 1,
            name: "Portfolio Template",
            size: 1024,
            data: "../assets/images/proj.jpg",
            fileType: FileType.jpg
        },
        thesis: {
            id: 1,
            name: "Face Recognition in Video Streams",
            description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
        },
        courses: [
            {
                id: 1,
                name: "Math"
            },
            {
                id: 1,
                name: "DB"
            },
            {
                id: 1,
                name: "Cloud"
            },
            {
                id: 1,
                name: "Programming"
            }
        ]
    }
]