// node zed/theme/generate.js
import fs from "node:fs/promises";

const DARK0 = "#2e3440"; // it is used for background and area coloring while it's not used for syntax highlighting at all because otherwise it would collide with the same background color.
const DARK1 = "#3b4252"; // Used as a lighter background color for UI elements like status bars.
const DARK2 = "#434c5e"; // Used as line highlighting in the editor. In the UI scope it may be used as selection- and highlight color.
const DARK3 = "#4c566a"; // Used for comments, invisibles, indent- and wrap guide marker. In the UI scope used as pseudoclass color for disabled elements.

const LIGHT0 = "#d8dee9"; // it is used for UI elements like the text editor caret. In the context of syntax highlighting it is used as text color for variables, constants, attributes and fields.
const LIGHT1 = "#e5e9f0"; // it is used for more subtle/inconspicuous UI text elements that do not need so much visual attention. Other use cases are also state animations like a more brighter text color when a button is hovered, active or focused.
const LIGHT2 = "#eceff4"; // it is used for elevated UI text elements that require more visual attention. In the context of syntax highlighting it is used as text color for plain text as well as reserved and structuring syntax characters like curly- and square brackets.

// light cyan/greenish
const FROST0 = "#8fbcbb"; // Used for classes, types and documentation tags.
// cyan
const FROST1 = "#88c0d0"; // Represents the accent color of the color palette. Main color for primary UI elements and methods/functions. Can be used for - Markup quotes - Markup link URLs
// blue
const FROST2 = "#81a1c1"; // Used for language-specific syntactic/reserved support characters and keywords, operators, tags, units and punctuations like (semi)colons,commas and braces.
// dark blue
const FROST3 = "#5e81ac"; // Used for markup doctypes, import/include/require statements, pre-processor statements and at-rules (`@`).

const RED0 = "#bf616a"; // Used for errors, git/diff deletion and linter marker.
const ORANGE0 = "#d08770"; // Used for annotations.
const YELLOW0 = "#ebcb8b"; // Used for escape characters, regular expressions and markup entities. In the UI scope used for warnings and git/diff renamings.
const GREEN0 = "#a3be8c"; // Main color for strings and attribute values. In the UI scope used for git/diff additions and success visualizations.
const PURPLE0 = "#b48ead"; // Used for numbers.

const TRANSPARENT = "#00000000";

let theme_data = themes();
await fs.writeFile("./nord_theme.json", JSON.stringify(theme_data, null, 2));
await fs.writeFile("/Users/neo/.config/zed/themes/nord_theme.json", JSON.stringify(theme_data, null, 2));

function themes() {
  return {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: "Nord",
    author: "Neo",
    themes: [theme()],
  };
}

