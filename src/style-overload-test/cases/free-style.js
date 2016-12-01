import FreeStyle from 'free-style';
import { renderHtml } from '../render';
import { containerStyle, buttonStyles } from '../styles';

export const freeStyleCase = () => {
    const Style = FreeStyle.create();

    const getButtonClassName = i => Style.registerStyle(buttonStyles[i]);

    const html = renderHtml(Style.registerStyle(containerStyle), getButtonClassName);

    const css = Style.getStyles();

    return `
        <html>
            <head>
                <style type="text/css">${css}</style>
            </head>
            <body>${html}</body>
        </html>
    `;
};