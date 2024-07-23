import { userAgent } from "next/server";
import sitemap, { baseUrl } from "./sitemap";

export default function robots(){
    return {
        rules: [
            {
                userAgent: "*",
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`
    }
}