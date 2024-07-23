type SiteConfig = {
    name: string,
    descrption: string,
    url: string,
    ogImage: string,
    links: {
        twitter: string,
        github: string,
    }
}

export const siteConfig: SiteConfig = {
    name: "Coding Jitsu Blog",
    descrption: "An Open source Technical Blog Plattform with NextJs 14 with shadc/ui, prisma and markdown support",
    url: "https://next-blog-pk.vercel.app/",
    ogImage: "https://next-blog-pk.vercel.app/og",
    links: {
        twitter: "https://twitter.com/codingjitsu",
        github: "https://github.com/Nyi0309/next-blog",
    }
}