import Loadable from 'react-loadable';
import React from "react";

const LoadableComponent = Loadable({
    loader: () => import('./login'),
    loading() {
        return <div>Loading</div>;
    },
});

export default () => <LoadableComponent/>;


