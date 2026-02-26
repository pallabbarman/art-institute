import LinearProgress from 'components/LinearProgress';
import { Suspense, type ComponentType } from 'react';

const PageLoader =
    <P extends object>(Component: ComponentType<P>): ComponentType<P> =>
    (props: P) => (
        <Suspense fallback={<LinearProgress />}>
            <Component {...props} />
        </Suspense>
    );

export default PageLoader;
