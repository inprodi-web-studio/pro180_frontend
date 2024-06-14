// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: rb5_PS-3AnYe

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
import sty from "./PlasmicForm.module.css"; // plasmic-import: rb5_PS-3AnYe/css

createPlasmicElementProxy;

export type PlasmicForm__VariantMembers = {};
export type PlasmicForm__VariantsArgs = {};
type VariantPropType = keyof PlasmicForm__VariantsArgs;
export const PlasmicForm__VariantProps = new Array<VariantPropType>();

export type PlasmicForm__ArgsType = {
  content?: React.ReactNode;
  values?: any;
  onValuesChange?: (val: string) => void;
  errors?: any;
  onErrorsChange?: (val: string) => void;
  onSubmit?: () => void;
  validation?: any;
  onValidationChange?: (val: string) => void;
};
type ArgPropType = keyof PlasmicForm__ArgsType;
export const PlasmicForm__ArgProps = new Array<ArgPropType>(
  "content",
  "values",
  "onValuesChange",
  "errors",
  "onErrorsChange",
  "onSubmit",
  "validation",
  "onValidationChange"
);

export type PlasmicForm__OverridesType = {
  formContainer?: Flex__<"form">;
};

export interface DefaultFormProps {
  content?: React.ReactNode;
  values?: any;
  onValuesChange?: (val: string) => void;
  errors?: any;
  onErrorsChange?: (val: string) => void;
  onSubmit?: () => void;
  validation?: any;
  onValidationChange?: (val: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicForm__RenderFunc(props: {
  variants: PlasmicForm__VariantsArgs;
  args: PlasmicForm__ArgsType;
  overrides: PlasmicForm__OverridesType;
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
        path: "values",
        type: "writable",
        variableType: "object",

        valueProp: "values",
        onChangeProp: "onValuesChange"
      },
      {
        path: "errors",
        type: "writable",
        variableType: "object",

        valueProp: "errors",
        onChangeProp: "onErrorsChange"
      },
      {
        path: "validation",
        type: "writable",
        variableType: "object",

        valueProp: "validation",
        onChangeProp: "onValidationChange"
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
      as={"form"}
      data-plasmic-name={"formContainer"}
      data-plasmic-override={overrides.formContainer}
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
        sty.formContainer
      )}
      onSubmit={async event => {
        const $steps = {};

        $steps["runCode"] = true
          ? (() => {
              const actionArgs = {
                customFunction: async () => {
                  return (() => {
                    return event.preventDefault();
                  })();
                }
              };
              return (({ customFunction }) => {
                return customFunction();
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runCode"] != null &&
          typeof $steps["runCode"] === "object" &&
          typeof $steps["runCode"].then === "function"
        ) {
          $steps["runCode"] = await $steps["runCode"];
        }

        $steps["runOnSubmit"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onSubmit"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnSubmit"] != null &&
          typeof $steps["runOnSubmit"] === "object" &&
          typeof $steps["runOnSubmit"].then === "function"
        ) {
          $steps["runOnSubmit"] = await $steps["runOnSubmit"];
        }
      }}
    >
      {renderPlasmicSlot({
        defaultContents: null,
        value: args.content
      })}
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  formContainer: ["formContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  formContainer: "form";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForm__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForm__VariantsArgs;
    args?: PlasmicForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForm__ArgsType,
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
          internalArgPropNames: PlasmicForm__ArgProps,
          internalVariantPropNames: PlasmicForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "formContainer") {
    func.displayName = "PlasmicForm";
  } else {
    func.displayName = `PlasmicForm.${nodeName}`;
  }
  return func;
}

export const PlasmicForm = Object.assign(
  // Top-level PlasmicForm renders the root element
  makeNodeComponent("formContainer"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicForm
    internalVariantProps: PlasmicForm__VariantProps,
    internalArgProps: PlasmicForm__ArgProps
  }
);

export default PlasmicForm;
/* prettier-ignore-end */
