// node zed/theme/generate.js
import fs from "node:fs/promises";

// Zen Bg Shades
const ZEN_BG0 = "#090E13";
const ZEN_BG1 = "#1C1E25";
const ZEN_BG2 = "#22262D";
const ZEN_BG3 = "#393B44";

// Ink Bg Shades
const INK_BG0 = "#14171d";
const INK_BG1 = "#1F1F26";
const INK_BG2 = ZEN_BG2;
const INK_BG3 = "#393B44";
const INK_BG4 = "#4B4E57";

// Mist Bg Shades
const MIST_BG0 = ZEN_BG2;
const MIST_BG1 = "#2A2C35";
const MIST_BG2 = "#393B44";
const MIST_BG3 = "#5C6066";

// Popup and Floats
const ALT_BLUE1 = "#223249";
const ALT_BLUE2 = "#2D4F67";

// Diff and Git
const DIFF_GREEN = "#2B3328";
const DIFF_YELLOW = "#49443C";
const DIFF_RED = "#43242B";
const DIFF_BLUE = "#252535";
const GIT_GREEN = "#76946A";
const GIT_RED = "#C34043";
const GIT_YELLOW = "#DCA561";

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

// Saturated variants (20% more saturation)
const RED_SATURATED = "#C93134";
const RED2_SATURATED = "#ED5965";
const RED3_SATURATED = "#CA675F";
const YELLOW_SATURATED = "#E59F49";
const YELLOW2_SATURATED = "#EDC272";
const YELLOW3_SATURATED = "#CAAC7A";
const GREEN_SATURATED = "#8FC055";
const GREEN2_SATURATED = "#7CAF7C";
const GREEN3_SATURATED = "#7F9F6E";
const GREEN4_SATURATED = "#5B9A82";
const GREEN5_SATURATED = "#6BAE97";
const BLUE_SATURATED = "#6EBBD4";
const BLUE2_SATURATED = "#568B8F";
const BLUE3_SATURATED = "#7EAABA";
const BLUE4_SATURATED = "#81AAA9";
const VIOLET_SATURATED = "#8A88B0";
const VIOLET2_SATURATED = "#7E91AF";
const VIOLET3_SATURATED = "#8A9FBE";
const PINK_SATURATED = "#A08AA2";
const ORANGE_SATURATED = "#BC8A6C";
const ORANGE2_SATURATED = "#BF856B";
const AQUA_SATURATED = "#81AAA9";

// Fg and Comments
const FG = "#C5C9C7";
const FG2 = "#f2f1ef";
const GRAY = "#717C7C";
const GRAY2 = "#A4A7A4";
const GRAY3 = "#909398";
const GRAY4 = "#75797f";
const GRAY5 = "#5C6066";

// Light theme colors (pearl prefix)
const PEARL_BLACK = ZEN_BG2;
const PEARL_BLACK1 = "#545464";
const PEARL_BLACK2 = "#43436c";
const PEARL_GRAY = "#e2e1df";
const PEARL_GRAY2 = "#5C6068";
const PEARL_GRAY3 = "#6D6D69";
const PEARL_GRAY4 = "#9F9F99";

const PEARL_WHITE = "#f2f1ef";
const PEARL_WHITE1 = "#e2e1df";
const PEARL_WHITE2 = "#dddddb";
const PEARL_WHITE3 = "#cacac7";
const PEARL_VIOLET1 = "#a09cac";
const PEARL_VIOLET2 = "#766b90";
const PEARL_VIOLET3 = "#c9cbd1";
const PEARL_VIOLET4 = "#624c83";
const PEARL_BLUE1 = "#c7d7e0";
const PEARL_BLUE2 = "#b5cbd2";
const PEARL_BLUE3 = "#9fb5c9";
const PEARL_BLUE4 = "#4d699b";
const PEARL_BLUE5 = "#5d57a3";
const PEARL_GREEN = "#6f894e";
const PEARL_GREEN2 = "#6e915f";
const PEARL_GREEN3 = "#b7d0ae";
const PEARL_PINK = "#b35b79";
const PEARL_ORANGE = "#cc6d00";
const PEARL_ORANGE2 = "#e98a00";
const PEARL_YELLOW = "#77713f";
const PEARL_YELLOW2 = "#836f4a";
const PEARL_YELLOW3 = "#de9800";
const PEARL_YELLOW4 = "#f9d791";
const PEARL_RED = "#c84053";
const PEARL_RED2 = "#d7474b";
const PEARL_RED3 = "#e82424";
const PEARL_RED4 = "#d9a594";
const PEARL_AQUA = "#597b75";
const PEARL_AQUA2 = "#5e857a";
const PEARL_TEAL1 = "#4e8ca2";
const PEARL_TEAL2 = "#6693bf";
const PEARL_TEAL3 = "#5a7785";
const PEARL_CYAN = "#d7e3d8";

