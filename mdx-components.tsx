import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ className, ...props }) => (
            <h1 className={cn("text-4xl font-bold mt-6 mb-4", className)} {...props} />
        ),
        h2: ({ className, ...props }) => (
            <h2 className={cn("text-3xl font-bold mt-6 mb-3", className)} {...props} />
        ),
        h3: ({ className, ...props }) => (
            <h3 className={cn("text-2xl font-bold mt-5 mb-2", className)} {...props} />
        ),
        h4: ({ className, ...props }) => (
            <h4 className={cn("text-xl font-bold mt-4 mb-2", className)} {...props} />
        ),
        h5: ({ className, ...props }) => (
            <h5 className={cn("text-lg font-bold mt-4 mb-2", className)} {...props} />
        ),
        h6: ({ className, ...props }) => (
            <h6 className={cn("text-base font-bold mt-4 mb-2", className)} {...props} />
        ),
        p: ({ className, ...props }) => (
            <p className={cn("leading-7 mb-4", className)} {...props} />
        ),
        ul: ({ className, ...props }) => (
            <ul className={cn("list-disc pl-6 mb-4", className)} {...props} />
        ),
        ol: ({ className, ...props }) => (
            <ol className={cn("list-decimal pl-6 mb-4", className)} {...props} />
        ),
        li: ({ className, ...props }) => (
            <li className={cn("mt-1", className)} {...props} />
        ),
        blockquote: ({ className, ...props }) => (
            <blockquote className={cn("border-l-4 border-primary pl-4 italic my-4", className)} {...props} />
        ),
        hr: ({ ...props }) => (
            <hr className="my-6 border-border" {...props} />
        ),
        a: ({ className, ...props }) => (
            <a className={cn("text-primary underline underline-offset-2 hover:text-primary/80", className)} {...props} />
        ),
        code: ({ className, ...props }) => (
            <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className)} {...props} />
        ),
        pre: ({ className, ...props }) => (
            <pre className={cn("mb-4 mt-4 overflow-x-auto rounded-lg bg-muted p-4", className)} {...props} />
        ),
        img: ({ className, alt, ...props }) => (
            <img className={cn("rounded-md border", className)} alt={alt || ""} {...props} />
        ),
        strong: ({ className, ...props }) => (
            <strong className={cn("font-bold", className)} {...props} />
        ),
        em: ({ className, ...props }) => (
            <em className={cn("italic", className)} {...props} />
        ),
    }
}
