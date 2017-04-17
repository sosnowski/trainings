
interface FragmentConfig {

}

interface Fragment {
    element: HTMLElement;
    id: string;
    config: FragmentConfig;
}

export { Fragment, FragmentConfig };