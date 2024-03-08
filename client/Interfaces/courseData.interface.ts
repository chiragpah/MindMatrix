export interface CourseData {
    success: boolean;
    courses:[
        {
            benefits: { [key: string]: any }[];
            courseData: {
                videoUrl: {
                  public_id: string;
                  url: string;
                };
                title: string;
                videoSection: string;
                videoLength: number;
                _id: string;
                comments: any[]; // Assuming comments can be of any type
              }[];
              demoUrl:string;
              description:string;
              estimatedPrice:number;
              level:string;
              name:string;
        }
    ]

  }