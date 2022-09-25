import{_ as l,r as o,o as c,c as r,b as a,w as e,e as i,a as n,d as s}from"./app.b33db5ee.js";const u="/wangeditor5-for-vue3/v0/images/shadow.png",d={},k=i('<h1 id="\u6837\u5F0F\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u5904\u7406" aria-hidden="true">#</a> \u6837\u5F0F\u5904\u7406</h1><p>\u6211\u4EEC\u5148\u6765\u770B\u4E00\u4E0B <code>WeEditorPlus</code> \u7EC4\u4EF6\u6E32\u67D3\u5B8C\u6210\u540E\u7684 <code>Shadow DOM</code> \u7ED3\u6784</p><p><img src="'+u+`" alt="DOM Tree"></p><p>\u4E0A\u56FE\u662F\u6D4F\u89C8\u5668\u6E32\u67D3\u540E\u5F97\u5230\u7684\u5B8C\u6574 DOM \u6811\u7ED3\u6784\uFF0C\u800C\u6211\u4EEC\u9700\u8981\u914D\u7F6E\u7684\u662F\u7528\u7EA2\u7EBF\u6846\u51FA\u6765\u90A3\u90E8\u5206\u7684\u6837\u5F0F\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7<a href="#%E5%85%A8%E5%B1%80%E6%A0%B7%E5%BC%8F%E6%B3%A8%E5%85%A5"><strong>\u5168\u5C40\u6837\u5F0F\u6CE8\u5165</strong></a>\u6216<a href="#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E6%B3%A8%E5%85%A5"><strong>\u7EC4\u4EF6\u6837\u5F0F\u6CE8\u5165</strong></a>\u7684\u65B9\u5F0F\u6CE8\u5165\u6837\u5F0F\u89C4\u5219\uFF0C\u7136\u540E\u901A\u8FC7\u914D\u7F6E <code>WeEditorPlus</code> \u7684 <code>containerClass</code>\u3001<code>containerStyle</code>\u3001<code>toolbarClass</code>\u3001<code>toolbarStyle</code>\u3001<code>editableClass</code> \u548C <code>editableStyle</code> \u8FD9\u516D\u4E2A <code>prop</code> \u6765\u52A8\u6001\u8BBE\u7F6E\u6837\u5F0F\u3002</p><h2 id="\u6837\u5F0F\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6837\u5F0F\u6CE8\u5165" aria-hidden="true">#</a> \u6837\u5F0F\u6CE8\u5165</h2><h3 id="\u5168\u5C40\u6837\u5F0F\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6837\u5F0F\u6CE8\u5165" aria-hidden="true">#</a> \u5168\u5C40\u6837\u5F0F\u6CE8\u5165</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> weEditorPlusCssRule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;wangeditor5-for-vue3&#39;</span>

<span class="token comment">// \u6CE8\u5165 css \u6587\u672C</span>
<span class="token function">weEditorPlusCssRule</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.box { font-size: 18px; color: red; }</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// \u6CE8\u5165 css \u6587\u4EF6\u8DEF\u5F84</span>
<span class="token function">weEditorPlusCssRule</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">xxx/xxx/xxx.css</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7EC4\u4EF6\u6837\u5F0F\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u6837\u5F0F\u6CE8\u5165" aria-hidden="true">#</a> \u7EC4\u4EF6\u6837\u5F0F\u6CE8\u5165</h3><p>\u7EC4\u4EF6\u6837\u5F0F\u6CE8\u5165\u4E3B\u8981\u662F\u901A\u8FC7\u8BBE\u7F6E <code>WeEditorPlus</code> \u7EC4\u4EF6\u7684 <code>cssRule</code> \u5C5E\u6027\u6765\u5B9E\u73B0</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>we-editor</span> <span class="token attr-name">:css-rule</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rule<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// \u53EF\u4EE5\u662F css \u6587\u672C"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},".toolbar { border: 1px solid #d9d9d9; }"),n("span",{class:"token template-punctuation string"},"`")]),s(`

`),n("span",{class:"token comment"},"// \u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},"'.container'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'.toolbar'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'.editable'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u7EC4"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},".toolbar { border: 1px solid #d9d9d9; }"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'.container'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'.toolbar'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'.editable'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"height"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" WeCssRuleList "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'wangeditor5-for-vue3'"),s(`

`),n("span",{class:"token comment"},"// \u53EF\u4EE5\u662F css \u6587\u672C"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule"),n("span",{class:"token operator"},":"),s(" WeCssRuleList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},".toolbar { border: 1px solid #d9d9d9; }"),n("span",{class:"token template-punctuation string"},"`")]),s(`

`),n("span",{class:"token comment"},"// \u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule"),n("span",{class:"token operator"},":"),s(" WeCssRuleList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},"'.container'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    zIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'.toolbar'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},"'.editable'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \u8FD8\u53EF\u4EE5\u662F\u4E00\u4E2A\u6570\u7EC4"),s(`
`),n("span",{class:"token keyword"},"const"),s(" rule"),n("span",{class:"token operator"},":"),s(" WeCssRuleList "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
  `),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},".toolbar { border: 1px solid #d9d9d9; }"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},"'.container'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      zIndex`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'.toolbar'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      color`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'pink'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token string-property property"},"'.editable'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      height`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'500px'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(g,y){const t=o("CodeGroupItem"),p=o("CodeGroup");return c(),r("div",null,[k,a(p,null,{default:e(()=>[a(t,{title:"JS"},{default:e(()=>[m]),_:1}),a(t,{title:"TS",active:""},{default:e(()=>[b]),_:1})]),_:1})])}const x=l(d,[["render",v],["__file","css-rule.html.vue"]]);export{x as default};
