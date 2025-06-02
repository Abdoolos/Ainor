"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const blogPosts = [
    {
        delay: "0",
        img: "img-2.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "15. januar 2024",
        category: "ai",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "200",
        img: "img-3.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "3. februar 2024",
        category: "automatisering",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "400",
        img: "img-4.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "18. mars 2024",
        category: "programvare",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "0",
        img: "img-5.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "5. april 2024",
        category: "ai",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "200",
        img: "img-6.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "22. mai 2024",
        category: "automatisering",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "400",
        img: "img-7.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "8. juni 2024",
        category: "programvare",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "0",
        img: "img-8.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "17. juli 2024",
        category: "ai",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "200",
        img: "img-9.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "30. august 2024",
        category: "automatisering",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    },
    {
        delay: "400",
        img: "img-10.png",
        title: "2024: Forbered deg på det 'store' cyberangrepet",
        date: "14. september 2024",
        category: "programvare",
        author: "Admin",
        url: "/blog-details",
        urlAuthor: "#",
    }
];
export default function Section2() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            {/*ai-solutions-blog section 2*/}
            <section className="ai-solutions-blog-section-2 position-relative pb-120">
                <div className="container">
                    <h2>Siste Nyheter</h2>
                    <div className="row g-4 mt-5">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={post.delay}>
                                <div className="card-news position-relative hover-up">
                                    <Link href={post.url} className="card-news-img position-relative d-block">
                                        <img className="w-100 rounded-3 rounded-bottom-0" src={`/assets/imgs/pages/ai-solutions/page-blog/${post.img}`} alt={post.title} />
                                        <span className="text-uppercase text-white bg-linear-1 rounded-2 px-2 py-1 position-absolute top-0 start-0 m-4 fs-8 fw-semibold">{post.category}</span>
                                    </Link>
                                    <div className="card-news-body border p-4 rounded-3 rounded-top-0 border-top-0">
                                        <div className="d-flex card-news-information gap-4">
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/imgs/template/icons/icon-1.svg" alt="Dato Ikon" />
                                                <p className="mb-0">{post.date}</p>
                                            </div>
                                            <div className="d-flex align-items-center gap-1">
                                                <img src="/assets/imgs/template/icons/icon-2.svg" alt="Forfatter Ikon" />
                                                <span className="opacity-50">Av</span>
                                                <Link href={post.urlAuthor} className="mb-0">
                                                    {post.author}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card-news-title mt-2">
                                            <Link href={post.url}>
                                                <h6>{post.title}</h6>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link href="#" className="btn btn-linear hover-up mt-5">
                        Last inn flere innlegg <i className="bi bi-arrow-right" />
                    </Link>
                </div>
            </section>
        </>
    );
}
