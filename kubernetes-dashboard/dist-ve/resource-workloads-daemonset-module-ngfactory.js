(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{C76r:function(l,n,e){"use strict";e.r(n);var d=e("8Y7J");class u{}var t=e("ntJQ"),a=e("9cE2"),o=e("007U"),i=e("pMnS"),m=e("wyY1"),p=e("HrBQ"),r=e("Shg9"),c=e("rO67"),s=e("3w7p"),f=e("hbcI"),b=e("KyHI"),h=e("PXtb");class v{}var g=d["ɵcrt"]({encapsulation:2,styles:[],data:{}});function R(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"kd-daemon-set-list",[],null,null,null,s.b,s.a)),d["ɵdid"](1,245760,null,0,f.a,[b.a,d.ComponentFactoryResolver,h.b,d.ChangeDetectorRef],null,null)],(function(l,n){l(n,1,0)}),null)}function _(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"kd-daemon-set-list-state",[],null,null,null,R,g)),d["ɵdid"](1,49152,null,0,v,[],null,null)],null,null)}var I=d["ɵccf"]("kd-daemon-set-list-state",v,_,{},{},[]),S=e("ZO99"),k=e("VDRc"),y=e("/q54"),L=e("Rx8Q"),C=e("OEkR"),M=e("svQk"),F=e("iELJ"),z=e("SVse"),D=e("5J1W"),E=e("YS1y"),N=e("bLTg"),T=e("TN1b"),w=e("DtvC"),O=e("TsCr"),j=e("pH9A"),x=e("D5Vd"),P=e("F9lf"),V=e("0t1c"),A=e("16HJ"),Q=e("MmPu"),U=e("SRaF"),Z=e("m/E6");class J{constructor(l,n,e,d){this.daemonSet_=l,this.actionbar_=n,this.activatedRoute_=e,this.notifications_=d,this.endpoint_=Z.a.resource(Z.b.daemonSet,!0),this.isInitialized=!1}ngOnInit(){const l=this.activatedRoute_.snapshot.params.resourceName,n=this.activatedRoute_.snapshot.params.resourceNamespace;this.eventListEndpoint=this.endpoint_.child(l,Z.b.event,n),this.podListEndpoint=this.endpoint_.child(l,Z.b.pod,n),this.serviceListEndpoint=this.endpoint_.child(l,Z.b.service,n),this.daemonSetSubscription_=this.daemonSet_.get(this.endpoint_.detail(),l,n).subscribe(l=>{this.daemonSet=l,this.notifications_.pushErrors(l.errors),this.actionbar_.onInit.emit(new U.b("Daemon Set",l.objectMeta,l.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.daemonSetSubscription_.unsubscribe(),this.actionbar_.onDetailsLeave.emit()}}var H=e("iInd"),W=d["ɵcrt"]({encapsulation:2,styles:[],data:{}});function B(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,7,"kd-property",[["fxFlex","100"]],null,null,null,S.b,S.a)),d["ɵdid"](1,671744,null,0,k.b,[d.ElementRef,y.i,y.e,k.i,y.f],{fxFlex:[0,"fxFlex"]},null),d["ɵdid"](2,49152,null,0,L.a,[],null,null),(l()(),d["ɵeld"](3,0,null,0,1,"div",[["key",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Selector"])),(l()(),d["ɵeld"](5,0,null,1,2,"div",[["value",""]],null,null,null,null,null)),(l()(),d["ɵeld"](6,0,null,null,1,"kd-chips",[],null,null,null,C.b,C.a)),d["ɵdid"](7,114688,null,0,M.a,[F.e],{map:[0,"map"]},null)],(function(l,n){var e=n.component;l(n,1,0,"100"),l(n,7,0,e.daemonSet.labelSelector.matchLabels)}),null)}function q(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,6,"kd-property",[],null,null,null,S.b,S.a)),d["ɵdid"](1,49152,null,0,L.a,[],null,null),(l()(),d["ɵeld"](2,0,null,0,1,"div",[["key",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Images"])),(l()(),d["ɵeld"](4,0,null,1,2,"div",[["value",""]],null,null,null,null,null)),(l()(),d["ɵeld"](5,0,null,null,1,"kd-chips",[],null,null,null,C.b,C.a)),d["ɵdid"](6,114688,null,0,M.a,[F.e],{map:[0,"map"]},null)],(function(l,n){l(n,6,0,n.component.daemonSet.containerImages)}),null)}function K(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,6,"kd-property",[],null,null,null,S.b,S.a)),d["ɵdid"](1,49152,null,0,L.a,[],null,null),(l()(),d["ɵeld"](2,0,null,0,1,"div",[["key",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Init images"])),(l()(),d["ɵeld"](4,0,null,1,2,"div",[["value",""]],null,null,null,null,null)),(l()(),d["ɵeld"](5,0,null,null,1,"kd-chips",[],null,null,null,C.b,C.a)),d["ɵdid"](6,114688,null,0,M.a,[F.e],{map:[0,"map"]},null)],(function(l,n){l(n,6,0,n.component.daemonSet.initContainerImages)}),null)}function Y(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,7,"div",[["content",""],["fxLayout","row wrap"]],null,null,null,null,null)),d["ɵdid"](1,671744,null,0,k.d,[d.ElementRef,y.i,[2,k.k],y.f],{fxLayout:[0,"fxLayout"]},null),(l()(),d["ɵand"](16777216,null,null,1,null,B)),d["ɵdid"](3,16384,null,0,z.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵand"](16777216,null,null,1,null,q)),d["ɵdid"](5,16384,null,0,z.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵand"](16777216,null,null,1,null,K)),d["ɵdid"](7,16384,null,0,z.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"row wrap"),l(n,3,0,null==e.daemonSet?null:e.daemonSet.labelSelector),l(n,5,0,null==e.daemonSet?null:e.daemonSet.containerImages),l(n,7,0,null==e.daemonSet?null:e.daemonSet.initContainerImages)}),null)}function X(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"kd-object-meta",[],null,null,null,D.b,D.a)),d["ɵdid"](1,49152,null,0,E.a,[],{initialized:[0,"initialized"],objectMeta:[1,"objectMeta"]},null),(l()(),d["ɵeld"](2,0,null,null,5,"kd-card",[],null,null,null,N.b,N.a)),d["ɵdid"](3,49152,null,0,T.a,[],{initialized:[0,"initialized"]},null),(l()(),d["ɵeld"](4,0,null,0,1,"div",[["title",""]],null,null,null,null,null)),(l()(),d["ɵted"](-1,null,["Resource information"])),(l()(),d["ɵand"](16777216,null,3,1,null,Y)),d["ɵdid"](7,16384,null,0,z.NgIf,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵeld"](8,0,null,null,1,"kd-pod-status-card",[],null,null,null,w.b,w.a)),d["ɵdid"](9,49152,null,0,O.a,[],{podInfo:[0,"podInfo"],initialized:[1,"initialized"]},null),(l()(),d["ɵeld"](10,0,null,null,1,"kd-pod-list",[],null,null,null,j.b,j.a)),d["ɵdid"](11,245760,null,0,x.a,[b.a,d.ComponentFactoryResolver,h.b,d.ChangeDetectorRef],{endpoint:[0,"endpoint"]},null),(l()(),d["ɵeld"](12,0,null,null,1,"kd-service-list",[],null,null,null,P.b,P.a)),d["ɵdid"](13,245760,null,0,V.a,[b.a,h.b,d.ChangeDetectorRef],{endpoint:[0,"endpoint"]},null),(l()(),d["ɵeld"](14,0,null,null,1,"kd-event-list",[],null,null,null,A.b,A.a)),d["ɵdid"](15,245760,null,0,Q.a,[b.a,h.b,d.ChangeDetectorRef],{endpoint:[0,"endpoint"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.isInitialized,null==e.daemonSet?null:e.daemonSet.objectMeta),l(n,3,0,e.isInitialized),l(n,7,0,e.isInitialized),l(n,9,0,null==e.daemonSet?null:e.daemonSet.podInfo,e.isInitialized),l(n,11,0,e.podListEndpoint),l(n,13,0,e.serviceListEndpoint),l(n,15,0,e.eventListEndpoint)}),null)}function G(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,0,null,null,1,"kd-daemon-set-detail",[],null,null,null,X,W)),d["ɵdid"](1,245760,null,0,J,[b.a,U.a,H.ActivatedRoute,h.b],null,null)],(function(l,n){l(n,1,0)}),null)}var $=d["ɵccf"]("kd-daemon-set-detail",J,G,{},{},[]),ll=e("uZa0"),nl=e("s7LF"),el=e("9b/N"),dl=e("UhP/"),ul=e("1O3W"),tl=e("9gLZ"),al=e("ZFy/"),ol=e("LUZP"),il=e("ZTz/"),ml=e("5QHs"),pl=e("rJgo"),rl=e("4muW"),cl=e("YEUz"),sl=e("SCoL"),fl=e("Dxy4"),bl=e("PDjf"),hl=e("pMoy"),vl=e("BSbQ"),gl=e("40+f"),Rl=e("Q2Ze"),_l=e("Tj54"),Il=e("8sFK"),Sl=e("e6WT"),kl=e("pu8Q"),yl=e("BTe0"),Ll=e("zQhy"),Cl=e("7KAL"),Ml=e("q7Ft"),Fl=e("l0rg"),zl=e("1z/I"),Dl=e("mPVK"),El=e("jMqV"),Nl=e("f44v"),Tl=e("GXRp"),wl=e("OaSA"),Ol=e("M9ds"),jl=e("Ynp+"),xl=e("zHaW"),Pl=e("ura0"),Vl=e("Nhcz"),Al=e("u9T3"),Ql=e("o6Sk"),Ul=e("I7rD"),Zl=e("MnlZ"),Jl=e("PXUV");const Hl={breadcrumb:"Daemon Sets",parent:e("6XRW").a},Wl={breadcrumb:"{{ resourceName }}",parent:{path:"",component:v,data:Hl}};class Bl{}var ql=e("Ht+U"),Kl=e("WcSx");e.d(n,"DaemonSetModuleNgFactory",(function(){return Yl}));var Yl=d["ɵcmf"](u,[],(function(l){return d["ɵmod"]([d["ɵmpd"](512,d.ComponentFactoryResolver,d["ɵCodegenComponentFactoryResolver"],[[8,[t.a,a.a,o.a,o.b,i.a,m.a,p.a,r.a,c.a,I,$,ll.a]],[3,d.ComponentFactoryResolver],d.NgModuleRef]),d["ɵmpd"](4608,z.NgLocalization,z.NgLocaleLocalization,[d.LOCALE_ID]),d["ɵmpd"](4608,nl["ɵangular_packages_forms_forms_n"],nl["ɵangular_packages_forms_forms_n"],[]),d["ɵmpd"](4608,nl.FormBuilder,nl.FormBuilder,[]),d["ɵmpd"](4608,el.c,el.c,[]),d["ɵmpd"](4608,dl.d,dl.d,[]),d["ɵmpd"](4608,ul.c,ul.c,[ul.i,ul.e,d.ComponentFactoryResolver,ul.h,ul.f,d.Injector,d.NgZone,z.DOCUMENT,tl.b,[2,z.Location]]),d["ɵmpd"](5120,ul.j,ul.k,[ul.c]),d["ɵmpd"](5120,al.b,al.c,[ul.c]),d["ɵmpd"](5120,F.c,F.d,[ul.c]),d["ɵmpd"](135680,F.e,F.e,[ul.c,d.Injector,[2,z.Location],[2,F.b],F.c,[3,F.e],ul.e]),d["ɵmpd"](5120,ol.d,ol.a,[[3,ol.d]]),d["ɵmpd"](5120,il.a,il.b,[ul.c]),d["ɵmpd"](5120,ml.c,ml.a,[[3,ml.c]]),d["ɵmpd"](5120,pl.c,pl.j,[ul.c]),d["ɵmpd"](5120,d.APP_BOOTSTRAP_LISTENER,(function(l,n){return[y.j(l,n)]}),[z.DOCUMENT,d.PLATFORM_ID]),d["ɵmpd"](4608,rl.a,rl.a,[]),d["ɵmpd"](1073742336,z.CommonModule,z.CommonModule,[]),d["ɵmpd"](1073742336,nl["ɵangular_packages_forms_forms_d"],nl["ɵangular_packages_forms_forms_d"],[]),d["ɵmpd"](1073742336,nl.FormsModule,nl.FormsModule,[]),d["ɵmpd"](1073742336,nl.ReactiveFormsModule,nl.ReactiveFormsModule,[]),d["ɵmpd"](1073742336,tl.a,tl.a,[]),d["ɵmpd"](1073742336,dl.l,dl.l,[cl.h,[2,dl.e]]),d["ɵmpd"](1073742336,sl.b,sl.b,[]),d["ɵmpd"](1073742336,dl.u,dl.u,[]),d["ɵmpd"](1073742336,fl.c,fl.c,[]),d["ɵmpd"](1073742336,bl.e,bl.e,[]),d["ɵmpd"](1073742336,el.d,el.d,[]),d["ɵmpd"](1073742336,hl.e,hl.e,[]),d["ɵmpd"](1073742336,hl.d,hl.d,[]),d["ɵmpd"](1073742336,vl.b,vl.b,[]),d["ɵmpd"](1073742336,dl.m,dl.m,[]),d["ɵmpd"](1073742336,gl.a,gl.a,[]),d["ɵmpd"](1073742336,Rl.e,Rl.e,[]),d["ɵmpd"](1073742336,_l.c,_l.c,[]),d["ɵmpd"](1073742336,Il.c,Il.c,[]),d["ɵmpd"](1073742336,Sl.b,Sl.b,[]),d["ɵmpd"](1073742336,kl.c,kl.c,[]),d["ɵmpd"](1073742336,yl.c,yl.c,[]),d["ɵmpd"](1073742336,Ll.d,Ll.d,[]),d["ɵmpd"](1073742336,Cl.c,Cl.c,[]),d["ɵmpd"](1073742336,Ml.h,Ml.h,[]),d["ɵmpd"](1073742336,Fl.b,Fl.b,[]),d["ɵmpd"](1073742336,cl.a,cl.a,[cl.h]),d["ɵmpd"](1073742336,zl.g,zl.g,[]),d["ɵmpd"](1073742336,ul.g,ul.g,[]),d["ɵmpd"](1073742336,al.e,al.e,[]),d["ɵmpd"](1073742336,Dl.b,Dl.b,[]),d["ɵmpd"](1073742336,F.k,F.k,[]),d["ɵmpd"](1073742336,El.d,El.d,[]),d["ɵmpd"](1073742336,El.c,El.c,[]),d["ɵmpd"](1073742336,Nl.d,Nl.d,[]),d["ɵmpd"](1073742336,Tl.p,Tl.p,[]),d["ɵmpd"](1073742336,wl.m,wl.m,[]),d["ɵmpd"](1073742336,ol.e,ol.e,[]),d["ɵmpd"](1073742336,dl.s,dl.s,[]),d["ɵmpd"](1073742336,dl.q,dl.q,[]),d["ɵmpd"](1073742336,il.d,il.d,[]),d["ɵmpd"](1073742336,ml.d,ml.d,[]),d["ɵmpd"](1073742336,Ol.k,Ol.k,[]),d["ɵmpd"](1073742336,pl.i,pl.i,[]),d["ɵmpd"](1073742336,pl.f,pl.f,[]),d["ɵmpd"](1073742336,jl.e,jl.e,[]),d["ɵmpd"](1073742336,xl.e,xl.e,[]),d["ɵmpd"](1073742336,y.c,y.c,[]),d["ɵmpd"](1073742336,k.h,k.h,[]),d["ɵmpd"](1073742336,Pl.b,Pl.b,[]),d["ɵmpd"](1073742336,Vl.a,Vl.a,[]),d["ɵmpd"](1073742336,Al.a,Al.a,[[2,y.g],d.PLATFORM_ID]),d["ɵmpd"](1073742336,H.RouterModule,H.RouterModule,[[2,H["ɵangular_packages_router_router_a"]],[2,H.Router]]),d["ɵmpd"](1073742336,Ql.a,Ql.a,[]),d["ɵmpd"](1073742336,rl.b,rl.b,[]),d["ɵmpd"](1073742336,Ul.a,Ul.a,[]),d["ɵmpd"](1073742336,Zl.a,Zl.a,[]),d["ɵmpd"](1073742336,Jl.a,Jl.a,[]),d["ɵmpd"](1073742336,Bl,Bl,[]),d["ɵmpd"](1073742336,u,u,[]),d["ɵmpd"](256,Nl.a,{separatorKeyCodes:[ql.f]},[]),d["ɵmpd"](256,al.a,Zl.b,[]),d["ɵmpd"](1024,H.ROUTES,(function(){return[[{path:"",component:v,data:Hl},{path:":resourceNamespace/:resourceName",component:J,data:Wl},{path:"",component:Kl.a,outlet:"actionbar"}]]}),[])])}))}}]);
//# sourceMappingURL=resource-workloads-daemonset-module-ngfactory.js.map