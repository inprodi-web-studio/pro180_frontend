// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: KcpCffGmy6kt

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
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: KcpCffGmy6kt/css

import ScrollDuotonesvgIcon from "./icons/PlasmicIcon__ScrollDuotonesvg"; // plasmic-import: 8QgUleY3Rjyy/icon

createPlasmicElementProxy;

export type PlasmicMenuItem__VariantMembers = {
  isActive: "isActive";
};
export type PlasmicMenuItem__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
};
type VariantPropType = keyof PlasmicMenuItem__VariantsArgs;
export const PlasmicMenuItem__VariantProps = new Array<VariantPropType>(
  "isActive"
);

export type PlasmicMenuItem__ArgsType = {
  onIsActiveChange?: (val: any) => void;
  icon2?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: () => void;
};
type ArgPropType = keyof PlasmicMenuItem__ArgsType;
export const PlasmicMenuItem__ArgProps = new Array<ArgPropType>(
  "onIsActiveChange",
  "icon2",
  "label",
  "onClick"
);

export type PlasmicMenuItem__OverridesType = {
  menuItem?: Flex__<"div">;
};

export interface DefaultMenuItemProps {
  onIsActiveChange?: (val: any) => void;
  icon2?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: () => void;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuItem__RenderFunc(props: {
  variants: PlasmicMenuItem__VariantsArgs;
  args: PlasmicMenuItem__ArgsType;
  overrides: PlasmicMenuItem__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isActive",
        type: "writable",
        variableType: "variant",

        valueProp: "isActive",
        onChangeProp: "onIsActiveChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"menuItem"}
      data-plasmic-override={overrides.menuItem}
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
        sty.menuItem,
        { [sty.menuItemisActive]: hasVariant($state, "isActive", "isActive") }
      )}
      onClick={async event => {
        const $steps = {};

        $steps["runOnClick"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onClick"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnClick"] != null &&
          typeof $steps["runOnClick"] === "object" &&
          typeof $steps["runOnClick"].then === "function"
        ) {
          $steps["runOnClick"] = await $steps["runOnClick"];
        }
      }}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <ScrollDuotonesvgIcon
            className={classNames(projectcss.all, sty.svg__hj9Hd)}
            role={"img"}
          />
        ),

        value: args.icon2,
        className: classNames(sty.slotTargetIcon2, {
          [sty.slotTargetIcon2isActive]: hasVariant(
            $state,
            "isActive",
            "isActive"
          )
        })
      })}
      {renderPlasmicSlot({
        defaultContents: "Menu Item",
        value: args.label,
        className: classNames(sty.slotTargetLabel, {
          [sty.slotTargetLabelisActive]: hasVariant(
            $state,
            "isActive",
            "isActive"
          )
        })
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  menuItem: ["menuItem"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  menuItem: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItem__VariantsArgs;
    args?: PlasmicMenuItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuItem__ArgsType,
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
          internalArgPropNames: PlasmicMenuItem__ArgProps,
          internalVariantPropNames: PlasmicMenuItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "menuItem") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("menuItem"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */
