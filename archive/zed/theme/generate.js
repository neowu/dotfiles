// node zed/theme/generate.js
import fs from "node:fs/promises";

const DARK0 = "#2e3440"; // Used for texts, backgrounds, carets and structuring characters like curly- and square brackets.
const DARK1 = "#3b4252"; // Used as a lighter background color for UI elements like status bars.
const DARK2 = "#434c5e"; // Used as line highlighting in the editor. In the UI scope it may be used as selection- and highlight color.
const DARK3 = "#4c566a"; // Used for comments, invisibles, indent- and wrap guide marker. In the UI scope used as pseudoclass color for disabled elements.

const LIGHT0 = "#d8dee9"; // Main color for text, variables, constants and attributes. In the UI scope used as semi-light background depending on the theme shading design.
const LIGHT1 = "#e5e9f0"; // Used as a lighter background color for UI elements like status bars. Used as semi-light background depending on the theme shading design.
const LIGHT2 = "#eceff4"; // Used for punctuations, carets and structuring characters like curly- and square brackets. In the UI scope used as background, selection- and highlight color depending on the theme shading design.

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

const BG = "#090E13";
const BG1 = "#1C1E25";
const BG2 = "#22262D";
const BG3 = "#393B44";
// const BG4 = "#4B4D55";

// Popup and Floats
const ALT_BLUE1 = "#223249";
const ALT_BLUE2 = "#2D4F67";

// Main Colors
const RED = "#C34043";
const RED2 = "#E46876";
const RED3 = "#c4746e";
const YELLOW = "#DCA561";
const YELLOW2 = "#E6C384";
const YELLOW3 = "#c4b28a";
const YELLOW4 = "#887244";
const GREEN = "#98BB6C";
const GREEN2 = "#87a987";
const GREEN3 = "#8a9a7b";
const GREEN4 = "#6A9589";
const GREEN5 = "#7AA89F";
const BLUE = "#7FB4CA";
const BLUE2 = "#658594";
const BLUE3 = "#8ba4b0";

const VIOLET = "#938AA9";
const VIOLET2 = "#8992a7";
const VIOLET3 = "#949fb5";
const PINK = "#a292a3";
const PINK1 = "#C6BDC7";
const ORANGE = "#b6927b";
const ORANGE2 = "#b98d7b";
const CYAN = "#8ea4a2";

// Fg and Comments
const FG2 = "#f2f1ef";
const FG = "#C5C9C7";
const GRAY = "#717C7C";
const GRAY2 = "#A4A7A4"; // silver
const GRAY3 = "#909398";
const GRAY4 = "#75797f";
const GRAY5 = "#5C6066";

// Light theme colors (pearl prefix)
const L_FG = BG2;
const PEARL_BLACK1 = "#545464";
const PEARL_BLACK2 = "#43436c";
const PEARL_GRAY = "#e2e1df";
const PEARL_GRAY2 = "#5C6068";
const L_GRAY3 = "#6D6D69";
const L_GRAY4 = "#9F9F99";

const L_BG = "#f2f1ef";
const L_BG1 = "#e2e1df";
const L_BG2 = "#dddddb";
const L_BG3 = "#EBEBEA";

const PEARL_WHITE3 = "#cacac7";
const L_VIOLET1 = "#a09cac";
const L_VIOLET2 = "#766b90";
const L_VIOLET3 = "#624c83";

const L_BLUE1 = "#c7d7e0";
const L_BLUE2 = "#b5cbd2";
const L_BLUE3 = "#9fb5c9";
const L_BLUE4 = "#4d699b";
const PEARL_BLUE5 = "#5d57a3";
const L_GREEN = "#6f894e";
const L_GREEN2 = "#6e915f";
const PEARL_GREEN3 = "#b7d0ae";
const L_PINK = "#b35b79";
const L_ORANGE = "#cc6d00";
const PEARL_ORANGE2 = "#e98a00";
const L_YELLOW = "#77713f";
const L_YELLOW2 = "#836f4a";
const L_YELLOW3 = "#de9800";
const PEARL_YELLOW4 = "#f9d791";
const L_RED = "#c84053";
const L_RED2 = "#d7474b";
const L_RED3 = "#e82424";
const L_RED4 = "#d9a594";
const L_AQUA = "#597B75";
const L_AQUA2 = "#5e857a";
const L_TEAL1 = "#4e8ca2";
const L_TEAL2 = "#6693bf";
const PEARL_TEAL3 = "#5a7785";
const PEARL_CYAN = "#d7e3d8";

