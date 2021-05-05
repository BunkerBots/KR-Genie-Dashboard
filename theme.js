import { future } from '@theme-ui/presets';

const bgDark = '#0d0027';
const hightlight = 'c1009a';
console.log(future);
const theme = {
    ...future,
    styles: {
        ...future.styles,
    },
    colors: {
        ...future.colors,
        primary: hightlight,
        background: '#ffffff',
        modes: {
            dark: {
                ...future.colors.modes.dark,
                background: bgDark,
            },
        },
    },
};
export default theme;
