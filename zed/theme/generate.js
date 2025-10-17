// node zed/theme/generate.js
import fs from "node:fs/promises";

// Zen Bg Shades
const D_BG = "#090E13";
const D_BG1 = "#1C1E25";
const D_BG2 = "#22262D";
const D_BG3 = "#393B44";

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
const GREEN = "#98BB6C";
const GREEN2 = "#87a987";
const GREEN3 = "#8a9a7b";
const GREEN4 = "#6A9589";
const GREEN5 = "#7AA89F";
const BLUE = "#7FB4CA";
const BLUE2 = "#658594";
const BLUE3 = "#8ba4b0";
const BLUE4 = "#8ea4a2";
const VIOLET = "#938AA9";
const VIOLET2 = "#8992a7";
const VIOLET3 = "#949fb5";
const PINK = "#a292a3";
const ORANGE = "#b6927b";
const ORANGE2 = "#b98d7b";
const CYAN = BLUE4;

// Fg and Comments
const FG = "#C5C9C7";
const FG2 = "#f2f1ef";
const GRAY = "#717C7C";
const GRAY2 = "#A4A7A4";
const GRAY3 = "#909398";
const GRAY4 = "#75797f";
const GRAY5 = "#5C6066";
const OPERATORS = GRAY3; // original is "#9E9B93";

// Light theme colors (pearl prefix)
const PEARL_BLACK = D_BG2;
const PEARL_BLACK1 = "#545464";
const PEARL_BLACK2 = "#43436c";
const PEARL_GRAY = "#e2e1df";
const PEARL_GRAY2 = "#5C6068";
const PEARL_GRAY3 = "#6D6D69";
const PEARL_GRAY4 = "#9F9F99";

