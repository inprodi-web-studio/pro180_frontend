// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: gM0_8AzGkHlf

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicTopBar.module.css"; // plasmic-import: gM0_8AzGkHlf/css

createPlasmicElementProxy;

export type PlasmicTopBar__VariantMembers = {};
export type PlasmicTopBar__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopBar__VariantsArgs;
export const PlasmicTopBar__VariantProps = new Array<VariantPropType>();

export type PlasmicTopBar__ArgsType = {
  title?: React.ReactNode;
  showCounter?: boolean;
  showContent?: boolean;
  content?: React.ReactNode;
  rightContent?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTopBar__ArgsType;
export const PlasmicTopBar__ArgProps = new Array<ArgPropType>(
  "title",
  "showCounter",
  "showContent",
  "content",
  "rightContent"
);

export type PlasmicTopBar__OverridesType = {
  container?: Flex__<"div">;
  left?: Flex__<"div">;
  contentContainer?: Flex__<"div">;
  right?: Flex__<"div">;
};

export interface DefaultTopBarProps {
  title?: React.ReactNode;
  showCounter?: boolean;
  showContent?: boolean;
  content?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTopBar__RenderFunc(props: {
  variants: PlasmicTopBar__VariantsArgs;
  args: PlasmicTopBar__ArgsType;
  overrides: PlasmicTopBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showCounter: true,
          showContent: true
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"container"}
      data-plasmic-override={overrides.container}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.container
      )}
    >
      <div
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        className={classNames(projectcss.all, sty.left)}
      >
        {renderPlasmicSlot({
          defaultContents: "Page Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle)
        })}
        {(() => {
          try {
            return $props.showContent;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return true;
            }
            throw e;
          }
        })() ? (
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer)}
          >
            {renderPlasmicSlot({
              defaultContents: null,
              value: args.content
            })}
          </div>
        ) : null}
      </div>
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        {renderPlasmicSlot({
          defaultContents: null,
          value: args.rightContent
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: ["container", "left", "contentContainer", "right"],
  left: ["left", "contentContainer"],
  contentContainer: ["contentContainer"],
  right: ["right"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  container: "div";
  left: "div";
  contentContainer: "div";
  right: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopBar__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopBar__VariantsArgs;
    args?: PlasmicTopBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTopBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTopBar__ArgsType,
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
          internalArgPropNames: PlasmicTopBar__ArgProps,
          internalVariantPropNames: PlasmicTopBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTopBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicTopBar";
  } else {
    func.displayName = `PlasmicTopBar.${nodeName}`;
  }
  return func;
}

export const PlasmicTopBar = Object.assign(
  // Top-level PlasmicTopBar renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    left: makeNodeComponent("left"),
    contentContainer: makeNodeComponent("contentContainer"),
    right: makeNodeComponent("right"),

    // Metadata about props expected for PlasmicTopBar
    internalVariantProps: PlasmicTopBar__VariantProps,
    internalArgProps: PlasmicTopBar__ArgProps
  }
);

export default PlasmicTopBar;
/* prettier-ignore-end */
