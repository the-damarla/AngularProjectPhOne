import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-single-card',
  templateUrl: './home-single-card.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home-single-card.component.css']
})
export class HomeSingleCardComponent implements OnInit {
  closeResult!: string;

  comments:any[] = []

  constructor(private modalService: NgbModal) { }

  @Input() mve: any

  commentSend(nameOfMve:any,commentText:String,commentSection:any)
  {
    if(commentText == '')
    {
      document.getElementById(nameOfMve)!.style.boxShadow = '0px 0px 6px 2px red'
    }
    else{
    this.comments.push({id:nameOfMve,comment:commentText})
    document.getElementById(nameOfMve)!.style.boxShadow = "0px 2px 2px 0px black"
    commentSection.value = ''
    }
  }

  openBackDropCustomClass(content: any) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  
  ngOnInit(): void {
  }

}
