import cxs from 'cxs/optimized';
import { renderHtml } from '../render';
import { containerStyle, buttonStyle } from '../styles';

export const cxsOptimizedCase = () => {

    const html = renderHtml(cxs(containerStyle), cxs(buttonStyle));

    const { css } = cxs;

    cxs.reset();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};
