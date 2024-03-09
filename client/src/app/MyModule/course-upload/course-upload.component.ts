import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-course-upload',
  templateUrl: './course-upload.component.html',
  styleUrl: './course-upload.component.css'
})
export class CourseUploadComponent {
  selectedThumbnail:any;

  formData:FormData=new FormData();
 
  addcourse!: FormGroup;


    constructor( private formBuilder: FormBuilder){}
    ngOnInit(): void {
      this.addcourse = this.formBuilder.group({
       
        name: ['', [Validators.required]],
       
        description: ['', [Validators.required, Validators.minLength(8)]],
        price:['', [Validators.required]],
        estimatedprice:[''],
        tags:['', [Validators.required]],
        courselevel:['', [Validators.required]],
        thumbnail:[''],
        // tests: this.formBuilder.array([]),
        courseData: this.formBuilder.array([
          this.formBuilder.group({
            title: ['', [Validators.required]], 
            videoUrl: ['', [Validators.required]], 
            description: ['', [Validators.required]] ,
            videoLength:['', [Validators.required]]    
        })
        ]),
      });
     
    }
     
    
    get sections() {
      return this.addcourse.get('courseData') as FormArray;
    }
    addSection() {
      const courseDatas = this.formBuilder.group({
        title: [''],
        description:[''],
        videoLength:['']
        // Add more form controls for each section as needed
      });
      this.sections.push(courseDatas);
    }
    removeSection(index: number) {
      this.sections.removeAt(index);
    }

   
    submitForm(){
      
      // Handle form submission
      if (this.addcourse.valid) {
      console.log(this.addcourse.value);
      const name = this.addcourse.get('name')?.value;
      console.log(name);
      
           const description = this.addcourse.get('description')?.value;
           console.log(description);
           
          const thumbnail = this.addcourse.get('thumbnail')?.value;
         // const trailer = this.addcourse.get('trailer')?.value;
           const difficulty = this.addcourse.get('difficulty')?.value;
           const price = this.addcourse.get('price')?.value;
           const estimatedPrice=this.addcourse.get('estimatedprice')?.value;
            const tags = this.addcourse.get('tags')?.value;
           this.formData.append('name', name);
           console.log("hii");
           
          this.formData.append('description', description);
          this.formData.append('thumbnail', thumbnail);
           this.formData.append('estimatedprice',estimatedPrice);
           this.formData.append('difficulty', difficulty);
           this.formData.append('price', price);
           this.formData.append('tags', tags);
           const courseData = this.addcourse.get('courseData') as FormArray;
           for (let i = 0; i < courseData.length; i++) {
            const courseItem = courseData.at(i) as FormGroup;
            this.formData.append(`courseData[${i}][title]`, courseItem.get('title')?.value);
            this.formData.append(`courseData[${i}][description]`, courseItem.get('description')?.value);
            this.formData.append(`courseData[${i}][videoUrl]`, courseItem.get('videoUrl')?.value);
            this.formData.append(`courseData[${i}][videoLength]`, courseItem.get('videoLength')?.value);
          }
          //  console.log('formData',this.formData);
          //      this.upload.uploadCourse(this.formData).subscribe(
          //         (response:any)=>{
          //           console.log('data recieved');
          //           this.formData = new FormData();
          //         },
          //         (error: any)=>{
          //           console.error("error",error)
          //         }
          //       )
    }

    else{
      alert("Please fill form correctly") //Add toast here
    }
  }
    onImageSelected(event:any){
          const fileInput = event.target; // Get the file input element
         this.selectedThumbnail = fileInput.files[0]; // Get the selected file
          console.log('Thumbnail file:', this.selectedThumbnail);
          this.formData.append("thumbnail", this.selectedThumbnail);
        }
   
        onVideoSelected(event:any,index:number){
          const fileInput = event.target;
          const selectedFiles = fileInput.files;
          if (selectedFiles) {
              for (let i = 0; i < selectedFiles.length; i++) {
                  const file = selectedFiles[i];
                  this.formData.append(`videos[${index}]`, file);
              }
          }
              // console.log(this.Files);
           
          // console.log(index);
          //   const fileInput = event.target;
          //   const selectedVideo=fileInput.files[index];
          //   this.formData.append('video', selectedVideo);
          //   console.log('Video files:', this.Files, index);
            }
   
}
