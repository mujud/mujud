webpackJsonp([1],{0:function(e,t,n){e.exports=n("cDNt")},cDNt:function(e,t,n){"use strict";function r(e){return u._17(0,[(e()(),u._4(0,0,null,null,0,"div",[["id","bt-frmla"]],null,null,null,null,null))],null,null)}function o(e){return u._17(0,[(e()(),u._4(0,0,null,null,1,"app-ide",[],null,null,null,r,L)),u._2(1,114688,null,0,x,[y],null,null)],function(e,t){e(t,1,0)},null)}function i(e){return u._17(0,[(e()(),u._4(0,0,null,null,1,"app-ide",[],null,null,null,r,L)),u._2(1,114688,null,0,x,[y],null,null)],function(e,t){e(t,1,0)},null)}function a(e){return u._17(0,[(e()(),u._16(-1,null,["\n  \t"])),(e()(),u.Y(16777216,null,null,1,null,i)),u._2(2,16384,null,0,T.c,[u.N,u.K],{ngIf:[0,"ngIf"]},null),(e()(),u._16(-1,null,["\n  "]))],function(e,t){e(t,2,0,t.component.activate)},null)}function l(e){return u._17(0,[(e()(),u._4(0,0,null,null,1,"app-root",[],null,null,null,a,S)),u._2(1,114688,null,0,g,[d],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var u=n("/oeL"),s={production:!0},c=function(){function e(){}return e}(),f=n("AP4T"),d=function(){function e(){var e=this;this.isActive=!1,this.activeObserver=new f.a(function(t){return e.subscriber(t)})}return e.prototype.subscriber=function(e){var t=this;"true"==localStorage.betterFormula&&(localStorage.betterFormula=!1,this.isActive=!0,$(".miniTabList .currentTab").removeClass("currentTab"),$(".launch-better-formula").parent().addClass("currentTab"),e.next(this.isActive)),$(".miniTabList a").click(function(n){var r=$(n.target);if("Better Formula"==r.html()){n.preventDefault();var o=$(".miniTabList .currentTab a");"Simple Formula"==o.html()?(localStorage.betterFormula=!0,FormulaEditor.switchMode("advanced")):(o.parent().removeClass("currentTab"),r.parent().addClass("currentTab"),t.isActive=!0,e.next(t.isActive))}else if("Advanced Formula"==r.html()&&t.isActive){var o=$(".miniTabList .currentTab a");o.parent().removeClass("currentTab"),r.parent().addClass("currentTab"),t.isActive=!1,e.next(t.isActive)}})},e.prototype.getTabActivatorObservable=function(){return this.activeObserver},e.ctorParameters=function(){return[]},e}(),g=function(){function e(e){this.tabService=e,this.activate=!1,this.calculatedFormula=$("#CalculatedFormula")[0]}return e.prototype.ngOnInit=function(){var e=this;this.tabService.getTabActivatorObservable().subscribe(function(t){return e.handleTabChange(t)})},e.prototype.handleTabChange=function(e){this.activate=e,e?$("#CalculatedFormula").hide():$("#CalculatedFormula").show()},e.ctorParameters=function(){return[{type:d}]},e}(),h=["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;height:400px;margin:5px 0}#bt-frmla[_ngcontent-%COMP%]{width:100%;border:1px solid #8198ac}app-sidekick[_ngcontent-%COMP%]{width:20%}"],m=function(){function e(){}return e.buildFields=function(){var e=this,t="";fieldTreeController.tree.rootList[0].children.forEach(function(n){t+=n.key+"|","Lookup"!=n.attributes.type||n.isLeaf||(t+=e.buildChildrenKeyWord(n))});for(var n=1;n<fieldTreeController.tree.rootList.length;n++)t+=fieldTreeController.tree.rootList[n].key+"|",fieldTreeController.tree.rootList[n].children.forEach(function(e){t+=e.key+"|"});return t.substring(0,t.length-1)},e.buildChildrenKeyWord=function(e){var t=this,n="";return e.children.forEach(function(r){var o=!0,i=r.attributes.type,a=r.key;r.isLeaf||"Lookup"!=i||(r.hasOwnProperty("children")?t.buildChildrenKeyWord(e):o=!1),o&&(n+=a+"|")}),n},e.factory=function(e){var t=e("ace/lib/oop"),n=e("ace/mode/text_highlight_rules").TextHighlightRules,r=this,o=function(){var e=this.createKeywordMapper({"support.function":"abs|accumarray",keyword:"DATE|DATEVALUE|CASE|BR|IF|HYPERLINK|CONTAINS|CEILING|SUBSTITUTE","constant.language":"true|null|false|inf|Inf|nan|NaN|eps|pi|ans|nargin|nargout|varargin|varargout",formulafunction:"Oppo",fields:r.buildFields()},"identifier",!0);this.$rules={start:[{token:"string",regex:"'",stateName:"qstring",next:[{token:"constant.language.escape",regex:"''"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}]},{token:"text",regex:"\\s+"},{regex:"",next:"noQstring"}],noQstring:[{token:"string",regex:'"',stateName:"qqstring",next:[{token:"constant.language.escape",regex:/\\./},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|&|\\^|~|<|>|<=|=>|==|!=|<>|=",next:"start"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\.",next:"start"},{token:"paren.lparen",regex:"[({\\[]",next:"start"},{token:"paren.rparen",regex:"[\\]})]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};return t.inherits(o,n),o},e}(),p=function(){function e(){}return e.factory=function(e){var t=e("ace/lib/oop"),n=e("ace/mode/text").Mode,r=e("ace/mode/betterformula_highlight_rules").BetterformulaHighlightRules,o=e("ace/mode/matching_brace_outdent").MatchingBraceOutdent,i=e("ace/mode/betterformula_completions").BetterformulaCompletions,a=e("ace/mode/folding/better_formula_fold_mode").FoldMode,l=function(){this.HighlightRules=r,this.$outdent=new o,this.foldingRules=new a,this.$completer=new i};return t.inherits(l,n),function(){this.getCompletions=function(e,t,n,r){return this.$completer.getCompletions(e,t,n,r)},this.$id="ace/mode/betterformula"}.call(l.prototype),l},e}(),b=function(){function e(){}return e.buildFields=function(){var e=this,t={},n={};fieldTreeController.tree.rootList[0].children.forEach(function(r){var o=fieldTreeController.tree.rootList[0].key,i=!0,a=r.attributes.type,l=r.key;r.isLeaf&&"Lookup"==a?a="ID":"Lookup"==a&&(l+=".",r.hasOwnProperty("children")?e.buildChildren(r,n,o):i=!1),i&&(t[r.key]=[l,a,r.labelName])});for(var r=1;r<fieldTreeController.tree.rootList.length;r++){var o=fieldTreeController.tree.rootList[r].key;t[o]=[o.replace("$","\\$")+".","Group MetaData",null],n[o]={},fieldTreeController.tree.rootList[r].children.forEach(function(e){n[o][e.key]=[e.key,"MetaData",e.labelName]})}return[t,n]},e.buildChildren=function(e,t,n){var r=this;t[e.key]={},e.children.forEach(function(o){var i=!0,a=o.attributes.type,l=o.key;o.isLeaf&&"Lookup"==a?a="ID":"Lookup"==a&&(l+=".",o.hasOwnProperty("children")?r.buildChildren(e,t,n):i=!1),i&&(t[e.key][o.key]=[l,a,o.labelName])})},e.factory=function(e){var t=function(){};(function(){this.getCompletions=function(e,t,n,r){var o=(t.getTokenAt(n.row,n.column),t.getLine(n.row).substr(0,n.column)),i=o.match(/[\$\w\d]+(?=\.[\w\d]*$)/);return console.log(i),null!=i?this.getObjectFieldCompletions(o,i[0]):this.getFunctionCompletions(e,t,n,r)},this.getObjectFieldCompletions=function(e,t){var r=Object.keys(n[t]);return console.log(r),r.map(function(e){return{caption:e,snippet:n[t][e][0],meta:n[t][e][1],score:Number.MAX_VALUE,docHTML:n[t][e][2]}})},this.getFunctionCompletions=function(e,t,n,o){var i=t.getLine(n.row).substr(0,n.column);return console.log(i),Object.keys(r).map(function(e){return{caption:e,snippet:r[e][0],meta:r[e][1],score:Number.MAX_VALUE,docHTML:r[e][2]}})}}).call(t.prototype);var n={},r={DATE:["DATE(\n\t${1:year},\n\t${2:month},\n\t${3:day}\n)","Date function","Returns a date value from year, month, and day values you enter. "],DATEVALUE:["DATEVALUE(${0:expression})","Date function","Returns a date value for a date/time or text expression."],BR:["BR()","Format function","Inserts a line break in a string of text. "],CASE:["CASE(${1:expression},${2:value1},${3:result1})","Conditional function","Checks a given expression against a series of values. If the expression is equal to a value, returns the corresponding result. If it is not equal to any values, it returns the else_result."],CEILING:["CEILING(${0:number})","Number function","Rounds a number up to the nearest integer."],CONTAINS:["CONTAINS(${1:field},${2:string})","Number function","Compares two arguments of text and returns TRUE if the first argument contains the second argument. If not, returns FALSE."],HYPERLINK:["HYPERLINK(${1:url},${2:friendly_name},${3:target})","Number function","Creates a link to a URL specified that is linkable from the text specified."],IF:["IF(${1:logical_test},${2:value_if_true},${3:value_if_false})","Conditional function","Determines if expressions are true or false. Returns a given value if true and another value if false."],SUBSTITUTE:["SUBSTITUTE(${1:text},${2:old_text},${3:new_text})","Text function","Substitutes new text for old text in a text string."]},o=this.buildFields();return console.log("Children Map"),console.log(o[1]),Object.assign(r,o[0]),n=o[1],t},e}(),v=function(){function e(){}return e.factory=function(e){var t=e("../range").Range,n=function(){};return function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,n){var r=e.getLine(n),o=r.match(/^(\s*\})/);if(!o)return 0;var i=o[1].length,a=e.findMatchingBracket({row:n,column:i});if(!a||a.row==n)return 0;var l=this.$getIndent(e.getLine(a.row));e.replace(new t(n,0,n,i-1),l)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}.call(n.prototype),n},e}(),_=function(){function e(){}return e.factory=function(e){var t=e("ace/lib/oop"),n=e("ace/range").Range,r=e("ace/mode/folding/fold_mode").FoldMode,o=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};return t.inherits(o,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var i=o.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var l=e.getCommentFoldRange(n,a+i[0].length,1);return l&&!l.isMultiLine()&&(r?l=this.getSectionRange(e,n):"all"!=t&&(l=null)),l}if("markbegin"!==t){var i=o.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),o=r.search(/\S/),i=t,a=r.length;t+=1;for(var l=t,u=e.getLength();++t<u;){r=e.getLine(t);var s=r.search(/\S/);if(-1!==s){if(o>s)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(o==s)break}l=t}}return new n(i,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,r){for(var o=t.search(/\s*$/),i=e.getLength(),a=r,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,u=1;++r<i;){t=e.getLine(r);var s=l.exec(t);if(s&&(s[1]?u--:u++,!u))break}var c=r;if(c>a)return new n(a,o,c,t.length)}}.call(o.prototype),o},e}(),k=function(){function e(){}return e.factory=function(e){var t=e("ace/range").Range,n=function(){};return function(){this.foldingStartMarker=null,this.foldingStopMarker=null,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);return this.foldingStartMarker.test(r)?"start":"markbeginend"==t&&this.foldingStopMarker&&this.foldingStopMarker.test(r)?"end":""},this.getFoldWidgetRange=function(e,t,n){return null},this.indentationBlock=function(e,n,r){var o=/\S/,i=e.getLine(n),a=i.search(o);if(-1!=a){for(var l=r||i.length,u=e.getLength(),s=n,c=n;++n<u;){var f=e.getLine(n).search(o);if(-1!=f){if(f<=a)break;c=n}}if(c>s){var d=e.getLine(c).length;return new t(s,l,c,d)}}},this.openingBracketBlock=function(e,n,r,o,i){var a={row:r,column:o+1},l=e.$findClosingBracket(n,a,i);if(l){var u=e.foldWidgets[l.row];return null==u&&(u=e.getFoldWidget(l.row)),"start"==u&&l.row>a.row&&(l.row--,l.column=e.getLine(l.row).length),t.fromPoints(a,l)}},this.closingBracketBlock=function(e,n,r,o,i){var a={row:r,column:o},l=e.$findOpeningBracket(n,a);if(l)return l.column++,a.column--,t.fromPoints(l,a)}}.call(n.prototype),n},e}(),y=function(){function e(){}return e.prototype.init=function(e){var t=this;this.defineAceSyntax(),this.initEditor(e),$(document).on("click","#fieldInsertButton",function(n){return setTimeout(function(){return t.editor.setValue(e.value,1)})}),$("#insertOperatorMenu").on("click","a",function(n){return setTimeout(function(){return t.editor.setValue(e.value,1)})}),$("input[name='addToFormula']").click(function(n){return setTimeout(function(){return t.editor.setValue(e.value,1)})})},e.prototype.initEditor=function(e){var t=this;this.editor=ace.edit("bt-frmla"),this.editor.setTheme("ace/theme/idle_fingers"),this.editor.session.setMode("ace/mode/betterformula"),this.editor.setOptions({enableBasicAutocompletion:!0,enableSnippets:!1,enableLiveAutocompletion:!1}),this.editor.setValue(e.value,1),this.editor.getSession().on("change",function(n){return e.value=t.editor.getValue()}),this.editor.getSelection().on("changeCursor",function(n){return t.updateCursorPosition(e)})},e.prototype.updateCursorPosition=function(e){for(var t=this.editor.getCursorPosition(),n=t.column,r=e.value.split("\n"),o=0;o<t.row;o++)n+=r[o].length,n++;$(e)[0].selectionStart=n,$(e)[0].selectionEnd=n},e.prototype.defineAceSyntax=function(){var e=ace.define;e("ace/mode/folding/fold_mode",function(e,t,n){t.FoldMode=k.factory(e)}),e("ace/mode/folding/better_formula_fold_mode",function(e,t,n){t.FoldMode=_.factory(e)}),e("ace/mode/matching_brace_outdent",function(e,t,n){t.MatchingBraceOutdent=v.factory(e)}),e("ace/mode/betterformula_highlight_rules",function(e,t,n){t.BetterformulaHighlightRules=m.factory(e)}),e("ace/mode/betterformula_completions",function(e,t,n){t.BetterformulaCompletions=b.factory(e)}),e("ace/mode/betterformula",function(e,t,n){t.Mode=p.factory(e)}),ace.require("ace/mode/betterformula"),ace.require("ace/ext/language_tools")},e}(),x=function(){function e(e){this.aceservice=e}return e.prototype.ngOnInit=function(){this.formulaText=document.getElementsByClassName("FormulaText")[0],this.aceservice.init(this.formulaText)},e.ctorParameters=function(){return[{type:y}]},e}(),C=[h],L=u._1({encapsulation:0,styles:C,data:{}}),T=(u.Z("app-ide",x,o,{},{},[]),n("qbdv")),w=[],S=u._1({encapsulation:2,styles:w,data:{}}),F=u.Z("app-root",g,l,{},{},[]),R=n("fc+i"),E=u._0(c,[g],function(e){return u._13([u._14(512,u.i,u.W,[[8,[F]],[3,u.i],u.x]),u._14(5120,u.v,u._12,[[3,u.v]]),u._14(4608,T.e,T.d,[u.v]),u._14(4608,u.h,u.h,[]),u._14(5120,u.a,u._5,[]),u._14(5120,u.t,u._10,[]),u._14(5120,u.u,u._11,[]),u._14(4608,R.b,R.s,[T.b]),u._14(6144,u.H,null,[R.b]),u._14(4608,R.e,R.f,[]),u._14(5120,R.c,function(e,t,n,r){return[new R.k(e),new R.o(t),new R.n(n,r)]},[T.b,T.b,T.b,R.e]),u._14(4608,R.d,R.d,[R.c,u.z]),u._14(135680,R.m,R.m,[T.b]),u._14(4608,R.l,R.l,[R.d,R.m]),u._14(6144,u.F,null,[R.l]),u._14(6144,R.p,null,[R.m]),u._14(4608,u.L,u.L,[u.z]),u._14(4608,R.g,R.g,[T.b]),u._14(4608,R.i,R.i,[T.b]),u._14(4608,d,d,[]),u._14(4608,y,y,[]),u._14(512,T.a,T.a,[]),u._14(1024,u.l,R.q,[]),u._14(1024,u.b,function(e,t){return[R.r(e,t)]},[[2,R.h],[2,u.y]]),u._14(512,u.c,u.c,[[2,u.b]]),u._14(131584,u._3,u._3,[u.z,u.X,u.r,u.l,u.i,u.c]),u._14(2048,u.e,null,[u._3]),u._14(512,u.d,u.d,[u.e]),u._14(512,R.a,R.a,[[3,R.a]]),u._14(512,c,c,[])])});s.production&&Object(u.R)(),Object(R.j)().bootstrapModuleFactory(E).catch(function(e){return console.log(e)})},gFIY:function(e,t){function n(e){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+e+"'.")})}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="gFIY"}},[0]);