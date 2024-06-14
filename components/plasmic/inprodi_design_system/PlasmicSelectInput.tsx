// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5nPYJMkHKsudqrrya3SLGq
// Component: fGNBuRZSQyEi

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

import DropdownConfig from "~/components/Dropdown/Dropdown.tsx"; // plasmic-import: 2FAf85kMy1wq/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5nPYJMkHKsudqrrya3SLGq/projectcss
import sty from "./PlasmicSelectInput.module.css"; // plasmic-import: fGNBuRZSQyEi/css

import CaretUpDownsvgIcon from "./icons/PlasmicIcon__CaretUpDownsvg"; // plasmic-import: HuxtV9vRFLhq/icon

createPlasmicElementProxy;

export type PlasmicSelectInput__VariantMembers = {
  size: "small" | "middle" | "large";
  isFocus: "isFocus";
};
export type PlasmicSelectInput__VariantsArgs = {
  size?: SingleChoiceArg<"small" | "middle" | "large">;
  isFocus?: SingleBooleanChoiceArg<"isFocus">;
};
type VariantPropType = keyof PlasmicSelectInput__VariantsArgs;
export const PlasmicSelectInput__VariantProps = new Array<VariantPropType>(
  "size",
  "isFocus"
);

export type PlasmicSelectInput__ArgsType = {
  onSizeChange?: (val: any) => void;
  value?: any;
  onValueChange?: (val: string) => void;
  placeholder?: string;
  menu?: React.ReactNode;
  width?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  onOpenChange?: () => void;
  dropdownStyle?: any;
  searchValue?: string;
  onSearchValueChange?: (val: string) => void;
  onSearch?: (value: string) => void;
};
type ArgPropType = keyof PlasmicSelectInput__ArgsType;
export const PlasmicSelectInput__ArgProps = new Array<ArgPropType>(
  "onSizeChange",
  "value",
  "onValueChange",
  "placeholder",
  "menu",
  "width",
  "isSearchable",
  "isLoading",
  "onOpenChange",
  "dropdownStyle",
  "searchValue",
  "onSearchValueChange",
  "onSearch"
);

export type PlasmicSelectInput__OverridesType = {
  dropdown?: Flex__<typeof DropdownConfig>;
  inputContainer?: Flex__<"div">;
  svg?: Flex__<"svg">;
  freeBox?: Flex__<"div">;
};

