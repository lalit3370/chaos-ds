import * as a11yAnnotations from '@storybook/addon-a11y/preview';
import { setProjectAnnotations } from '@storybook/react-vite';
import preview from './preview.jsx';

setProjectAnnotations([a11yAnnotations, preview]);
