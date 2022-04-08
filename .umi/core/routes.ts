// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/huangyi17/Public/work/test/schema-form/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ '/Users/huangyi17/Public/work/test/schema-form/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'/Users/huangyi17/Public/work/test/schema-form/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'README.md' */'/Users/huangyi17/Public/work/test/schema-form/README.md')}),
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1649321772000,
          "slugs": [
            {
              "depth": 1,
              "value": "schema-form",
              "heading": "schema-form"
            }
          ],
          "title": "schema-form"
        },
        "title": "schema-form"
      },
      {
        "path": "/guide/element",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__Element.md' */'/Users/huangyi17/Public/work/test/schema-form/docs/guide/Element.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/Element.md",
          "updatedTime": 1649331186648,
          "slugs": [
            {
              "depth": 1,
              "value": "Element",
              "heading": "element"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Element",
          "hasPreviewer": true,
          "group": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Element - schema-form"
      },
      {
        "path": "/guide/schema-form-custom",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__SchemaFormCustom.md' */'/Users/huangyi17/Public/work/test/schema-form/docs/guide/SchemaFormCustom.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/SchemaFormCustom.md",
          "updatedTime": 1649331468720,
          "slugs": [
            {
              "depth": 1,
              "value": "Custom",
              "heading": "custom"
            },
            {
              "depth": 2,
              "value": "自定义布局: custom",
              "heading": "自定义布局-custom"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Custom",
          "hasPreviewer": true,
          "group": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Custom - schema-form"
      },
      {
        "path": "/guide/schema-form-row",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__guide__SchemaFormRow.md' */'/Users/huangyi17/Public/work/test/schema-form/docs/guide/SchemaFormRow.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/guide/SchemaFormRow.md",
          "updatedTime": 1649331358787,
          "slugs": [
            {
              "depth": 1,
              "value": "Row",
              "heading": "row"
            },
            {
              "depth": 2,
              "value": "Row 布局",
              "heading": "row-布局"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "title": "Row",
          "hasPreviewer": true,
          "group": {
            "path": "/guide",
            "title": "Guide"
          }
        },
        "title": "Row - schema-form"
      },
      {
        "path": "/guide",
        "meta": {},
        "exact": true,
        "redirect": "/guide/element"
      }
    ],
    "title": "schema-form",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
