import { Fragment } from './fragment';

interface SlideConfig {

}

interface Slide {
    element: HTMLElement;
    id: string;
    fragments: Fragment[];
    config: SlideConfig;
    order: number;
}

export { Slide, SlideConfig };