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
const INK_BG2 = "#22262D";
const INK_BG3 = "#393B44";
const INK_BG4 = "#4B4E57";

// Mist Bg Shades
const MIST_BG0 = "#22262D";
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
const VIOCONST = "#938AA9";
const VIOCONST2 = "#8992a7";
const VIOCONST3 = "#949fb5";
const PINK = "#a292a3";
const ORANGE = "#b6927b";
const ORANGE2 = "#b98d7b";
const AQUA = "#8ea4a2";

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
const VIOCONST_SATURATED = "#8A88B0";
const VIOCONST2_SATURATED = "#7E91AF";
const VIOCONST3_SATURATED = "#8A9FBE";
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
const PEARL_BLACK0 = "#22262D";
const PEARL_BLACK1 = "#545464";
const PEARL_BLACK2 = "#43436c";
const PEARL_GRAY = "#e2e1df";
const PEARL_GRAY2 = "#5C6068";
const PEARL_GRAY3 = "#6D6D69";
const PEARL_GRAY4 = "#9F9F99";

const PEARL_WHITE0 = "#f2f1ef";
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
          background: "#090E13",

          border: "#22262D",
          "border.variant": "#22262Da0",
          "border.focused": "#22262D",
          "border.selected": "#22262D",
          "border.transparent": "#22262D00",
          "border.disabled": "#22262D80",

          "elevated_surface.background": "#14171d",
          "surface.background": "#090E13",
          "element.background": "#22262D",
          "element.hover": "#393B44",
          "element.active": "#393B44",
          "element.selected": "#393B44",
          "element.disabled": "#14171d",

          "drop_target.background": "#22262D",
          "ghost_element.background": "#090E13",
          "ghost_element.hover": "#393B44",
          "ghost_element.active": "#393B44",
          "ghost_element.selected": "#393B44",
          "ghost_element.disabled": "#14171d",

          text: "#c5c9c7",
          "text.muted": "#75797f",
          "text.placeholder": "#5C6066",
          "text.disabled": "#5C6066",
          "text.accent": "#c4746e",

          icon: "#c5c9c7",
          "icon.muted": "#75797f",
          "icon.disabled": "#5C6066",
          "icon.placeholder": "#14171d",
          "icon.accent": "#8ba4b0",

          "status_bar.background": "#090E13",
          "title_bar.background": "#090E13",
          "toolbar.background": "#090E13",
          "tab_bar.background": "#090E13",
          "tab.inactive_background": "#090E13",
          "tab.active_background": "#22262D",

          "search.match_background": "#536269",
          "panel.background": "#090E13",
          "panel.focused_border": "#8ba4b0",
          "pane.focused_border": "#949fb5",

          "scrollbar.thumb.background": "#5C606634",
          "scrollbar.thumb.hover_background": "#5C6066",
          "scrollbar.thumb.border": "#22262D",
          "scrollbar.track.background": "#090E13",
          "scrollbar.track.border": "#090E13",

          "editor.foreground": "#c5c9c7",
          "editor.background": "#090E13",
          "editor.gutter.background": "#090E13",
          "editor.subheader.background": "#14171d",
          "editor.active_line.background": "#22262D",
          "editor.highlighted_line.background": "#22262D",
          "editor.line_number": "#5C6066",
          "editor.active_line_number": "#c5c9c7",
          "editor.invisible": "#22262D",
          "editor.wrap_guide": "#5C6066",
          "editor.active_wrap_guide": "#949fb5",
          "editor.document_highlight.read_background": "#393B44",
          "editor.document_highlight.write_background": "#22262D",

          "terminal.background": "#090E13",
          "terminal.foreground": "#c5c9c7",
          "terminal.bright_foreground": "#c4b28a",
          "terminal.dim_foreground": "#75797f",

          "terminal.ansi.black": "#14171d",
          "terminal.ansi.bright_black": "#22262D",
          "terminal.ansi.dim_black": "#14171d",
          "terminal.ansi.red": "#c4746e",
          "terminal.ansi.bright_red": "#e46876",
          "terminal.ansi.dim_red": "#c34043",
          "terminal.ansi.green": "#8a9a7b",
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
          "terminal.ansi.dim_magenta": "#8ea4a2",
          "terminal.ansi.cyan": "#8ea4a2",
          "terminal.ansi.bright_cyan": "#7aa89f",
          "terminal.ansi.dim_cyan": "#8ea4a2",
          "terminal.ansi.white": "#c5c9c7",
          "terminal.ansi.bright_white": "#b6927b",
          "terminal.ansi.dim_white": "#c5c9c7",

          "link_text.hover": "#6a9589",
          "link_text.border": "#22262D",
          "link_text.background": "#14171d",
          conflict: "#ff5d62",
          created: "#87a987",
          deleted: "#c34043",
          error: "#c4746e",
          warning: "#c4b28a",
          "warning.border": "#22262D",
          "warning.background": "#14171d",
          hidden: "#949fb5",
          success: "#87a987",
          "success.border": "#22262D",
          "success.background": "#14171d",
          info: "#949fb5",
          "info.border": "#22262D",
          "info.background": "#14171d",
          hint: "#8ba4b0",
          "hint.border": "#22262D",
          "hint.background": "#14171d",
          modified: "#dca561",
          renamed: "#b6927b",
          unreachable: "#c5c9c7",
          ignored: "#b6927b",
          predictive: "#75797f",

          players: [
            {
              cursor: "#c5c9c7",
              background: "#090E13",
              selection: "#393B44",
            },
          ],

          syntax: {
            attribute: {
              color: "#8992A7",
              font_style: null,
              font_weight: null,
            },
            boolean: {
              color: "#B6927B",
              font_style: null,
              font_weight: null,
            },
            comment: {
              color: "#75797F",
              font_style: null,
              font_weight: null,
            },
            "comment.doc": {
              color: "#75797F",
              font_style: null,
              font_weight: null,
            },
            constant: {
              color: "#B6927B",
              font_style: null,
              font_weight: null,
            },
            constructor: {
              color: "#949FB5",
              font_style: null,
              font_weight: null,
            },
            embedded: {
              color: "#B6927B",
              font_style: null,
              font_weight: null,
            },
            emphasis: {
              color: "#B6927B",
              font_style: null,
              font_weight: null,
            },
            enum: {
              color: "#B6927B",
              font_style: null,
              font_weight: null,
            },
            function: {
              color: "#8BA4B0",
              font_style: null,
              font_weight: null,
            },
            hint: {
              color: "#9E9B93",
              font_style: null,
              font_weight: 700,
            },
            keyword: {
              color: "#8992A7",
              font_style: null,
              font_weight: null,
            },
            label: {
              color: null,
              font_style: null,
              font_weight: null,
            },
            link_text: {
              color: "#9E9B93",
              font_style: "normal",
              font_weight: null,
            },
            link_uri: {
              color: "#8992A7",
              font_style: null,
              font_weight: null,
            },
            number: {
              color: "#A292A3",
              font_style: null,
              font_weight: null,
            },
            operator: {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            predictive: {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            preproc: {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            primary: {
              color: "#C5C9C7",
              font_style: null,
              font_weight: null,
            },
            property: {
              color: "#C4B28A",
              font_style: null,
              font_weight: null,
            },
            punctuation: {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            "punctuation.bracket": {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            "punctuation.delimiter": {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            "punctuation.list_marker": {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            "punctuation.special": {
              color: "#9E9B93",
              font_style: null,
              font_weight: null,
            },
            string: {
              color: "#8A9A7B",
              font_style: null,
              font_weight: null,
            },
            "string.escape": {
              color: "#8A9A7B",
              font_style: null,
              font_weight: null,
            },
            "string.regex": {
              color: "#8A9A7B",
              font_style: null,
              font_weight: null,
            },
            "string.special": {
              color: "#8A9A7B",
              font_style: null,
              font_weight: null,
            },
            "string.special.symbol": {
              color: "#8A9A7B",
              font_style: null,
              font_weight: null,
            },
            tag: {
              color: "#C4B28A",
              font_style: null,
              font_weight: null,
            },
            "text.literal": {
              color: "#C5C9C7",
              font_style: null,
              font_weight: null,
            },
            title: {
              color: "#C5C9C7",
              font_style: null,
              font_weight: 400,
            },
            type: {
              color: "#8EA4A2",
              font_style: null,
              font_weight: null,
            },
            "type.builtin": {
              color: "#8EA4A2",
              font_style: null,
              font_weight: null,
            },
            "type.super": {
              color: "#8EA4A2",
              font_style: null,
              font_weight: null,
            },
            variable: {
              color: "#C5C9C7",
              font_style: null,
              font_weight: null,
            },
            "variable.parameter": {
              color: "#C4B28A",
              font_style: null,
              font_weight: null,
            },
            "variable.special": {
              color: "#C4B28A",
              font_style: null,
              font_weight: null,
            },
            variant: {
              color: null,
              font_style: null,
              font_weight: null,
            },
          },
        },
      },
      {
        name: "Neo Light",
        appearance: "light",
        style: {
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
          "terminal.ansi.blue": "#4d699b",
          "terminal.ansi.bright_blue": "#4d699b",
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
              cursor: "#22262D",
              background: "#f2f1ef",
              selection: "#C6C6C5",
            },
          ],
          syntax: {
            attribute: {
              color: "#624C83",
              font_style: null,
              font_weight: null,
            },
            boolean: {
              color: "#CC6D00",
              font_style: null,
              font_weight: null,
            },
            comment: {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            "comment.doc": {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            constant: {
              color: "#CC6D00",
              font_style: null,
              font_weight: null,
            },
            constructor: {
              color: "#6693BF",
              font_style: null,
              font_weight: null,
            },
            embedded: {
              color: "#CC6D00",
              font_style: null,
              font_weight: null,
            },
            emphasis: {
              color: "#CC6D00",
              font_style: null,
              font_weight: null,
            },
            enum: {
              color: "#CC6D00",
              font_style: null,
              font_weight: null,
            },
            function: {
              color: "#4D699B",
              font_style: null,
              font_weight: null,
            },
            hint: {
              color: "#6D6D69",
              font_style: null,
              font_weight: 700,
            },
            keyword: {
              color: "#624C83",
              font_style: null,
              font_weight: null,
            },
            label: {
              color: null,
              font_style: null,
              font_weight: null,
            },
            link_text: {
              color: "#6D6D69",
              font_style: "normal",
              font_weight: null,
            },
            link_uri: {
              color: "#6693BF",
              font_style: null,
              font_weight: null,
            },
            number: {
              color: "#B35B79",
              font_style: null,
              font_weight: null,
            },
            operator: {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            predictive: {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            preproc: {
              color: "#6D6F6E",
              font_style: null,
              font_weight: null,
            },
            primary: {
              color: "#22262D",
              font_style: null,
              font_weight: null,
            },
            property: {
              color: "#77713F",
              font_style: null,
              font_weight: null,
            },
            punctuation: {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            "punctuation.bracket": {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            "punctuation.delimiter": {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            "punctuation.list_marker": {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            "punctuation.special": {
              color: "#6D6D69",
              font_style: null,
              font_weight: null,
            },
            string: {
              color: "#6F894E",
              font_style: null,
              font_weight: null,
            },
            "string.escape": {
              color: "#6F894E",
              font_style: null,
              font_weight: null,
            },
            "string.regex": {
              color: "#6F894E",
              font_style: null,
              font_weight: null,
            },
            "string.special": {
              color: "#6F894E",
              font_style: null,
              font_weight: null,
            },
            "string.special.symbol": {
              color: "#6F894E",
              font_style: null,
              font_weight: null,
            },
            tag: {
              color: "#77713f",
              font_style: null,
              font_weight: null,
            },
            "text.literal": {
              color: "#22262D",
              font_style: null,
              font_weight: null,
            },
            title: {
              color: "#22262D",
              font_style: null,
              font_weight: 400,
            },
            type: {
              color: "#597B75",
              font_style: null,
              font_weight: null,
            },
            "type.builtin": {
              color: "#597B75",
              font_style: null,
              font_weight: null,
            },
            "type.super": {
              color: "#597B75",
              font_style: null,
              font_weight: null,
            },
            variable: {
              color: "#22262D",
              font_style: null,
              font_weight: null,
            },
            "variable.parameter": {
              color: "#77713f",
              font_style: null,
              font_weight: null,
            },
            "variable.special": {
              color: "#77713f",
              font_style: null,
              font_weight: null,
            },
            variant: {
              color: null,
              font_style: null,
              font_weight: null,
            },
          },
        },
      },
    ],
  };
}
