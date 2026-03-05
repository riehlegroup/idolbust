import type {
  BlogIndexPost,
  BlogIndexTemplateProps,
} from "./BlogIndexTemplate.types";
import { PageIntro } from "@/components/organisms/PageIntro";
import { Card } from "@/components/molecules/Card";
import { MetaLine } from "@/components/atoms/MetaLine";
import { TagList } from "@/components/molecules/TagList";

export const BlogIndexTemplate = ({
  title,
  emptyState,
  posts,
}: BlogIndexTemplateProps) => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <PageIntro title={title} />

    {posts.length === 0 ? (
      <p className="text-secondary-600">{emptyState}</p>
    ) : (
      <>
        <h2 className="sr-only">Latest posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: BlogIndexPost) => (
            <Card
              key={post.href}
              title={post.title}
              description={post.description}
              href={post.href}
              image={post.image}
              imageAlt={post.imageAlt}
            >
              <MetaLine
                dateIso={post.dateIso}
                dateLabel={post.dateLabel}
                author={post.author}
                className="mt-4 text-sm text-secondary-500"
              />
              {post.tags.length > 0 && (
                <TagList tags={post.tags} className="mt-3" />
              )}
            </Card>
          ))}
        </div>
      </>
    )}
  </div>
);
