        const _c11 = [ 1, "mat-card" ], _c12 = [ "*", [ [ "mat-card-footer" ] ] ], _c13 = [ "*", "mat-card-footer" ];
        let card_MatCard = (() => {
            class MatCard {
                constructor(_animationMode) {
                    this._animationMode = _animationMode;
                }
            }
            return MatCard.ɵfac = function(t) {
                return new (t || MatCard)(core.Pb(animations.a, 8));
            }, MatCard.ɵcmp = core.Jb({
                type: MatCard,
                selectors: [ [ "mat-card" ] ],
                hostBindings: function(rf, ctx, elIndex) {
                    1 & rf && (core.Bb(1), core.Ub(_c11)), 2 & rf && core.Fb("_mat-animation-noopable", "NoopAnimations" === ctx._animationMode);
                },
                exportAs: [ "matCard" ],
                ngContentSelectors: _c13,
                decls: 2,
                vars: 0,
                template: function(rf, ctx) {
                    1 & rf && (core.kc(_c12), core.jc(0), core.jc(1, 1));
                },
                styles: [ ".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media(-ms-high-contrast: active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}/*# sourceMappingURL=card.css.map */\n" ],
                encapsulation: 2,
                changeDetection: 0
            }), MatCard;
        })(), card_MatCardModule = (() => {
            class MatCardModule {}
            return MatCardModule.ɵmod = core.Nb({
                type: MatCardModule
            }), MatCardModule.ɵinj = core.Mb({
                factory: function(t) {
                    return new (t || MatCardModule);
                },
                imports: [ [ fesm2015_core.b ], fesm2015_core.b ]
            }), MatCardModule;
        })();