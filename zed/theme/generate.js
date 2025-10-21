// node zed/theme/generate.js
import fs from "node:fs/promises";

const DARK0 = "#2e3440"; // it is used for background and area coloring while it's not used for syntax highlighting at all because otherwise it would collide with the same background color.
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
  let foreground = LIGHT2;
  let background = shade(DARK0, -30);
  let border = DARK1;
  let active = DARK1;
  let highlight = DARK2;
  let click = DARK3;
  let select = shade(DARK3, 50) + "80";
  let scrollbar = shade(DARK3, 50);

  let accent = FROST1;
  let text_muted = shade(LIGHT0, -20);

  let red = RED0;
  let br_red = shade(red, 20);
  let yellow = YELLOW0;
  let br_yellow = shade(yellow, 20);
  let dim_yellow = shade(yellow, -30);
  let blue = FROST2;
  let br_blue = shade(blue, 20);
  let green = GREEN0;
  let br_green = shade(green, 20);
  let magenta = PURPLE0;
  let br_magenta = shade(magenta, 20);
  let cyan = FROST1;
  let br_cyan = FROST0;

  let orange = ORANGE0;

  let white = LIGHT0;
  let br_white = LIGHT2;
  let dim_white = shade(white, -30);

  let gray = shade(DARK3, 20);
  let comment = shade(LIGHT2, -40);

  return {
    name: "Nord Dark",
    appearance: "dark",
    style: {
      accents: [blue, cyan, red, orange, yellow, green, magenta],

      background: background,

      border: border,
      "border.variant": border + "a0", // Border color. Used for deemphasized borders, like a visual divider between two sections
      "border.focused": border,
      "border.selected": border,
      "border.transparent": TRANSPARENT,
      "border.disabled": DARK3,

      "drop_target.background": border,

      "editor.foreground": foreground,
      "editor.background": background,
      "editor.gutter.background": background, // editor left pane, e.g. line number
      "editor.subheader.background": border,
      "editor.active_line.background": active + "80",
      "editor.highlighted_line.background": highlight, // open symbol outline, selection will hightlight content
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
      "element.active": active, // e.g. setting UI, left list
      "element.selected": active,
      "element.disabled": border,

      "elevated_surface.background": border, // code completion popup

      "ghost_element.background": TRANSPARENT,
      "ghost_element.selected": click, // code completion popup, keyboard selection background
      "ghost_element.hover": click, // tab delete hover, code completion popup hover
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
      "panel.focused_border": null,
      "pane.focused_border": null,

      "scrollbar.thumb.background": scrollbar + "60",
      "scrollbar.thumb.hover_background": scrollbar + "80",
      "scrollbar.thumb.active_background": scrollbar + "80",
      "scrollbar.thumb.border": TRANSPARENT,
      "scrollbar.track.background": background,
      "scrollbar.track.hover_background": scrollbar + "80",
      "scrollbar.track.border": TRANSPARENT,

      "search.match_background": highlight,
      "status_bar.background": background,
      "surface.background": background,

      "terminal.background": background,
      "terminal.foreground": foreground,
      "terminal.bright_foreground": null,

      "terminal.ansi.black": DARK1,
      "terminal.ansi.bright_black": DARK3,
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
      "terminal.ansi.white": white,
      "terminal.ansi.bright_white": br_white,

      "link_text.hover": br_cyan,

      conflict: red,
      created: green,
      deleted: red,
      error: red,
      "error.border": red,
      "error.background": red + "33",
      warning: yellow,
      "warning.border": yellow,
      "warning.background": yellow + "33",
      hidden: dim_white,
      success: br_green,
      "success.border": active,
      "success.background": border,
      info: dim_white,
      "info.border": active,
      "info.background": border,
      hint: dim_white, // git blame text
      "hint.border": active, // clippy hint popup
      "hint.background": border, // clippy hint popup
      modified: yellow,
      renamed: orange,
      unreachable: foreground,
      ignored: dim_yellow, // git ignored files in file tree
      predictive: gray,

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

      syntax: {
        attribute: {
          color: cyan,
        },
        boolean: {
          color: blue,
        },
        comment: {
          color: comment,
        },
        "comment.doc": {
          color: comment,
        },
        constant: {
          color: white,
        },
        constructor: {
          color: blue,
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
          color: blue,
        },
        predictive: {
          color: blue,
        },
        preproc: {
          color: FROST3,
        },
        primary: {
          color: foreground,
        },
        property: {
          color: cyan,
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
          color: yellow,
          font_weight: 700,
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
          color: br_cyan,
        },
        "type.builtin": {
          color: br_cyan,
        },
        "type.super": {
          color: br_cyan,
        },
        variable: {
          color: white,
        },
        "variable.parameter": {
          color: white,
        },
        "variable.special": {
          color: white,
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
