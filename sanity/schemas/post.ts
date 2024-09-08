import { Rule } from "sanity";

export const post = {
    name: "post",
    title: "Post",
    type: "document",
    
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string", 
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "avatar",
            title: "Avatar",
            type: "image",
            validation: (Rule: Rule) => Rule.required().error("Required"),
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            validation: (Rule: Rule) => Rule.max(200).error("Max 200 characters"),
        },
        {
            name: "body",
            title: "Body",
            type: "array",
            of: [
                { 
                    type: "block",
                    styles: [
                        {title: 'Normal', value: 'normal'},
                        {title: 'H1', value: 'h1'},
                        {title: 'H2', value: 'h2'},
                        {title: 'H3', value: 'h3'},
                        {title: 'H4', value: 'h4'},
                        {title: 'H5', value: 'h5'},
                        {title: 'H6', value: 'h6'},
                        {title: 'Quote', value: 'blockquote'},
                        {title: 'Airport Titles', value: 'div'}
                    ]
                },
                {
                    type: "image",
                    fields: [{ type: "text", name: "alt", title: "Alt" }],
                },
            ],
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "reference", to: [{ type: "tag" }] }],
        },
    ]
}