export interface DefaultSelectInputProps {
  onSizeChange?: (val: any) => void;
  value?: any;
  onValueChange?: (val: string) => void;
  placeholder?: string;
  menu?: React.ReactNode;
  width?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  onOpenChange?: () => void;
  dropdownStyle?: any;
  searchValue?: string;
  onSearchValueChange?: (val: string) => void;
  onSearch?: (value: string) => void;
  size?: SingleChoiceArg<"small" | "middle" | "large">;
  isFocus?: SingleBooleanChoiceArg<"isFocus">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelectInput__RenderFunc(props: {
  variants: PlasmicSelectInput__VariantsArgs;
  args: PlasmicSelectInput__ArgsType;
  overrides: PlasmicSelectInput__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Seleccionar...",
          isSearchable: false,
          isLoading: false,
          dropdownStyle: { width: "auto", padding: "4px", overflow: "hidden" }
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "dropdown.isLoading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props["isLoading"]
      },
      {
        path: "size",
        type: "writable",
        variableType: "variant",

        valueProp: "size",
        onChangeProp: "onSizeChange"
      },
      {
        path: "value",
        type: "writable",
        variableType: "object",

        valueProp: "value",
        onChangeProp: "onValueChange"
      },
      {
        path: "isFocus",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isFocus
      },
      {
        path: "dropdown.searchValue",
        type: "writable",
        variableType: "text",

        valueProp: "searchValue",
        onChangeProp: "onSearchValueChange"
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
    <DropdownConfig
      data-plasmic-name={"dropdown"}
      data-plasmic-override={overrides.dropdown}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.dropdown,
        {
          [sty.dropdownisFocus]: hasVariant($state, "isFocus", "isFocus"),
          [sty.dropdownsize_large]: hasVariant($state, "size", "large"),
          [sty.dropdownsize_middle]: hasVariant($state, "size", "middle"),
          [sty.dropdownsize_small]: hasVariant($state, "size", "small")
        }
      )}
      content={
        <Stack__
          as={"div"}
          data-plasmic-name={"inputContainer"}
          data-plasmic-override={overrides.inputContainer}
          hasGap={true}
          className={classNames(
            projectcss.all,
            sty.inputContainer,
            hasVariant($state, "isFocus", "isFocus")
              ? "vizion-select focused"
              : "vizion-select",
            {
              [sty.inputContainerisFocus]: hasVariant(
                $state,
                "isFocus",
                "isFocus"
              ),
              [sty.inputContainersize_large]: hasVariant(
                $state,
                "size",
                "large"
              ),
              [sty.inputContainersize_middle]: hasVariant(
                $state,
                "size",
                "middle"
              ),
              [sty.inputContainersize_small]: hasVariant(
                $state,
                "size",
                "small"
              )
            }
          )}
          style={(() => {
            try {
              return {
                width: $props.width ?? "100%"
              };
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        >
          {(() => {
            try {
              return !$state.value?.value;
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
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__nsUnA,
                {
                  [sty.textsize_large__nsUnAPp0Zg]: hasVariant(
                    $state,
                    "size",
                    "large"
                  ),
                  [sty.textsize_small__nsUnAp4Z2B]: hasVariant(
                    $state,
                    "size",
                    "small"
                  )
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.placeholder;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          ) : null}
          {(() => {
            try {
              return $state.value?.value;
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
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qnukJ,
                {
                  [sty.textsize_large__qnukJPp0Zg]: hasVariant(
                    $state,
                    "size",
                    "large"
                  )
                }
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $state.value?.label;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          ) : null}
          <CaretUpDownsvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </Stack__>
      }
      dropdownContent={
        <Stack__
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          {renderPlasmicSlot({
            defaultContents: null,
            value: args.menu
          })}
        </Stack__>
      }
      dropdownStyle={args.dropdownStyle}
      isLoading={generateStateValueProp($state, ["dropdown", "isLoading"])}
      isSearchable={args.isSearchable}
      onIsLoadingChange={generateStateOnChangeProp($state, [
        "dropdown",
        "isLoading"
      ])}
      onOpenChange={async value => {
        const $steps = {};

        $steps["updateIsFocus"] = true
          ? (() => {
              const actionArgs = { vgroup: "isFocus", operation: 2 };
              return (({ vgroup, value }) => {
                if (typeof value === "string") {
                  value = [value];
                }

                const oldValue = $stateGet($state, vgroup);
                $stateSet($state, vgroup, !oldValue);
                return !oldValue;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["updateIsFocus"] != null &&
          typeof $steps["updateIsFocus"] === "object" &&
          typeof $steps["updateIsFocus"].then === "function"
        ) {
          $steps["updateIsFocus"] = await $steps["updateIsFocus"];
        }

        $steps["runOnOpenChange"] = true
          ? (() => {
              const actionArgs = { eventRef: $props["onOpenChange"] };
              return (({ eventRef, args }) => {
                return eventRef?.(...(args ?? []));
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["runOnOpenChange"] != null &&
          typeof $steps["runOnOpenChange"] === "object" &&
          typeof $steps["runOnOpenChange"].then === "function"
        ) {
          $steps["runOnOpenChange"] = await $steps["runOnOpenChange"];
        }
      }}
      onSearchValueChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["dropdown", "searchValue"]).apply(
          null,
          eventArgs
        );
        args.onSearch.apply(null, eventArgs);
      }}
      searchValue={generateStateValueProp($state, ["dropdown", "searchValue"])}
      trigger={"click"}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  dropdown: ["dropdown", "inputContainer", "svg", "freeBox"],
  inputContainer: ["inputContainer", "svg"],
  svg: ["svg"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  dropdown: typeof DropdownConfig;
  inputContainer: "div";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelectInput__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelectInput__VariantsArgs;
    args?: PlasmicSelectInput__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelectInput__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelectInput__ArgsType,
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
          internalArgPropNames: PlasmicSelectInput__ArgProps,
          internalVariantPropNames: PlasmicSelectInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelectInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "dropdown") {
    func.displayName = "PlasmicSelectInput";
  } else {
    func.displayName = `PlasmicSelectInput.${nodeName}`;
  }
  return func;
}

export const PlasmicSelectInput = Object.assign(
  // Top-level PlasmicSelectInput renders the root element
  makeNodeComponent("dropdown"),
  {
    // Helper components rendering sub-elements
    inputContainer: makeNodeComponent("inputContainer"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicSelectInput
    internalVariantProps: PlasmicSelectInput__VariantProps,
    internalArgProps: PlasmicSelectInput__ArgProps
  }
);

export default PlasmicSelectInput;
/* prettier-ignore-end */
