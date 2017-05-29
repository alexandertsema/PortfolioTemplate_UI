import { FileType } from "app/models/fileType";

export let mockSummary = {
      id: 1, 
      description: "I enjoy working on challenging projects, that require out of the box thinking, and provide great value for my clients. If you are looking for someone who can breathe life into your ideas, and transform your vision into action, please get in touch, I would love to hear from you.",
      title: "ALEXANDER TSEMA",
      subtitle: "Full Stack Software Engineer",
      image: {
          id: 1,
          name: "Alexander Tsema",
          size: 1024,
          data: "../assets/images/man.jpg",
          fileType: FileType.jpg
        },
      resume: {
          id: 1,
          name: "Alexander Tsema Resume",
          size: 4096,
          data: "../assets/pdf/Alexander_Tsema_Resume.pdf",
          fileType: FileType.pdf
        }
    }