const L_BG = "#f2f1ef";
const PEARL_WHITE1 = "#e2e1df";
const L_BG2 = "#dddddb";
const PEARL_WHITE3 = "#cacac7";
const PEARL_VIOLET1 = "#a09cac";
const PEARL_VIOLET2 = "#766b90";
const PEARL_VIOLET3 = "#c9cbd1";
const L_VIOLET4 = "#624c83";
const PEARL_BLUE1 = "#c7d7e0";
const PEARL_BLUE2 = "#b5cbd2";
const PEARL_BLUE3 = "#9fb5c9";
const L_BLUE4 = "#4d699b";
const PEARL_BLUE5 = "#5d57a3";
const L_GREEN = "#6f894e";
const PEARL_GREEN2 = "#6e915f";
const PEARL_GREEN3 = "#b7d0ae";
const L_PINK = "#b35b79";
const L_ORANGE = "#cc6d00";
const PEARL_ORANGE2 = "#e98a00";
const PEARL_YELLOW = "#77713f";
const PEARL_YELLOW2 = "#836f4a";
const L_YELLOW3 = "#de9800";
const PEARL_YELLOW4 = "#f9d791";
const PEARL_RED = "#c84053";
const PEARL_RED2 = "#d7474b";
const L_RED3 = "#e82424";
const PEARL_RED4 = "#d9a594";
const L_AQUA = "#597B75";
const PEARL_AQUA2 = "#5e857a";
const PEARL_TEAL1 = "#4e8ca2";
const PEARL_TEAL2 = "#6693bf";
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
    themes: [
      theme(true),
      {
        name: "Neo Light",
        appearance: "light",
        style: {
          accents: [L_BLUE4, L_ORANGE, L_PINK, L_GREEN, L_VIOLET4, L_YELLOW3, L_AQUA, L_RED3],

          background: L_BG,

          border: L_BG2,
          "border.variant": L_BG2 + "a0",
          "border.focused": L_BG2,
          "border.selected": L_BG2,
          "border.transparent": L_BG2 + "00",
          "border.disabled": L_BG2 + "80",

          "elevated_surface.background": L_BG,
          "surface.background": L_BG,
          "element.background": PEARL_WHITE1,
          "element.hover": PEARL_WHITE1,
          "element.active": L_BG2,
          "element.selected": L_BG2,
          "element.disabled": L_BG,

          "drop_target.background": "#00000000",
          "ghost_element.background": L_BG,
          "ghost_element.hover": PEARL_WHITE1,
          "ghost_element.active": L_BG2,
          "ghost_element.selected": L_BG2,
          "ghost_element.disabled": L_BG,

          text: "#22262D",
          "text.muted": "#6D6D69",
          "text.placeholder": "#6D6D69",
          "text.disabled": "#6D6D69",
          "text.accent": "#5E857A",

          icon: "#22262D",
          "icon.muted": "#6D6D69",
          "icon.disabled": "#9F9F99",
          "icon.placeholder": L_BG,
          "icon.accent": "#5E857A",

          "status_bar.background": L_BG,
          "title_bar.background": L_BG,
          "toolbar.background": L_BG,
          "tab_bar.background": L_BG,
          "tab.inactive_background": L_BG,
          "tab.active_background": PEARL_WHITE1,

          "search.match_background": PEARL_WHITE3,
          "panel.background": L_BG,
          "panel.focused_border": L_BG2,
          "pane.focused_border": L_BG2,

          "scrollbar.thumb.background": "#6D6D6934",
          "scrollbar.thumb.hover_background": "#6D6D69",
          "scrollbar.thumb.border": PEARL_WHITE1,
          "scrollbar.track.background": L_BG,
          "scrollbar.track.border": L_BG,

          "editor.foreground": "#22262D",
          "editor.background": L_BG,
          "editor.gutter.background": L_BG,
          "editor.subheader.background": L_BG,
          "editor.active_line.background": L_BG2,
          "editor.highlighted_line.background": L_BG2,
          "editor.line_number": PEARL_GRAY4,
          "editor.active_line_number": "#22262D",
          "editor.invisible": PEARL_WHITE1,
          "editor.wrap_guide": PEARL_GRAY4,
          "editor.active_wrap_guide": VIOLET3,
          "editor.document_highlight.read_background": PEARL_WHITE3,
          "editor.document_highlight.write_background": PEARL_WHITE3,

          "terminal.background": L_BG,
          "terminal.foreground": "#22262D",
          "terminal.bright_foreground": "#22262D",
          "terminal.dim_foreground": "#6D6D69",

          "terminal.ansi.black": "#22262D",
          "terminal.ansi.bright_black": "#22262D",
          "terminal.ansi.dim_black": "#6D6D69",
          "terminal.ansi.red": PEARL_RED,
          "terminal.ansi.bright_red": L_RED3,
          "terminal.ansi.dim_red": "#c34043",
          "terminal.ansi.green": L_GREEN,
          "terminal.ansi.bright_green": "#6e915f",
          "terminal.ansi.dim_green": "#b7d0ae",
          "terminal.ansi.yellow": PEARL_YELLOW,
          "terminal.ansi.bright_yellow": L_YELLOW3,
          "terminal.ansi.dim_yellow": "#f9d791",
          "terminal.ansi.blue": L_BLUE4,
          "terminal.ansi.bright_blue": L_BLUE4,
          "terminal.ansi.dim_blue": "#9fb5c9",
          "terminal.ansi.magenta": PEARL_VIOLET2,
          "terminal.ansi.bright_magenta": L_VIOLET4,
          "terminal.ansi.dim_magenta": "#a09cac",
          "terminal.ansi.cyan": L_AQUA,
          "terminal.ansi.bright_cyan": "#4e8ca2",
          "terminal.ansi.dim_cyan": "#5a7785",
          "terminal.ansi.white": PEARL_WHITE1,
          "terminal.ansi.bright_white": L_BG,
          "terminal.ansi.dim_white": L_BG2,

          "link_text.hover": "#6a9589",
          "link_text.border": L_BG2,
          "link_text.background": L_BG,
          conflict: "#D7474B",
          created: "#6E915F",
          deleted: "#d9a594",
          error: "#D7474B",
          warning: "#77713f",
          "warning.border": L_BG2,
          "warning.background": L_BG,
          success: "#6E915F",
          "success.border": L_BG2,
          "success.background": L_BG,
          info: "#6693BF",
          "info.border": L_BG2,
          "info.background": L_BG,
          hint: "#6D6D69",
          "hint.border": L_BG2,
          "hint.background": L_BG,
          modified: L_YELLOW3,
          renamed: "#d9a594",
          unreachable: "#22262D",
          ignored: "#d9a594",
          hidden: "#6693BF",
          predictive: "#6D6D69",

          players: [
            {
              cursor: PEARL_BLACK,
              background: L_BG,
              selection: L_BLUE4 + "33",
            },
            {
              cursor: L_ORANGE,
            },
            {
              cursor: L_PINK,
            },
            {
              cursor: GREEN3,
            },
            {
              cursor: VIOLET3,
            },
            {
              cursor: YELLOW3,
            },
            {
              cursor: CYAN,
            },
            {
              cursor: RED3,
            },
          ],
          syntax: {
            attribute: {
              color: L_VIOLET4,
            },
            boolean: {
              color: L_ORANGE,
            },
            comment: {
              color: "#6D6D69",
            },
            "comment.doc": {
              color: "#6D6D69",
            },
            constant: {
              color: L_ORANGE,
            },
            constructor: {
              color: "#6693BF",
            },
            embedded: {
              color: L_ORANGE,
            },
            emphasis: {
              color: L_ORANGE,
            },
            enum: {
              color: L_ORANGE,
            },
            function: {
              color: "#4D699B",
            },
            hint: {
              color: "#6D6D69",
              font_weight: 300,
            },
            keyword: {
              color: L_VIOLET4,
            },
            label: {
              color: L_VIOLET4,
            },
            link_text: {
              color: "#6D6D69",
              font_style: "normal",
            },
            link_uri: {
              color: "#6693BF",
            },
            number: {
              color: L_PINK,
            },
            operator: {
              color: "#6D6D69",
            },
            predictive: {
              color: "#6D6D69",
            },
            preproc: {
              color: "#6D6F6E",
            },
            primary: {
              color: "#22262D",
            },
            property: {
              color: "#77713F",
            },
            punctuation: {
              color: "#6D6D69",
              font_weight: 300,
            },
            "punctuation.bracket": {
              color: "#6D6D69",
              font_weight: 300,
            },
            "punctuation.delimiter": {
              color: "#6D6D69",
              font_weight: 300,
            },
            "punctuation.list_marker": {
              color: "#6D6D69",
              font_weight: 300,
            },
            "punctuation.special": {
              color: "#6D6D69",
              font_weight: 300,
            },
            string: {
              color: L_GREEN,
            },
            "string.escape": {
              color: L_BLUE4,
            },
            "string.regex": {
              color: L_GREEN,
            },
            "string.special": {
              color: L_GREEN,
            },
            tag: {
              color: "#77713f",
            },
            "text.literal": {
              color: PEARL_BLACK,
            },
            title: {
              color: L_VIOLET4,
              font_weight: 700,
            },
            type: {
              color: L_AQUA,
            },
            "type.builtin": {
              color: L_AQUA,
            },
            "type.super": {
              color: L_AQUA,
            },
            variable: {
              color: PEARL_BLACK,
            },
            "variable.parameter": {
              color: "#77713f",
            },
            "variable.special": {
              color: "#77713f",
            },
          },
        },
      },
    ],
  };
}

