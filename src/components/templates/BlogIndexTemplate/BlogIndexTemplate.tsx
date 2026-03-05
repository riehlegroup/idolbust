import type {
  BlogIndexPost,
  BlogIndexTemplateProps,
} from "./BlogIndexTemplate.types";
import { Card } from "@/components/molecules/Card";

export const BlogIndexTemplate = ({
  title,
  emptyState,
  posts,
}: BlogIndexTemplateProps) => (
  <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <h1 className="mb-8 text-4xl font-bold text-secondary-900">{title}</h1>

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
              <div className="mt-4 flex items-center gap-2 text-sm text-secondary-500">
                <time dateTime={post.dateIso}>{post.dateLabel}</time>
                <span>·</span>
                <span>{post.author}</span>
              </div>
              {post.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary-100 px-2 py-1 text-xs text-secondary-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </>
    )}
  </div>
);
