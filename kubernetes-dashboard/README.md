# Notes while analysing the AIO size difference with Ivy

The samples analysed below can be found at https://github.com/filipesilva/aio-ivy-ve.

The setup for AIO from where I got these samples can be reproduced by following these steps:
```
git clone //github.com/filipesilva/dashboard
cd dashboard
git checkout kubernetes-ivy-size-diff
yarn
```

I made dist-ivy, dist-ivy-beaut, dist-ve, and dist-ve-beaut variants by running `ng build --prod --output-path dist-ivy`. The output path changed for each variant.

The ve/ivy variants were made by flipping the `angularCompilerOptions.enableIvy` flag in `aio/tsconfig.app.json`.

The *-beaut variants have mangling turned off and are pretty-printed. 
They were made by editing `node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/common.js` and adding these two lines:

```
terserOptions.mangle = false;           // <-- add this
terserOptions.output.beautify = true;   // <-- and this
extraMinimizers.push(new TerserPlugin({
```

## Sizes

Here's the comparison between baseline Ivy and VE:

- Ivy
```
$ du -acb --max-depth=1 ./dist-ivy/*.js
4284    ./dist-ivy/about-module.js
5605    ./dist-ivy/common.js
814301  ./dist-ivy/crd-module.js
75391   ./dist-ivy/create-module.js
2244    ./dist-ivy/error-module.js
18679   ./dist-ivy/logs-module.js
2787630 ./dist-ivy/main.js
6297    ./dist-ivy/overview-module.js
2975    ./dist-ivy/plugin-module.js
227835  ./dist-ivy/polyfills.js
2536    ./dist-ivy/resource-cluster-clusterrole-module.js     
438     ./dist-ivy/resource-cluster-module.js
6266    ./dist-ivy/resource-cluster-namespace-module.js       
19105   ./dist-ivy/resource-cluster-node-module.js
35077   ./dist-ivy/resource-cluster-persistentvolume-module.js
4867    ./dist-ivy/resource-cluster-storageclass-module.js        
3527    ./dist-ivy/resource-config-configmap-module.js
436     ./dist-ivy/resource-config-module.js
5501    ./dist-ivy/resource-config-persistentvolumeclaim-module.js
3941    ./dist-ivy/resource-config-secret-module.js
2508    ./dist-ivy/resource-discovery-ingress-module.js
442     ./dist-ivy/resource-discovery-module.js
5817    ./dist-ivy/resource-discovery-service-module.js
8497    ./dist-ivy/resource-workloads-cronjob-module.js
5540    ./dist-ivy/resource-workloads-daemonset-module.js
23083   ./dist-ivy/resource-workloads-deployment-module.js        
6748    ./dist-ivy/resource-workloads-job-module.js
444     ./dist-ivy/resource-workloads-module.js
450     ./dist-ivy/resource-workloads-pod-module.js
6182    ./dist-ivy/resource-workloads-replicaset-module.js        
5820    ./dist-ivy/resource-workloads-replicationcontroller-module.js
5364    ./dist-ivy/resource-workloads-statefulset-module.js
3325    ./dist-ivy/runtime.js
69153   ./dist-ivy/scripts.js
6269    ./dist-ivy/search-module.js
11217   ./dist-ivy/settings-module.js
300693  ./dist-ivy/shell-module.js
4488487 total
```
- VE
```
$ du -acb --max-depth=1 ./dist-ve/*.js
10815   ./dist-ve/about-module-ngfactory.js
94755   ./dist-ve/common.js
858648  ./dist-ve/crd-module-ngfactory.js
238967  ./dist-ve/create-module-ngfactory.js
31289   ./dist-ve/default~crd-module-ngfactory~overview-module-ngfactory~plugin-module-ngfactory~resource-cluster-clus~ab6b4aca.js
27053   ./dist-ve/default~crd-module-ngfactory~resource-cluster-clusterrole-module-ngfactory~resource-cluster-namespac~db4b930a.js
29516   ./dist-ve/default~crd-module-ngfactory~resource-cluster-node-module-ngfactory~resource-workloads-deployment-mo~932b2f12.js
29425   ./dist-ve/default~overview-module-ngfactory~resource-cluster-node-module-ngfactory~resource-discovery-service-~6ec462b0.js
25476   ./dist-ve/default~overview-module-ngfactory~resource-config-module-ngfactory~resource-config-persistentvolumec~9058d4c4.js
26209   ./dist-ve/default~overview-module-ngfactory~resource-discovery-module-ngfactory~resource-discovery-service-mod~1e933ae0.js
20395   ./dist-ve/default~overview-module-ngfactory~resource-workloads-cronjob-module-ngfactory~resource-workloads-job~269eb21e.js
21264   ./dist-ve/default~overview-module-ngfactory~resource-workloads-cronjob-module-ngfactory~resource-workloads-mod~4cc13df6.js
19906   ./dist-ve/default~overview-module-ngfactory~resource-workloads-daemonset-module-ngfactory~resource-workloads-m~db88854c.js
20349   ./dist-ve/default~overview-module-ngfactory~resource-workloads-deployment-module-ngfactory~resource-workloads-~a6ee351e.js
19898   ./dist-ve/default~overview-module-ngfactory~resource-workloads-deployment-module-ngfactory~resource-workloads-~ffc04181.js
25951   ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory.js
19917   ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory~resource-workloads-replication~4d7592b5.js
19906   ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory~resource-workloads-statefulset~a0af8c82.js
21619   ./dist-ve/default~resource-cluster-module-ngfactory~resource-cluster-node-module-ngfactory~search-module-ngfactory.js
25016   ./dist-ve/default~resource-cluster-module-ngfactory~resource-cluster-persistentvolume-module-ngfactory~resourc~727d27f1.js
25994   ./dist-ve/default~resource-workloads-daemonset-module-ngfactory~resource-workloads-job-module-ngfactory~resour~aa2aa797.js
7040    ./dist-ve/error-module-ngfactory.js
47969   ./dist-ve/logs-module-ngfactory.js
2423418 ./dist-ve/main.js
14654   ./dist-ve/overview-module-ngfactory.js
20595   ./dist-ve/plugin-module-ngfactory.js
227836  ./dist-ve/polyfills.js
20180   ./dist-ve/resource-cluster-clusterrole-module-ngfactory.js
21753   ./dist-ve/resource-cluster-module-ngfactory.js
44751   ./dist-ve/resource-cluster-namespace-module-ngfactory.js
31403   ./dist-ve/resource-cluster-node-module-ngfactory.js
50491   ./dist-ve/resource-cluster-persistentvolume-module-ngfactory.js
10564   ./dist-ve/resource-cluster-storageclass-module-ngfactory.js
8181    ./dist-ve/resource-config-configmap-module-ngfactory.js
20683   ./dist-ve/resource-config-module-ngfactory.js
11038   ./dist-ve/resource-config-persistentvolumeclaim-module-ngfactory.js
8565    ./dist-ve/resource-config-secret-module-ngfactory.js
11434   ./dist-ve/resource-discovery-ingress-module-ngfactory.js
20343   ./dist-ve/resource-discovery-module-ngfactory.js
39687   ./dist-ve/resource-discovery-service-module-ngfactory.js
33903   ./dist-ve/resource-workloads-cronjob-module-ngfactory.js
11292   ./dist-ve/resource-workloads-daemonset-module-ngfactory.js
34401   ./dist-ve/resource-workloads-deployment-module-ngfactory.js
12703   ./dist-ve/resource-workloads-job-module-ngfactory.js
8638    ./dist-ve/resource-workloads-module-ngfactory.js
39264   ./dist-ve/resource-workloads-pod-module-ngfactory.js
11977   ./dist-ve/resource-workloads-replicaset-module-ngfactory.js
11624   ./dist-ve/resource-workloads-replicationcontroller-module-ngfactory.js
11025   ./dist-ve/resource-workloads-statefulset-module-ngfactory.js
5554    ./dist-ve/runtime.js
69153   ./dist-ve/scripts.js
27417   ./dist-ve/search-module-ngfactory.js
49656   ./dist-ve/settings-module-ngfactory.js
306920  ./dist-ve/shell-module-ngfactory.js
5286480 total
```
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):
```
-6531     ./dist-ivy/about-module.js
-89150    ./dist-ivy/common.js
-44347    ./dist-ivy/crd-module.js
-163576   ./dist-ivy/create-module.js
-31289    ./dist-ve/default~crd-module-ngfactory~overview-module-ngfactory~plugin-module-ngfactory~resource-cluster-clus~ab6b4aca.js
-27053    ./dist-ve/default~crd-module-ngfactory~resource-cluster-clusterrole-module-ngfactory~resource-cluster-namespac~db4b930a.js
-29516    ./dist-ve/default~crd-module-ngfactory~resource-cluster-node-module-ngfactory~resource-workloads-deployment-mo~932b2f12.js
-29425    ./dist-ve/default~overview-module-ngfactory~resource-cluster-node-module-ngfactory~resource-discovery-service-~6ec462b0.js
-25476    ./dist-ve/default~overview-module-ngfactory~resource-config-module-ngfactory~resource-config-persistentvolumec~9058d4c4.js
-26209    ./dist-ve/default~overview-module-ngfactory~resource-discovery-module-ngfactory~resource-discovery-service-mod~1e933ae0.js
-20395    ./dist-ve/default~overview-module-ngfactory~resource-workloads-cronjob-module-ngfactory~resource-workloads-job~269eb21e.js
-21264    ./dist-ve/default~overview-module-ngfactory~resource-workloads-cronjob-module-ngfactory~resource-workloads-mod~4cc13df6.js
-19906    ./dist-ve/default~overview-module-ngfactory~resource-workloads-daemonset-module-ngfactory~resource-workloads-m~db88854c.js
-20349    ./dist-ve/default~overview-module-ngfactory~resource-workloads-deployment-module-ngfactory~resource-workloads-~a6ee351e.js
-19898    ./dist-ve/default~overview-module-ngfactory~resource-workloads-deployment-module-ngfactory~resource-workloads-~ffc04181.js
-25951    ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory.js
-19917    ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory~resource-workloads-replication~4d7592b5.js
-19906    ./dist-ve/default~overview-module-ngfactory~resource-workloads-module-ngfactory~resource-workloads-statefulset~a0af8c82.js
-21619    ./dist-ve/default~resource-cluster-module-ngfactory~resource-cluster-node-module-ngfactory~search-module-ngfactory.js
-25016    ./dist-ve/default~resource-cluster-module-ngfactory~resource-cluster-persistentvolume-module-ngfactory~resourc~727d27f1.js
-25994    ./dist-ve/default~resource-workloads-daemonset-module-ngfactory~resource-workloads-job-module-ngfactory~resour~aa2aa797.js
-4796     ./dist-ivy/error-module.js
-29290    ./dist-ivy/logs-module.js
+364212   ./dist-ivy/main.js
-8357     ./dist-ivy/overview-module.js
-17620    ./dist-ivy/plugin-module.js
-1        ./dist-ivy/polyfills.js
-17644    ./dist-ivy/resource-cluster-clusterrole-module.js
-21315    ./dist-ivy/resource-cluster-module.js
-38485    ./dist-ivy/resource-cluster-namespace-module.js
-12298    ./dist-ivy/resource-cluster-node-module.js
-15414    ./dist-ivy/resource-cluster-persistentvolume-module.js
-5697     ./dist-ivy/resource-cluster-storageclass-module.js
-4654     ./dist-ivy/resource-config-configmap-module.js
-20247    ./dist-ivy/resource-config-module.js
-5537     ./dist-ivy/resource-config-persistentvolumeclaim-module.js
-4624     ./dist-ivy/resource-config-secret-module.js
-8926     ./dist-ivy/resource-discovery-ingress-module.js
-19901    ./dist-ivy/resource-discovery-module.js
-33870    ./dist-ivy/resource-discovery-service-module.js
-25406    ./dist-ivy/resource-workloads-cronjob-module.js
-5752     ./dist-ivy/resource-workloads-daemonset-module.js
-11318    ./dist-ivy/resource-workloads-deployment-module.js
-5955     ./dist-ivy/resource-workloads-job-module.js
-8194     ./dist-ivy/resource-workloads-module.js
-38814    ./dist-ivy/resource-workloads-pod-module.js
-5795     ./dist-ivy/resource-workloads-replicaset-module.js
-5804     ./dist-ivy/resource-workloads-replicationcontroller-module.js
-5661     ./dist-ivy/resource-workloads-statefulset-module.js
-2229     ./dist-ivy/runtime.js
0         ./dist-ivy/scripts.js
-21148    ./dist-ivy/search-module.js
-38439    ./dist-ivy/settings-module.js
-6227     ./dist-ivy/shell-module.js
-797993   total
```


