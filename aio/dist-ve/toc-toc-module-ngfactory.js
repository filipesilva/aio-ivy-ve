(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{s8K4:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),i=t("XNiG"),u=t("itXk"),o=t("7Hc7"),c=t("1G5W"),s=t("HDdC"),a=t("Y7HM");class r extends s.a{constructor(l,n=0,t=o.a){super(),this.source=l,this.delayTime=n,this.scheduler=t,(!Object(a.a)(n)||n<0)&&(this.delayTime=0),t&&"function"==typeof t.schedule||(this.scheduler=o.a)}static create(l,n=0,t=o.a){return new r(l,n,t)}static dispatch(l){const{source:n,subscriber:t}=l;return this.add(n.subscribe(t))}_subscribe(l){return this.scheduler.schedule(r.dispatch,this.delayTime,{source:this.source,subscriber:l})}}function d(l,n=0){return function(t){return t.lift(new b(l,n))}}class b{constructor(l,n){this.scheduler=l,this.delay=n}call(l,n){return new r(n,this.delay,this.scheduler).subscribe(l)}}var p=t("JX91");class h{constructor(l,n,t){this.scrollService=l,this.tocService=t,this.activeIndex=null,this.type="None",this.isCollapsed=!0,this.isEmbedded=!1,this.onDestroy=new i.a,this.primaryMax=4,this.isEmbedded=-1!==n.nativeElement.className.indexOf("embedded")}ngOnInit(){this.tocService.tocList.pipe(Object(c.a)(this.onDestroy)).subscribe(l=>{this.tocList=l;const n=function(l,n){return l.reduce((l,n)=>(l=>"h1"!==l.level)(n)?l+1:l,0)}(this.tocList);this.type=n>0?this.isEmbedded?n>this.primaryMax?"EmbeddedExpandable":"EmbeddedSimple":"Floating":"None"})}ngAfterViewInit(){this.isEmbedded||Object(u.a)([this.tocService.activeItemIndex.pipe(d(o.a)),this.items.changes.pipe(Object(p.a)(this.items))]).pipe(Object(c.a)(this.onDestroy)).subscribe(([l,n])=>{if(this.activeIndex=l,null===l||l>=n.length)return;const t=n.toArray()[l].nativeElement,e=t.offsetParent,i=t.getBoundingClientRect(),u=e.getBoundingClientRect();i.top>=u.top&&i.bottom<=u.bottom||(e.scrollTop+=i.top-u.top-e.clientHeight/2)})}ngOnDestroy(){this.onDestroy.next()}toggle(l=!0){this.isCollapsed=!this.isCollapsed,l&&this.isCollapsed&&this.toTop()}toTop(){this.scrollService.scrollToTop()}}class m{constructor(){this.customElementComponent=h}}var g=t("XE/z"),f=t("Tj54"),v=t("SVse"),y=t("Faly"),x=t("TNhP"),w=e.ub({encapsulation:2,styles:[],data:{}});function E(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,1,"div",[["class","toc-heading embedded"]],null,null,null,null,null)),(l()(),e.Rb(-1,null,[" Contents "]))],null,null)}function I(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,3,"button",[["aria-label","Expand/collapse contents"],["class","toc-heading embedded secondary"],["title","Expand/collapse contents"],["type","button"]],[[1,"aria-pressed",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggle(!1)&&e),e}),null,null)),(l()(),e.Rb(-1,null,[" Contents "])),(l()(),e.wb(2,0,null,null,1,"mat-icon",[["class","rotating-icon mat-icon notranslate"],["role","img"],["svgIcon","keyboard_arrow_right"]],[[2,"collapsed",null],[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,g.b,g.a)),e.vb(3,9158656,null,0,f.b,[e.k,f.d,[8,null],[2,f.a],[2,e.l]],{svgIcon:[0,"svgIcon"]},null)],(function(l,n){l(n,3,0,"keyboard_arrow_right")}),(function(l,n){var t=n.component;l(n,0,0,!t.isCollapsed),l(n,2,0,t.isCollapsed,e.Jb(n,3).inline,"primary"!==e.Jb(n,3).color&&"accent"!==e.Jb(n,3).color&&"warn"!==e.Jb(n,3).color)}))}function k(l){return e.Ub(0,[(l()(),e.wb(0,0,[[1,0],["tocItem",1]],null,1,"li",[],[[8,"title",0],[8,"className",0],[2,"secondary",null],[2,"active",null]],null,null,null,null)),(l()(),e.wb(1,0,null,null,0,"a",[],[[8,"href",4],[8,"innerHTML",1]],null,null,null,null))],null,(function(l,n){var t=n.component;l(n,0,0,e.Bb(1,"",n.parent.context.$implicit.title,""),e.Bb(1,"",n.parent.context.$implicit.level,""),"EmbeddedExpandable"===t.type&&n.parent.context.index>=t.primaryMax,n.parent.context.index===t.activeIndex),l(n,1,0,n.parent.context.$implicit.href,n.parent.context.$implicit.content)}))}function O(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,k)),e.vb(2,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(0,null,null,0))],(function(l,n){l(n,2,0,"Floating"===n.component.type||"h1"!==n.context.$implicit.level)}),null)}function C(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,0,"button",[["aria-label","Expand/collapse contents"],["class","toc-more-items embedded material-icons"],["title","Expand/collapse contents"],["type","button"]],[[2,"collapsed",null],[1,"aria-pressed",0]],[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.toggle()&&e),e}),null,null))],null,(function(l,n){var t=n.component;l(n,0,0,t.isCollapsed,!t.isCollapsed)}))}function H(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,9,"div",[["class","toc-inner no-print"]],[[2,"collapsed",null]],null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,E)),e.vb(2,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.gb(16777216,null,null,1,null,I)),e.vb(4,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.wb(5,0,null,null,2,"ul",[["class","toc-list"]],[[2,"embedded",null]],null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,O)),e.vb(7,278528,null,0,v.j,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null),(l()(),e.gb(16777216,null,null,1,null,C)),e.vb(9,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,"EmbeddedSimple"===t.type),l(n,4,0,"EmbeddedExpandable"===t.type),l(n,7,0,t.tocList),l(n,9,0,"EmbeddedExpandable"===t.type)}),(function(l,n){var t=n.component;l(n,0,0,t.isCollapsed),l(n,5,0,"Floating"!==t.type)}))}function L(l){return e.Ub(0,[e.Nb(671088640,1,{items:1}),(l()(),e.gb(16777216,null,null,1,null,H)),e.vb(2,16384,null,0,v.k,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"None"!==n.component.type)}),null)}function T(l){return e.Ub(0,[(l()(),e.wb(0,0,null,null,1,"aio-toc",[],null,null,null,L,w)),e.vb(1,4440064,null,0,h,[y.a,e.k,x.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=e.sb("aio-toc",h,T,{},{},[]),N=t("9gLZ"),U=t("UhP/");t.d(n,"TocModuleNgFactory",(function(){return J}));var J=e.tb(m,[],(function(l){return e.Gb([e.Hb(512,e.j,e.Y,[[8,[j]],[3,e.j],e.w]),e.Hb(4608,v.m,v.l,[e.t]),e.Hb(1073742336,v.c,v.c,[]),e.Hb(1073742336,N.a,N.a,[]),e.Hb(1073742336,U.c,U.c,[[2,U.a]]),e.Hb(1073742336,f.c,f.c,[]),e.Hb(1073742336,m,m,[])])}))}}]);
//# sourceMappingURL=toc-toc-module-ngfactory.js.map