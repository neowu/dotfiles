const { writeFile } = require('fs');

var alpha = ["00", "19", "33", "4c", "66", "7f", "99", "b2", "cc", "e5", "ff"]

var dark0 = "#2e3440";      // Used for texts, backgrounds, carets and structuring characters like curly- and square brackets.
var dark1 = "#3b4252";      // Used as a lighter background color for UI elements like status bars.
var dark2 = "#434c5e";      // Used as line highlighting in the editor. In the UI scope it may be used as selection- and highlight color.
var dark3 = "#4c566a";      // Used for comments, invisible, indent and wrap guide marker. In the UI scope used as pseudo class color for disabled elements.

var grey0 = "#616e88";      // comments

var light0 = "#d8dee9";     // Main color for text, variables, constants and attributes. In the UI scope used as semi-light background depending on the theme shading design.
var light1 = "#e5e9f0";     // Used as a lighter background color for UI elements like status bars. Used as semi-light background depending on the theme shading design.
var light2 = "#eceff4";     // Used for punctuations, carets and structuring characters like curly- and square brackets. In the UI scope used as background, selection- and highlight color depending on the theme shading design.

var blue0 = "#8fbcbb";      // Used for classes, types and documentation tags.
var blue1 = "#88c0d0";      // Represents the accent color of the color palette. Main color for primary UI elements and methods/functions.
var blue2 = "#81a1c1";      // Used for language-specific syntactic/reserved support characters and keywords, operators, tags, units and punctuations like (semi)colons,commas and braces.
var blue3 = "#5e81ac";      // Used for markup doctypes, import/include/require statements, pre-processor statements and at-rules (`@`).

var red = "#bf616a";
var orange = "#d08770";
var yellow = "#ebcb8b";
var green = "#a3be8c";
var purple = "#b48ead";
var cyan = blue1

var transparent = "#000000" + alpha[0]
var shadow = "#000000" + alpha[4]
var primary = blue1
var background = dark0
var text = light0
var reverseText = dark0

// var selectedBackground = dark3 + "CC"
// var secondaryText = grey0
// var ignoreText = dark3
// var highlightBackground = dark2
// var hoverBackground = dark1 + "CC"
// var string = green
// var number = null
// var method = null
// var keyword = null
// var operator = null
// var class_ = null
// var variable = null
// var comment = grey0
// var highlight = null