## Ivy size changes

Almost all the files decreased in size, except main which got larger.

Looking at the sourcemaps for `./dist-ve/default~crd-module-ngfactory~overview-module-ngfactory~plugin-module-ngfactory~resource-cluster-clus~ab6b4aca.js` shows most of its size (24kb out of 31kb) comes from `@angular/material`, followed by 6kb of code in `src/app/frontend/common/components/list/`.

This application is structured in the following way: 
- `SharedModule` contains many material imports
- `ComponentsModule` contains application components based on Material
- `LoginModule` is the only eagerly loaded NgModule, and loads both `SharedModule` and `ComponentsModule`
- lots of lazy modules that also import `SharedModule` and `ComponentsModule`

In VE, `main.js` contains the base classes in `SharedModule` and `ComponentsModule`, but the ngfactories for them are in lazy modules. They seem to be loaded directly as needed. Factories for material components are in the lazy modules as well.

In Ivy, `main.js` contains the base classes, and since base classes also contain factories in Ivy, the factories as well.


In Ivy, the generated code for `ComponentsModule` looks like this:
```
    PXUV: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var shared_module = __webpack_require__("MnlZ"), core = (__webpack_require__("SyKJ"), 
        __webpack_require__("WWzS"), __webpack_require__("is3B"), __webpack_require__("Bq+f"), 
        __webpack_require__("yiZC"), __webpack_require__("R//s"), __webpack_require__("q8YL"), 
        __webpack_require__("VjmB"), __webpack_require__("k9sD"), __webpack_require__("zWhM"), 
        __webpack_require__("WcSx"), __webpack_require__("MaC/"), __webpack_require__("VL/P"), 
        __webpack_require__("+kWh"), __webpack_require__("GFWA"), __webpack_require__("J9M6"), 
        __webpack_require__("e5Yu"), __webpack_require__("Y4Kv"), __webpack_require__("TN1b"), 
        __webpack_require__("usPk"), __webpack_require__("svQk"), __webpack_require__("/CJJ"), 
        __webpack_require__("ZUgW"), __webpack_require__("y1Kn"), __webpack_require__("RMBR"), 
        __webpack_require__("JPwO"), __webpack_require__("09Gj"), __webpack_require__("4Roa"), 
        __webpack_require__("LH/c"), __webpack_require__("1+Xt"), __webpack_require__("rBIm"), 
        __webpack_require__("8wem"), __webpack_require__("NaXA"), __webpack_require__("I3Np"), 
        __webpack_require__("77sm"), __webpack_require__("B2Dn"), __webpack_require__("4uYH"), 
        __webpack_require__("iKjI"), __webpack_require__("SBaI"), __webpack_require__("tdlU"), 
        __webpack_require__("YS1y"), __webpack_require__("TsCr"), __webpack_require__("H2iN"), 
        __webpack_require__("Rx8Q"), __webpack_require__("fXoL"));
        __webpack_require__("MZ8+"), __webpack_require__("1iBD"), __webpack_require__("Zv2W"), 
        __webpack_require__("5Dfj"), __webpack_require__("/CiT"), __webpack_require__("9V1o"), 
        __webpack_require__("RzvL"), __webpack_require__("hbcI"), __webpack_require__("D3Y/"), 
        __webpack_require__("MmPu"), __webpack_require__("pboN"), __webpack_require__("Rkdh"), 
        __webpack_require__("QuVQ"), __webpack_require__("wGc6"), __webpack_require__("+it7"), 
        __webpack_require__("H082"), __webpack_require__("l/kb"), __webpack_require__("D5Vd"), 
        __webpack_require__("ZonX"), __webpack_require__("JJm4"), __webpack_require__("GXVr"), 
        __webpack_require__("0t1c"), __webpack_require__("mhPB"), __webpack_require__("Kykq"), 
        __webpack_require__("hdER"), __webpack_require__("1nyB"), __webpack_require__("GCPd"), 
        __webpack_require__("PCAo"), __webpack_require__("zT9v"), __webpack_require__("/p1U"), 
        __webpack_require__.d(__webpack_exports__, "a", (function() {
            return module_ComponentsModule;
        }));
        let module_ComponentsModule = (() => {
            class ComponentsModule {}
            return ComponentsModule.ɵmod = core["ɵɵdefineNgModule"]({
                type: ComponentsModule
            }), ComponentsModule.ɵinj = core["ɵɵdefineInjector"]({
                factory: function(t) {
                    return new (t || ComponentsModule);
                },
                imports: [ [ shared_module.a ] ]
            }), ComponentsModule;
        })();
    },
```

