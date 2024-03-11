


import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { CourseplayerService } from '../../Services/courseplayer/courseplayer.service';
import { ActivatedRoute } from '@angular/router';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { debug } from 'util';
@Component({
  selector: 'app-courseplayer',
  templateUrl: './courseplayer.component.html',
  styleUrl: './courseplayer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseplayerComponent implements OnInit {
  course: any;
  ID: any;
  selectedVideo: string = '';
  selectedTitle: string = '';
  playerInitialized: boolean = false;
  totaltime: number = 0;
  selectedDescription: string = '';
  constructor(private CourseContent: CourseplayerService, private elementRef: ElementRef, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.ID = this.route.snapshot.paramMap.get('id');
    console.log('ID:', this.ID);
    this.CourseContent.getParticularCourseData(this.ID).subscribe(data => {
    // this.CourseContent.getParticularCourseData().subscribe(data => {
      this.course = data.content;
      console.log(this.course);

      for (let time of this.course)
        this.totaltime += Number(time.videoLength);

      this.selectedVideo = this.course[0].videoUrl.url
      this.selectedTitle = this.course[0].title;
      this.selectedDescription = this.course[0].videoSection
      console.log(this.selectedVideo);
      this.cdr.detectChanges();
      this.initializeVideoPlayer();
    })
    // console.log(this.course);
    // const player = videojs('myPlayerID');
    // console.log(this.selectedVideo);
  }

  playNextVideo() {
    // Find the index of the currently selected video
    const currentIndex = this.course.findIndex((course: { videoUrl: { url: string; }; }) => course.videoUrl.url === this.selectedVideo);


    // Check if the current video is not the last one
    if (currentIndex < this.course.length - 1) {
      // Get the URL of the next video
      const nextVideoUrl = this.course[currentIndex + 1].videoUrl.url;
      console.log(nextVideoUrl);

      // Play the next video
      this.selectedVideo = nextVideoUrl;
      const player = videojs('myPlayerID');
      player.src(this.selectedVideo);
    }
  }
  playPreviousVideo() {
    // Find the index of the currently selected video
    const currentIndex = this.course.findIndex((course: { videoUrl: { url: string; }; }) => course.videoUrl.url === this.selectedVideo);

    // Check if the current video is not the first one
    if (currentIndex > 0) {
      // Get the URL of the previous video
      const previousVideoUrl = this.course[currentIndex - 1].videoUrl.url;

      // Play the previous video
      this.selectedVideo = previousVideoUrl;
      const player = videojs('myPlayerID');
      player.src(this.selectedVideo);
    }
  }







  playVideo(video: any) {
    this.selectedVideo = video.videoUrl.url;
    this.selectedTitle = video.title;
    this.selectedDescription = video.videoSection
    console.log(this.selectedVideo);
    this.cdr.detectChanges();
    // this.initializeVideoPlayer();
    const videoElement = document.getElementById('sourceId');

    console.log(videoElement);

    if (videoElement) {
      videoElement.setAttribute('src', this.selectedVideo);
    }
    const player = videojs('myPlayerID');
    player.src(this.selectedVideo);
  }

  initializeVideoPlayer() {

    if (!this.selectedVideo || this.playerInitialized) {
      console.log(this.playerInitialized, this.selectedVideo);

      return;
    }

    console.log("Inside videp Init");
    // setTimeout(() => {
    const player = videojs('myPlayerID');

    player.ready(() => {
      console.log("inside videoplayer");
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

      newImageBB.setAttribute("src", "../../assets/fast-backward.png ");
      newImageBB.style.paddingTop = '5px';
      newImageBB.style.marginRight = '5px';


      newImageFB.setAttribute("src", "../../assets/fast-forward-button.png");
      newImageFB.style.paddingTop = '5px';
      newElementBB.appendChild(newImageBB);
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
      console.log("hello");

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
        this.playerInitialized = true;
      });
    });
    // })
  }




  currentComponent: number = 1;

  showComponent(componentNumber: number): void {
    this.currentComponent = componentNumber;
  }
}