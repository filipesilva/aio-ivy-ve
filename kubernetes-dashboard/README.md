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


## Ivy size decreases

I tried to analyse the diffs for `api-api-list-module.js` (-2101) and found a couple of things.

### Chained property access

Using repetitions of `[\w$]+\.[\w$]+` regex to find property accesses, whose names cannot be mangled, we can count how many there are.

- `[\w$]+\.[\w$]+`: Ivy has 227, VE has 292
- `[\w$]+\.[\w$]+\.[\w$]+`:, Ivy has 28, VE has 39
- `[\w$]+\.[\w$]+\.[\w$]+\.[\w$]+`:, Ivy has 1, VE has 12

More property accesses means less benefit from mangling. This should be the bulk of the size difference.

### Primitive usage

Primitives can't be renamed, so more of them means less opportunities for size savings.

- `null`: Ivy has 2, VE has 140
- `this`: Ivy has 70, VE has 70
- `return`: Ivy has 13, VE has 14
- strings: Ivy has 141, VE has 150, 
  - VE seems to have `"document"`, `"keydown.escape"`, `document:keydown.escape"`, `"document.click"`, and some others in generated code that Ivy doesn't

### Differences between source maps

For `api-api-list-module.js`, sourcemaps showed the following split:

- dist-ivy/api-api-list-module.js
  - 2.5   KB api-list.component.ts
  - 1.23  KB api-list.component.html
  - 938   B api.service.ts
  - 907   B api-list.component.ts.pre-build-optimizer.js
  - 369   B unmapped
  - 160   B api-list.module.ts
  - 65    B api-list.module.ts.pre-build-optimizer.js
  - 53    B api.service.ts.pre-build-optimizer.js
  - 6.22  KB total  
- dist-ve/api-api-list-module-ngfactory.js
  - 3.28  KB api-list.component.html 
  - 2.41  KB api-list.component.ts
  - 846   B api.service.ts
  - 743   B api-list.component.ngfactory.js.pre-build-optimizer.js
  - 657   B api-list.module.ngfactory.js.pre-build-optimizer.js
  - 349   B unmapped
  - 53    B api-list.module.ts
  - 8.33  KB total  


## Ivy size increases

I tried to analyse the diffs for `main.js` (+23505) and found a couple of things.

### Differences between source maps

For `main.js`, sourcemaps showed the following split of toplevel contributors:

- dist-ivy/main.js
  - 130.29  KB @angular/core
  - 66.23   KB @angular/animations
  - 59.42   KB @angular/material
  - 35.11   KB @angular/common
  - 30.31   KB @angular/cdk
  - 21.66   KB @angular/platform-browser
  - 41.37   KB rxjs
  - 56.86   KB src
  - 10.64   KB unmapped
  - 462.12  KB total
- dist-ve/main.js
  - 116.38  KB @angular/core
  - 66.43   KB @angular/animations
  - 50.32   KB @angular/material
  - 31.47   KB @angular/common
  - 25.68   KB @angular/cdk
  - 21.46   KB @angular/platform-browser
  - 41.25   KB rxjs
  - 68.69   KB src
  - 7.39    KB unmapped
  - 438.94  KB total
- diff (`-` means Ivy is smaller, `+` means Ivy is larger):  
  - +13.91  KB @angular/core
  - -0.20   KB @angular/animations
  - +9.10   KB @angular/material
  - +3.64   KB @angular/common
  - +4.63   KB @angular/cdk
  - +0.20   KB @angular/platform-browser
  - +0.12   KB rxjs
  - -11.83  KB src
  - +3.25   KB unmapped
  - +23.18  KB total

The end result is that code for user sources is smaller, but Angular libraries are bigger.