function theme() {
  let background = shade(DARK0, -30);
  let popup_background = shade(DARK1, -30);
  let border = DARK1;
  let highlight = DARK2;
  let scrollbar = DARK2;
  let popup_select = DARK3;
  let select = shade(DARK3, 50) + "80";

  let accent = FROST1;
  let text_muted = shade(LIGHT0, -20);
  let foreground = LIGHT2;

  let red = RED0;
  let yellow = YELLOW0;
  let blue = FROST2;
  let green = GREEN0;
  let magenta = PURPLE0;
  let cyan = FROST1;
  let br_cyan = FROST0;
  let orange = ORANGE0;
  let white = LIGHT0;
  let dim_white = shade(white, -30);

  let code_hint = shade(DARK3, 20);

  return {
    name: "Nord",
    appearance: "dark",
    // refer to https://github.com/zed-industries/zed/blob/main/crates/settings/src/settings_content/theme.rs
    style: {
      accents: [blue, cyan, red, orange, yellow, green, magenta],

      background: background,

      border: border,
      "border.variant": border, // Border color. Used for deemphasized borders, like a visual divider between two sections
      "border.focused": border,
      "border.selected": border,
      "border.transparent": TRANSPARENT,
      "border.disabled": DARK3,

      "debugger.accent": red, // Option<String>, Color used to accent some of the debuggers elements Only accent breakpoint & breakpoint related symbols right now
      "editor.debugger_active_line.background": shade(yellow, -60) + "80",

      "drop_target.background": border,

      "editor.foreground": foreground,
      "editor.background": background,
      "editor.gutter.background": background, // editor left pane, e.g. line number
      "editor.subheader.background": border,
      "editor.active_line.background": border + "80",
      "editor.highlighted_line.background": highlight, // open symbol outline, selection will hightlight content
      "editor.line_number": DARK3,
      "editor.active_line_number": foreground,
      "editor.invisible": dim_white, // Text Color. Used to mark invisible characters in the editor. Example: spaces, tabs, carriage returns, etc.
      "editor.wrap_guide": DARK3,
      "editor.active_wrap_guide": DARK3,
      "editor.document_highlight.read_background": highlight,
      "editor.document_highlight.write_background": highlight,
      "editor.document_highlight.bracket_background": highlight,

      "element.background": border, // e.g. setting UI, drop down button
      "element.hover": border + "80",
      "element.active": border, // e.g. setting UI, left list
      "element.selected": border,
      "element.disabled": border,

      "elevated_surface.background": popup_background, // code completion popup

      "ghost_element.background": TRANSPARENT,
      "ghost_element.selected": popup_select, // code completion popup, keyboard selection background
      "ghost_element.hover": highlight, // tab delete hover, code completion popup hover
      "ghost_element.active": highlight, // color on click
      "ghost_element.disabled": border,

      text: foreground,
      "text.muted": text_muted,
      "text.placeholder": text_muted,
      "text.disabled": text_muted, // Text Color. Color used for text denoting disabled elements. Typically, the color is faded or grayed out to emphasize the disabled state.
      "text.accent": accent,

      icon: foreground,
      "icon.muted": text_muted,
      "icon.disabled": text_muted,
      "icon.placeholder": border,
      "icon.accent": accent,

      "tab_bar.background": background,
      "tab.inactive_background": background,
      "tab.active_background": border,
      "title_bar.background": background,
      "toolbar.background": background,

      "panel.background": background,
      // "panel.indent_guide": border, // file tree indent guide
      // "panel.indent_guide_hover": border,
      // "panel.indent_guide_active": border,
      "panel.focused_border": accent,
      "pane.focused_border": accent,

      "scrollbar.thumb.background": scrollbar + "80",
      "scrollbar.thumb.hover_background": scrollbar + "aa",
      "scrollbar.thumb.active_background": scrollbar + "aa",
      "scrollbar.thumb.border": TRANSPARENT,
      "scrollbar.track.background": background,
      "scrollbar.track.border": TRANSPARENT,

      "search.match_background": highlight,
      "status_bar.background": background,
      "surface.background": background,

      "terminal.background": background,
      "terminal.foreground": LIGHT0,
      "terminal.bright_foreground": null,

      "terminal.ansi.black": DARK1,
      "terminal.ansi.bright_black": DARK3,
      "terminal.ansi.red": red,
      "terminal.ansi.bright_red": shade(red, 20),
      "terminal.ansi.green": green,
      "terminal.ansi.bright_green": shade(green, 20),
      "terminal.ansi.yellow": yellow,
      "terminal.ansi.bright_yellow": shade(yellow, 20),
      "terminal.ansi.blue": blue,
      "terminal.ansi.bright_blue": shade(blue, 20),
      "terminal.ansi.magenta": magenta,
      "terminal.ansi.bright_magenta": shade(magenta, 20),
      "terminal.ansi.cyan": cyan,
      "terminal.ansi.bright_cyan": br_cyan,
      "terminal.ansi.white": LIGHT1,
      "terminal.ansi.bright_white": LIGHT2,

      "link_text.hover": br_cyan,

      created: green, // file name color in file tree
      modified: yellow,
      deleted: red,
      conflict: red,
      renamed: orange,
      ignored: shade(yellow, -30), // git ignored files in file tree
      "version_control.added": green,
      "version_control.modified": yellow,
      "version_control.deleted": red,
      "version_control.conflict": red,
      "version_control.renamed": orange,
      "version_control.ignored": shade(yellow, -30), // git ignored files in file tree
      "version_control.conflict_marker.ours": shade(green, -60) + "80", // Background color for row highlights of "ours" regions in merge conflicts.
      "version_control.conflict_marker.theirs": shade(magenta, -60) + "80", // Background color for row highlights of "theirs" regions in merge conflicts.

      error: red,
      "error.border": red,
      "error.background": red + "33",
      warning: yellow,
      "warning.border": yellow,
      "warning.background": yellow + "33",
      success: green,
      "success.border": border,
      "success.background": popup_background,
      info: dim_white,
      "info.border": border,
      "info.background": popup_background,
      hint: dim_white, // git blame text
      "hint.border": border, // clippy hint popup
      "hint.background": popup_background, // clippy hint popup

      unreachable: text_muted,
      hidden: dim_white, // Represents a hidden status, such as a file being hidden in a file tree.
      predictive: code_hint, // Indicates something that is predicted, like automatic code completion, or generated code.

      players: [
        {
          cursor: foreground,
          background: background,
          selection: select,
        },
        {
          cursor: cyan,
        },
        {
          cursor: blue,
        },
        {
          cursor: red,
        },
        {
          cursor: orange,
        },
        {
          cursor: yellow,
        },
        {
          cursor: green,
        },
        {
          cursor: magenta,
        },
      ],

      // https://zed.dev/docs/extensions/languages
      syntax: {
        attribute: {
          color: orange,
        },
        boolean: {
          color: blue,
        },
        comment: {
          color: dim_white,
        },
        "comment.doc": {
          color: dim_white,
        },
        constant: {
          color: white,
        },
        constructor: {
          color: orange,
        },
        "definition.function": {
          color: orange,
        },
        embedded: {
          color: orange,
        },
        emphasis: {
          color: orange,
        },
        enum: {
          color: orange,
        },
        function: {
          color: white,
        },
        "function.method": {
          color: white,
        },
        hint: {
          color: code_hint,
        },
        keyword: {
          color: blue,
        },
        label: {
          color: blue,
        },
        link_text: {
          color: blue,
          font_style: "normal",
        },
        link_uri: {
          color: blue,
        },
        number: {
          color: magenta,
        },
        operator: {
          color: dim_white,
        },
        predictive: {
          color: code_hint,
        },
        preproc: {
          color: FROST3,
        },
        primary: {
          color: foreground,
        },
        property: {
          color: white,
        },
        punctuation: {
          color: dim_white,
        },
        "punctuation.bracket": {
          color: dim_white,
        },
        "punctuation.delimiter": {
          color: dim_white,
        },
        "punctuation.list_marker": {
          color: dim_white,
        },
        "punctuation.special": {
          color: dim_white,
        },
        string: {
          color: green,
        },
        "string.escape": {
          color: yellow,
        },
        "string.regex": {
          color: green,
        },
        "string.special": {
          color: green,
        },
        tag: {
          color: blue,
        },
        "text.literal": {
          color: foreground,
        },
        title: {
          color: cyan,
          font_weight: 700,
        },
        type: {
          color: cyan,
        },
        "type.builtin": {
          color: cyan,
        },
        "type.super": {
          color: cyan,
        },
        variable: {
          color: white,
        },
        "variable.parameter": {
          color: white,
        },
        "variable.special": {
          color: blue, // rust: "self" variable
        },
      },
    },
  };
}

function shade(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  R = Math.round(R);
  G = Math.round(G);
  B = Math.round(B);

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}
