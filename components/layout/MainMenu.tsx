"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/">
                    <span>Hjem</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    <span>Om Oss</span>
                </Link>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Tjenester</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/services">
                            <span>Tjenester</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/services-details">
                            <span>Tjeneste Detaljer</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Blogg</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog">
                            <span>Blogg</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/blog-details">
                            <span>Blogg Detaljer</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item dropdown menu-item-has-children">
                <Link className="nav-link text-uppercase" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span>Sider</span>
                </Link>
                <ul className="dropdown-menu">
                    <li>
                        <Link className="dropdown-item text-capitalize" href="/pricing">
                            <span>AI-løsninger</span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/contact">
                    <span>Kontakt</span>
                </Link>
            </li>
        </ul>
    );
}
