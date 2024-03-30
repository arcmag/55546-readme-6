import { PostType } from "./post.enum";
import { Post } from "./post.interface";

export interface LinkPost extends Omit<Post, 'title'> {
  type: PostType.Link;
  link: string;
  description: string;
}
