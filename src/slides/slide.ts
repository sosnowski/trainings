import { Fragment } from './fragment';

interface SlideConfig {

}

interface Slide {
    element: HTMLElement;
    id: string;
    fragments: Fragment[];
    config: SlideConfig;
}

export { Slide, SlideConfig };