/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface FireParagraph {
    }
    interface HsButton {
        "size": string;
        "variant": string;
    }
    interface HsGrid {
        "columns": number;
    }
    interface HsGridColumn {
    }
    interface HsHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It mus take a number from `1` to `6`.
         */
        "level": number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center';
    }
    interface HsIconDownload {
        "size": string;
    }
    interface HsIconEye {
        "size": string;
    }
    interface HsIconFacebook {
        "size": string;
    }
    interface HsIconPhone {
        "size": string;
    }
    interface HsIconSearch {
        "size": string;
    }
    interface HsRadio {
        /**
          * The unique name of the radio button group. Must match the `name` attribute of its parent `<hs-radio-group />`.
         */
        "name": any;
        /**
          * The particular value of this radio input item.
         */
        "value": any;
    }
    interface HsRadioButton {
        "checked": any;
        "value": any;
    }
    interface HsRadioButtonGroup {
        "name": any;
    }
    interface HsRadioGroup {
        /**
          * Unique name to group these options under. Child radio inputs must feature the same `name` attribute value.
         */
        "name": any;
        /**
          * Based in the `Orientation` ambient type, will display the radio group stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation": Orientation;
        /**
          * Default value, which will preselect the matching radio element.
         */
        "selectedValue": any;
    }
    interface HsStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap": 'large' | 'small' | 'none';
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation": Orientation;
    }
    interface HsTab {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex": number;
    }
}
export interface HsButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsButtonElement;
}
export interface HsRadioButtonGroupCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsRadioButtonGroupElement;
}
export interface HsTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsTabElement;
}
declare global {
    interface HTMLFireParagraphElement extends Components.FireParagraph, HTMLStencilElement {
    }
    var HTMLFireParagraphElement: {
        prototype: HTMLFireParagraphElement;
        new (): HTMLFireParagraphElement;
    };
    interface HTMLHsButtonElement extends Components.HsButton, HTMLStencilElement {
    }
    var HTMLHsButtonElement: {
        prototype: HTMLHsButtonElement;
        new (): HTMLHsButtonElement;
    };
    interface HTMLHsGridElement extends Components.HsGrid, HTMLStencilElement {
    }
    var HTMLHsGridElement: {
        prototype: HTMLHsGridElement;
        new (): HTMLHsGridElement;
    };
    interface HTMLHsGridColumnElement extends Components.HsGridColumn, HTMLStencilElement {
    }
    var HTMLHsGridColumnElement: {
        prototype: HTMLHsGridColumnElement;
        new (): HTMLHsGridColumnElement;
    };
    interface HTMLHsHeaderElement extends Components.HsHeader, HTMLStencilElement {
    }
    var HTMLHsHeaderElement: {
        prototype: HTMLHsHeaderElement;
        new (): HTMLHsHeaderElement;
    };
    interface HTMLHsIconDownloadElement extends Components.HsIconDownload, HTMLStencilElement {
    }
    var HTMLHsIconDownloadElement: {
        prototype: HTMLHsIconDownloadElement;
        new (): HTMLHsIconDownloadElement;
    };
    interface HTMLHsIconEyeElement extends Components.HsIconEye, HTMLStencilElement {
    }
    var HTMLHsIconEyeElement: {
        prototype: HTMLHsIconEyeElement;
        new (): HTMLHsIconEyeElement;
    };
    interface HTMLHsIconFacebookElement extends Components.HsIconFacebook, HTMLStencilElement {
    }
    var HTMLHsIconFacebookElement: {
        prototype: HTMLHsIconFacebookElement;
        new (): HTMLHsIconFacebookElement;
    };
    interface HTMLHsIconPhoneElement extends Components.HsIconPhone, HTMLStencilElement {
    }
    var HTMLHsIconPhoneElement: {
        prototype: HTMLHsIconPhoneElement;
        new (): HTMLHsIconPhoneElement;
    };
    interface HTMLHsIconSearchElement extends Components.HsIconSearch, HTMLStencilElement {
    }
    var HTMLHsIconSearchElement: {
        prototype: HTMLHsIconSearchElement;
        new (): HTMLHsIconSearchElement;
    };
    interface HTMLHsRadioElement extends Components.HsRadio, HTMLStencilElement {
    }
    var HTMLHsRadioElement: {
        prototype: HTMLHsRadioElement;
        new (): HTMLHsRadioElement;
    };
    interface HTMLHsRadioButtonElement extends Components.HsRadioButton, HTMLStencilElement {
    }
    var HTMLHsRadioButtonElement: {
        prototype: HTMLHsRadioButtonElement;
        new (): HTMLHsRadioButtonElement;
    };
    interface HTMLHsRadioButtonGroupElement extends Components.HsRadioButtonGroup, HTMLStencilElement {
    }
    var HTMLHsRadioButtonGroupElement: {
        prototype: HTMLHsRadioButtonGroupElement;
        new (): HTMLHsRadioButtonGroupElement;
    };
    interface HTMLHsRadioGroupElement extends Components.HsRadioGroup, HTMLStencilElement {
    }
    var HTMLHsRadioGroupElement: {
        prototype: HTMLHsRadioGroupElement;
        new (): HTMLHsRadioGroupElement;
    };
    interface HTMLHsStackElement extends Components.HsStack, HTMLStencilElement {
    }
    var HTMLHsStackElement: {
        prototype: HTMLHsStackElement;
        new (): HTMLHsStackElement;
    };
    interface HTMLHsTabElement extends Components.HsTab, HTMLStencilElement {
    }
    var HTMLHsTabElement: {
        prototype: HTMLHsTabElement;
        new (): HTMLHsTabElement;
    };
    interface HTMLHsTabListElement extends Components.HsTabList, HTMLStencilElement {
    }
    var HTMLHsTabListElement: {
        prototype: HTMLHsTabListElement;
        new (): HTMLHsTabListElement;
    };
    interface HTMLHsTabPanelElement extends Components.HsTabPanel, HTMLStencilElement {
    }
    var HTMLHsTabPanelElement: {
        prototype: HTMLHsTabPanelElement;
        new (): HTMLHsTabPanelElement;
    };
    interface HTMLHsTabPanelsElement extends Components.HsTabPanels, HTMLStencilElement {
    }
    var HTMLHsTabPanelsElement: {
        prototype: HTMLHsTabPanelsElement;
        new (): HTMLHsTabPanelsElement;
    };
    interface HTMLHsTabsElement extends Components.HsTabs, HTMLStencilElement {
    }
    var HTMLHsTabsElement: {
        prototype: HTMLHsTabsElement;
        new (): HTMLHsTabsElement;
    };
    interface HTMLElementTagNameMap {
        "fire-paragraph": HTMLFireParagraphElement;
        "hs-button": HTMLHsButtonElement;
        "hs-grid": HTMLHsGridElement;
        "hs-grid-column": HTMLHsGridColumnElement;
        "hs-header": HTMLHsHeaderElement;
        "hs-icon-download": HTMLHsIconDownloadElement;
        "hs-icon-eye": HTMLHsIconEyeElement;
        "hs-icon-facebook": HTMLHsIconFacebookElement;
        "hs-icon-phone": HTMLHsIconPhoneElement;
        "hs-icon-search": HTMLHsIconSearchElement;
        "hs-radio": HTMLHsRadioElement;
        "hs-radio-button": HTMLHsRadioButtonElement;
        "hs-radio-button-group": HTMLHsRadioButtonGroupElement;
        "hs-radio-group": HTMLHsRadioGroupElement;
        "hs-stack": HTMLHsStackElement;
        "hs-tab": HTMLHsTabElement;
        "hs-tab-list": HTMLHsTabListElement;
        "hs-tab-panel": HTMLHsTabPanelElement;
        "hs-tab-panels": HTMLHsTabPanelsElement;
        "hs-tabs": HTMLHsTabsElement;
    }
}
declare namespace LocalJSX {
    interface FireParagraph {
    }
    interface HsButton {
        "onClicked"?: (event: HsButtonCustomEvent<any>) => void;
        "size"?: string;
        "variant"?: string;
    }
    interface HsGrid {
        "columns"?: number;
    }
    interface HsGridColumn {
    }
    interface HsHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It mus take a number from `1` to `6`.
         */
        "level"?: number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center';
    }
    interface HsIconDownload {
        "size"?: string;
    }
    interface HsIconEye {
        "size"?: string;
    }
    interface HsIconFacebook {
        "size"?: string;
    }
    interface HsIconPhone {
        "size"?: string;
    }
    interface HsIconSearch {
        "size"?: string;
    }
    interface HsRadio {
        /**
          * The unique name of the radio button group. Must match the `name` attribute of its parent `<hs-radio-group />`.
         */
        "name"?: any;
        /**
          * The particular value of this radio input item.
         */
        "value"?: any;
    }
    interface HsRadioButton {
        "checked"?: any;
        "value"?: any;
    }
    interface HsRadioButtonGroup {
        "name"?: any;
        "onValueChange"?: (event: HsRadioButtonGroupCustomEvent<any>) => void;
    }
    interface HsRadioGroup {
        /**
          * Unique name to group these options under. Child radio inputs must feature the same `name` attribute value.
         */
        "name"?: any;
        /**
          * Based in the `Orientation` ambient type, will display the radio group stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation"?: Orientation;
        /**
          * Default value, which will preselect the matching radio element.
         */
        "selectedValue"?: any;
    }
    interface HsStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap"?: 'large' | 'small' | 'none';
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation"?: Orientation;
    }
    interface HsTab {
        "onTabClick"?: (event: HsTabCustomEvent<any>) => void;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex"?: number;
    }
    interface IntrinsicElements {
        "fire-paragraph": FireParagraph;
        "hs-button": HsButton;
        "hs-grid": HsGrid;
        "hs-grid-column": HsGridColumn;
        "hs-header": HsHeader;
        "hs-icon-download": HsIconDownload;
        "hs-icon-eye": HsIconEye;
        "hs-icon-facebook": HsIconFacebook;
        "hs-icon-phone": HsIconPhone;
        "hs-icon-search": HsIconSearch;
        "hs-radio": HsRadio;
        "hs-radio-button": HsRadioButton;
        "hs-radio-button-group": HsRadioButtonGroup;
        "hs-radio-group": HsRadioGroup;
        "hs-stack": HsStack;
        "hs-tab": HsTab;
        "hs-tab-list": HsTabList;
        "hs-tab-panel": HsTabPanel;
        "hs-tab-panels": HsTabPanels;
        "hs-tabs": HsTabs;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fire-paragraph": LocalJSX.FireParagraph & JSXBase.HTMLAttributes<HTMLFireParagraphElement>;
            "hs-button": LocalJSX.HsButton & JSXBase.HTMLAttributes<HTMLHsButtonElement>;
            "hs-grid": LocalJSX.HsGrid & JSXBase.HTMLAttributes<HTMLHsGridElement>;
            "hs-grid-column": LocalJSX.HsGridColumn & JSXBase.HTMLAttributes<HTMLHsGridColumnElement>;
            "hs-header": LocalJSX.HsHeader & JSXBase.HTMLAttributes<HTMLHsHeaderElement>;
            "hs-icon-download": LocalJSX.HsIconDownload & JSXBase.HTMLAttributes<HTMLHsIconDownloadElement>;
            "hs-icon-eye": LocalJSX.HsIconEye & JSXBase.HTMLAttributes<HTMLHsIconEyeElement>;
            "hs-icon-facebook": LocalJSX.HsIconFacebook & JSXBase.HTMLAttributes<HTMLHsIconFacebookElement>;
            "hs-icon-phone": LocalJSX.HsIconPhone & JSXBase.HTMLAttributes<HTMLHsIconPhoneElement>;
            "hs-icon-search": LocalJSX.HsIconSearch & JSXBase.HTMLAttributes<HTMLHsIconSearchElement>;
            "hs-radio": LocalJSX.HsRadio & JSXBase.HTMLAttributes<HTMLHsRadioElement>;
            "hs-radio-button": LocalJSX.HsRadioButton & JSXBase.HTMLAttributes<HTMLHsRadioButtonElement>;
            "hs-radio-button-group": LocalJSX.HsRadioButtonGroup & JSXBase.HTMLAttributes<HTMLHsRadioButtonGroupElement>;
            "hs-radio-group": LocalJSX.HsRadioGroup & JSXBase.HTMLAttributes<HTMLHsRadioGroupElement>;
            "hs-stack": LocalJSX.HsStack & JSXBase.HTMLAttributes<HTMLHsStackElement>;
            "hs-tab": LocalJSX.HsTab & JSXBase.HTMLAttributes<HTMLHsTabElement>;
            "hs-tab-list": LocalJSX.HsTabList & JSXBase.HTMLAttributes<HTMLHsTabListElement>;
            "hs-tab-panel": LocalJSX.HsTabPanel & JSXBase.HTMLAttributes<HTMLHsTabPanelElement>;
            "hs-tab-panels": LocalJSX.HsTabPanels & JSXBase.HTMLAttributes<HTMLHsTabPanelsElement>;
            "hs-tabs": LocalJSX.HsTabs & JSXBase.HTMLAttributes<HTMLHsTabsElement>;
        }
    }
}
