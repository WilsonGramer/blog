import { htmlFragmentSync as html } from "lit-ntml";
import { header } from "../components";
import { blogPostCard } from "../components/blog-post-card";
import { footer } from "../components/footer";
import { projectCard } from "../components/project-card";
import { Page } from "./";
import { BlogPost } from "./blog-post";

export const homePage = (posts: BlogPost[]): Page => ({
    path: "/index.html",
    body: () => html`
        ${header()}

        <section class="px-6">
            <h1 class="text-4xl font-bold text-center">
                <img
                    class="rounded-full mb-4 mx-auto h-24"
                    src="https://0.gravatar.com/avatar/1a55ce5c75a3f6759a6ecd47e99f7aac?s=200"
                    alt="Wilson Gramer"
                />

                Hi, I’m Wilson Gramer
            </h1>

            <p class="p-6 text-xl text-gray-400 text-center">
                I’m a passionate student developer currently working at

                <a
                    class="font-semibold text-blue-400"
                    href="https://mk-dir.com"
                >
                    Make Directory.
                </a>

                I’m mainly interested in devops and backend programming, and
                work primarily with Swift, TypeScript, Rust and Go. Check out
                what I’ve been building recently:
            </p>

            ${projectCard({
                title: "Wipple",
                image: "/images/wipple.svg",
                description:
                    "Programming language for building DSLs that’s natural to read, write and learn. I’m building Wipple to learn how programming languages work, and plan to use it on my robotics team.",
                link: {
                    name: "Website",
                    url: "https://wipple.gramer.dev/",
                },
            })}
            ${projectCard({
                title: "SuperHomework",
                image: "/images/superhomework.png",
                description:
                    "Automatically organize your homework — just sign in with your school accounts and SuperHomework automatically fetches the latest assignments for you. With reminder notifications and widgets, you’ll never forget your homework again.",
                link: {
                    name: "Website",
                    url: "https://superhomeworkapp.com/",
                },
            })}
            ${projectCard({
                title: "RetailBox",
                image: "/images/retailbox.png",
                description:
                    "Home to over 150 high-quality screen savers from places around the world. Use RetailBox to showcase your device for content creation, in stores and more. We add new content every month, with no ads.",
                link: {
                    name: "Website",
                    url: "https://retailbox.app/",
                },
            })}
        </section>

        <section id="blog" class="px-6">
            <h1 class="py-6 text-4xl font-bold text-center">Blog</h1>

            ${posts.map(blogPostCard)}
        </section>

        ${footer()}
    `,
});
