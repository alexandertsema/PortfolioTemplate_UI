import { File } from "app/models/file"
import { FileType } from "app/models/fileType";

export let mockReferences = [
    {
        id: 1,
        description: 'For example, the next step (still not covered in eShopOnContainers) after understanding Docker containers and microservices development with .NET Core, is to select a microservice cluster/orchestrator like Docker Swarm, Kubernetes or DC/OS (in Azure Container Service) or Azure Service Fabric which in most of the cases will require additional partial changes to your applications configuration (although the present architecture should work on most orchestrators with small changes). Additional steps would be to move your databases to HA cloud services, or to implement your EventBus with Azure Service Bus or any other production ready Service Bus in the market.',
        pdf: {
            id: 1,
            name: "Reference 1",
            size: 1024,
            data: "../assets/pdf/Alexander_Tsema_Resume.pdf",
            fileType: FileType.pdf
        },
        referenceAuthor: {
            id: 1,
            name: 'Daniel Jones',
            image: {
                id: 1,
                name: "Portfolio Template",
                size: 1024,
                data: "../assets/images/proj.jpg",
                fileType: FileType.jpg
            },
            companyName: 'Open Languages',
            companyLink: 'google.com',
            position: 'CEO'
        }
    },
    {
        id: 1,
        description: 'For example, the next step (still not covered in eShopOnContainers) after understanding Docker containers and microservices development with .NET Core, is to select a microservice cluster/orchestrator like Docker Swarm, Kubernetes or DC/OS (in Azure Container Service) or Azure Service Fabric which in most of the cases will require additional partial changes to your applications configuration (although the present architecture should work on most orchestrators with small changes). Additional steps would be to move your databases to HA cloud services, or to implement your EventBus with Azure Service Bus or any other production ready Service Bus in the market.',
        pdf: {
            id: 1,
            name: "Reference 1",
            size: 1024,
            data: "../assets/pdf/Alexander_Tsema_Resume.pdf",
            fileType: FileType.pdf
        },
        referenceAuthor: {
            id: 1,
            name: 'Daniel Jones',
            image: {
                id: 1,
                name: "Portfolio Template",
                size: 1024,
                data: "../assets/images/proj.jpg",
                fileType: FileType.jpg
            },
            companyName: 'Open Languages',
            companyLink: 'google.com',
            position: 'CEO'
        }
    },
    {
        id: 1,
        description: 'For example, the next step (still not covered in eShopOnContainers) after understanding Docker containers and microservices development with .NET Core, is to select a microservice cluster/orchestrator like Docker Swarm, Kubernetes or DC/OS (in Azure Container Service) or Azure Service Fabric which in most of the cases will require additional partial changes to your applications configuration (although the present architecture should work on most orchestrators with small changes). Additional steps would be to move your databases to HA cloud services, or to implement your EventBus with Azure Service Bus or any other production ready Service Bus in the market.',
        pdf: {
            id: 1,
            name: "Reference 1",
            size: 1024,
            data: "../assets/pdf/Alexander_Tsema_Resume.pdf",
            fileType: FileType.pdf
        },
        referenceAuthor: {
            id: 1,
            name: 'Daniel Jones',
            image: {
                id: 1,
                name: "Portfolio Template",
                size: 1024,
                data: "../assets/images/proj.jpg",
                fileType: FileType.jpg
            },
            companyName: 'Open Languages',
            companyLink: 'google.com',
            position: 'CEO'
        }
    }
]