/*
 * PublicNav
 */

import Link from 'next/link';
import { useRouter } from 'next/router';

const activePath = (href, router) => {
    if (href === "/" && router.pathname === "/") return true;

    if (href === "/" && router.pathname != "/") return false;

    return router.pathname.includes(href);
};

const PublicNav = ({ href, label, right, isExternal, ...props }) => {
    const router = useRouter(),
          isActive = activePath(href, router),
          classes = ["public-nav"];

    isActive && classes.push("active-nav");
    right && classes.push("right-nav");

    return (<Link href={href}><a className={classes.join(" ")} {...props}>{label}</a></Link>);
}

export default PublicNav;
