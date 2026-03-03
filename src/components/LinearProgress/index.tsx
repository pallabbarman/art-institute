import nProgress from 'nprogress';
import { useEffect } from 'react';

const LinearProgress = () => {
    useEffect(() => {
        nProgress.start();

        return () => {
            nProgress.done();
        };
    }, []);

    return <div className="min-h-full" />;
};

export default LinearProgress;
