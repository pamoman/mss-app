/*
 * PrivateNav
 */

import React from "react";
import Link from 'next/link';
import { useSession } from "next-auth/client";
import { useRouter } from 'next/router';

const activePath = (href, router) => {
    if (href === "/" && router.pathname === "/") return true;

    if (href === "/" && router.pathname != "/") return false;

    return router.pathname.includes(href);
};

const PrivateNav = ({ href, label, right, ...props }) => {
    const router = useRouter(),
          [session] = useSession(),
          isActive = activePath(href, router),
          classes = ["private-nav"];

    isActive && classes.push("active-nav");
    right && classes.push("right-nav");

    return session ? (<Link href={href}><a className={classes.join(" ")} {...props}>{label}</a></Link>) : null;
};

export default PrivateNav;
