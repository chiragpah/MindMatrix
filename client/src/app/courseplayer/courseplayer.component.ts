import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { CourseplayerService } from '../../../services/courseplayer.service';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
@Component({
  selector: 'app-courseplayer',
  templateUrl: './courseplayer.component.html',
  styleUrl: './courseplayer.component.css'
})
export class CourseplayerComponent implements OnInit {
  course:any;
  // @ViewChild('videoPlayer') videoPlayer:any;
  constructor(private CourseContent:CourseplayerService,private elementRef: ElementRef){}
   
  // seek(second:number):void{
  //   console.log(second);
    
  //   const video:HTMLVideoElement=this.videoPlayer.nativeElement;
  //   video.currentTime+=second ;
  // }
  
  ngOnInit(): void {

    this.CourseContent.getParticularCourseData().subscribe(data=>{
      this.course=data.content;
        console.log(this.course[0]);
      
     })
    const player = videojs('myPlayerID');

    player.ready(() => {
      const jumpAmount = 5;
      let controlBar;
      let insertBeforeNode;
      let newElementBB;
      let newElementFB;
      let newImageBB;
      let newImageFB;

      // Create divs for buttons
      newElementBB = document.createElement("div");
      newElementFB = document.createElement("div");
      newImageBB = document.createElement("img");
      newImageFB = document.createElement("img");

      // Assign IDs for later element manipulation
      newElementBB.id = "backButton";
      newElementFB.id = "forwardButton";

      // Assign properties to elements and assign to parents
      newImageBB.setAttribute("src", "path/to/back-button-image.png");
      newElementBB.appendChild(newImageBB);
      newImageFB.setAttribute("src", "path/to/forward-button-image.png");
      newElementFB.appendChild(newImageFB);

      // Get controlbar and insert elements
      controlBar = player.$(".vjs-control-bar");
      // Get the element to insert buttons in front of in conrolbar
      insertBeforeNode = player.$(".vjs-volume-panel");

      // Insert the button div in proper location
      if (controlBar) {
        controlBar.insertBefore(newElementBB, insertBeforeNode);
        controlBar.insertBefore(newElementFB, insertBeforeNode);
      } else {
        console.error("Control bar not found");
      }
      // Add event handlers to jump back or forward
      // Back button logic, don't jump to negative times
      newElementBB.addEventListener("click", () => {
        const videoTime = player.currentTime();
        if (typeof videoTime === 'number') {
          let newTime;
          const rewindAmt = jumpAmount;
          if (videoTime >= rewindAmt) {
            newTime = videoTime - rewindAmt;
          } else {
            newTime = 0;
          }
          player.currentTime(newTime);
        } else {
          console.error("Current time is not available");
        }
      });

      // Forward button logic, don't jump past the duration
      newElementFB.addEventListener("click", () => {
        const videoTime = player.currentTime();
        const videoDuration = player.duration();
        if (typeof videoTime === 'number' && typeof videoDuration === 'number') {
          let newTime;
          const forwardAmt = jumpAmount;
          if (videoTime + forwardAmt <= videoDuration) {
            newTime = videoTime + forwardAmt;
          } else {
            newTime = videoDuration;
          }
          player.currentTime(newTime);
        } else {
          console.error("Current time or duration is not available");
        }
      });
    });
  }
}
