        const ERR_SW_NOT_SUPPORTED = "Service workers are disabled or not supported by this browser";
        class service_worker_NgswCommChannel {
            constructor(serviceWorker) {
                if (this.serviceWorker = serviceWorker, serviceWorker) {
                    const controllerChanges = Object(fromEvent.a)(serviceWorker, "controllerchange").pipe(Object(map.a)(() => serviceWorker.controller)), currentController = defer(() => Object(of.a)(serviceWorker.controller)), controllerWithChanges = Object(concat.a)(currentController, controllerChanges);
                    this.worker = controllerWithChanges.pipe(Object(filter.a)(c => !!c)), this.registration = this.worker.pipe(Object(switchMap.a)(() => serviceWorker.getRegistration()));
                    const events = Object(fromEvent.a)(serviceWorker, "message").pipe(Object(map.a)(event => event.data)).pipe(Object(filter.a)(event => event && event.type)).pipe(Object(multicast.a)(new Subject.a));
                    events.connect(), this.events = events;
                } else this.worker = this.events = this.registration = (message = ERR_SW_NOT_SUPPORTED, 
                defer(() => Object(throwError.a)(new Error(message))));
                var message;
            }
            postMessage(action, payload) {
                return this.worker.pipe(Object(take.a)(1), Object(tap.a)(sw => {
                    sw.postMessage(Object.assign({
                        action: action
                    }, payload));
                })).toPromise().then(() => void 0);
            }
            postMessageWithStatus(type, payload, nonce) {
                const waitForStatus = this.waitForStatus(nonce), postMessage = this.postMessage(type, payload);
                return Promise.all([ waitForStatus, postMessage ]).then(() => void 0);
            }
            generateNonce() {
                return Math.round(1e7 * Math.random());
            }
            eventsOfType(type) {
                return this.events.pipe(Object(filter.a)(event => event.type === type));
            }
            nextEventOfType(type) {
                return this.eventsOfType(type).pipe(Object(take.a)(1));
            }
            waitForStatus(nonce) {
                return this.eventsOfType("STATUS").pipe(Object(filter.a)(event => event.nonce === nonce), Object(take.a)(1), Object(map.a)(event => {
                    if (!event.status) throw new Error(event.error);
                })).toPromise();
            }
            get isEnabled() {
                return !!this.serviceWorker;
            }
        }
        class service_worker_SwPush {
            constructor(sw) {
                if (this.sw = sw, this.subscriptionChanges = new Subject.a, !sw.isEnabled) return this.messages = NEVER, 
                this.notificationClicks = NEVER, void (this.subscription = NEVER);
                this.messages = this.sw.eventsOfType("PUSH").pipe(Object(map.a)(message => message.data)), 
                this.notificationClicks = this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(Object(map.a)(message => message.data)), 
                this.pushManager = this.sw.registration.pipe(Object(map.a)(registration => registration.pushManager));
                const workerDrivenSubscriptions = this.pushManager.pipe(Object(switchMap.a)(pm => pm.getSubscription()));
                this.subscription = Object(merge.a)(workerDrivenSubscriptions, this.subscriptionChanges);
            }
            get isEnabled() {
                return this.sw.isEnabled;
            }
            requestSubscription(options) {
                if (!this.sw.isEnabled) return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
                const pushOptions = {
                    userVisibleOnly: !0
                };
                let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, "/").replace(/-/g, "+")), applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));
                for (let i = 0; i < key.length; i++) applicationServerKey[i] = key.charCodeAt(i);
                return pushOptions.applicationServerKey = applicationServerKey, this.pushManager.pipe(Object(switchMap.a)(pm => pm.subscribe(pushOptions)), Object(take.a)(1)).toPromise().then(sub => (this.subscriptionChanges.next(sub), 
                sub));
            }
            unsubscribe() {
                return this.sw.isEnabled ? this.subscription.pipe(Object(take.a)(1), Object(switchMap.a)(sub => {
                    if (null === sub) throw new Error("Not subscribed to push notifications.");
                    return sub.unsubscribe().then(success => {
                        if (!success) throw new Error("Unsubscribe failed!");
                        this.subscriptionChanges.next(null);
                    });
                })).toPromise() : Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
            }
            decodeBase64(input) {
                return atob(input);
            }
        }
        class service_worker_SwUpdate {
            constructor(sw) {
                if (this.sw = sw, !sw.isEnabled) return this.available = NEVER, void (this.activated = NEVER);
                this.available = this.sw.eventsOfType("UPDATE_AVAILABLE"), this.activated = this.sw.eventsOfType("UPDATE_ACTIVATED");
            }
            get isEnabled() {
                return this.sw.isEnabled;
            }
            checkForUpdate() {
                if (!this.sw.isEnabled) return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
                const statusNonce = this.sw.generateNonce();
                return this.sw.postMessageWithStatus("CHECK_FOR_UPDATES", {
                    statusNonce: statusNonce
                }, statusNonce);
            }
            activateUpdate() {
                if (!this.sw.isEnabled) return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
                const statusNonce = this.sw.generateNonce();
                return this.sw.postMessageWithStatus("ACTIVATE_UPDATE", {
                    statusNonce: statusNonce
                }, statusNonce);
            }
        }
        class SwRegistrationOptions {}
        const SCRIPT = new core.p("NGSW_REGISTER_SCRIPT");
        function ngswAppInitializer(injector, script, options, platformId) {
            return () => {
                if (!(Object(common.u)(platformId) && "serviceWorker" in navigator && !1 !== options.enabled)) return;
                let readyToRegister$;
                if (navigator.serviceWorker.addEventListener("controllerchange", () => {
                    null !== navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
                        action: "INITIALIZE"
                    });
                }), "function" == typeof options.registrationStrategy) readyToRegister$ = options.registrationStrategy(); else {
                    const [strategy, ...args] = (options.registrationStrategy || "registerWhenStable").split(":");
                    switch (strategy) {
                      case "registerImmediately":
                        readyToRegister$ = Object(of.a)(null);
                        break;

                      case "registerWithDelay":
                        readyToRegister$ = Object(of.a)(null).pipe(function(delay, scheduler = scheduler_async.a) {
                            var value;
                            const delayFor = (value = delay) instanceof Date && !isNaN(+value) ? +delay - scheduler.now() : Math.abs(delay);
                            return source => source.lift(new DelayOperator(delayFor, scheduler));
                        }(+args[0] || 0));
                        break;

                      case "registerWhenStable":
                        readyToRegister$ = injector.get(core.g).isStable.pipe(Object(filter.a)(stable => stable));
                        break;

                      default:
                        throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
                    }
                }
                readyToRegister$.pipe(Object(take.a)(1)).subscribe(() => navigator.serviceWorker.register(script, {
                    scope: options.scope
                }).catch(err => console.error("Service worker registration failed with:", err)));
            };
        }
        function ngswCommChannelFactory(opts, platformId) {
            return new service_worker_NgswCommChannel(Object(common.u)(platformId) && !1 !== opts.enabled ? navigator.serviceWorker : void 0);
        }
        class service_worker_ServiceWorkerModule {
            static register(script, opts = {}) {
                return {
                    ngModule: service_worker_ServiceWorkerModule,
                    providers: [ {
                        provide: SCRIPT,
                        useValue: script
                    }, {
                        provide: SwRegistrationOptions,
                        useValue: opts
                    }, {
                        provide: service_worker_NgswCommChannel,
                        useFactory: ngswCommChannelFactory,
                        deps: [ SwRegistrationOptions, core.A ]
                    }, {
                        provide: core.d,
                        useFactory: ngswAppInitializer,
                        deps: [ core.q, SCRIPT, SwRegistrationOptions, core.A ],
                        multi: !0
                    } ]
                };
            }
        }