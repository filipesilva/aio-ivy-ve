(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{xPHf:function(e,t,n){"use strict";n.r(t);var i,a,r,o,l,c=n("PXUV"),p=n("MnlZ"),d=n("SRaF"),s=n("m/E6"),m=n("fXoL"),u=n("KyHI"),f=n("tyNb"),v=n("PXtb"),S=n("YS1y"),h=n("TN1b"),I=n("ofXK"),y=n("TsCr"),b=n("D5Vd"),k=n("0t1c"),E=n("MmPu"),g=n("XiUz"),z=n("Rx8Q"),_=n("svQk");function x(e,t){if(1&e&&(m["ɵɵelementStart"](0,"div",8),m["ɵɵelementStart"](1,"span",9),m["ɵɵi18n"](2,a),m["ɵɵelementEnd"](),m["ɵɵelementStart"](3,"span"),m["ɵɵtext"](4),m["ɵɵelementEnd"](),m["ɵɵelementEnd"]()),2&e){const e=m["ɵɵnextContext"]();m["ɵɵadvance"](4),m["ɵɵtextInterpolate2"]("",e.replicaSet.podInfo.running," / ",e.replicaSet.podInfo.desired,"")}}function w(e,t){if(1&e&&(m["ɵɵelementStart"](0,"kd-property"),m["ɵɵelementStart"](1,"div",12),m["ɵɵi18n"](2,r),m["ɵɵelementEnd"](),m["ɵɵelementStart"](3,"div",13),m["ɵɵelement"](4,"kd-chips",14),m["ɵɵelementEnd"](),m["ɵɵelementEnd"]()),2&e){const e=m["ɵɵnextContext"](2);m["ɵɵadvance"](4),m["ɵɵproperty"]("map",e.replicaSet.selector.matchLabels)}}function j(e,t){if(1&e&&(m["ɵɵelementStart"](0,"kd-property"),m["ɵɵelementStart"](1,"div",12),m["ɵɵi18n"](2,o),m["ɵɵelementEnd"](),m["ɵɵelementStart"](3,"div",13),m["ɵɵelement"](4,"kd-chips",14),m["ɵɵelementEnd"](),m["ɵɵelementEnd"]()),2&e){const e=m["ɵɵnextContext"](2);m["ɵɵadvance"](4),m["ɵɵproperty"]("map",e.replicaSet.containerImages)}}function R(e,t){if(1&e&&(m["ɵɵelementStart"](0,"kd-property"),m["ɵɵelementStart"](1,"div",12),m["ɵɵi18n"](2,l),m["ɵɵelementEnd"](),m["ɵɵelementStart"](3,"div",13),m["ɵɵelement"](4,"kd-chips",14),m["ɵɵelementEnd"](),m["ɵɵelementEnd"]()),2&e){const e=m["ɵɵnextContext"](2);m["ɵɵadvance"](4),m["ɵɵproperty"]("map",e.replicaSet.initContainerImages)}}function M(e,t){if(1&e&&(m["ɵɵelementStart"](0,"div",10),m["ɵɵtemplate"](1,w,5,1,"kd-property",11),m["ɵɵtemplate"](2,j,5,1,"kd-property",11),m["ɵɵtemplate"](3,R,5,1,"kd-property",11),m["ɵɵelementEnd"]()),2&e){const e=m["ɵɵnextContext"]();m["ɵɵadvance"](1),m["ɵɵproperty"]("ngIf",null==e.replicaSet?null:e.replicaSet.selector),m["ɵɵadvance"](1),m["ɵɵproperty"]("ngIf",null==e.replicaSet?null:e.replicaSet.containerImages),m["ɵɵadvance"](1),m["ɵɵproperty"]("ngIf",null==e.replicaSet?null:e.replicaSet.initContainerImages)}}i=$localize`Resource information`,a=$localize`Pods:\u00A0`,r=$localize`Selector`,o=$localize`Images`,l=$localize`Init images`;let C=(()=>{class e{constructor(e,t,n,i){this.replicaSet_=e,this.actionbar_=t,this.activatedRoute_=n,this.notifications_=i,this.endpoint_=s.a.resource(s.b.replicaSet,!0),this.isInitialized=!1}ngOnInit(){const e=this.activatedRoute_.snapshot.params.resourceName,t=this.activatedRoute_.snapshot.params.resourceNamespace;this.eventListEndpoint=this.endpoint_.child(e,s.b.event,t),this.podListEndpoint=this.endpoint_.child(e,s.b.pod,t),this.serviceListEndpoint=this.endpoint_.child(e,s.b.service,t),this.replicaSetSubscription_=this.replicaSet_.get(this.endpoint_.detail(),e,t).subscribe(e=>{this.replicaSet=e,this.notifications_.pushErrors(e.errors),this.actionbar_.onInit.emit(new d.b("Replica Set",e.objectMeta,e.typeMeta)),this.isInitialized=!0})}ngOnDestroy(){this.replicaSetSubscription_.unsubscribe(),this.actionbar_.onDetailsLeave.emit()}}return e.ɵfac=function(t){return new(t||e)(m["ɵɵdirectiveInject"](u.a),m["ɵɵdirectiveInject"](d.a),m["ɵɵdirectiveInject"](f.ActivatedRoute),m["ɵɵdirectiveInject"](v.b))},e.ɵcmp=m["ɵɵdefineComponent"]({type:e,selectors:[["kd-replica-set-detail"]],decls:11,vars:10,consts:[[3,"initialized","objectMeta"],[3,"initialized"],["title",""],["description",""],["class","kd-inline-property",4,"ngIf"],["content","","fxLayout","row wrap",4,"ngIf"],[3,"podInfo","initialized"],[3,"endpoint"],[1,"kd-inline-property"],[1,"kd-muted-light"],["content","","fxLayout","row wrap"],[4,"ngIf"],["key",""],["value",""],[3,"map"]],template:function(e,t){1&e&&(m["ɵɵelement"](0,"kd-object-meta",0),m["ɵɵelementStart"](1,"kd-card",1),m["ɵɵelementStart"](2,"div",2),m["ɵɵi18n"](3,i),m["ɵɵelementEnd"](),m["ɵɵelementStart"](4,"div",3),m["ɵɵtemplate"](5,x,5,2,"div",4),m["ɵɵelementEnd"](),m["ɵɵtemplate"](6,M,4,3,"div",5),m["ɵɵelementEnd"](),m["ɵɵelement"](7,"kd-pod-status-card",6),m["ɵɵelement"](8,"kd-pod-list",7),m["ɵɵelement"](9,"kd-service-list",7),m["ɵɵelement"](10,"kd-event-list",7)),2&e&&(m["ɵɵproperty"]("initialized",t.isInitialized)("objectMeta",null==t.replicaSet?null:t.replicaSet.objectMeta),m["ɵɵadvance"](1),m["ɵɵproperty"]("initialized",t.isInitialized),m["ɵɵadvance"](4),m["ɵɵproperty"]("ngIf",null==t.replicaSet?null:t.replicaSet.podInfo),m["ɵɵadvance"](1),m["ɵɵproperty"]("ngIf",t.isInitialized),m["ɵɵadvance"](1),m["ɵɵproperty"]("podInfo",null==t.replicaSet?null:t.replicaSet.podInfo)("initialized",t.isInitialized),m["ɵɵadvance"](1),m["ɵɵproperty"]("endpoint",t.podListEndpoint),m["ɵɵadvance"](1),m["ɵɵproperty"]("endpoint",t.serviceListEndpoint),m["ɵɵadvance"](1),m["ɵɵproperty"]("endpoint",t.eventListEndpoint))},directives:[S.a,h.a,I.NgIf,y.a,b.a,k.a,E.a,g.d,z.a,_.a],encapsulation:2}),e})();var L=n("ZonX");let N=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=m["ɵɵdefineComponent"]({type:e,selectors:[["kd-replica-set-list-state"]],decls:1,vars:0,template:function(e,t){1&e&&m["ɵɵelement"](0,"kd-replica-set-list")},directives:[L.a],encapsulation:2}),e})();var X=n("1spY");const P={path:"",component:N,data:{breadcrumb:"Replica Sets",parent:n("6XRW").a}},$={path:":resourceNamespace/:resourceName",component:C,data:{breadcrumb:"{{ resourceName }}",parent:P}};let D=(()=>{class e{}return e.ɵmod=m["ɵɵdefineNgModule"]({type:e}),e.ɵinj=m["ɵɵdefineInjector"]({factory:function(t){return new(t||e)},imports:[[f.RouterModule.forChild([P,$,X.d])],f.RouterModule]}),e})();n.d(t,"ReplicaSetModule",(function(){return A}));let A=(()=>{class e{}return e.ɵmod=m["ɵɵdefineNgModule"]({type:e}),e.ɵinj=m["ɵɵdefineInjector"]({factory:function(t){return new(t||e)},imports:[[p.a,c.a,D]]}),e})()}}]);