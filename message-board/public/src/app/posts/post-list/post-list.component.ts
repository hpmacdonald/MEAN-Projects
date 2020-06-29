import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../post.model";
import { PostsService } from '../post.service';


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy  {
    // posts = [
    //     {title: 'First Post', content: 'This is the first post'},
    //     {title: 'Second Post', content: 'This is the first post'},
    //     {title: 'Third Post', content: 'This is the first post'},
    //     {title: 'Fourth Post', content: 'This is the first post'},
    // ];
    posts: Post[] = [];
    isLoading = false;
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}

    ngOnInit() {
        this.isLoading = true;
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe((posts: Post[]) => {
                this.isLoading = false;
                this.posts = posts;
        });
    } 
    onDelete (postId: string) {
        this.postsService.deletePost(postId);
    }

    ngOnDestroy () {
        this.postsSub.unsubscribe();
    }
}
