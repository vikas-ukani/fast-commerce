
'use client';

import { useEffect, useState } from 'react';
import Loading from '../Loading';

type PushStateInput = [data: any, unused: string, url?: string | URL | null | undefined];

export default function NavigationProcess({ children }: any) {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(false)

        const handleAnchorClick = (event: MouseEvent) => {
            const targetUrl = (event.currentTarget as HTMLAnchorElement).href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                setLoading(true)
            }
        };

        const handleMutation: MutationCallback = () => {
            const anchorElements: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a[href]');

            anchorElements.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
        };

        const mutationObserver = new MutationObserver(handleMutation);

        mutationObserver.observe(document, { childList: true, subtree: true });

        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray: PushStateInput) => {
                setLoading(false)
                return target.apply(thisArg, argArray);
            },
        });
    });

    return loading ? <Loading /> : <>{children}</>;
}