function theme(dark) {
  let background = dark ? D_BG : L_BG;
  let border = dark ? D_BG2 : L_BG2;

  return {
    name: dark ? "Neo Dark" : "Neo Light",
    appearance: dark ? "dark" : "light",
    style: {
      accents: dark
        ? [BLUE3, ORANGE2, PINK, GREEN3, VIOLET3, YELLOW3, CYAN, RED3]
        : [L_BLUE4, L_ORANGE, L_PINK, L_GREEN, L_VIOLET4, L_YELLOW3, L_AQUA, L_RED3],

      background: background,

      border: border,
      "border.variant": border + "a0",
      "border.focused": border,
      "border.selected": border,
      "border.transparent": "#00000000",
      "border.disabled": border + "80",

      "drop_target.background": D_BG2,

      "editor.foreground": FG,
      "editor.background": D_BG,
      "editor.gutter.background": D_BG,
      "editor.subheader.background": D_BG1,
      "editor.active_line.background": D_BG2,
      "editor.highlighted_line.background": D_BG2,
      "editor.line_number": GRAY5,
      "editor.active_line_number": FG,
      "editor.invisible": D_BG2,
      "editor.wrap_guide": GRAY5,
      "editor.active_wrap_guide": GRAY5,
      "editor.document_highlight.read_background": D_BG3,
      "editor.document_highlight.write_background": D_BG3,

      "elevated_surface.background": D_BG1,
      "element.background": D_BG2,
      "element.hover": D_BG2,
      "element.active": D_BG3,
      "element.selected": D_BG3,
      "element.disabled": D_BG1,

      "ghost_element.background": "#00000000",
      "ghost_element.hover": D_BG2,
      "ghost_element.active": D_BG3,
      "ghost_element.selected": D_BG3,
      "ghost_element.disabled": D_BG1,

      text: FG,
      "text.muted": GRAY4,
      "text.placeholder": GRAY5,
      "text.disabled": GRAY5,
      "text.accent": RED3,

      icon: FG,
      "icon.muted": GRAY4,
      "icon.disabled": GRAY5,
      "icon.placeholder": D_BG1,
      "icon.accent": BLUE3,

      "tab_bar.background": background,
      "tab.inactive_background": background,
      "tab.active_background": D_BG1,
      "title_bar.background": background,
      "toolbar.background": background,

      "panel.background": background,
      "panel.focused_border": BLUE3,
      "pane.focused_border": VIOLET3,

      "search.match_background": D_BG3,
      "status_bar.background": background,

      "scrollbar.thumb.background": GRAY5 + "33",
      "scrollbar.thumb.hover_background": GRAY5,
      "scrollbar.thumb.border": D_BG2,
      "scrollbar.track.background": D_BG,
      "scrollbar.track.border": D_BG,
      "surface.background": D_BG,

      "terminal.background": background,
      "terminal.foreground": FG,
      "terminal.bright_foreground": YELLOW3,
      "terminal.dim_foreground": GRAY4,

      "terminal.ansi.black": D_BG1,
      "terminal.ansi.bright_black": D_BG2,
      "terminal.ansi.dim_black": D_BG1,

      "terminal.ansi.red": RED3,
      "terminal.ansi.dim_red": RED,
      "terminal.ansi.bright_red": RED2,

      "terminal.ansi.green": GREEN3,
      "terminal.ansi.bright_green": GREEN2,
      "terminal.ansi.dim_green": "#658594",
      "terminal.ansi.yellow": YELLOW3,
      "terminal.ansi.bright_yellow": YELLOW3,
      "terminal.ansi.dim_yellow": "#dca561",
      "terminal.ansi.blue": BLUE3,
      "terminal.ansi.bright_blue": BLUE,
      "terminal.ansi.dim_blue": VIOLET3,
      "terminal.ansi.magenta": "#a292a3",
      "terminal.ansi.bright_magenta": "#d27e99",
      "terminal.ansi.dim_magenta": CYAN,
      "terminal.ansi.cyan": CYAN,
      "terminal.ansi.bright_cyan": "#7aa89f",
      "terminal.ansi.dim_cyan": CYAN,
      "terminal.ansi.white": FG,
      "terminal.ansi.bright_white": ORANGE,
      "terminal.ansi.dim_white": FG,

      "link_text.hover": "#6a9589",
      "link_text.border": D_BG2,
      "link_text.background": D_BG1,
      conflict: "#ff5d62",
      created: GREEN2,
      deleted: RED,
      error: RED3,
      warning: YELLOW3,
      "warning.border": D_BG2,
      "warning.background": D_BG1,
      hidden: VIOLET3,
      success: GREEN2,
      "success.border": D_BG2,
      "success.background": D_BG1,
      info: VIOLET3,
      "info.border": D_BG2,
      "info.background": D_BG1,
      hint: BLUE3,
      "hint.border": D_BG2,
      "hint.background": D_BG1,
      modified: YELLOW,
      renamed: ORANGE,
      unreachable: FG,
      ignored: ORANGE,
      predictive: GRAY4,

      players: [
        {
          cursor: FG,
          background: D_BG,
          selection: BLUE3 + "33",
        },
        {
          cursor: ORANGE2,
        },
        {
          cursor: PINK,
        },
        {
          cursor: GREEN3,
        },
        {
          cursor: VIOLET3,
        },
        {
          cursor: YELLOW3,
        },
        {
          cursor: CYAN,
        },
        {
          cursor: RED3,
        },
      ],

      syntax: {
        attribute: {
          color: VIOLET2,
        },
        boolean: {
          color: ORANGE,
        },
        comment: {
          color: GRAY4,
        },
        "comment.doc": {
          color: GRAY4,
        },
        constant: {
          color: ORANGE,
        },
        constructor: {
          color: VIOLET3,
        },
        embedded: {
          color: ORANGE,
        },
        emphasis: {
          color: ORANGE,
        },
        enum: {
          color: ORANGE,
        },
        function: {
          color: BLUE3,
        },
        hint: {
          color: GRAY5,
          font_weight: 300,
        },
        keyword: {
          color: VIOLET2,
        },
        label: {
          color: VIOLET2,
        },
        link_text: {
          color: OPERATORS,
          font_style: "normal",
        },
        link_uri: {
          color: VIOLET2,
        },
        number: {
          color: PINK,
        },
        operator: {
          color: OPERATORS,
        },
        predictive: {
          color: OPERATORS,
        },
        preproc: {
          color: OPERATORS,
        },
        primary: {
          color: FG,
        },
        property: {
          color: YELLOW3,
        },
        punctuation: {
          color: OPERATORS,
          font_weight: 300,
        },
        "punctuation.bracket": {
          color: OPERATORS,
          font_weight: 300,
        },
        "punctuation.delimiter": {
          color: OPERATORS,
          font_weight: 300,
        },
        "punctuation.list_marker": {
          color: OPERATORS,
          font_weight: 300,
        },
        "punctuation.special": {
          color: OPERATORS,
          font_weight: 300,
        },
        string: {
          color: GREEN3,
        },
        "string.escape": {
          color: BLUE3,
          font_weight: 700,
        },
        "string.regex": {
          color: GREEN3,
        },
        "string.special": {
          color: GREEN3,
        },
        tag: {
          color: YELLOW3,
        },
        "text.literal": {
          color: FG,
        },
        title: {
          color: VIOLET2,
          font_weight: 700,
        },
        type: {
          color: CYAN,
        },
        "type.builtin": {
          color: CYAN,
        },
        "type.super": {
          color: CYAN,
        },
        variable: {
          color: FG,
        },
        "variable.parameter": {
          color: YELLOW3,
        },
        "variable.special": {
          color: YELLOW3,
        },
      },
    },
  };
}
