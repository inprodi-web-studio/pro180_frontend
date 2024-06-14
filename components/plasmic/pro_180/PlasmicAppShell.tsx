// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: okr6zFws8g9BFEw4Fons9x
// Component: zdymZc8lM6F1

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "/components/Button/Button.tsx"; // plasmic-import: fWdCiIO3iYJP/codeComponent
import { LoadingBoundary } from "@plasmicpkgs/plasmic-basic-components";
import { LottieWrapper } from "@plasmicpkgs/lottie-react";

import {
  ColorSchemeValue,
  useColorScheme
} from "../inprodi_design_system/PlasmicGlobalVariant__ColorScheme"; // plasmic-import: gdgBwRVFC7MJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_inprodi_design_system_css from "../inprodi_design_system/plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: okr6zFws8g9BFEw4Fons9x/projectcss
import sty from "./PlasmicAppShell.module.css"; // plasmic-import: zdymZc8lM6F1/css

createPlasmicElementProxy;

export type PlasmicAppShell__VariantMembers = {};
export type PlasmicAppShell__VariantsArgs = {};
type VariantPropType = keyof PlasmicAppShell__VariantsArgs;
export const PlasmicAppShell__VariantProps = new Array<VariantPropType>();

export type PlasmicAppShell__ArgsType = {
  content2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAppShell__ArgsType;
export const PlasmicAppShell__ArgProps = new Array<ArgPropType>("content2");

export type PlasmicAppShell__OverridesType = {
  mainContainer?: Flex__<"div">;
  topBar?: Flex__<"div">;
  left?: Flex__<"div">;
  logotype?: Flex__<typeof PlasmicImg__>;
  button?: Flex__<typeof Button>;
  content?: Flex__<"div">;
  loadingBoundary?: Flex__<typeof LoadingBoundary>;
  lottie?: Flex__<typeof LottieWrapper>;
};

export interface DefaultAppShellProps {
  content2?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAppShell__RenderFunc(props: {
  variants: PlasmicAppShell__VariantsArgs;
  args: PlasmicAppShell__ArgsType;
  overrides: PlasmicAppShell__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    colorScheme: useColorScheme()
  });

  return (
    <div
      data-plasmic-name={"mainContainer"}
      data-plasmic-override={overrides.mainContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_inprodi_design_system_css.plasmic_tokens,
        sty.mainContainer,
        {
          [sty.mainContainerglobal_colorScheme_dark]: hasVariant(
            globalVariants,
            "colorScheme",
            "dark"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"topBar"}
        data-plasmic-override={overrides.topBar}
        className={classNames(projectcss.all, sty.topBar)}
      >
        <div
          data-plasmic-name={"left"}
          data-plasmic-override={overrides.left}
          className={classNames(projectcss.all, sty.left)}
        >
          <PlasmicImg__
            data-plasmic-name={"logotype"}
            data-plasmic-override={overrides.logotype}
            alt={""}
            className={classNames(sty.logotype)}
            displayHeight={"30px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/pro_180/images/pro180Light1Png.png",
              fullWidth: 305,
              fullHeight: 67,
              aspectRatio: undefined
            }}
          />
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          block={false}
          className={classNames("__wab_instance", sty.button)}
          danger={true}
          ghost={true}
          iconPosition={"start"}
          isSubmit={false}
          label={"Cerrar Sesi\u00f3n"}
          loading={false}
          onClick={async () => {
            const $steps = {};

            $steps["logout"] = true
              ? (() => {
                  const actionArgs = { args: [] };
                  return $globalActions["AuthGlobalContext.logout"]?.apply(
                    null,
                    [...actionArgs.args]
                  );
                })()
              : undefined;
            if (
              $steps["logout"] != null &&
              typeof $steps["logout"] === "object" &&
              typeof $steps["logout"].then === "function"
            ) {
              $steps["logout"] = await $steps["logout"];
            }

            $steps["navigate"] = true
              ? (() => {
                  const actionArgs = { destination: `/auth/login` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["navigate"] != null &&
              typeof $steps["navigate"] === "object" &&
              typeof $steps["navigate"].then === "function"
            ) {
              $steps["navigate"] = await $steps["navigate"];
            }
          }}
          size={"middle"}
          variant={"primary"}
          withIcon={false}
        />
      </div>
      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content)}
      >
        <LoadingBoundary
          data-plasmic-name={"loadingBoundary"}
          data-plasmic-override={overrides.loadingBoundary}
          className={classNames("__wab_instance", sty.loadingBoundary)}
          loadingState={
            <DataCtxReader__>
              {$ctx => (
                <LottieWrapper
                  data-plasmic-name={"lottie"}
                  data-plasmic-override={overrides.lottie}
                  animationData={{
                    v: "5.0.1",
                    fr: 10,
                    ip: 0,
                    op: 20,
                    w: 800,
                    h: 600,
                    ddd: 0,
                    assets: [],
                    layers: [
                      {
                        ind: 3,
                        nm: "Layer 3",
                        ks: {
                          p: {
                            a: 1,
                            k: [
                              {
                                t: 0,
                                s: [456.419, 423.252, 0],
                                to: [-161.825, -53.536, 0],
                                ti: [-62.867, 94.219, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [371.703, 167.513, 0]
                              },
                              {
                                t: 10,
                                s: [371.703, 167.513, 0],
                                to: [0, 0, 0],
                                ti: [0, 0, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [456.419, 423.252, 0]
                              },
                              { t: 20, s: [456.419, 423.252, 0] }
                            ]
                          },
                          a: { a: 0, k: [-24.5, -24.5, 0] },
                          s: { a: 0, k: [100, 100, 100] },
                          r: { a: 0, k: -43.065 },
                          o: { a: 0, k: 100 }
                        },
                        ao: 0,
                        ip: 0,
                        op: 20,
                        st: 0,
                        bm: 3,
                        sr: 1,
                        ty: 4,
                        shapes: [
                          {
                            ty: "gr",
                            it: [
                              {
                                d: 1,
                                ty: "el",
                                s: { a: 0, k: [210.919, 210.919] },
                                p: { a: 0, k: [0, 0] }
                              },
                              {
                                ty: "fl",
                                c: { a: 0, k: [0, 0.698, 1, 1] },
                                hd: false,
                                o: { a: 0, k: 100 },
                                r: 1
                              },
                              {
                                ty: "tr",
                                p: { a: 0, k: [0, 0] },
                                a: { a: 0, k: [0, 0] },
                                s: { a: 0, k: [100, 100] },
                                r: { a: 0, k: 0 },
                                o: { a: 0, k: 100 },
                                sk: { a: 0, k: 0 },
                                sa: { a: 0, k: 0 }
                              }
                            ],

                            nm: "Object",
                            hd: false
                          }
                        ]
                      },
                      {
                        ind: 2,
                        nm: "Layer 2",
                        ks: {
                          p: {
                            a: 1,
                            k: [
                              {
                                t: 0,
                                s: [361.777, 165.918, 0],
                                to: [0, 0, 0],
                                ti: [0, 0, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [214.784, 406.838, 0]
                              },
                              {
                                t: 10,
                                s: [214.784, 406.838, 0],
                                to: [-83.035, -34.503, 0],
                                ti: [0, 0, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [361.777, 165.918, 0]
                              },
                              { t: 20, s: [361.777, 165.918, 0] }
                            ]
                          },
                          a: { a: 0, k: [-66.5, -66.5, 0] },
                          s: { a: 0, k: [100, 100, 100] },
                          r: { a: 0, k: -43.065 },
                          o: { a: 0, k: 100 }
                        },
                        ao: 0,
                        ip: 0,
                        op: 20,
                        st: 0,
                        bm: 3,
                        sr: 1,
                        ty: 4,
                        shapes: [
                          {
                            ty: "gr",
                            it: [
                              {
                                d: 1,
                                ty: "el",
                                s: { a: 0, k: [236, 236] },
                                p: { a: 0, k: [0, 0] }
                              },
                              {
                                ty: "fl",
                                c: { a: 0, k: [0.012, 0, 0.38, 1] },
                                hd: false,
                                o: { a: 0, k: 100 },
                                r: 1
                              },
                              {
                                ty: "tr",
                                p: { a: 0, k: [0, 0] },
                                a: { a: 0, k: [0, 0] },
                                s: { a: 0, k: [100, 100] },
                                r: { a: 0, k: 0 },
                                o: { a: 0, k: 100 },
                                sk: { a: 0, k: 0 },
                                sa: { a: 0, k: 0 }
                              }
                            ],

                            nm: "Object",
                            hd: false
                          }
                        ]
                      },
                      {
                        ind: 1,
                        nm: "Layer 1",
                        ks: {
                          p: {
                            a: 1,
                            k: [
                              {
                                t: 0,
                                s: [263.776, 342.564, 0],
                                to: [0, 0, 0],
                                ti: [0, 0, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [545.716, 355.446, 0]
                              },
                              {
                                t: 10,
                                s: [545.716, 355.446, 0],
                                to: [-7.345, 74.699, 0],
                                ti: [0, 0, 0],
                                i: { x: [0.15], y: [0.86] },
                                o: { x: [0.785], y: [0.135] },
                                e: [263.776, 342.564, 0]
                              },
                              { t: 20, s: [263.776, 342.564, 0] }
                            ]
                          },
                          a: { a: 0, k: [0, 0, 0] },
                          s: { a: 0, k: [100, 100, 100] },
                          r: { a: 0, k: -43.065 },
                          o: { a: 0, k: 100 }
                        },
                        ao: 0,
                        ip: 0,
                        op: 20,
                        st: 0,
                        bm: 3,
                        sr: 1,
                        ty: 4,
                        shapes: [
                          {
                            ty: "gr",
                            it: [
                              {
                                d: 1,
                                ty: "el",
                                s: { a: 0, k: [150.135, 150.135] },
                                p: { a: 0, k: [0, 0] }
                              },
                              {
                                ty: "fl",
                                c: { a: 0, k: [0.298, 0.255, 0.714, 1] },
                                hd: false,
                                o: { a: 0, k: 100 },
                                r: 1
                              },
                              {
                                ty: "tr",
                                p: { a: 0, k: [0, 0] },
                                a: { a: 0, k: [0, 0] },
                                s: { a: 0, k: [100, 100] },
                                r: { a: 0, k: 0 },
                                o: { a: 0, k: 100 },
                                sk: { a: 0, k: 0 },
                                sa: { a: 0, k: 0 }
                              }
                            ],

                            nm: "Object",
                            hd: false
                          }
                        ]
                      }
                    ],

                    markers: []
                  }}
                  className={classNames("__wab_instance", sty.lottie)}
                  preview={false}
                />
              )}
            </DataCtxReader__>
          }
        >
          <DataCtxReader__>
            {$ctx =>
              renderPlasmicSlot({
                defaultContents: null,
                value: args.content2
              })
            }
          </DataCtxReader__>
        </LoadingBoundary>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  mainContainer: [
    "mainContainer",
    "topBar",
    "left",
    "logotype",
    "button",
    "content",
    "loadingBoundary",
    "lottie"
  ],

  topBar: ["topBar", "left", "logotype", "button"],
  left: ["left", "logotype"],
  logotype: ["logotype"],
  button: ["button"],
  content: ["content", "loadingBoundary", "lottie"],
  loadingBoundary: ["loadingBoundary", "lottie"],
  lottie: ["lottie"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  mainContainer: "div";
  topBar: "div";
  left: "div";
  logotype: typeof PlasmicImg__;
  button: typeof Button;
  content: "div";
  loadingBoundary: typeof LoadingBoundary;
  lottie: typeof LottieWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAppShell__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAppShell__VariantsArgs;
    args?: PlasmicAppShell__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAppShell__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAppShell__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAppShell__ArgProps,
          internalVariantPropNames: PlasmicAppShell__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAppShell__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "mainContainer") {
    func.displayName = "PlasmicAppShell";
  } else {
    func.displayName = `PlasmicAppShell.${nodeName}`;
  }
  return func;
}

export const PlasmicAppShell = Object.assign(
  // Top-level PlasmicAppShell renders the root element
  makeNodeComponent("mainContainer"),
  {
    // Helper components rendering sub-elements
    topBar: makeNodeComponent("topBar"),
    left: makeNodeComponent("left"),
    logotype: makeNodeComponent("logotype"),
    button: makeNodeComponent("button"),
    content: makeNodeComponent("content"),
    loadingBoundary: makeNodeComponent("loadingBoundary"),
    lottie: makeNodeComponent("lottie"),

    // Metadata about props expected for PlasmicAppShell
    internalVariantProps: PlasmicAppShell__VariantProps,
    internalArgProps: PlasmicAppShell__ArgProps
  }
);

export default PlasmicAppShell;
/* prettier-ignore-end */