// refer to https://code.visualstudio.com/api/references/theme-color
var template = {
    "name": "neo",
    "semanticHighlighting": true,
    "colors": {
        // Base colors
        "focusBorder": transparent,
        "foreground": text,
        "widget.border": transparent,
        "widget.shadow": shadow,
        "selection.background": primary + alpha[4],
        "descriptionForeground": text + alpha[9],
        "errorForeground": red,
        "icon.foreground": text,
        "sash.hoverBorder": primary,

        // Text colors
        "textBlockQuote.background": dark1,
        "textBlockQuote.border": blue2,
        "textCodeBlock.background": dark3,
        "textLink.activeForeground": primary + alpha[9],
        "textLink.foreground": primary,
        "textPreformat.foreground": blue0,
        "textSeparator.foreground": primary,

        // Button control
        "button.background": primary,
        "button.foreground": reverseText,
        "button.hoverBackground": primary + alpha[9],
        "button.secondaryBackground": dark2,
        "button.secondaryForeground": text,
        "button.secondaryHoverBackground": dark3,
        "checkbox.foreground": primary,

        // Dropdown control
        "dropdown.background": dark1,
        "dropdown.foreground": primary,

        // Input control
        "input.background": "#3b4252",
        "input.foreground": "#d8dee9",
        "input.placeholderForeground": "#d8dee999",
        "input.border": "#3b4252",
        "inputOption.activeBackground": "#5e81ac",
        "inputOption.activeBorder": "#5e81ac",
        "inputOption.activeForeground": "#eceff4",
        "inputValidation.errorBackground": "#bf616a",
        "inputValidation.errorBorder": "#bf616a",
        "inputValidation.infoBackground": "#81a1c1",
        "inputValidation.infoBorder": "#81a1c1",
        "inputValidation.warningBackground": "#d08770",
        "inputValidation.warningBorder": "#d08770",

        "activityBar.background": background,
        "activityBar.foreground": text,
        "activityBar.activeBorder": primary,
        "activityBar.activeFocusBorder": primary,
        "activityBar.activeBackground": dark1,
        "activityBarBadge.background": primary,
        "activityBarBadge.foreground": reverseText,

        "badge.foreground": "#2e3440",
        "badge.background": "#88c0d0",

        "charts.red": red,
        "charts.blue": "#81a1c1",
        "charts.yellow": yellow,
        "charts.orange": orange,
        "charts.green": green,
        "charts.purple": purple,
        "charts.foreground": "#d8dee9",
        "charts.lines": "#88c0d0",
        "debugConsole.infoForeground": "#88c0d0",
        "debugConsole.warningForeground": "#ebcb8b",
        "debugConsole.errorForeground": "#bf616a",
        "debugConsole.sourceForeground": "#616e88",
        "debugConsoleInputIcon.foreground": "#81a1c1",
        "debugExceptionWidget.background": "#4c566a",
        "debugExceptionWidget.border": "#2e3440",
        "debugToolBar.background": "#3b4252",

        "diffEditor.insertedTextBackground": "#81a1c133",
        "diffEditor.removedTextBackground": "#bf616a4d",

        "editorCursor.foreground": "#d8dee9",
        "editorHint.border": "#ebcb8b00",
        "editorHint.foreground": "#ebcb8b",

        "editorIndentGuide.background1": dark1,
        "editorIndentGuide.activeBackground1": dark3,

        "editorInlayHint.foreground": "#616e88",
        "editorInlayHint.background": transparent,
        "editorLineNumber.foreground": "#4c566a",
        "editorLineNumber.activeForeground": "#d8dee9",
        "editorWhitespace.foreground": "#4c566ab3",

        "editorWidget.background": "#2e3440",
        "editorWidget.border": dark1,

        "editor.background": dark0,
        "editor.foreground": "#d8dee9",
        "editor.hoverHighlightBackground": dark1 + alpha[5],
        "editor.findMatchBackground": "#88c0d066",
        "editor.findMatchHighlightBackground": "#88c0d033",
        "editor.findRangeHighlightBackground": "#88c0d033",

        "editor.lineHighlightBackground": dark1 + alpha[5],

        "editor.inactiveSelectionBackground": dark3 + alpha[7],
        "editor.inlineValuesBackground": "#4c566a",
        "editor.inlineValuesForeground": "#eceff4",
        "editor.selectionBackground": dark3 + alpha[8],
        "editor.rangeHighlightBackground": "#434c5e52",

        "editor.selectionHighlightBackground": blue1 + alpha[1],
        "editor.wordHighlightBackground": blue1 + alpha[1],
        "editor.wordHighlightStrongBackground": blue1 + alpha[2],

        "editor.stackFrameHighlightBackground": "#5e81ac",
        "editor.focusedStackFrameHighlightBackground": "#5e81ac",

        "editorError.foreground": "#bf616a",
        "editorError.border": "#bf616a00",
        "editorWarning.foreground": "#ebcb8b",
        "editorWarning.border": "#ebcb8b00",

        "editorBracketMatch.background": transparent,
        "editorBracketMatch.border": primary,

        "editorBracketHighlight.foreground1": blue0,
        "editorBracketHighlight.foreground2": blue1,
        "editorBracketHighlight.foreground3": blue2,
        "editorBracketHighlight.foreground4": blue3,
        "editorBracketHighlight.foreground5": blue0,
        "editorBracketHighlight.foreground6": blue1,
        "editorBracketHighlight.unexpectedBracket.foreground": red,

        "editorCodeLens.foreground": "#4c566a",
        "editorGroup.border": "#3b425201",
        "editorGroupHeader.border": "#3b425200",
        "editorGroupHeader.noTabsBackground": "#2e3440",
        "editorGroupHeader.tabsBackground": "#2e3440",
        "editorGroupHeader.tabsBorder": "#3b425200",

        "editorGutter.background": "#2e3440",
        "editorGutter.modifiedBackground": yellow,
        "editorGutter.addedBackground": green,
        "editorGutter.deletedBackground": "#bf616a",

        "editorHoverWidget.background": "#3b4252",
        "editorHoverWidget.border": "#3b4252",
        "editorLink.activeForeground": "#88c0d0",
        "editorMarkerNavigation.background": "#5e81acc0",
        "editorMarkerNavigationError.background": "#bf616ac0",
        "editorMarkerNavigationWarning.background": "#ebcb8bc0",
        "editorOverviewRuler.border": "#3b4252",
        "editorOverviewRuler.currentContentForeground": "#3b4252",
        "editorOverviewRuler.incomingContentForeground": "#3b4252",
        "editorOverviewRuler.findMatchForeground": "#88c0d066",
        "editorOverviewRuler.rangeHighlightForeground": "#88c0d066",
        "editorOverviewRuler.selectionHighlightForeground": "#88c0d066",
        "editorOverviewRuler.wordHighlightForeground": "#88c0d066",
        "editorOverviewRuler.wordHighlightStrongForeground": "#88c0d066",
        "editorOverviewRuler.modifiedForeground": "#ebcb8b",
        "editorOverviewRuler.addedForeground": "#a3be8c",
        "editorOverviewRuler.deletedForeground": "#bf616a",
        "editorOverviewRuler.errorForeground": "#bf616a",
        "editorOverviewRuler.warningForeground": "#ebcb8b",
        "editorOverviewRuler.infoForeground": "#81a1c1",
        "editorRuler.foreground": "#434c5e",
        "editorSuggestWidget.background": "#2e3440",
        "editorSuggestWidget.border": "#3b4252",
        "editorSuggestWidget.foreground": "#d8dee9",
        "editorSuggestWidget.focusHighlightForeground": "#88c0d0",
        "editorSuggestWidget.highlightForeground": "#88c0d0",
        "editorSuggestWidget.selectedBackground": "#434c5e",
        "editorSuggestWidget.selectedForeground": "#d8dee9",
        "extensionButton.prominentForeground": "#2E3440",
        "extensionButton.prominentBackground": "#434c5e",
        "extensionButton.prominentHoverBackground": "#4c566a",

        "gitDecoration.modifiedResourceForeground": "#ebcb8b",
        "gitDecoration.deletedResourceForeground": "#bf616a",
        "gitDecoration.untrackedResourceForeground": "#a3be8c",
        "gitDecoration.ignoredResourceForeground": "#d8dee966",
        "gitDecoration.conflictingResourceForeground": "#5e81ac",
        "gitDecoration.submoduleResourceForeground": "#8fbcbb",
        "gitDecoration.stageDeletedResourceForeground": "#bf616a",
        "gitDecoration.stageModifiedResourceForeground": "#ebcb8b",

        "keybindingLabel.background": "#4c566a",
        "keybindingLabel.border": "#4c566a",
        "keybindingLabel.bottomBorder": "#4c566a",
        "keybindingLabel.foreground": "#d8dee9",

        "list.activeSelectionBackground": dark2,
        "list.inactiveSelectionBackground": dark2,
        "list.inactiveSelectionForeground": "#d8dee9",
        "list.inactiveFocusBackground": "#434c5ecc",
        "list.hoverForeground": "#eceff4",
        "list.focusForeground": "#d8dee9",
        "list.focusBackground": "#88c0d099",
        "list.focusHighlightForeground": "#eceff4",
        "list.hoverBackground": "#3b4252",
        "list.dropBackground": "#88c0d099",
        "list.highlightForeground": primary,
        "list.errorForeground": "#bf616a",
        "list.warningForeground": "#ebcb8b",

        "merge.currentHeaderBackground": "#81a1c166",
        "merge.currentContentBackground": "#81a1c14d",
        "merge.incomingHeaderBackground": "#8fbcbb66",
        "merge.incomingContentBackground": "#8fbcbb4d",
        "merge.border": "#3b425200",
        "minimap.background": "#2e3440",
        "minimap.errorHighlight": "#bf616acc",
        "minimap.findMatchHighlight": "#88c0d0",
        "minimap.selectionHighlight": "#88c0d0cc",
        "minimap.warningHighlight": "#ebcb8bcc",
        "minimapGutter.addedBackground": "#a3be8c",
        "minimapGutter.deletedBackground": "#bf616a",
        "minimapGutter.modifiedBackground": "#ebcb8b",
        "minimapSlider.activeBackground": "#434c5eaa",
        "minimapSlider.background": "#434c5e99",
        "minimapSlider.hoverBackground": "#434c5eaa",

        "notificationCenter.border": "#3b425200",
        "notificationCenterHeader.background": "#2e3440",
        "notificationCenterHeader.foreground": "#88c0d0",
        "notificationLink.foreground": "#88c0d0",
        "notifications.background": "#3b4252",
        "notifications.border": "#2e3440",
        "notifications.foreground": "#d8dee9",
        "notificationToast.border": "#3b425200",

        "panel.background": "#2e3440",
        "panel.border": "#3b4252",
        "panelTitle.activeBorder": "#88c0d000",
        "panelTitle.activeForeground": "#88c0d0",
        "panelTitle.inactiveForeground": "#d8dee9",
        "peekView.border": "#4c566a",
        "peekViewEditor.background": "#2e3440",
        "peekViewEditorGutter.background": "#2e3440",
        "peekViewEditor.matchHighlightBackground": "#88c0d04d",
        "peekViewResult.background": "#2e3440",
        "peekViewResult.fileForeground": "#88c0d0",
        "peekViewResult.lineForeground": "#d8dee966",
        "peekViewResult.matchHighlightBackground": "#88c0d0cc",
        "peekViewResult.selectionBackground": "#434c5e",
        "peekViewResult.selectionForeground": "#d8dee9",
        "peekViewTitle.background": "#3b4252",
        "peekViewTitleDescription.foreground": "#d8dee9",
        "peekViewTitleLabel.foreground": "#88c0d0",
        "pickerGroup.border": "#3b4252",
        "pickerGroup.foreground": "#88c0d0",
        "progressBar.background": "#88c0d0",
        "quickInputList.focusBackground": "#88c0d0",
        "quickInputList.focusForeground": "#2e3440",

        "scrollbar.shadow": shadow,
        "scrollbarSlider.background": dark2 + alpha[3],
        "scrollbarSlider.hoverBackground": dark2 + alpha[4],
        "scrollbarSlider.activeBackground": dark2 + alpha[5],

        "sideBar.background": "#2e3440",
        "sideBar.foreground": "#d8dee9",
        "sideBar.border": "#3b4252",
        "sideBarSectionHeader.background": "#3b4252",
        "sideBarSectionHeader.foreground": "#d8dee9",
        "sideBarTitle.foreground": "#d8dee9",

        "statusBar.background": "#3b4252",
        "statusBar.debuggingBackground": "#5e81ac",
        "statusBar.debuggingForeground": "#d8dee9",
        "statusBar.noFolderForeground": "#d8dee9",
        "statusBar.noFolderBackground": "#3b4252",
        "statusBar.foreground": "#d8dee9",
        "statusBar.border": "#3b425200",

        "statusBarItem.activeBackground": "#4c566a",
        "statusBarItem.hoverBackground": dark3 + alpha[7],
        "statusBarItem.compactHoverBackground": dark3 + alpha[3],
        "statusBarItem.prominentBackground": "#3b4252",
        "statusBarItem.prominentHoverBackground": "#434c5e",
        "statusBarItem.errorBackground": "#3b4252",
        "statusBarItem.errorForeground": "#bf616a",
        "statusBarItem.warningBackground": "#ebcb8b",
        "statusBarItem.warningForeground": "#2e3440",

        "tab.activeBackground": dark0,
        "tab.activeForeground": "#d8dee9",
        "tab.activeBorder": primary,
        "tab.border": transparent,
        "tab.inactiveBackground": dark0,
        "tab.inactiveForeground": "#d8dee966",
        "tab.unfocusedActiveForeground": "#d8dee999",
        "tab.unfocusedInactiveForeground": "#d8dee966",
        // "tab.activeBorderTop": "#88c0d000",

        "terminal.background": dark0,
        "terminal.foreground": light0,
        "terminal.ansiBlack": "#3b4252",
        "terminal.ansiRed": red,
        "terminal.ansiGreen": green,
        "terminal.ansiYellow": yellow,
        "terminal.ansiBlue": "#81a1c1",
        "terminal.ansiMagenta": purple,
        "terminal.ansiCyan": "#88c0d0",
        "terminal.ansiWhite": "#e5e9f0",
        "terminal.ansiBrightBlack": "#4c566a",
        "terminal.ansiBrightRed": red,
        "terminal.ansiBrightGreen": green,
        "terminal.ansiBrightYellow": yellow,
        "terminal.ansiBrightBlue": "#81a1c1",
        "terminal.ansiBrightMagenta": purple,
        "terminal.ansiBrightCyan": "#8fbcbb",
        "terminal.ansiBrightWhite": light2,
        "terminal.tab.activeBorder": primary,


        "titleBar.activeBackground": "#2e3440",
        "titleBar.activeForeground": "#d8dee9",
        "titleBar.border": "#2e344000",
        "titleBar.inactiveBackground": "#2e3440",
        "titleBar.inactiveForeground": "#d8dee966",
        "tree.indentGuidesStroke": "#616e88",
        "walkThrough.embeddedEditorBackground": "#2e3440",
        "widget.shadow": "#00000066",

        "debugIcon.breakpointForeground": red,
    },
    "tokenColors": [
        {
            "settings": {
                "foreground": "#d8dee9ff"
            }
        },
        {
            "scope": [
                "punctuation.definition.string.begin",
                "punctuation.definition.string.end",
            ],
            "settings": {
                "foreground": green
            }
        },
        {
            "scope": [
                "punctuation",
            ],
            "settings": {
                "foreground": blue2
            }
        },
        {
            "scope": "emphasis",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "scope": "strong",
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "name": "Comment",
            "scope": "comment",
            "settings": {
                "foreground": "#616E88"
            }
        },
        {
            "name": "Constant Character",
            "scope": "constant.character",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "Constant Character Escape",
            "scope": "constant.character.escape",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "Constant Language",
            "scope": "constant.language",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Constant Numeric",
            "scope": "constant.numeric",
            "settings": {
                "foreground": "#B48EAD"
            }
        },
        {
            "name": "Constant Regexp",
            "scope": "constant.regexp",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "Entity Name Class/Type",
            "scope": ["entity.name.class", "entity.name.type.class"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Entity Name Function",
            "scope": "entity.name.function",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "Entity Name Tag",
            "scope": "entity.name.tag",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Entity Other Attribute Name",
            "scope": "entity.other.attribute-name",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Entity Other Inherited Class",
            "scope": "entity.other.inherited-class",
            "settings": {
                "fontStyle": "bold",
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Invalid Deprecated",
            "scope": "invalid.deprecated",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "Invalid Illegal",
            "scope": "invalid.illegal",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "Keyword",
            "scope": "keyword",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Keyword Operator",
            "scope": "keyword.operator",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Keyword Other New",
            "scope": "keyword.other.new",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Markup Bold",
            "scope": "markup.bold",
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "name": "Markup Changed",
            "scope": "markup.changed",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "Markup Deleted",
            "scope": "markup.deleted",
            "settings": {
                "foreground": "#BF616A"
            }
        },
        {
            "name": "Markup Inserted",
            "scope": "markup.inserted",
            "settings": {
                "foreground": "#A3BE8C"
            }
        },
        {
            "name": "Meta Preprocessor",
            "scope": "meta.preprocessor",
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "Punctuation Definition Parameters",
            "scope": ["punctuation.definition.method-parameters", "punctuation.definition.function-parameters", "punctuation.definition.parameters"],
            "settings": {
                "foreground": "#ECEFF4"
            }
        },
        {
            "name": "Punctuation Definition Tag",
            "scope": "punctuation.definition.tag",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Punctuation Definition Comment",
            "scope": ["punctuation.definition.comment", "punctuation.end.definition.comment", "punctuation.start.definition.comment"],
            "settings": {
                "foreground": "#616E88"
            }
        },
        {
            "name": "Punctuation Section",
            "scope": "punctuation.section",
            "settings": {
                "foreground": "#ECEFF4"
            }
        },
        {
            "name": "Punctuation Section Embedded",
            "scope": ["punctuation.section.embedded.begin", "punctuation.section.embedded.end"],
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Punctuation Terminator",
            "scope": "punctuation.terminator",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Punctuation Variable",
            "scope": "punctuation.definition.variable",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Storage",
            "scope": "storage",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "String",
            "scope": "string",
            "settings": {
                "foreground": "#A3BE8C"
            }
        },
        {
            "name": "String Regexp",
            "scope": "string.regexp",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "Support Class",
            "scope": "support.class",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Support Constant",
            "scope": "support.constant",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Support Function",
            "scope": "support.function",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "Support Function Construct",
            "scope": "support.function.construct",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Support Type",
            "scope": "support.type",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Support Type Exception",
            "scope": "support.type.exception",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "Token Debug",
            "scope": "token.debug-token",
            "settings": {
                "foreground": "#b48ead"
            }
        },
        {
            "name": "Token Error",
            "scope": "token.error-token",
            "settings": {
                "foreground": "#bf616a"
            }
        },
        {
            "name": "Token Info",
            "scope": "token.info-token",
            "settings": {
                "foreground": "#88c0d0"
            }
        },
        {
            "name": "Token Warning",
            "scope": "token.warn-token",
            "settings": {
                "foreground": "#ebcb8b"
            }
        },
        {
            "name": "Variable",
            "scope": "variable.other",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "Variable Language",
            "scope": "variable.language",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "Variable Parameter",
            "scope": "variable.parameter",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[C/CPP] Punctuation Separator Pointer-Access",
            "scope": "punctuation.separator.pointer-access.c",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[C/CPP] Meta Preprocessor Include",
            "scope": ["source.c meta.preprocessor.include", "source.c string.quoted.other.lt-gt.include"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[C/CPP] Conditional Directive",
            "scope": [
                "source.cpp keyword.control.directive.conditional",
                "source.cpp punctuation.definition.directive",
                "source.c keyword.control.directive.conditional",
                "source.c punctuation.definition.directive"
            ],
            "settings": {
                "foreground": "#5E81AC",
                "fontStyle": "bold"
            }
        },
        {
            "name": "[CSS] Constant Other Color RGB Value",
            "scope": "source.css constant.other.color.rgb-value",
            "settings": {
                "foreground": "#B48EAD"
            }
        },
        {
            "name": "[CSS](Function) Meta Property-Value",
            "scope": "source.css meta.property-value",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[CSS] Media Queries",
            "scope": ["source.css keyword.control.at-rule.media", "source.css keyword.control.at-rule.media punctuation.definition.keyword"],
            "settings": {
                "foreground": "#D08770"
            }
        },
        {
            "name": "[CSS] Punctuation Definition Keyword",
            "scope": "source.css punctuation.definition.keyword",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[CSS] Support Type Property Name",
            "scope": "source.css support.type.property-name",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[diff] Meta Range Context",
            "scope": "source.diff meta.diff.range.context",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[diff] Meta Header From-File",
            "scope": "source.diff meta.diff.header.from-file",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[diff] Punctuation Definition From-File",
            "scope": "source.diff punctuation.definition.from-file",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[diff] Punctuation Definition Range",
            "scope": "source.diff punctuation.definition.range",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[diff] Punctuation Definition Separator",
            "scope": "source.diff punctuation.definition.separator",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Elixir](JakeBecker.elixir-ls) module names",
            "scope": "entity.name.type.module.elixir",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Elixir](JakeBecker.elixir-ls) module attributes",
            "scope": "variable.other.readwrite.module.elixir",
            "settings": {
                "foreground": "#D8DEE9",
                "fontStyle": "bold"
            }
        },
        {
            "name": "[Elixir](JakeBecker.elixir-ls) atoms",
            "scope": "constant.other.symbol.elixir",
            "settings": {
                "foreground": "#D8DEE9",
                "fontStyle": "bold"
            }
        },
        {
            "name": "[Elixir](JakeBecker.elixir-ls) modules",
            "scope": "variable.other.constant.elixir",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Go] String Format Placeholder",
            "scope": "source.go constant.other.placeholder.go",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "[Java](JavaDoc) Comment Block Documentation HTML Entities",
            "scope": "source.java comment.block.documentation.javadoc punctuation.definition.entity.html",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Java](JavaDoc) Constant Other",
            "scope": "source.java constant.other",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[Java](JavaDoc) Keyword Other Documentation",
            "scope": "source.java keyword.other.documentation",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java](JavaDoc) Keyword Other Documentation Author",
            "scope": "source.java keyword.other.documentation.author.javadoc",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java](JavaDoc) Keyword Other Documentation Directive/Custom",
            "scope": ["source.java keyword.other.documentation.directive", "source.java keyword.other.documentation.custom"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java](JavaDoc) Keyword Other Documentation See",
            "scope": "source.java keyword.other.documentation.see.javadoc",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java] Meta Method-Call",
            "scope": "source.java meta.method-call meta.method",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Java](JavaDoc) Meta Tag Template Link",
            "scope": ["source.java meta.tag.template.link.javadoc", "source.java string.other.link.title.javadoc"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java](JavaDoc) Meta Tag Template Value",
            "scope": "source.java meta.tag.template.value.javadoc",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Java](JavaDoc) Punctuation Definition Keyword",
            "scope": "source.java punctuation.definition.keyword.javadoc",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java](JavaDoc) Punctuation Definition Tag",
            "scope": ["source.java punctuation.definition.tag.begin.javadoc", "source.java punctuation.definition.tag.end.javadoc"],
            "settings": {
                "foreground": "#616E88"
            }
        },
        {
            "name": "[Java] Storage Modifier Import",
            "scope": "source.java storage.modifier.import",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java] Storage Modifier Package",
            "scope": "source.java storage.modifier.package",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java] Storage Type",
            "scope": "source.java storage.type",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java] Storage Type Annotation",
            "scope": "source.java storage.type.annotation",
            "settings": {
                "foreground": "#D08770"
            }
        },
        {
            "name": "[Java] Storage Type Generic",
            "scope": "source.java storage.type.generic",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Java] Storage Type Primitive",
            "scope": "source.java storage.type.primitive",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[JavaScript] Decorator",
            "scope": ["source.js punctuation.decorator", "source.js meta.decorator variable.other.readwrite", "source.js meta.decorator entity.name.function"],
            "settings": {
                "foreground": "#D08770"
            }
        },
        {
            "name": "[JavaScript] Meta Object-Literal Key",
            "scope": "source.js meta.object-literal.key",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[JavaScript](JSDoc) Storage Type Class",
            "scope": "source.js storage.type.class.jsdoc",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[JavaScript] String Template Literals Punctuation",
            "scope": [
                "source.js string.quoted.template punctuation.quasi.element.begin",
                "source.js string.quoted.template punctuation.quasi.element.end",
                "source.js string.template punctuation.definition.template-expression"
            ],
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[JavaScript] Interpolated String Template Punctuation Functions",
            "scope": "source.js string.quoted.template meta.method-call.with-arguments",
            "settings": {
                "foreground": "#ECEFF4"
            }
        },
        {
            "name": "[JavaScript] String Template Literal Variable",
            "scope": [
                "source.js string.template meta.template.expression support.variable.property",
                "source.js string.template meta.template.expression variable.other.object"
            ],
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[JavaScript] Support Type Primitive",
            "scope": "source.js support.type.primitive",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[JavaScript] Variable Other Object",
            "scope": "source.js variable.other.object",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[JavaScript] Variable Other Read-Write Alias",
            "scope": "source.js variable.other.readwrite.alias",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[JavaScript] Parentheses in Template Strings",
            "scope": [
                "source.js meta.embedded.line meta.brace.square",
                "source.js meta.embedded.line meta.brace.round",
                /* Required for extension `mgmcdermott.vscode-language-babel`. */
                "source.js string.quoted.template meta.brace.square",
                "source.js string.quoted.template meta.brace.round"
            ],
            "settings": {
                "foreground": "#ECEFF4"
            }
        },
        {
            "name": "[HTML] Constant Character Entity",
            "scope": "text.html.basic constant.character.entity.html",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "[HTML] Constant Other Inline-Data",
            "scope": "text.html.basic constant.other.inline-data",
            "settings": {
                "foreground": "#D08770",
                "fontStyle": "italic"
            }
        },
        {
            "name": "[HTML] Meta Tag SGML Doctype",
            "scope": "text.html.basic meta.tag.sgml.doctype",
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "[HTML] Punctuation Definition Entity",
            "scope": "text.html.basic punctuation.definition.entity",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[INI] Entity Name Section Group-Title",
            "scope": "source.properties entity.name.section.group-title.ini",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[INI] Punctuation Separator Key-Value",
            "scope": "source.properties punctuation.separator.key-value.ini",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] Markup Fenced Code Block",
            "scope": ["text.html.markdown markup.fenced_code.block", "text.html.markdown markup.fenced_code.block punctuation.definition"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Markdown] Markup Heading",
            "scope": "markup.heading",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Markdown] Markup Inline",
            "scope": ["text.html.markdown markup.inline.raw", "text.html.markdown markup.inline.raw punctuation.definition.raw"],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Markdown] Markup Italic",
            "scope": "text.html.markdown markup.italic",
            "settings": {
                "fontStyle": "italic"
            }
        },
        {
            "name": "[Markdown] Markup Link",
            "scope": "text.html.markdown markup.underline.link",
            "settings": {
                "fontStyle": "underline"
            }
        },
        {
            "name": "[Markdown] Markup List Numbered/Unnumbered",
            "scope": "text.html.markdown beginning.punctuation.definition.list",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] Markup Quote Punctuation Definition",
            "scope": "text.html.markdown beginning.punctuation.definition.quote",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Markdown] Markup Quote Punctuation Definition",
            "scope": "text.html.markdown markup.quote",
            "settings": {
                "foreground": "#616E88"
            }
        },
        {
            "name": "[Markdown] Markup Math Constant",
            "scope": "text.html.markdown constant.character.math.tex",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] Markup Math Definition Marker",
            "scope": ["text.html.markdown punctuation.definition.math.begin", "text.html.markdown punctuation.definition.math.end"],
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "[Markdown] Markup Math Function Definition Marker",
            "scope": "text.html.markdown punctuation.definition.function.math.tex",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Markdown] Markup Math Operator",
            "scope": "text.html.markdown punctuation.math.operator.latex",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] Punctuation Definition Heading",
            "scope": "text.html.markdown punctuation.definition.heading",
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] Punctuation Definition Constant/String",
            "scope": ["text.html.markdown punctuation.definition.constant", "text.html.markdown punctuation.definition.string"],
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Markdown] String Other Link Description/Title",
            "scope": [
                "text.html.markdown constant.other.reference.link",
                "text.html.markdown string.other.link.description",
                "text.html.markdown string.other.link.title"
            ],
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Perl] Perl Sigils",
            "scope": "source.perl punctuation.definition.variable",
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[PHP] Meta Function-Call Object",
            "scope": ["source.php meta.function-call", "source.php meta.function-call.object"],
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Python] Decorator",
            "scope": ["source.python entity.name.function.decorator", "source.python meta.function.decorator support.type"],
            "settings": {
                "foreground": "#D08770"
            }
        },
        {
            "name": "[Python] Function Call",
            "scope": "source.python meta.function-call.generic",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Python] Support Type",
            "scope": "source.python support.type",
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Python] Function Parameter",
            "scope": ["source.python variable.parameter.function.language"],
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[Python] Function Parameter Special",
            "scope": ["source.python meta.function.parameters variable.parameter.function.language.special.self"],
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[Rust] Entity types",
            "scope": "source.rust entity.name.type",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[Rust] Macro",
            "scope": "source.rust meta.macro entity.name.function",
            "settings": {
                "fontStyle": "bold",
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[Rust] Attributes",
            "scope": ["source.rust meta.attribute", "source.rust meta.attribute punctuation", "source.rust meta.attribute keyword.operator"],
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "[Rust] Traits",
            "scope": "source.rust entity.name.type.trait",
            "settings": {
                "fontStyle": "bold"
            }
        },
        {
            "name": "[Rust] Interpolation Bracket Curly",
            "scope": "source.rust punctuation.definition.interpolation",
            "settings": {
                "foreground": "#EBCB8B"
            }
        },
        {
            "name": "[SCSS] Punctuation Definition Interpolation Bracket Curly",
            "scope": [
                "source.css.scss punctuation.definition.interpolation.begin.bracket.curly",
                "source.css.scss punctuation.definition.interpolation.end.bracket.curly"
            ],
            "settings": {
                "foreground": "#81A1C1"
            }
        },
        {
            "name": "[SCSS] Variable Interpolation",
            "scope": "source.css.scss variable.interpolation",
            "settings": {
                "foreground": "#D8DEE9",
                "fontStyle": "italic"
            }
        },
        {
            "name": "[TypeScript] Decorators",
            "scope": [
                "source.ts punctuation.decorator",
                "source.ts meta.decorator variable.other.readwrite",
                "source.ts meta.decorator entity.name.function",
                "source.tsx punctuation.decorator",
                "source.tsx meta.decorator variable.other.readwrite",
                "source.tsx meta.decorator entity.name.function"
            ],
            "settings": {
                "foreground": "#D08770"
            }
        },
        {
            "name": "[TypeScript] Object-literal keys",
            "scope": ["source.ts meta.object-literal.key", "source.tsx meta.object-literal.key"],
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[TypeScript] Object-literal functions",
            "scope": ["source.ts meta.object-literal.key entity.name.function", "source.tsx meta.object-literal.key entity.name.function"],
            "settings": {
                "foreground": "#88C0D0"
            }
        },
        {
            "name": "[TypeScript] Type/Class",
            "scope": [
                "source.ts support.class",
                "source.ts support.type",
                "source.ts entity.name.type",
                "source.ts entity.name.class",
                "source.tsx support.class",
                "source.tsx support.type",
                "source.tsx entity.name.type",
                "source.tsx entity.name.class"
            ],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[TypeScript] Static Class Support",
            "scope": [
                "source.ts support.constant.math",
                "source.ts support.constant.dom",
                "source.ts support.constant.json",
                "source.tsx support.constant.math",
                "source.tsx support.constant.dom",
                "source.tsx support.constant.json"
            ],
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[TypeScript] Variables",
            "scope": ["source.ts support.variable", "source.tsx support.variable"],
            "settings": {
                "foreground": "#D8DEE9"
            }
        },
        {
            "name": "[TypeScript] Parentheses in Template Strings",
            "scope": [
                "source.ts meta.embedded.line meta.brace.square",
                "source.ts meta.embedded.line meta.brace.round",
                "source.tsx meta.embedded.line meta.brace.square",
                "source.tsx meta.embedded.line meta.brace.round"
            ],
            "settings": {
                "foreground": "#ECEFF4"
            }
        },
        {
            "name": "[XML] Entity Name Tag Namespace",
            "scope": "text.xml entity.name.tag.namespace",
            "settings": {
                "foreground": "#8FBCBB"
            }
        },
        {
            "name": "[XML] Keyword Other Doctype",
            "scope": "text.xml keyword.other.doctype",
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "[XML] Meta Tag Preprocessor",
            "scope": "text.xml meta.tag.preprocessor entity.name.tag",
            "settings": {
                "foreground": "#5E81AC"
            }
        },
        {
            "name": "[XML] Entity Name Tag Namespace",
            "scope": ["text.xml string.unquoted.cdata", "text.xml string.unquoted.cdata punctuation.definition.string"],
            "settings": {
                "foreground": "#D08770",
                "fontStyle": "italic"
            }
        },
        {
            "name": "[YAML] Entity Name Tag",
            "scope": "source.yaml entity.name.tag",
            "settings": {
                "foreground": "#8FBCBB"
            }
        }
    ]
}

function save() {
    writeFile("themes/neo-color-theme.json", JSON.stringify(template, null, 4), (error) => {
        if (error) {
            console.error('failed to save', error);
            return;
        }
        console.log('theme saved');
    })
}

save();