// Pearl saturated variants (40% more saturation)
const PEARL_GREEN_SATURATED = "#5E8F2F";
const PEARL_GREEN2_SATURATED = "#5B9945";
const PEARL_GREEN3_SATURATED = "#A8DA9B";
const PEARL_PINK_SATURATED = "#C04062";
const PEARL_ORANGE_SATURATED = "#E05700";
const PEARL_ORANGE2_SATURATED = "#FF7700";
const PEARL_YELLOW_SATURATED = "#656720";
const PEARL_YELLOW2_SATURATED = "#72612B";
const PEARL_YELLOW3_SATURATED = "#F28C00";
const PEARL_YELLOW4_SATURATED = "#FFD56D";
const PEARL_RED_SATURATED = "#D72436";
const PEARL_RED2_SATURATED = "#E42D2C";
const PEARL_RED3_SATURATED = "#F50000";
const PEARL_RED4_SATURATED = "#E4977B";
const PEARL_AQUA_SATURATED = "#3E8366";
const PEARL_AQUA2_SATURATED = "#428F6A";
const PEARL_TEAL1_SATURATED = "#2E96B0";
const PEARL_TEAL2_SATURATED = "#469FD3";
const PEARL_TEAL3_SATURATED = "#3D8077";
const PEARL_BLUE4_SATURATED = "#2A73B1";
const PEARL_BLUE5_SATURATED = "#3E56B8";
const PEARL_VIOLET4_SATURATED = "#44418F";

let theme_data = theme();
await fs.writeFile("./neo_theme.json", JSON.stringify(theme_data, null, 2));
await fs.writeFile("/Users/neo/.config/zed/themes/neo_theme.json", JSON.stringify(theme_data, null, 2));

