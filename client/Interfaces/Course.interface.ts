export interface Course {

        success: boolean;
        course: {
          thumbnail: {
            public_id: string;
            url: string;
          };
          _id: string;
          name: string;
          description: string;
          price: number;
          estimatedPrice: number;
          tags: string;
          level: string;
          benefits: { [key: string]: any }[]; // Assuming benefits can be any array of objects
          prerequisited: { [key: string]: any }[]; // Assuming prerequisites can be any array of objects
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
          ratings: number;
          purchased: number;
          reviews: {
            user: {
              avatar: {
                public_id: string;
                url: string;
              };
              _id: string;
              name: string;
              email: string;
              role: string;
              isVerified: boolean;
              courses: { _id: string }[];
              createdAt: string;
              updatedAt: string;
              __v: number;
            };
            rating: number;
            comment: string;
            _id: string;
          }[];
          __v: number;
        };
      }
      
  