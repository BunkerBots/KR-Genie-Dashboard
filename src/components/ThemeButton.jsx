/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx, useColorMode } from 'theme-ui';

const ThemeButton = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
        <header>
            <button
                onClick={() => {
                    setColorMode(colorMode === 'default' ? 'dark' : 'default');
                }}
                sx={{
                    appearance: 'none',
                    border: 0,
                    borderRadius: 50,
                    p: 1,
                    marginRight: 10,
                }}
            >
                Toggle
                {' '}
                {colorMode === 'default' ? 'Dark' : 'Light'}
            </button>
        </header>
    );
};
export default ThemeButton;
