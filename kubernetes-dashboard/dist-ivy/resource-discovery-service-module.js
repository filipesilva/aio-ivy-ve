(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{q8qa:function(e,t,n){"use strict";n.r(t);var i,r,a,o,s,l=n("PXUV"),c=n("MnlZ"),d=n("SRaF"),p=n("m/E6"),u=n("fXoL"),v=n("KyHI"),m=n("tyNb"),f=n("PXtb"),y=n("YS1y"),h=n("TN1b"),I=n("ofXK"),b=n("JPwO"),S=n("D5Vd"),x=n("MmPu"),k=n("XiUz"),E=n("Rx8Q"),z=n("svQk");function w(e,t){if(1&e&&(u["ɵɵelementStart"](0,"kd-property"),u["ɵɵelementStart"](1,"div",9),u["ɵɵi18n"](2,r),u["ɵɵelementEnd"](),u["ɵɵelementStart"](3,"div",10),u["ɵɵtext"](4),u["ɵɵelementEnd"](),u["ɵɵelementEnd"]()),2&e){const e=u["ɵɵnextContext"](2);u["ɵɵadvance"](4),u["ɵɵtextInterpolate"](null==e.service?null:e.service.type)}}function _(e,t){if(1&e&&(u["ɵɵelementStart"](0,"kd-property"),u["ɵɵelementStart"](1,"div",9),u["ɵɵi18n"](2,a),u["ɵɵelementEnd"](),u["ɵɵelementStart"](3,"div",10),u["ɵɵtext"](4),u["ɵɵelementEnd"](),u["ɵɵelementEnd"]()),2&e){const e=u["ɵɵnextContext"](2);u["ɵɵadvance"](4),u["ɵɵtextInterpolate"](null==e.service?null:e.service.clusterIP)}}function g(e,t){if(1&e&&(u["ɵɵelementStart"](0,"kd-property"),u["ɵɵelementStart"](1,"div",9),u["ɵɵi18n"](2,o),u["ɵɵelementEnd"](),u["ɵɵelementStart"](3,"div",10),u["ɵɵtext"](4),u["ɵɵelementEnd"](),u["ɵɵelementEnd"]()),2&e){const e=u["ɵɵnextContext"](2);u["ɵɵadvance"](4),u["ɵɵtextInterpolate"](null==e.service?null:e.service.sessionAffinity)}}function j(e,t){if(1&e&&(u["ɵɵelementStart"](0,"kd-property",11),u["ɵɵelementStart"](1,"div",9),u["ɵɵi18n"](2,s),u["ɵɵelementEnd"](),u["ɵɵelementStart"](3,"div",10),u["ɵɵelement"](4,"kd-chips",12),u["ɵɵelementEnd"](),u["ɵɵelementEnd"]()),2&e){const e=u["ɵɵnextContext"](2);u["ɵɵadvance"](4),u["ɵɵproperty"]("map",null==e.service?null:e.service.selector)}}function M(e,t){if(1&e&&(u["ɵɵelementStart"](0,"div",6),u["ɵɵtemplate"](1,w,5,1,"kd-property",7),u["ɵɵtemplate"](2,_,5,1,"kd-property",7),u["ɵɵtemplate"](3,g,5,1,"kd-property",7),u["ɵɵtemplate"](4,j,5,1,"kd-property",8),u["ɵɵelementEnd"]()),2&e){const e=u["ɵɵnextContext"]();u["ɵɵadvance"](1),u["ɵɵproperty"]("ngIf",null==e.service?null:e.service.type),u["ɵɵadvance"](1),u["ɵɵproperty"]("ngIf",null==e.service?null:e.service.clusterIP),u["ɵɵadvance"](1),u["ɵɵproperty"]("ngIf",null==e.service?null:e.service.sessionAffinity),u["ɵɵadvance"](1),u["ɵɵproperty"]("ngIf",null==e.service?null:e.service.selector)}}i=$localize`Resource information`,r=$localize`Type`,a=$localize`Cluster IP`,o=$localize`Session Affinity`,s=$localize`Selector`;let L=(()=>{class e{constructor(e,t,n,i){this.service_=e,this.actionbar_=t,this.activatedRoute_=n,this.notifications_=i,this.endpoint_=p.a.resource(p.b.service,!0),this.isInitialized=!1}ngOnInit(){const e=this.activatedRoute_.snapshot.params.resourceName,t=this.activatedRoute_.snapshot.params.resourceNamespace;this.podListEndpoint=this.endpoint_.child(e,p.b.pod,t),this.eventListEndpoint=this.endpoint_.child(e,p.b.event,t),this.serviceSubscription_=this.service_.get(this.endpoint_.detail(),e,t).subscribe(e=>{this.service=e,this.notifications_.pushErrors(e.errors),this.actionbar_.onInit.emit(new d.b("Service",e.objectMeta,e.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.serviceSubscription_.unsubscribe(),this.actionbar_.onDetailsLeave.emit()}}return e.ɵfac=function(t){return new(t||e)(u["ɵɵdirectiveInject"](v.a),u["ɵɵdirectiveInject"](d.a),u["ɵɵdirectiveInject"](m.ActivatedRoute),u["ɵɵdirectiveInject"](f.b))},e.ɵcmp=u["ɵɵdefineComponent"]({type:e,selectors:[["kd-service-detail"]],decls:8,vars:8,consts:[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],["content","","fxLayout","row wrap",4,"ngIf"],[3,"endpoints","initialized"],[3,"endpoint"],["content","","fxLayout","row wrap"],[4,"ngIf"],["fxFlex","100",4,"ngIf"],["key",""],["value",""],["fxFlex","100"],[3,"map"]],template:function(e,t){1&e&&(u["ɵɵelement"](0,"kd-object-meta",0),u["ɵɵelementStart"](1,"kd-card",1),u["ɵɵelementStart"](2,"div",2),u["ɵɵi18n"](3,i),u["ɵɵelementEnd"](),u["ɵɵtemplate"](4,M,5,4,"div",3),u["ɵɵelementEnd"](),u["ɵɵelement"](5,"kd-endpoint-card-list",4),u["ɵɵelement"](6,"kd-pod-list",5),u["ɵɵelement"](7,"kd-event-list",5)),2&e&&(u["ɵɵproperty"]("initialized",t.isInitialized)("objectMeta",null==t.service?null:t.service.objectMeta),u["ɵɵadvance"](1),u["ɵɵproperty"]("initialized",t.isInitialized),u["ɵɵadvance"](3),u["ɵɵproperty"]("ngIf",t.isInitialized),u["ɵɵadvance"](1),u["ɵɵproperty"]("endpoints",null==t.service?null:null==t.service.endpointList?null:t.service.endpointList.endpoints)("initialized",t.isInitialized),u["ɵɵadvance"](1),u["ɵɵproperty"]("endpoint",t.podListEndpoint),u["ɵɵadvance"](1),u["ɵɵproperty"]("endpoint",t.eventListEndpoint))},directives:[y.a,h.a,I.NgIf,b.a,S.a,x.a,k.d,E.a,k.b,z.a],encapsulation:2}),e})();var N=n("0t1c");let C=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u["ɵɵdefineComponent"]({type:e,selectors:[["kd-service-list-state"]],decls:1,vars:0,template:function(e,t){1&e&&u["ɵɵelement"](0,"kd-service-list")},directives:[N.a],encapsulation:2}),e})();var R=n("1spY");const P={path:"",component:C,data:{breadcrumb:"Services",parent:n("ePD8").a}},X={path:":resourceNamespace/:resourceName",component:L,data:{breadcrumb:"{{ resourceName }}",parent:P}};let $=(()=>{class e{}return e.ɵmod=u["ɵɵdefineNgModule"]({type:e}),e.ɵinj=u["ɵɵdefineInjector"]({factory:function(t){return new(t||e)},imports:[[m.RouterModule.forChild([P,X,R.a])],m.RouterModule]}),e})();n.d(t,"ServiceModule",(function(){return A}));let A=(()=>{class e{}return e.ɵmod=u["ɵɵdefineNgModule"]({type:e}),e.ɵinj=u["ɵɵdefineInjector"]({factory:function(t){return new(t||e)},imports:[[c.a,l.a,$]]}),e})()}}]);