It is similar to the VE version:
```
   PXUV: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__("SyKJ"), __webpack_require__("WWzS"), __webpack_require__("is3B"), 
        __webpack_require__("Bq+f"), __webpack_require__("yiZC"), __webpack_require__("R//s"), 
        __webpack_require__("q8YL"), __webpack_require__("VjmB"), __webpack_require__("k9sD"), 
        __webpack_require__("zWhM"), __webpack_require__("WcSx"), __webpack_require__("MaC/"), 
        __webpack_require__("VL/P"), __webpack_require__("+kWh"), __webpack_require__("GFWA"), 
        __webpack_require__("J9M6"), __webpack_require__("e5Yu"), __webpack_require__("Y4Kv"), 
        __webpack_require__("TN1b"), __webpack_require__("usPk"), __webpack_require__("svQk"), 
        __webpack_require__("/CJJ"), __webpack_require__("ZUgW"), __webpack_require__("y1Kn"), 
        __webpack_require__("RMBR"), __webpack_require__("JPwO"), __webpack_require__("09Gj"), 
        __webpack_require__("4Roa"), __webpack_require__("LH/c"), __webpack_require__("1+Xt"), 
        __webpack_require__("rBIm"), __webpack_require__("8wem"), __webpack_require__("NaXA"), 
        __webpack_require__("I3Np"), __webpack_require__("77sm"), __webpack_require__("B2Dn"), 
        __webpack_require__("4uYH"), __webpack_require__("iKjI"), __webpack_require__("SBaI"), 
        __webpack_require__("tdlU"), __webpack_require__("YS1y"), __webpack_require__("TsCr"), 
        __webpack_require__("H2iN"), __webpack_require__("Rx8Q"), __webpack_require__("MZ8+"), 
        __webpack_require__("1iBD"), __webpack_require__("Zv2W"), __webpack_require__("5Dfj"), 
        __webpack_require__("/CiT"), __webpack_require__("9V1o"), __webpack_require__("RzvL"), 
        __webpack_require__("hbcI"), __webpack_require__("D3Y/"), __webpack_require__("MmPu"), 
        __webpack_require__("pboN"), __webpack_require__("Rkdh"), __webpack_require__("QuVQ"), 
        __webpack_require__("wGc6"), __webpack_require__("+it7"), __webpack_require__("H082"), 
        __webpack_require__("l/kb"), __webpack_require__("D5Vd"), __webpack_require__("ZonX"), 
        __webpack_require__("JJm4"), __webpack_require__("GXVr"), __webpack_require__("0t1c"), 
        __webpack_require__("mhPB"), __webpack_require__("Kykq"), __webpack_require__("hdER"), 
        __webpack_require__("1nyB"), __webpack_require__("GCPd"), __webpack_require__("PCAo"), 
        __webpack_require__("zT9v"), __webpack_require__("/p1U"), __webpack_require__.d(__webpack_exports__, "a", (function() {
            return ComponentsModule;
        }));
        class ComponentsModule {}
    },
```

