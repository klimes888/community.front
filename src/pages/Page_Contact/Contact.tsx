import React from 'react';
import { css, Theme } from '@emotion/react';

export default function Contact() {
    return (
        <section css={layout}>
            <section css={layoutInner}>
                <span css={headerText}>Here is Contact</span>
            </section>
        </section>
    );
}

const layout = css`
    display: flex;
    flex: 1;
`;

const layoutInner = css`
    width: 100%;
    height: 100%;
`;

const headerText = css`
    font-size: 1.5em;
    font-weight: 700;
`;