function theme() {
  return {
    $schema: "https://zed.dev/schema/themes/v0.2.0.json",
    name: "Neo",
    author: "Neo",
    themes: [
      {
        name: "Neo Dark",
        appearance: "dark",
        style: {
          accents: [BLUE3, ORANGE2, PINK, GREEN3, VIOLET3, YELLOW3, CYAN, RED3],

          background: ZEN_BG0,

          border: ZEN_BG2,
          "border.variant": ZEN_BG2 + "a0",
          "border.focused": ZEN_BG2,
          "border.selected": ZEN_BG2,
          "border.transparent": ZEN_BG2 + "00",
          "border.disabled": ZEN_BG2 + "80",

          "drop_target.background": ZEN_BG2,

          "editor.foreground": FG,
          "editor.background": ZEN_BG0,
          "editor.gutter.background": ZEN_BG0,
          "editor.subheader.background": INK_BG0,
          "editor.active_line.background": ZEN_BG2,
          "editor.highlighted_line.background": ZEN_BG2,
          "editor.line_number": GRAY5,
          "editor.active_line_number": FG,
          "editor.invisible": ZEN_BG2,
          "editor.wrap_guide": GRAY5,
          "editor.active_wrap_guide": "#949fb5",
          "editor.document_highlight.read_background": ZEN_BG3,
          "editor.document_highlight.write_background": ZEN_BG2,

          "elevated_surface.background": INK_BG0,
          "element.background": ZEN_BG2,
          "element.hover": ZEN_BG3,
          "element.active": ZEN_BG3,
          "element.selected": ZEN_BG3,
          "element.disabled": INK_BG0,

          "ghost_element.background": ZEN_BG0,
          "ghost_element.hover": ZEN_BG3,
          "ghost_element.active": ZEN_BG3,
          "ghost_element.selected": ZEN_BG3,
          "ghost_element.disabled": INK_BG0,

          text: FG,
          "text.muted": "#75797f",
          "text.placeholder": GRAY5,
          "text.disabled": GRAY5,
          "text.accent": RED3,

          icon: FG,
          "icon.muted": "#75797f",
          "icon.disabled": GRAY5,
          "icon.placeholder": INK_BG0,
          "icon.accent": "#8ba4b0",

          "tab_bar.background": ZEN_BG0,
          "tab.inactive_background": ZEN_BG0,
          "tab.active_background": ZEN_BG2,
          "title_bar.background": ZEN_BG0,
          "toolbar.background": ZEN_BG0,

          "panel.background": ZEN_BG0,
          "panel.focused_border": "#8ba4b0",
          "pane.focused_border": "#949fb5",

          "search.match_background": "#536269",
          "status_bar.background": ZEN_BG0,
          "scrollbar.thumb.background": GRAY5 + "34",
          "scrollbar.thumb.hover_background": GRAY5,
          "scrollbar.thumb.border": ZEN_BG2,
          "scrollbar.track.background": ZEN_BG0,
          "scrollbar.track.border": ZEN_BG0,
          "surface.background": ZEN_BG0,

          "terminal.background": ZEN_BG0,
          "terminal.foreground": FG,
          "terminal.bright_foreground": "#c4b28a",
          "terminal.dim_foreground": "#75797f",

          "terminal.ansi.black": INK_BG0,
          "terminal.ansi.bright_black": ZEN_BG2,
          "terminal.ansi.dim_black": INK_BG0,

          "terminal.ansi.red": RED3,
          "terminal.ansi.dim_red": RED,
          "terminal.ansi.bright_red": RED2,

          "terminal.ansi.green": GREEN3,
          "terminal.ansi.bright_green": "#87a987",
          "terminal.ansi.dim_green": "#658594",
          "terminal.ansi.yellow": "#c4b28a",
          "terminal.ansi.bright_yellow": "#c4b28a",
          "terminal.ansi.dim_yellow": "#dca561",
          "terminal.ansi.blue": "#8ba4b0",
          "terminal.ansi.bright_blue": "#7fb4ca",
          "terminal.ansi.dim_blue": "#949fb5",
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
          "link_text.border": ZEN_BG2,
          "link_text.background": INK_BG0,
          conflict: "#ff5d62",
          created: "#87a987",
          deleted: "#c34043",
          error: RED3,
          warning: "#c4b28a",
          "warning.border": ZEN_BG2,
          "warning.background": INK_BG0,
          hidden: "#949fb5",
          success: "#87a987",
          "success.border": ZEN_BG2,
          "success.background": INK_BG0,
          info: "#949fb5",
          "info.border": ZEN_BG2,
          "info.background": INK_BG0,
          hint: "#8ba4b0",
          "hint.border": ZEN_BG2,
          "hint.background": INK_BG0,
          modified: "#dca561",
          renamed: "#b6927b",
          unreachable: FG,
          ignored: "#b6927b",
          predictive: "#75797f",

          players: [
            {
              cursor: FG,
              background: ZEN_BG0,
              selection: ZEN_BG3,
            },
            {
              cursor: BLUE3,
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
              color: "#75797F",
            },
            "comment.doc": {
              color: "#75797F",
            },
            constant: {
              color: ORANGE,
            },
            constructor: {
              color: "#949FB5",
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
              color: "#8BA4B0",
            },
            hint: {
              color: "#9E9B93",
              font_weight: 300,
            },
            keyword: {
              color: VIOLET2,
            },
            label: {
              color: VIOLET2,
            },
            link_text: {
              color: "#9E9B93",
              font_style: "normal",
            },
            link_uri: {
              color: VIOLET2,
            },
            number: {
              color: "#A292A3",
            },
            operator: {
              color: "#9E9B93",
            },
            predictive: {
              color: "#9E9B93",
            },
            preproc: {
              color: "#9E9B93",
            },
            primary: {
              color: "#C5C9C7",
            },
            property: {
              color: "#C4B28A",
            },
            punctuation: {
              color: "#9E9B93",
            },
            "punctuation.bracket": {
              color: "#9E9B93",
            },
            "punctuation.delimiter": {
              color: "#9E9B93",
            },
            "punctuation.list_marker": {
              color: "#9E9B93",
            },
            "punctuation.special": {
              color: "#9E9B93",
            },
            string: {
              color: GREEN3,
            },
            "string.escape": {
              color: BLUE3,
            },
            "string.regex": {
              color: GREEN3,
            },
            "string.special": {
              color: GREEN3,
            },
            tag: {
              color: "#C4B28A",
            },
            "text.literal": {
              color: "#C5C9C7",
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
              color: "#C5C9C7",
            },
            "variable.parameter": {
              color: "#C4B28A",
            },
            "variable.special": {
              color: "#C4B28A",
            },
            variant: {
              color: null,
            },
          },
        },
      },
      {
        name: "Neo Light",
        appearance: "light",
        style: {
          accents: [PEARL_BLUE4, PEARL_ORANGE, PEARL_PINK, GREEN3, VIOLET3, YELLOW3, CYAN, RED3],

          background: "#f2f1ef",

          border: "#dddddb",
          "border.variant": "#dddddba0",
          "border.focused": "#dddddb",
          "border.selected": "#dddddb",
          "border.transparent": "#dddddb00",
          "border.disabled": "#dddddb80",

          "elevated_surface.background": "#f2f1ef",
          "surface.background": "#f2f1ef",
          "element.background": "#e2e1df",
          "element.hover": "#dddddb",
          "element.active": "#dddddb",
          "element.selected": "#dddddb",
          "element.disabled": "#f2f1ef",

          "drop_target.background": "#e2e1df",
          "ghost_element.background": "#f2f1ef",
          "ghost_element.hover": "#dddddb",
          "ghost_element.active": "#dddddb",
          "ghost_element.selected": "#dddddb",
          "ghost_element.disabled": "#f2f1ef",

          text: "#22262D",
          "text.muted": "#6D6D69",
          "text.placeholder": "#6D6D69",
          "text.disabled": "#6D6D69",
          "text.accent": "#5E857A",

          icon: "#22262D",
          "icon.muted": "#6D6D69",
          "icon.disabled": "#9F9F99",
          "icon.placeholder": "#f2f1ef",
          "icon.accent": "#5E857A",

          "status_bar.background": "#f2f1ef",
          "title_bar.background": "#f2f1ef",
          "toolbar.background": "#f2f1ef",
          "tab_bar.background": "#f2f1ef",
          "tab.inactive_background": "#f2f1ef",
          "tab.active_background": "#e2e1df",

          "search.match_background": "#9fb5c9",
          "panel.background": "#f2f1ef",
          "panel.focused_border": "#dddddb",
          "pane.focused_border": "#dddddb",

          "scrollbar.thumb.background": "#6D6D6934",
          "scrollbar.thumb.hover_background": "#6D6D69",
          "scrollbar.thumb.border": "#e2e1df",
          "scrollbar.track.background": "#f2f1ef",
          "scrollbar.track.border": "#f2f1ef",

          "editor.foreground": "#22262D",
          "editor.background": "#f2f1ef",
          "editor.gutter.background": "#f2f1ef",
          "editor.subheader.background": "#f2f1ef",
          "editor.active_line.background": "#e2e1df",
          "editor.highlighted_line.background": "#e2e1df",
          "editor.line_number": "#9F9F99",
          "editor.active_line_number": "#22262D",
          "editor.invisible": "#e2e1df",
          "editor.wrap_guide": "#9F9F99",
          "editor.active_wrap_guide": "#949fb5",
          "editor.document_highlight.read_background": "#dddddb",
          "editor.document_highlight.write_background": "#e2e1df",

          "terminal.background": "#f2f1ef",
          "terminal.foreground": "#22262D",
          "terminal.bright_foreground": "#22262D",
          "terminal.dim_foreground": "#6D6D69",

          "terminal.ansi.black": "#22262D",
          "terminal.ansi.bright_black": "#22262D",
          "terminal.ansi.dim_black": "#6D6D69",
          "terminal.ansi.red": "#c84053",
          "terminal.ansi.bright_red": "#e82424",
          "terminal.ansi.dim_red": "#c34043",
          "terminal.ansi.green": "#6f894e",
          "terminal.ansi.bright_green": "#6e915f",
          "terminal.ansi.dim_green": "#b7d0ae",
          "terminal.ansi.yellow": "#77713f",
          "terminal.ansi.bright_yellow": "#de9800",
          "terminal.ansi.dim_yellow": "#f9d791",
          "terminal.ansi.blue": PEARL_BLUE4,
          "terminal.ansi.bright_blue": PEARL_BLUE4,
          "terminal.ansi.dim_blue": "#9fb5c9",
          "terminal.ansi.magenta": "#766b90",
          "terminal.ansi.bright_magenta": "#624c83",
          "terminal.ansi.dim_magenta": "#a09cac",
          "terminal.ansi.cyan": "#597b75",
          "terminal.ansi.bright_cyan": "#4e8ca2",
          "terminal.ansi.dim_cyan": "#5a7785",
          "terminal.ansi.white": "#e2e1df",
          "terminal.ansi.bright_white": "#f2f1ef",
          "terminal.ansi.dim_white": "#dddddb",

          "link_text.hover": "#6a9589",
          "link_text.border": "#dddddb",
          "link_text.background": "#f2f1ef",
          conflict: "#D7474B",
          created: "#6E915F",
          deleted: "#d9a594",
          error: "#D7474B",
          warning: "#77713f",
          "warning.border": "#dddddb",
          "warning.background": "#f2f1ef",
          success: "#6E915F",
          "success.border": "#dddddb",
          "success.background": "#f2f1ef",
          info: "#6693BF",
          "info.border": "#dddddb",
          "info.background": "#f2f1ef",
          hint: "#6D6D69",
          "hint.border": "#dddddb",
          "hint.background": "#f2f1ef",
          modified: "#DE9800",
          renamed: "#d9a594",
          unreachable: "#22262D",
          ignored: "#d9a594",
          hidden: "#6693BF",
          predictive: "#6D6D69",

          players: [
            {
              cursor: PEARL_BLACK,
              background: PEARL_WHITE,
              selection: "#C6C6C5",
            },
            {
              cursor: PEARL_BLUE4,
            },
            {
              cursor: PEARL_ORANGE,
            },
            {
              cursor: PEARL_PINK,
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
              color: "#624C83",
            },
            boolean: {
              color: PEARL_ORANGE,
            },
            comment: {
              color: "#6D6D69",
            },
            "comment.doc": {
              color: "#6D6D69",
            },
            constant: {
              color: PEARL_ORANGE,
            },
            constructor: {
              color: "#6693BF",
            },
            embedded: {
              color: PEARL_ORANGE,
            },
            emphasis: {
              color: PEARL_ORANGE,
            },
            enum: {
              color: PEARL_ORANGE,
            },
            function: {
              color: "#4D699B",
            },
            hint: {
              color: "#6D6D69",
              font_weight: 300,
            },
            keyword: {
              color: PEARL_VIOLET4,
            },
            label: {
              color: PEARL_VIOLET4,
            },
            link_text: {
              color: "#6D6D69",
              font_style: "normal",
            },
            link_uri: {
              color: "#6693BF",
            },
            number: {
              color: PEARL_PINK,
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
            },
            "punctuation.bracket": {
              color: "#6D6D69",
            },
            "punctuation.delimiter": {
              color: "#6D6D69",
            },
            "punctuation.list_marker": {
              color: "#6D6D69",
            },
            "punctuation.special": {
              color: "#6D6D69",
            },
            string: {
              color: PEARL_GREEN,
            },
            "string.escape": {
              color: PEARL_BLUE4,
            },
            "string.regex": {
              color: PEARL_GREEN,
            },
            "string.special": {
              color: PEARL_GREEN,
            },
            tag: {
              color: "#77713f",
            },
            "text.literal": {
              color: "#22262D",
            },
            title: {
              color: PEARL_VIOLET4,
              font_weight: 700,
            },
            type: {
              color: "#597B75",
            },
            "type.builtin": {
              color: "#597B75",
            },
            "type.super": {
              color: "#597B75",
            },
            variable: {
              color: "#22262D",
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