It is puzzling that all these imports are left in place when unused. 

It's likely that one of the code transformations in Angular CLI is removing the decorators and thus references, but leaving the imports behind.

When the AngularCompilerPlugin is finished with `ComponentsModule`, it looks like this:
```
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ActionbarComponent } from './actionbar/component';
import { ActionbarDetailActionsComponent } from './actionbar/detailactions/component';
import { ActionbarDetailDeleteComponent } from './actionbar/detailactions/delete/component';
import { ActionbarDetailEditComponent } from './actionbar/detailactions/edit/component';
import { ActionbarDetailExecComponent } from './actionbar/detailactions/exec/component';
import { ActionbarDetailLogsComponent } from './actionbar/detailactions/logs/component';
import { ActionbarDetailPinComponent } from './actionbar/detailactions/pin/component';
import { ActionbarDetailScaleComponent } from './actionbar/detailactions/scale/component';
import { ActionbarDetailTriggerComponent } from './actionbar/detailactions/trigger/component';
import { DefaultActionbar } from './actionbars/default/component';
import { LogsDefaultActionbar } from './actionbars/logsdefault/component';
import { LogsExecDefaultActionbar } from './actionbars/logsexecdefault/component';
import { LogsScaleDefaultActionbar } from './actionbars/logsscaledefault/component';
import { ScaleDefaultActionbar } from './actionbars/scaledefault/component';
import { TriggerDefaultActionbar } from './actionbars/triggerdefault/component';
import { PinDefaultActionbar } from './actionbars/pindefault/component';  
import { AllocationChartComponent } from './allocationchart/component';   
import { BreadcrumbsComponent } from './breadcrumbs/component';
import { CardComponent } from './card/component';
import { ChipDialog } from './chips/chipdialog/dialog';
import { ChipsComponent } from './chips/component';
import { ConditionListComponent } from './condition/component';
import { ContainerCardComponent } from './container/component';
import { CreatorCardComponent } from './creator/component';
import { DateComponent } from './date/component';
import { EndpointListComponent } from './endpoint/cardlist/component';    
import { ExternalEndpointComponent } from './endpoint/external/component';
import { InternalEndpointComponent } from './endpoint/internal/component';
import { GraphComponent } from './graph/component';
import { GraphCardComponent } from './graphcard/component';
import { HiddenPropertyComponent } from './hiddenproperty/component';     
import { ResourceLimitListComponent } from './limits/component';
import { ColumnComponent } from './list/column/component';
import { MenuComponent } from './list/column/menu/component';
import { CardListFilterComponent } from './list/filter/component';        
import { RowDetailComponent } from './list/rowdetail/component';
import { LoadingSpinner } from './list/spinner/component';
import { ListZeroStateComponent } from './list/zerostate/component';      
import { NamespaceChangeDialog } from './namespace/changedialog/dialog';  
import { NamespaceSelectorComponent } from './namespace/component';       
import { ObjectMetaComponent } from './objectmeta/component';
import { PodStatusCardComponent } from './podstatus/component';
import { PolicyRuleListComponent } from './policyrule/component';
import { PropertyComponent } from './property/component';
import { ProxyComponent } from './proxy/component';
import { ResourceQuotaListComponent } from './quotas/component';
import { ClusterRoleListComponent } from './resourcelist/clusterrole/component';
import { ConfigMapListComponent } from './resourcelist/configmap/component';
import { CRDListComponent } from './resourcelist/crd/component';
import { CRDObjectListComponent } from './resourcelist/crdobject/component';
import { CRDVersionListComponent } from './resourcelist/crdversion/component';
import { CronJobListComponent } from './resourcelist/cronjob/component';
import { DaemonSetListComponent } from './resourcelist/daemonset/component';
import { DeploymentListComponent } from './resourcelist/deployment/component';
import { EventListComponent } from './resourcelist/event/component';
import { IngressListComponent } from './resourcelist/ingress/component';
import { JobListComponent } from './resourcelist/job/component';
import { NamespaceListComponent } from './resourcelist/namespace/component';
import { NodeListComponent } from './resourcelist/node/component';
import { PersistentVolumeListComponent } from './resourcelist/persistentvolume/component';
import { PersistentVolumeClaimListComponent } from './resourcelist/persistentvolumeclaim/component';
import { PluginListComponent } from './resourcelist/plugin/component';
import { PodListComponent } from './resourcelist/pod/component';
import { ReplicaSetListComponent } from './resourcelist/replicaset/component';
import { ReplicationControllerListComponent } from './resourcelist/replicationcontroller/component';
import { SecretListComponent } from './resourcelist/secret/component';
import { ServiceListComponent } from './resourcelist/service/component';
import { StatefulSetListComponent } from './resourcelist/statefulset/component';
import { StorageClassListComponent } from './resourcelist/storageclass/component';
import { CpuSparklineComponent } from './sparkline/cpu/component';
import { MemorySparklineComponent } from './sparkline/memory/component';
import { TextInputComponent } from './textinput/component';
import { UploadFileComponent } from './uploadfile/component';
import { WorkloadStatusComponent } from './workloadstatus/component';
import { ZeroStateComponent } from './zerostate/component';
import * as i0 from "@angular/core";
const components = [
    ActionbarDetailActionsComponent,
    ActionbarDetailDeleteComponent,
    ActionbarDetailEditComponent,
    ActionbarDetailScaleComponent,
    ActionbarDetailLogsComponent,
    ActionbarDetailExecComponent,
    ActionbarDetailPinComponent,
    ActionbarComponent,
    AllocationChartComponent,
    ActionbarDetailTriggerComponent,
    BreadcrumbsComponent,
    CardComponent,
    CardListFilterComponent,
    ChipsComponent,
    CronJobListComponent,
    ClusterRoleListComponent,
    ConfigMapListComponent,
    PluginListComponent,
    ColumnComponent,
    ChipDialog,
    ContainerCardComponent,
    ConditionListComponent,
    CreatorCardComponent,
    CRDListComponent,
    CRDObjectListComponent,
    CRDVersionListComponent,
    GraphComponent,
    GraphCardComponent,
    DaemonSetListComponent,
    DateComponent,
    DeploymentListComponent,
    DefaultActionbar,
    EndpointListComponent,
    ExternalEndpointComponent,
    EventListComponent,
    HiddenPropertyComponent,
    IngressListComponent,
    InternalEndpointComponent,
    JobListComponent,
    LoadingSpinner,
    ListZeroStateComponent,
    LogsScaleDefaultActionbar,
    LogsExecDefaultActionbar,
    LogsDefaultActionbar,
    MenuComponent,
    NamespaceListComponent,
    NodeListComponent,
    NamespaceSelectorComponent,
    NamespaceChangeDialog,
    ObjectMetaComponent,
    PodStatusCardComponent,
    PropertyComponent,
    ProxyComponent,
    PodListComponent,
    PersistentVolumeListComponent,
    PersistentVolumeClaimListComponent,
    PolicyRuleListComponent,
    PinDefaultActionbar,
    ResourceQuotaListComponent,
    ResourceLimitListComponent,
    ReplicaSetListComponent,
    ReplicationControllerListComponent,
    RowDetailComponent,
    StorageClassListComponent,
    StatefulSetListComponent,
    SecretListComponent,
    ServiceListComponent,
    CpuSparklineComponent,
    MemorySparklineComponent,
    ScaleDefaultActionbar,
    TextInputComponent,
    TriggerDefaultActionbar,
    UploadFileComponent,
    ZeroStateComponent,
    WorkloadStatusComponent,
];
export class ComponentsModule {
}
/** @nocollapse */ ComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentsModule });
/** @nocollapse */ ComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[SharedModule]] });
/*@__PURE__*/ i0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: [ActionbarDetailActionsComponent,      
        ActionbarDetailDeleteComponent,
        ActionbarDetailEditComponent,
        ActionbarDetailScaleComponent,
        ActionbarDetailLogsComponent,
        ActionbarDetailExecComponent,
        ActionbarDetailPinComponent,
        ActionbarComponent,
        AllocationChartComponent,
        ActionbarDetailTriggerComponent,
        BreadcrumbsComponent,
        CardComponent,
        CardListFilterComponent,
        ChipsComponent,
        CronJobListComponent,
        ClusterRoleListComponent,
        ConfigMapListComponent,
        PluginListComponent,
        ColumnComponent,
        ChipDialog,
        ContainerCardComponent,
        ConditionListComponent,
        CreatorCardComponent,
        CRDListComponent,
        CRDObjectListComponent,
        CRDVersionListComponent,
        GraphComponent,
        GraphCardComponent,
        DaemonSetListComponent,
        DateComponent,
        DeploymentListComponent,
        DefaultActionbar,
        EndpointListComponent,
        ExternalEndpointComponent,
        EventListComponent,
        HiddenPropertyComponent,
        IngressListComponent,
        InternalEndpointComponent,
        JobListComponent,
        LoadingSpinner,
        ListZeroStateComponent,
        LogsScaleDefaultActionbar,
        LogsExecDefaultActionbar,
        LogsDefaultActionbar,
        MenuComponent,
        NamespaceListComponent,
        NodeListComponent,
        NamespaceSelectorComponent,
        NamespaceChangeDialog,
        ObjectMetaComponent,
        PodStatusCardComponent,
        PropertyComponent,
        ProxyComponent,
        PodListComponent,
        PersistentVolumeListComponent,
        PersistentVolumeClaimListComponent,
        PolicyRuleListComponent,
        PinDefaultActionbar,
        ResourceQuotaListComponent,
        ResourceLimitListComponent,
        ReplicaSetListComponent,
        ReplicationControllerListComponent,
        RowDetailComponent,
        StorageClassListComponent,
        StatefulSetListComponent,
        SecretListComponent,
        ServiceListComponent,
        CpuSparklineComponent,
        MemorySparklineComponent,
        ScaleDefaultActionbar,
        TextInputComponent,
        TriggerDefaultActionbar,
        UploadFileComponent,
        ZeroStateComponent,
        WorkloadStatusComponent], imports: [SharedModule], exports: [ActionbarDetailActionsComponent,        
        ActionbarDetailDeleteComponent,
        ActionbarDetailEditComponent,
        ActionbarDetailScaleComponent,
        ActionbarDetailLogsComponent,
        ActionbarDetailExecComponent,
        ActionbarDetailPinComponent,
        ActionbarComponent,
        AllocationChartComponent,
        ActionbarDetailTriggerComponent,
        BreadcrumbsComponent,
        CardComponent,
        CardListFilterComponent,
        ChipsComponent,
        CronJobListComponent,
        ClusterRoleListComponent,
        ConfigMapListComponent,
        PluginListComponent,
        ColumnComponent,
        ChipDialog,
        ContainerCardComponent,
        ConditionListComponent,
        CreatorCardComponent,
        CRDListComponent,
        CRDObjectListComponent,
        CRDVersionListComponent,
        GraphComponent,
        GraphCardComponent,
        DaemonSetListComponent,
        DateComponent,
        DeploymentListComponent,
        DefaultActionbar,
        EndpointListComponent,
        ExternalEndpointComponent,
        EventListComponent,
        HiddenPropertyComponent,
        IngressListComponent,
        InternalEndpointComponent,
        JobListComponent,
        LoadingSpinner,
        ListZeroStateComponent,
        LogsScaleDefaultActionbar,
        LogsExecDefaultActionbar,
        LogsDefaultActionbar,
        MenuComponent,
        NamespaceListComponent,
        NodeListComponent,
        NamespaceSelectorComponent,
        NamespaceChangeDialog,
        ObjectMetaComponent,
        PodStatusCardComponent,
        PropertyComponent,
        ProxyComponent,
        PodListComponent,
        PersistentVolumeListComponent,
        PersistentVolumeClaimListComponent,
        PolicyRuleListComponent,
        PinDefaultActionbar,
        ResourceQuotaListComponent,
        ResourceLimitListComponent,
        ReplicaSetListComponent,
        ReplicationControllerListComponent,
        RowDetailComponent,
        StorageClassListComponent,
        StatefulSetListComponent,
        SecretListComponent,
        ServiceListComponent,
        CpuSparklineComponent,
        MemorySparklineComponent,
        ScaleDefaultActionbar,
        TextInputComponent,
        TriggerDefaultActionbar,
        UploadFileComponent,
        ZeroStateComponent,
        WorkloadStatusComponent] });
/*@__PURE__*/ i0.ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                imports: [SharedModule],
                declarations: [...components],
                exports: [...components],
                entryComponents: [ChipDialog, RowDetailComponent, MenuComponent, NamespaceChangeDialog],     
            }]
    }], null, null);
//# sourceMappingURL=module.js.map
```

