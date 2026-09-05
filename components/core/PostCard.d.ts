export interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
}

/**
 * @startingPoint section="Post Card" subtitle="Article preview row for lists" viewport="700x200"
 */
export declare function PostCard(props: PostCardProps): JSX.Element;
