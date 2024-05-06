import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  blogs =['Blog post 1', 'Blog Post 2', 'Blog post 3'];
  number=1;
  title = 'Blog Application 3'


  onClick(e:any){
    console.log('Button Clicked',e)
    this.number++;
  }
onDivClick(){
  console.log('Div clicked')
}

  imageSrc='https://miro.medium.com/v2/resize:fit:720/format:webp/1*27jgFiMkfKCqiDRYogzrWw.jpeg';

  
  getTitle()
  {return this.title;
}
blogPosts=[
  {
    Title :'Blog Post 1',
    Description:'Sample Blog Post 1',
    Author:'Jhon Doe'
  },
  {
    Title :'Blog Post 2',
    Description:'Sample Blog Post 2',
    Author: 'Shibly'
  }
]
;
newblogPosts;

constructor(service :BlogService)
{
  //let service = new BlogService();
  this.newblogPosts = service.getnewBlogPost();
}
imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRz8uIiR7bytksI0j0uBp2Ule-8zYYWBhtGLRWgPftcw&s"

email="shibly@gmail.com"
onSave(){
  console.log(this.email)};
  onSave1(){
    console.log(this.email)
  }


}