It then passes through Build Optimizer, removing `ɵsetClassMetadata` and `ɵɵsetNgModuleScope`, which leaves it like this:

```
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { ActionbarComponent } from './actionbar/component';
import { ActionbarDetailActionsComponent } from './actionbar/detailactions/component';
import { ActionbarDetailDeleteComponent } from './actionbar/detailactions/delete/component';
import { ActionbarDetailEditComponent } from './actionbar/detailactions/edit/component';
import { ActionbarDetailExecComponent } from './actionbar/detailactions/exec/component';
import { ActionbarDetailLogsComponent } from './actionbar/detailactions/logs/component';
import { ActionbarDetailPinComponent } from './actionbar/detailactions/pin/component';
import { ActionbarDetailScaleComponent } from './actionbar/detailactions/scale/component';
import { ActionbarDetailTriggerComponent } from './actionbar/detailactions/trigger/component';
import { DefaultActionbar } from './actionbars/default/component';
import { LogsDefaultActionbar } from './actionbars/logsdefault/component';
import { LogsExecDefaultActionbar } from './actionbars/logsexecdefault/component';
import { LogsScaleDefaultActionbar } from './actionbars/logsscaledefault/component';
import { ScaleDefaultActionbar } from './actionbars/scaledefault/component';
import { TriggerDefaultActionbar } from './actionbars/triggerdefault/component';
import { PinDefaultActionbar } from './actionbars/pindefault/component';
import { AllocationChartComponent } from './allocationchart/component';
import { BreadcrumbsComponent } from './breadcrumbs/component';
import { CardComponent } from './card/component';
import { ChipDialog } from './chips/chipdialog/dialog';
import { ChipsComponent } from './chips/component';
import { ConditionListComponent } from './condition/component';
import { ContainerCardComponent } from './container/component';
import { CreatorCardComponent } from './creator/component';
import { DateComponent } from './date/component';
import { EndpointListComponent } from './endpoint/cardlist/component';
import { ExternalEndpointComponent } from './endpoint/external/component';
import { InternalEndpointComponent } from './endpoint/internal/component';
import { GraphComponent } from './graph/component';
import { GraphCardComponent } from './graphcard/component';
import { HiddenPropertyComponent } from './hiddenproperty/component';
import { ResourceLimitListComponent } from './limits/component';
import { ColumnComponent } from './list/column/component';
import { MenuComponent } from './list/column/menu/component';
import { CardListFilterComponent } from './list/filter/component';
import { RowDetailComponent } from './list/rowdetail/component';
import { LoadingSpinner } from './list/spinner/component';
import { ListZeroStateComponent } from './list/zerostate/component';
import { NamespaceChangeDialog } from './namespace/changedialog/dialog';
import { NamespaceSelectorComponent } from './namespace/component';
import { ObjectMetaComponent } from './objectmeta/component';
import { PodStatusCardComponent } from './podstatus/component';
import { PolicyRuleListComponent } from './policyrule/component';
import { PropertyComponent } from './property/component';
import { ProxyComponent } from './proxy/component';
import { ResourceQuotaListComponent } from './quotas/component';
import { ClusterRoleListComponent } from './resourcelist/clusterrole/component';
import { ConfigMapListComponent } from './resourcelist/configmap/component';
import { CRDListComponent } from './resourcelist/crd/component';
import { CRDObjectListComponent } from './resourcelist/crdobject/component';
import { CRDVersionListComponent } from './resourcelist/crdversion/component';
import { CronJobListComponent } from './resourcelist/cronjob/component';
import { DaemonSetListComponent } from './resourcelist/daemonset/component';
import { DeploymentListComponent } from './resourcelist/deployment/component';
import { EventListComponent } from './resourcelist/event/component';
import { IngressListComponent } from './resourcelist/ingress/component';
import { JobListComponent } from './resourcelist/job/component';
import { NamespaceListComponent } from './resourcelist/namespace/component';
import { NodeListComponent } from './resourcelist/node/component';
import { PersistentVolumeListComponent } from './resourcelist/persistentvolume/component';
import { PersistentVolumeClaimListComponent } from './resourcelist/persistentvolumeclaim/component';
import { PluginListComponent } from './resourcelist/plugin/component';
import { PodListComponent } from './resourcelist/pod/component';
import { ReplicaSetListComponent } from './resourcelist/replicaset/component';
import { ReplicationControllerListComponent } from './resourcelist/replicationcontroller/component';
import { SecretListComponent } from './resourcelist/secret/component';
import { ServiceListComponent } from './resourcelist/service/component';
import { StatefulSetListComponent } from './resourcelist/statefulset/component';
import { StorageClassListComponent } from './resourcelist/storageclass/component';
import { CpuSparklineComponent } from './sparkline/cpu/component';
import { MemorySparklineComponent } from './sparkline/memory/component';
import { TextInputComponent } from './textinput/component';
import { UploadFileComponent } from './uploadfile/component';
import { WorkloadStatusComponent } from './workloadstatus/component';
import { ZeroStateComponent } from './zerostate/component';
import * as i0 from "@angular/core";
const components = [
    ActionbarDetailActionsComponent,
    ActionbarDetailDeleteComponent,
    ActionbarDetailEditComponent,
    ActionbarDetailScaleComponent,
    ActionbarDetailLogsComponent,
    ActionbarDetailExecComponent,
    ActionbarDetailPinComponent,
    ActionbarComponent,
    AllocationChartComponent,
    ActionbarDetailTriggerComponent,
    BreadcrumbsComponent,
    CardComponent,
    CardListFilterComponent,
    ChipsComponent,
    CronJobListComponent,
    ClusterRoleListComponent,
    ConfigMapListComponent,
    PluginListComponent,
    ColumnComponent,
    ChipDialog,
    ContainerCardComponent,
    ConditionListComponent,
    CreatorCardComponent,
    CRDListComponent,
    CRDObjectListComponent,
    CRDVersionListComponent,
    GraphComponent,
    GraphCardComponent,
    DaemonSetListComponent,
    DateComponent,
    DeploymentListComponent,
    DefaultActionbar,
    EndpointListComponent,
    ExternalEndpointComponent,
    EventListComponent,
    HiddenPropertyComponent,
    IngressListComponent,
    InternalEndpointComponent,
    JobListComponent,
    LoadingSpinner,
    ListZeroStateComponent,
    LogsScaleDefaultActionbar,
    LogsExecDefaultActionbar,
    LogsDefaultActionbar,
    MenuComponent,
    NamespaceListComponent,
    NodeListComponent,
    NamespaceSelectorComponent,
    NamespaceChangeDialog,
    ObjectMetaComponent,
    PodStatusCardComponent,
    PropertyComponent,
    ProxyComponent,
    PodListComponent,
    PersistentVolumeListComponent,
    PersistentVolumeClaimListComponent,
    PolicyRuleListComponent,
    PinDefaultActionbar,
    ResourceQuotaListComponent,
    ResourceLimitListComponent,
    ReplicaSetListComponent,
    ReplicationControllerListComponent,
    RowDetailComponent,
    StorageClassListComponent,
    StatefulSetListComponent,
    SecretListComponent,
    ServiceListComponent,
    CpuSparklineComponent,
    MemorySparklineComponent,
    ScaleDefaultActionbar,
    TextInputComponent,
    TriggerDefaultActionbar,
    UploadFileComponent,
    ZeroStateComponent,
    WorkloadStatusComponent,
];
export let ComponentsModule = /*@__PURE__*/ (() => {
    class ComponentsModule {
    }
    /** @nocollapse */ ComponentsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentsModule });
    /** @nocollapse */ ComponentsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[SharedModule]] });
    return ComponentsModule;
})();
```

Even though we know all of these variables are now unused, they can't be removed because they are part of user code. 
User code is not considered to be free from side effects, unlike library code.

This seems to be the next level of https://github.com/angular/angular/pull/33337#issuecomment-552600420.

In that issue we were trying to avoid keeping references to angular/* packages to avoid deoptimizations. By removing the references to angular packages, they are later elided by webpack itself because webpack knows angular packages are free from side effects.

But these references can be to user code as well, and user code imports will not be elided because it is not free from side effects.

The end result thus is:
In Ivy, all modules that are eagerly imported will be included in wholesale main. In VE, the modules themselves would be included but their factories would only be included where used.