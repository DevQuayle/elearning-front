// @flow

export type TRoute = {
    path: string,
    name: string,
    icon: string,
    component: React$ElementType<any>,
    layout: string
};

export type TRoutes = Array<TRoute>;