let theme_data = themes();
await fs.writeFile("./neo_theme.json", JSON.stringify(theme_data, null, 2));
await fs.writeFile("/Users/neo/.config/zed/themes/neo_theme.json", JSON.stringify(theme_data, null, 2));

function themes() {
  return {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: "Neo",
    author: "Neo",
    themes: [theme(true), theme(false)],
  };
}

function theme(dark) {
  let foreground = dark ? LIGHT0 : L_FG;
  let background = dark ? shade(DARK0, -30) : L_BG;
  let border = dark ? DARK1 : L_BG1;
  let active = dark ? DARK1 : L_BG2;
  let highlight = dark ? DARK2 : L_VIOLET1 + "33";
  let click = dark ? DARK3 : L_BG3;
  let select = dark ? FROST1 + "80" : L_BLUE3 + "80";

  let accent = dark ? FROST1 : L_AQUA2;
  let text_muted = dark ? DARK3 : L_GRAY3;

  let red = dark ? RED0 : L_RED;
  let br_red = dark ? RED2 : L_RED2;

  let yellow = dark ? YELLOW0 : L_YELLOW;
  let br_yellow = dark ? YELLOW2 : L_YELLOW3;
  let dark_yellow = dark ? YELLOW4 : L_YELLOW2;

  let blue = dark ? FROST2 : L_BLUE4;
  let br_blue = dark ? BLUE : L_BLUE3;

  let green = dark ? GREEN3 : L_GREEN;
  let br_green = dark ? GREEN2 : L_GREEN2;

  let magenta = dark ? PINK : L_VIOLET2;
  let br_magenta = dark ? PINK1 : L_VIOLET3;

  let cyan = dark ? FROST1 : L_AQUA;
  let br_cyan = dark ? GREEN5 : L_TEAL1;

  let orange = dark ? ORANGE0 : L_ORANGE;
  let pink = dark ? PINK : L_PINK;
  let violet = dark ? VIOLET2 : L_VIOLET3;

  let gray = dark ? DARK3 : L_GRAY3;

  return {
    name: dark ? "Neo Dark" : "Neo Light",
    appearance: dark ? "dark" : "light",
    style: {
      accents: [blue, orange, magenta, green, pink, yellow, cyan, red],

      background: background,

      border: border,
      "border.variant": border + "a0",
      "border.focused": border,
      "border.selected": border,
      "border.transparent": TRANSPARENT,
      "border.disabled": border + "80",

      "drop_target.background": border,

      "editor.foreground": foreground,
      "editor.background": background,
      "editor.gutter.background": background,
      "editor.subheader.background": border,
      "editor.active_line.background": active + "a0",
      "editor.highlighted_line.background": active + "a0",
      "editor.line_number": DARK3,
      "editor.active_line_number": foreground,
      "editor.invisible": active, // Text Color. Used to mark invisible characters in the editor. Example: spaces, tabs, carriage returns, etc.
      "editor.wrap_guide": DARK3,
      "editor.active_wrap_guide": active,
      "editor.document_highlight.read_background": highlight,
      "editor.document_highlight.write_background": highlight,
      "editor.document_highlight.bracket_background": highlight,

      "element.background": active,
      "element.hover": active + "80",
      "element.active": active,
      "element.selected": active,
      "element.disabled": border,

      "elevated_surface.background": border, // code completion popup

      "ghost_element.background": TRANSPARENT,
      "ghost_element.selected": active,
      "ghost_element.hover": click,
      "ghost_element.active": click,
      "ghost_element.disabled": border,

      text: foreground,
      "text.muted": text_muted,
      "text.placeholder": text_muted,
      "text.disabled": text_muted,
      "text.accent": accent,

      icon: foreground,
      "icon.muted": text_muted,
      "icon.disabled": text_muted,
      "icon.placeholder": border,
      "icon.accent": accent,

      "tab_bar.background": background,
      "tab.inactive_background": background,
      "tab.active_background": active,
      "title_bar.background": background,
      "toolbar.background": background,

      "panel.background": background,
      "panel.focused_border": dark ? BLUE3 : L_BG2,
      "pane.focused_border": dark ? VIOLET3 : L_BG2,

      "scrollbar.thumb.background": click + "40",
      "scrollbar.thumb.hover_background": click + "80",
      "scrollbar.thumb.active_background": click + "80",
      "scrollbar.thumb.border": TRANSPARENT,
      "scrollbar.track.background": background,
      "scrollbar.track.hover_background": click + "80",
      "scrollbar.track.border": TRANSPARENT,

      "search.match_background": highlight,
      "status_bar.background": background,
      "surface.background": background,

      "terminal.background": background,
      "terminal.foreground": foreground,
      "terminal.bright_foreground": dark ? YELLOW3 : L_FG,

      "terminal.ansi.black": dark ? BG1 : L_FG,
      "terminal.ansi.bright_black": dark ? BG2 : L_FG,

      "terminal.ansi.red": red,
      "terminal.ansi.bright_red": br_red,

      "terminal.ansi.green": green,
      "terminal.ansi.bright_green": br_green,

      "terminal.ansi.yellow": yellow,
      "terminal.ansi.bright_yellow": br_yellow,

      "terminal.ansi.blue": blue,
      "terminal.ansi.bright_blue": br_blue,

      "terminal.ansi.magenta": magenta,
      "terminal.ansi.bright_magenta": br_magenta,

      "terminal.ansi.cyan": cyan,
      "terminal.ansi.bright_cyan": br_cyan,

      "terminal.ansi.white": dark ? FG : L_BG1,
      "terminal.ansi.bright_white": dark ? ORANGE : L_BG,

      "link_text.hover": GREEN4,

      conflict: red,
      created: green,
      deleted: red,
      error: red,
      warning: yellow,
      "warning.border": active,
      "warning.background": border,
      hidden: violet,
      success: br_green,
      "success.border": active,
      "success.background": border,
      info: violet,
      "info.border": active,
      "info.background": border,
      hint: violet,
      "hint.border": active,
      "hint.background": border,
      modified: yellow,
      renamed: orange,
      unreachable: foreground,
      ignored: dark_yellow,
      predictive: gray,

      players: [
        {
          cursor: foreground,
          background: background,
          selection: select,
        },
        {
          cursor: blue,
        },
        {
          cursor: orange,
        },
        {
          cursor: magenta,
        },
        {
          cursor: green,
        },
        {
          cursor: pink,
        },
        {
          cursor: yellow,
        },
        {
          cursor: cyan,
        },
        {
          cursor: red,
        },
      ],

      syntax: {
        attribute: {
          color: violet,
        },
        boolean: {
          color: orange,
        },
        comment: {
          color: gray,
        },
        "comment.doc": {
          color: gray,
        },
        constant: {
          color: orange,
        },
        constructor: {
          color: violet,
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
          color: blue,
        },
        hint: {
          color: gray,
          font_weight: 300,
        },
        keyword: {
          color: violet,
        },
        label: {
          color: violet,
        },
        link_text: {
          color: gray,
          font_style: "normal",
        },
        link_uri: {
          color: violet,
        },
        number: {
          color: pink,
        },
        operator: {
          color: blue,
        },
        predictive: {
          color: blue,
        },
        preproc: {
          color: blue,
        },
        primary: {
          color: foreground,
        },
        property: {
          color: yellow,
        },
        punctuation: {
          color: blue,
          font_weight: 300,
        },
        "punctuation.bracket": {
          color: blue,
          font_weight: 300,
        },
        "punctuation.delimiter": {
          color: blue,
          font_weight: 300,
        },
        "punctuation.list_marker": {
          color: blue,
          font_weight: 300,
        },
        "punctuation.special": {
          color: blue,
          font_weight: 300,
        },
        string: {
          color: green,
        },
        "string.escape": {
          color: blue,
          font_weight: 700,
        },
        "string.regex": {
          color: green,
        },
        "string.special": {
          color: green,
        },
        tag: {
          color: yellow,
        },
        "text.literal": {
          color: foreground,
        },
        title: {
          color: violet,
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
          color: foreground,
        },
        "variable.parameter": {
          color: yellow,
        },
        "variable.special": {
          color: yellow,
        },
      },
    },
  };
}
