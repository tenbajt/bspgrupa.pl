import { createGlobalStyle } from 'styled-components'
import { color, shadow } from '../tenbajt/Utils'

export default createGlobalStyle`
    /*
    Use a better box model (opinionated).
    */

    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }

    /*
    1. Correct the line height in all browsers.
    2. Prevent adjustments of font size after orientation changes in iOS.
    3. Use a more readable tab size (opinionated).
    */

    html {
        height: 100%;
        line-height: 1.15; // 1
        -moz-tab-size: 4; // 3
          -o-tab-size: 4; // 3
             tab-size: 4; // 3
        -webkit-text-size-adjust: 100%; // 2
    }

    /*
    Remove the margin in all browsers.
    */

    body {
        margin: 0;
        height: 100%;
        font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
    }

    /*
    1. Add the correct height in Firefox.
    2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
    */

    hr {
        color: inherit; // 2
        height: 0; // 1
    }

    /*
    Add the correct text decoration in Chrome, Edge, and Safari.
    */

    abbr[title] {
        -webkit-text-decoration: underline dotted;
                text-decoration: underline dotted;
    }

    /*
    Add the correct font weight in Edge and Safari.
    */

    b,
    strong {
        font-weight: bolder;
    }

    /*
    1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
    2. Correct the odd 'em' font sizing in all browsers.
    */

    pre,
    kbd,
    code,
    samp {
        font-size: 1em; /* 2 */
        font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace; /* 1 */
    }

    /*
    Add the correct font size in all browsers.
    */

    small {
        font-size: 80%;
    }

    /**
    Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
    */

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    /*
    1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
    2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
    */

    table {
        text-indent: 0; /* 1 */
        border-color: inherit; /* 2 */
    }

    /*
    1. Change the font styles in all browsers.
    2. Remove the margin in Firefox and Safari.
    */

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0; /* 2 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        font-family: inherit; /* 1 */
    }

    /*
    Remove the inheritance of text transform in Edge and Firefox.
    1. Remove the inheritance of text transform in Firefox.
    */

    button,
    select { /* 1 */
        text-transform: none;
    }

    /*
    Correct the inability to style clickable types in iOS and Safari.
    */

    button,
    [type='reset'],
    [type='button'],
    [type='submit'] {
        -webkit-appearance: button;
    }

    /*
    Remove the inner border and padding in Firefox.
    */

    ::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    /*
    Restore the focus styles unset by the previous rule.
    */

    :-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    /*
    Remove the additional ':invalid' styles in Firefox.
    See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
    */

    :-moz-ui-invalid {
        box-shadow: none;
    }

    /*
    Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
    */

    legend {
        padding: 0;
    }

    /*
    Add the correct vertical alignment in Chrome and Firefox.
    */

    progress {
        vertical-align: baseline;
    }

    /*
    Correct the cursor style of increment and decrement buttons in Safari.
    */

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        height: auto;
    }

    /*
    1. Correct the odd appearance in Chrome and Safari.
    2. Correct the outline style in Safari.
    */

    [type='search'] {
        outline-offset: -2px; /* 2 */
        -webkit-appearance: textfield; /* 1 */
    }

    /*
    Remove the inner padding in Chrome and Safari on macOS.
    */

    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    /*
    1. Correct the inability to style clickable types in iOS and Safari.
    2. Change font properties to 'inherit' in Safari.
    */

    ::-webkit-file-upload-button {
        font: inherit; /* 2 */
        -webkit-appearance: button; /* 1 */
    }

    /*
    Add the correct display in Chrome and Safari.
    */

    summary {
        display: list-item;
    }

    /*
    Removes the default spacing and border for appropriate elements.
    */

    p,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    pre,
    figure,
    blockquote {
        margin: 0;
    }

    button {
        background-color: transparent;
        background-image: none;
    }

    fieldset {
        margin: 0;
        padding: 0;
    }

    /*
    |--------------------------------------------------------------------------
    | Tailwind custom reset styles.
    |--------------------------------------------------------------------------
    */

    /*
    1. Use the user's configured 'sans' font-family (with Tailwind's default
       sans-serif font stack as a fallback) as a sane default.
    2. Use Tailwind's default "normal" line-height so the user isn't forced
       to override it to ensure consistency even when using the default theme.
    */

    html {
        line-height: 1.5; /* 2 */
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 1 */
    }

    /*
    Inherit font-family and line-height from 'html' so users can set them as
    a class directly on the 'html' element.
    */

    body {
        font-family: inherit;
        line-height: inherit;
    }

    /*
    1. Prevent padding and border from affecting element width.
    
       We used to set this in the html element and inherit from
       the parent element for everything else. This caused issues
       in shadow-dom-enhanced elements like <details> where the content
       is wrapped by a div with box-sizing set to 'content-box'.
    
       https://github.com/mozdevs/cssremedy/issues/4
    
    
    2. Allow adding a border to an element by just adding a border-width.
    
       By default, the way the browser specifies that an element should have no
       border is by setting it's border-style to 'none' in the user-agent
       stylesheet.
    
       In order to easily add borders to elements by just setting the 'border-width'
       property, we change the default border-style for all elements to 'solid', and
       use border-width to hide them instead. This way our 'border' utilities only
       need to set the 'border-width' property instead of the entire 'border'
       shorthand, making our border utilities much more straightforward to compose.
    
       https://github.com/tailwindcss/tailwindcss/pull/116
    */

    *,
    ::after,
    ::before {
        box-sizing: border-box; /* 1 */
        border-width: 0; /* 2 */
        border-style: solid; /* 2 */
        border-color: currentColor; /* 2 */
    }

    /*
    Ensure horizontal rules are visible by default
    */

    hr {
        border-top-width: 1px;
    }

    /*
    Undo the 'border-style: none' reset that Normalize applies to images so that
    our 'border-{width}' utilities have the expected effect.
    
    The Normalize reset is unnecessary for us since we default the border-width
    to 0 on all elements.
    
    https://github.com/tailwindcss/tailwindcss/issues/362
    */

    img {
        border-style: solid;
    }

    textarea {
        resize: vertical;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: #9ca3af;
        opacity: 1;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: #9ca3af;
        opacity: 1;
    }

    input::placeholder,
    textarea::placeholder {
        color: #9ca3af;
        opacity: 1;
    }

    button,
    [role="button"] {
        cursor: pointer;
    }

    table {
        border-collapse: collapse;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    /*
    Reset links to optimize for opt-in styling instead of
    opt-out.
    */

    a {
        color: inherit;
        text-decoration: inherit;
    }

    /*
    Reset form element properties that are easy to forget to
    style explicitly so you don't inadvertently introduce
    styles that deviate from your design system. These styles
    supplement a partial reset that is already applied by
    normalize.css.
    */

    button,
    input,
    optgroup,
    select,
    textarea {
        color: inherit;
        padding: 0;
        line-height: inherit;
    }

    /*
    Use the configured 'mono' font family for elements that
    are expected to be rendered with a monospace font, falling
    back to the system monospace stack if there is no configured
    'mono' font family.
    */

    kbd,
    pre,
    code,
    samp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    /*
    1. Make replaced elements 'display: block' by default as that's
       the behavior you want almost all of the time. Inspired by
       CSS Remedy, with 'svg' added as well.
    
       https://github.com/mozdevs/cssremedy/issues/14
     
    2. Add 'vertical-align: middle' to align replaced elements more
       sensibly by default when overriding 'display' by adding a
       utility like 'inline'.
    
       This can trigger a poorly considered linting error in some
       tools but is included by design.
     
       https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
    */

    img,
    svg,
    audio,
    video,
    embed,
    canvas,
    iframe,
    object {
        display: block; /* 1 */
        vertical-align: middle; /* 2 */
    }

    /*
    Constrain images and videos to the parent width and preserve
    their intrinsic aspect ratio.
    
    https://github.com/mozdevs/cssremedy/issues/14
    */

    img,
    video {
        height: auto;
        max-width: 100%;
    }

    *, ::before, ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        --tw-border-opacity: 1;
        border-color: ${color.coolGray(200)};
        --tw-shadow: 0 0 #0000;
        --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-blur: var(--tw-empty,/*!*/ /*!*/);
        --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
        --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
        --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
        --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
        --tw-invert: var(--tw-empty,/*!*/ /*!*/);
        --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
        --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
        --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
        --tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
        --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
        --tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    }

    select,
    textarea,
    [multiple],
    [type='url'],
    [type='tel'],
    [type='text'],
    [type='date'],
    [type='time'],
    [type='week'],
    [type='email'],
    [type='month'],
    [type='number'],
    [type='search'],
    [type='password'],
    [type='datetime-local'] {
        border: 1px solid ${color.coolGray(500)};
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5rem;
        border-radius: 0px;
        background-color: ${color.white()};
        -webkit-appearance: none;
           -moz-appearance: none;
                appearance: none;
    }

    select:focus,
    textarea:focus,
    [multiple]:focus,
    [type='url']:focus,
    [type='tel']:focus,
    [type='text']:focus,
    [type='date']:focus,
    [type='time']:focus,
    [type='week']:focus,
    [type='email']:focus,
    [type='month']:focus,
    [type='number']:focus,
    [type='search']:focus
    [type='password']:focus,
    [type='datetime-local']:focus {
        --tw-ring-color: ${color.blue(600)};
        --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        outline: 2px solid transparent;
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
        border-color: ${color.blue(600)};
        outline-offset: 2px;
    }

    input::-moz-placeholder,
    textarea::-moz-placeholder {
        color: ${color.coolGray(500)};
        opacity: 1;
    }

    input:-ms-input-placeholder,
    textarea:-ms-input-placeholder {
        color: ${color.coolGray(500)};
        opacity: 1;
    }

    input::placeholder,
    textarea::placeholder {
        color: ${color.coolGray(500)};
        opacity: 1;
    }

    ::-webkit-datetime-edit-fields-wrapper {
        padding: 0;
    }

    ::-webkit-date-and-time-value {
        min-height: 1.5em;
    }

    select {
        padding-right: 2.5rem;
        background-size: 1.5em 1.5em;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 0.5rem center;
        -webkit-print-color-adjust: exact;
                      color-adjust: exact;
    }

    [multiple] {
        padding-right: 0.75rem;
        background-size: initial;
        background-image: initial;
        background-repeat: unset;
        background-position: initial;
        -webkit-print-color-adjust: unset;
                      color-adjust: unset;
    }

    [type='radio'],
    [type='checkbox'] {
        width: 1rem;
        color: ${color.blue(600)};
        height: 1rem;
        padding: 0;
        display: inline-block;
        flex-shrink: 0;
        border-width: 1px;
        border-color: ${color.coolGray(500)};
        vertical-align: middle;
        background-color: ${color.white()};
        background-origin: border-box;
        -webkit-appearance: none;
           -moz-appearance: none;
                appearance: none;
        -webkit-user-select: none;
           -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
        -webkit-print-color-adjust: exact;
                      color-adjust: exact;
    }

    [type='radio'] {
        border-radius: 100%;
    }

    [type='checkbox'] {
        border-radius: 0px;
    }

    [type='radio']:focus
    [type='checkbox']:focus {
        --tw-ring-color: ${color.blue(600)};
        --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        --tw-ring-offset-width: 2px;
        --tw-ring-offset-color: ${color.white()};
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        outline: 2px solid transparent;
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
        outline-offset: 2px;
    }

    [type='radio']:checked,
    [type='checkbox']:checked {
        border-color: transparent;
        background-size: 100% 100%;
        background-color: currentColor;
        background-repeat: no-repeat;
        background-position: center;
    }

    [type='radio']:checked {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
    }

    [type='checkbox']:checked {
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
    }

    [type='radio']:checked:hover,
    [type='radio']:checked:focus
    [type='checkbox']:checked:hover,
    [type='checkbox']:checked:focus {
        border-color: transparent;
        background-color: currentColor;
    }

    [type='checkbox']:indeterminate {
        border-color: transparent;
        background-size: 100% 100%;
        background-color: currentColor;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center;
    }

    [type='checkbox']:indeterminate:hover,
    [type='checkbox']:indeterminate:focus {
        border-color: transparent;
        background-color: currentColor;
    }

    [type='file'] {
        padding: 0;
        font-size: unset;
        background: unset;
        line-height: inherit;
        border-color: inherit;
        border-width: 0;
        border-radius: 0;
    }

    [type='file']:focus {
        outline: 1px auto -webkit-focus-ring-color;
    }

    /*
    |--------------------------------------------------------------------------
    | Tenbajt custom reset styles.
    |--------------------------------------------------------------------------
    */

    a,
    button {
        transition: background-color 150ms, border-color 150ms, color 150ms;
    }

    select,
    textarea,
    [type="tel"],
    [type="text"],
    [type="email"],
    [type="search"],
    [type="number"],
    [type="checkbox"],
    [type="password"] {
        box-shadow: ${shadow.sm};
        border-color: ${color.coolGray(300)};
        border-radius: 0.125rem;
        background-color: ${color.coolGray(50)};
    }

    textarea {
        resize: none;
    }

    [type="number"]:out-of-range {
        border-color: ${color.red(500)};
        background-color: #${color.red(50)};
    }

    [type="number"]:focus:out-of-range {
        --tw-ring-color: ${color.red(500)};
        border-color: var(--tw-ring-color);
    }

    [type="radio"] {
        box-shadow: ${shadow.sm};
        border-color: #d1d5db;
        background-color: #f9fafb;
    }

    [type="radio"],
    [type="checkbox"] {
        color: #16a34a;
        cursor: pointer;
    }

    main, #___gatsby, #gatsby-focus-wrapper {
        height: 100%;
    }
`