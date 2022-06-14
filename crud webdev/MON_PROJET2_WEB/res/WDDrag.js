/*! 24.0.1.0 */
/*! VersionVI: 01F260056u   */
function WDDragBase(){}function WDDrag(n,t){if(arguments.length){WDDragBase.prototype.constructor.apply(this,[!0]);var i=this;this.m_fMouseDown=function(n){return i.bOnMouseDown(n||event)?i._bStopPropagation(n):!0};this.m_fMouseMove=function(n){return i.OnMouseMove(n||event),i._bStopPropagation(n)};this.m_fMouseUp=function(n){return i.bOnMouseUp(n||event)?i._bStopPropagation(n):!0};this.m_fStopPropagation=function(n){return i._bStopPropagation(n||event)};this.m_nDelaiAvantDeplacement=n;this.m_nDelaiEntreDeplacement=t;this.m_bPremierMouseMoveFiltre=!1;this.m_bHookPoses=!1}}function WDDnDNatif(n,t,i,r){if(arguments.length){WDDragBase.prototype.constructor.apply(this,[!0]);var u=this;0<n&&(this.m_nSource=n,this.m_fDragStart=function(n){u._OnDnDEvenement(n||event,u._OnDragStart)},this.m_fDragEnd=function(n){return u._OnDnDEvenement(n||event,u._OnDragEnd),u._bStopPropagation(n)});0<t&&(this.m_nCible=t,this.m_fDragEnter=function(n){return u._OnDnDEvenement(n||event,u._OnDragEnter),u._bStopPropagation(n)},this.m_fDragOver=function(n){return u._OnDnDEvenement(n||event,u._OnDragOver),u._bStopPropagation(n)},this.m_fDragExit=function(n){return u._OnDnDEvenement(n||event,u._OnDragExit),u._bStopPropagation(n)},this.m_fDrop=function(n){return u._OnDnDEvenement(n||event,u._OnDrop),u._bStopPropagation(n)});this.m_nOperationDefaut=r!==undefined?r:this.ms_nOperationCopie;this._vbEmuleIE9()&&(this.m_fSelectStart=function(n){return u.__SelectStartIE(n||event)});i&&(this._InitElement(i),2===t&&(this.m_oElement=i))}}WDDragBase.prototype._bStopPropagation=function(n){var t=this._vbStopPropagation();return clWDUtil.bStopPropagationCond(n,t,t)};WDDragBase.prototype._vbStopPropagation=clWDUtil.m_pfVide;WDDragBase.prototype._nGetPosXEvent=function(n){if(clWDUtil.bEventEstTouch(n)){switch(n.type){case"touchend":case"touchcancel":break;default:this.m_nLastPosX=n.touches.item(0).clientX}return this.m_nLastPosX}return n.clientX};WDDragBase.prototype._nGetPosYEvent=function(n){if(clWDUtil.bEventEstTouch(n)){switch(n.type){case"touchend":case"touchcancel":break;default:this.m_nLastPosY=n.touches.item(0).clientY}return this.m_nLastPosY}return n.clientY};WDDragBase.prototype._oGetOriginalTarget=function(n){return clWDUtil.bEventEstTouch(n)?document.elementFromPoint(this._nGetPosXEvent(n),this._nGetPosYEvent(n)):clWDUtil.oGetOriginalTarget(n)};WDDragBase.prototype.oGetOffsetElementAutre=function(n,t,i){return i?this.oGetOffsetElementAutreY(n,t):this.oGetOffsetElementAutreX(n,t)};WDDragBase.prototype.oGetOffsetElementAutreX=function(n,t){return clWDUtil.nGetBodyScrollLeft()+this._nGetPosXEvent(n)-t.getBoundingClientRect().left};WDDragBase.prototype.oGetOffsetElementAutreY=function(n,t){return clWDUtil.nGetBodyScrollTop()+this._nGetPosYEvent(n)-t.getBoundingClientRect().top};WDDragBase.prototype.oGetOffsetElement=function(n,t){return this.oGetOffsetElementAutre(n,this._oGetOriginalTarget(n),t)};WDDragBase.prototype.oGetOffsetElementSiAutre=function(n,t,i){return t?this.oGetOffsetElementAutre(n,t,i):bIE?i?n.offsetY:n.offsetX:this.oGetOffsetElement(n,i)};WDDrag.prototype=new WDDragBase;WDDrag.prototype.constructor=WDDrag;WDDrag.prototype.ms_eDragDrop=0;WDDrag.prototype.ms_eDragRedimDebut=1;WDDrag.prototype.ms_eDragRedimFin=2;WDDrag.prototype.ms_oCaptureAvecPassiveSans=bIE?!0:{capture:!0,passive:!1};WDDrag.prototype.ms_oCaptureSansPassiveSans=bIE?!1:{capture:!1,passive:!1};WDDrag.prototype.Libere=function(){delete this.m_fMouseDown;delete this.m_fMouseMove;delete this.m_fMouseUp;delete this.m_fStopPropagation};WDDrag.prototype.__AttacheDetacheMouseXxx=function(n,t,i,r,u){bTouch&&clWDUtil.AttacheDetacheEvent(n,t,u,i,this.ms_oCaptureAvecPassiveSans);bTouchMobile||clWDUtil.AttacheDetacheEvent(n,t,r,i,this.ms_oCaptureSansPassiveSans)};WDDrag.prototype._AttacheDetacheMouseDown=function(n,t,i){this.__AttacheDetacheMouseXxx(n,t,i,"mousedown","touchstart")};WDDrag.prototype.__AttacheDetacheMouseMoveUp=function(n){this.m_bHookPoses!==n&&(this.m_bHookPoses=n,this.__AttacheDetacheMouseXxx(n,document,this.m_fMouseMove,"mousemove","touchmove"),this.__AttacheDetacheMouseXxx(n,document,this.m_fMouseUp,"mouseup","touchend"),bFF&&clWDUtil.AttacheDetacheEvent(n,document,"dragstart",this.m_fStopPropagation,this.ms_oCaptureSansPassiveSans),bIE&&clWDUtil.AttacheDetacheEvent(n,document,"selectstart",this.m_fStopPropagation,this.ms_oCaptureSansPassiveSans),bTouch&&clWDUtil.AttacheDetacheEvent(n,document,"touchcancel",this.m_fMouseUp,this.ms_oCaptureAvecPassiveSans))};WDDrag.prototype.bEnDrag=function(){return undefined!==this.nGetPosX()};WDDrag.prototype.nGetPosX=function(){return this.m_nPosX};WDDrag.prototype.nGetPosY=function(){return this.m_nPosY};WDDrag.prototype.nGetOffsetPosX=function(n){var t=this._nGetPosXEvent(n)-this.nGetPosX();return clWDUtil.bRTL?-t:t};WDDrag.prototype.nGetOffsetPosY=function(n){return this._nGetPosYEvent(n)-this.nGetPosY()};WDDrag.prototype.bOnMouseDown=function(n){return clWDUtil.bValideBouton(n)?this._vbOnMouseDown.apply(this,arguments)?(document.body.unselectable="on",document.body.style.webkitUserSelect="none",document.body.style.MozUserSelect="none",document.body.style.userSelect="none",!clWDUtil.bEventEstTouch(n)):!1:!1};WDDrag.prototype._vbOnMouseDown=function(n){return this.m_nPosX=this._nGetPosXEvent(n),this.m_nPosY=this._nGetPosYEvent(n),this.__AttacheDetacheMouseMoveUp(!0),this.m_nDateMouseDown=(new Date).getTime(),!0};WDDrag.prototype.OnMouseMove=function(n){if(!clWDUtil.bValideBouton(n)){this._vbFiltrePremierMouseMove()&&!this.m_bPremierMouseMoveFiltre?this.m_bPremierMouseMoveFiltre=!0:this.bOnMouseUp(n);return}this.m_bPremierMouseMoveFiltre=!1;var t=(new Date).getTime();if(this.m_nDelaiAvantDeplacement>0&&this.m_nDateMouseDown){if(t-this.m_nDateMouseDown<this.m_nDelaiAvantDeplacement)return;delete this.m_nDateMouseDown}if(this.m_nDelaiEntreDeplacement>0){if(this.m_nDateMouseMove&&t-this.m_nDateMouseMove<this.m_nDelaiEntreDeplacement)return;this.m_nDateMouseMove=t}this._vOnMouseMove.apply(this,arguments)};WDDrag.prototype._vbFiltrePremierMouseMove=clWDUtil.m_pfVideFalse;WDDrag.prototype._vOnMouseMove=clWDUtil.m_pfVide;WDDrag.prototype.bOnMouseUp=function(n){var t=!clWDUtil.bEventEstTouch(n)||0!==this.nGetOffsetPosX(n)||0!==this.nGetOffsetPosY(n);return this._vOnMouseUp.apply(this,arguments),document.body.unselectable="off",document.body.style.userSelect="text",document.body.style.MozUserSelect="text",document.body.style.webkitUserSelect="text",t};WDDrag.prototype._vOnMouseUp=function(){this.__AttacheDetacheMouseMoveUp(!1);this.m_nDateMouseMove!==undefined&&delete this.m_nDateMouseMove;this.m_nDateMouseDown!==undefined&&delete this.m_nDateMouseDown;delete this.m_nPosY;delete this.m_nPosX};WDDnDNatif.prototype=new WDDragBase;WDDnDNatif.prototype.constructor=WDDnDNatif;WDDnDNatif.prototype.ms_nOperationDejaFait=-1;WDDnDNatif.prototype.ms_nOperationSans=0;WDDnDNatif.prototype.ms_nOperationCopie=1;WDDnDNatif.prototype.ms_nOperationDeplacement=2;WDDnDNatif.prototype.ms_nOperationLien=4;WDDnDNatif.prototype.ms_tabEffectAllowed=["none","copy","move","copyMove","link","copyLink","linkMove","all"];WDDnDNatif.prototype.ms_tabDropEffect=["none","copy","move","copy","link","copy","Move","copy"];WDDnDNatif.prototype.ms_nDnDDebutGlisser=5;WDDnDNatif.prototype.ms_nDnDEntreeChamp=2;WDDnDNatif.prototype.ms_nDnDFinGlisser=6;WDDnDNatif.prototype.ms_nDnDLacher=4;WDDnDNatif.prototype.ms_nDnDSortieChamp=3;WDDnDNatif.prototype.ms_nDnDSurvol=1;WDDnDNatif.prototype.ms_tabTypes=["text/plain","text/uri-list"];WDDnDNatif.prototype.__SelectStartIE=function(n){for(var t=n.srcElement,i=document.body;t&&t!==i;){if(t.dragDrop&&(t.hasAttribute&&t.hasAttribute("draggable")||t.draggable))return t.dragDrop(),this._bStopPropagation(n);t=t.parentNode}};WDDnDNatif.prototype._InitElement=function(n){if(0<this.m_nSource){switch(clWDUtil.sGetTagName(n)){case"input":break;case"select":this._InitElementTab(n.getElementsByTagName("option"));break;default:n.setAttribute("draggable","true",0)}clWDUtil.AttacheDetacheEvent(!0,n,"dragstart",this.m_fDragStart);clWDUtil.AttacheDetacheEvent(!0,n,"dragend",this.m_fDragEnd)}0<this.m_nCible&&(clWDUtil.AttacheDetacheEvent(!0,n,"dragenter",this.m_fDragEnter),clWDUtil.AttacheDetacheEvent(!0,n,"dragover",this.m_fDragOver),clWDUtil.AttacheDetacheEvent(!0,n,"dragleave",this.m_fDragExit),clWDUtil.AttacheDetacheEvent(!0,n,"drop",this.m_fDrop));this.m_fSelectStart&&clWDUtil.AttacheDetacheEvent(!0,document,"selectstart",this.m_fSelectStart)};WDDnDNatif.prototype._InitElementTab=function(n){for(var i=n.length,t=0;t<i;t++)this._InitElement(n[t])};WDDnDNatif.prototype._LibereElement=function(n){if(this.m_fSelectStart&&clWDUtil.AttacheDetacheEvent(!1,document,"selectstart",this.m_fSelectStart),0<this.m_nCible&&(clWDUtil.AttacheDetacheEvent(!1,n,"drop",this.m_fDrop),clWDUtil.AttacheDetacheEvent(!1,n,"dragleave",this.m_fDragExit),clWDUtil.AttacheDetacheEvent(!1,n,"dragover",this.m_fDragOver),clWDUtil.AttacheDetacheEvent(!1,n,"dragenter",this.m_fDragEnter)),0<this.m_nSource){clWDUtil.AttacheDetacheEvent(!1,n,"dragend",this.m_fDragEnd);clWDUtil.AttacheDetacheEvent(!1,n,"dragstart",this.m_fDragStart);switch(clWDUtil.sGetTagName(n)){case"input":break;case"select":this._LibereElementTab(n.getElementsByTagName("option"));break;default:n.removeAttribute("draggable",0)}}};WDDnDNatif.prototype._LibereElementTab=function(n){for(var i=n.length,t=0;t<i;t++)this._LibereElement(n[t])};WDDnDNatif.prototype._OnDnDEvenement=function(n,t){try{this.m_oEvent=n;this._vSetDnDActif();t.apply(this,[])}finally{this._vClearDnDActif();this.m_oEvent=null;delete this.m_oEvent}};WDDnDNatif.prototype._oGetEvent=function(){return this.m_oEvent};WDDnDNatif.prototype._oGetEventData=function(){return this.m_oEvent.dataTransfer};WDDnDNatif.prototype._bVerifieEventDataType=function(n){var i=this._oGetEventData(),r=i.types,t;return r?clWDUtil.bDansTableau(r,n):bIE?(t=i.getData(n),t&&0<t.length):void 0};WDDnDNatif.prototype._oGetEventDataSelonType=function(n){return this._bVerifieEventDataType(n)?this._oGetEventData().getData(n):""};WDDnDNatif.prototype._SetEventDataSelonType=function(n,t){this._oGetEventData().setData(n,t)};WDDnDNatif.prototype._sDataTypeAvecCorrectionNombre=function(n){return n===1?this.ms_tabTypes[0]:n};bIEAvec11?(WDDnDNatif.prototype.ms_tabTypesIE=["Text","URL"],WDDnDNatif.prototype._sDataTypeAvecCorrection=function(n){n=this._sDataTypeAvecCorrectionNombre(n);var t=clWDUtil.nDansTableau(this.ms_tabTypes,n);return clWDUtil.nElementInconnu!==t?this.ms_tabTypesIE[t]:n}):WDDnDNatif.prototype._sDataTypeAvecCorrection=WDDnDNatif.prototype._sDataTypeAvecCorrectionNombre;WDDnDNatif.prototype._bVerifieEventDataTypeAvecCorrection=function(n){return this._bVerifieEventDataType(this._sDataTypeAvecCorrection(n))};WDDnDNatif.prototype._oGetEventDataSelonTypeAvecCorrection=function(n){return this._oGetEventDataSelonType(this._sDataTypeAvecCorrection(n))};WDDnDNatif.prototype._SetEventDataSelonTypeAvecCorrection=function(n,t){this._SetEventDataSelonType(this._sDataTypeAvecCorrection(n),t)};WDDnDNatif.prototype._vSetDnDActif=clWDUtil.m_pfVide;WDDnDNatif.prototype._vClearDnDActif=clWDUtil.m_pfVide;WDDnDNatif.prototype._OnDrag=function(){this._oGetEventData().effectAllowed="all"};WDDnDNatif.prototype._OnDragStart=function(){WDDnDNatif.prototype.ms_oDnDSource=this;this._OnDrag();this._vSetDonneesDnD()};WDDnDNatif.prototype._OnDragEnd=function(){try{this._vOnDragEnd()}finally{this.ms_oDnDSource===this&&(WDDnDNatif.prototype.ms_oDnDSource=null,delete WDDnDNatif.prototype.ms_oDnDSource)}};WDDnDNatif.prototype._OnDragEnter=function(){this._OnDragSurvol(this.ms_nDnDEntreeChamp)};WDDnDNatif.prototype._OnDragOver=function(){this._OnDragSurvol(this.ms_nDnDSurvol)};WDDnDNatif.prototype._OnDragSurvol=function(n){WDDnDNatif.prototype.ms_oDnDCible=this;var t=this._vnGetOperationSurDrop(n);if(t!==this.ms_nOperationSans){if(t=this._vnOnDragSurvol(n,t),t!==this.ms_nOperationDejaFait){try{this._oGetEventData().effectAllowed=this.ms_tabEffectAllowed[t]}catch(i){}t!==this.ms_nOperationSans&&(!bIEQuirks9Max||this._vbEmuleIE9())&&(this._oGetEventData().dropEffect=this.ms_tabDropEffect[t])}}else{try{this._oGetEventData().dropEffect=this.ms_tabDropEffect[t]}catch(i){}try{this._oGetEventData().effectAllowed=this.ms_tabEffectAllowed[t]}catch(i){}}};WDDnDNatif.prototype._OnDragExit=function(){try{this._vnGetOperationSurDrop(this.ms_nDnDSortieChamp)!==this.ms_nOperationSans&&this._vOnDragExit()}finally{WDDnDNatif.prototype.ms_oDnDCible===this&&(WDDnDNatif.prototype.ms_oDnDCible=null,delete WDDnDNatif.prototype.ms_oDnDCible)}};WDDnDNatif.prototype._OnDrop=function(){try{this._vnGetOperationSurDrop(this.ms_nDnDLacher)!==this.ms_nOperationSans&&this._vOnDrop()}finally{this.ms_oDnDCible===this&&(WDDnDNatif.prototype.ms_oDnDCible=null,delete WDDnDNatif.prototype.ms_oDnDCible)}};WDDnDNatif.prototype._vSetDonneesDnD=clWDUtil.m_pfVide;WDDnDNatif.prototype._vOnDragEnd=clWDUtil.m_pfVide;WDDnDNatif.prototype._vnGetOperationSurDrop=function(){return this.m_nOperationDefaut};WDDnDNatif.prototype._vnOnDragSurvol=function(n,t){return t};WDDnDNatif.prototype._vOnDragExit=clWDUtil.m_pfVide;WDDnDNatif.prototype._vOnDrop=clWDUtil.m_pfVide;WDDnDNatif.prototype._vbEmuleIE9=function(){return!1};var WDDnDNatifChamp=function(){"use strict";function n(n,t,i,r,u,f){arguments.length&&(WDDnDNatif.prototype.constructor.apply(this,[t,i,r]),this.m_sAliasChamp=n,this.m_tabFonctionsGet=u,this.m_tabFonctionsSet=f,this.m_tabDnDEvenement=[])}n.prototype=new WDDnDNatif;n.prototype.constructor=n;var r=0,i=1,u=2,e=3,o={none:r,copy:i,move:u,copyMove:i,link:r,copyLink:i,linkMove:u,all:i},f=[],t=null;return n.prototype.s_DeclareChamp=function(t,i,r,u,e,o,s){(0<r||0<u)&&(f[t]=new n(t,r,u,e,o,s))},n.prototype.pfGetDnDProgramme=function(n){var t=n<this.ms_nDnDDebutGlisser?this.m_nCible:this.m_nSource;return 2===t?this.m_tabDnDEvenement[n]:null},n.prototype.__oGetVariable=function(n){var t=this._oGetEvent();switch(n){case 0:return o[this._oGetEventData().effectAllowed];case 1:return this.__sGetAliasChamp(this.ms_oDnDCible);case 2:return this.__sGetAliasChamp(this.ms_oDnDSource);case 3:return t.ctrlKey;case 4:return this.ms_oDnDSource?document.forms[0].name:"";case 5:return this.oGetOffsetElementSiAutre(t,this.ms_oDnDCible.m_oElement,!1);case 6:return this.oGetOffsetElementSiAutre(t,this.ms_oDnDCible.m_oElement,!0)}},n.prototype.__SetEffectDepuisActionWL=function(n,t){var f;switch(n){default:case r:f=this.ms_nOperationSans;break;case i:f=this.ms_nOperationCopie;break;case u:f=this.ms_nOperationDeplacement;break;case e:f=this.m_nOperationDefaut}t?bIEQuirks9Max||(this._oGetEventData().dropEffect=this.ms_tabDropEffect[f]):this._oGetEventData().effectAllowed=this.ms_tabEffectAllowed[f]},n.prototype.__sGetAliasChamp=function(n){return n?n.m_sAliasChamp:""},n.prototype._vSetDnDActif=function(){t=this},n.prototype._vClearDnDActif=function(){t=null},n.prototype._vSetDonneesDnD=function(){var t;if(WDDnDNatif.prototype._vSetDonneesDnD.apply(this,arguments),t=this.pfGetDnDProgramme(this.ms_nDnDDebutGlisser),t)t();else{for(var i=this.m_tabFonctionsGet,u=i.length,r=!1,n=0;n<u;n++)i[n]&&(this._SetEventDataSelonTypeAvecCorrection(this.ms_tabTypes[n],i[n]()),r=!0);!1===r&&this._SetEventDataSelonTypeAvecCorrection(this.ms_tabTypes[0],this.m_sAliasChamp)}},n.prototype._vOnDragEnd=function(){var i,t,n,r;if(WDDnDNatif.prototype._vOnDragEnd.apply(this,arguments),i=this.pfGetDnDProgramme(this.ms_nDnDFinGlisser),i)i();else if(this._oGetEventData().dropEffect===this.ms_tabEffectAllowed[this.ms_nOperationDeplacement]&&!clWDUtil.bBaliseEstTag(this._oGetOriginalTarget(this._oGetEvent()),"option"))for(t=this.m_tabFonctionsSet,r=t.length,n=0;n<r;n++)t[n]&&t[n]("")},n.prototype._vnGetOperationSurDrop=function(n){var u=this.pfGetDnDProgramme(n),i,t,r;if(u)return this.ms_nOperationCopie+this.ms_nOperationDeplacement+this.ms_nOperationLien;for(i=this.m_tabFonctionsSet,r=i.length,t=0;t<r;t++)if(i[t]&&this._bVerifieEventDataTypeAvecCorrection(this.ms_tabTypes[t]))return WDDnDNatif.prototype._vnGetOperationSurDrop.apply(this,arguments);return this.ms_nOperationSans},n.prototype._vnOnDragSurvol=function(n){var t=this.pfGetDnDProgramme(n);return t?(t(),this.ms_nOperationDejaFait):WDDnDNatif.prototype._vnOnDragSurvol.apply(this,arguments)},n.prototype._vOnDragExit=function(){var n=this.pfGetDnDProgramme(this.ms_nDnDSortieChamp);n&&n();WDDnDNatif.prototype._vOnDragExit.apply(this,arguments)},n.prototype._vOnDrop=function(){var i,t,n,u,r;if(WDDnDNatif.prototype._vOnDrop.apply(this,arguments),i=this.pfGetDnDProgramme(this.ms_nDnDLacher),i)i();else for(t=this.m_tabFonctionsSet,u=t.length,n=0;n<u;n++)t[n]&&(r=this._oGetEventDataSelonTypeAvecCorrection(this.ms_tabTypes[n]),0<r.length&&t[n](r))},n.prototype.s_DnDEvenement=function(n,t,i){f[t].m_tabDnDEvenement[i]=n},n.prototype.s_DnDAccepte=function(i){t.__SetEffectDepuisActionWL(i,!1);n.prototype.s_DnDCurseur(i)},n.prototype.s_DnDCurseur=function(n){t.__SetEffectDepuisActionWL(n,!0)},n.prototype.s_DnDDonne=function(n,i){t._SetEventDataSelonTypeAvecCorrection(n,i)},n.prototype.s_DnDDonneeDisponible=function(n){return t._bVerifieEventDataTypeAvecCorrection(n)},n.prototype.s_DnDRecupere=function(n){return t._oGetEventDataSelonTypeAvecCorrection(n)},n.prototype.s_oGetVariable=function(n){return t.__oGetVariable(n)},n}(),WDDragTouch=function(){"use strict";function n(n,t){arguments.length&&(WDDrag.prototype.constructor.apply(this,[0,100]),this.m_pfCallback=n,this.m_oCible=t,this._AttacheDetacheMouseDown(!0,t,this.m_fMouseDown))}return n.prototype=new WDDrag,n.prototype.constructor=n,n.prototype.Detache=function(){this._AttacheDetacheMouseDown(!1,oCible,this.m_fMouseDown)},n.prototype._vbOnMouseDown=function(){return WDDrag.prototype._vbOnMouseDown.apply(this,arguments)},n.prototype._vOnMouseMove=function(n){WDDrag.prototype._vOnMouseMove.apply(this,arguments);this.m_pfCallback(-this.nGetOffsetPosX(n),-this.nGetOffsetPosY(n),n);this.m_nPosX=this._nGetPosXEvent(n);this.m_nPosY=this._nGetPosYEvent(n)},n}(),WDDragDnDNatifEmule=function(){"use strict";function n(i){if(arguments.length){WDDrag.prototype.constructor.apply(this,[0,100]);t.push(this);this.m_oDnDNatif=i;var r=this;this.m_pfInitElement=i._InitElement;i._InitElement=function(){n.prototype._InitElement.apply(r,arguments)};this.m_pfLibereElement=i._LibereElement;i._LibereElement=function(){n.prototype._LibereElement.apply(r,arguments)};this.m_tabCibles=[];this.m_tabDragOver=[];this.m_oFantome=null;this.m_tabData=[]}}n.prototype=new WDDrag;n.prototype.constructor=n;var t=[];n.prototype._InitElement=function(n){0<this.m_oDnDNatif.m_nSource&&this._AttacheDetacheMouseDown(!0,n,this.m_fMouseDown);0<this.m_oDnDNatif.m_nCible&&this.m_tabCibles.push(n);this.m_pfInitElement.apply(this.m_oDnDNatif,arguments)};n.prototype._LibereElement=function(n){if(0<this.m_oDnDNatif.m_nSource&&this._AttacheDetacheMouseDown(!1,n,this.m_fMouseDown),0<this.m_oDnDNatif.m_nCible){var t=clWDUtil.nDansTableau(this.m_tabCibles,n,!0);clWDUtil.nElementInconnu!==t&&this.m_tabCibles.splice(t,1)}this.m_pfLibereElement.apply(this.m_oDnDNatif,arguments)};n.prototype._vbOnMouseDown=function(n){var t;if(!WDDrag.prototype._vbOnMouseDown.apply(this,arguments))return!1;var i=this._nGetPosXEvent(n),r=this._nGetPosYEvent(n),u=this.__oConstruitEvent(n,i,r);this.m_oDnDNatif.m_fDragStart(u);t=document.createElement("div");t.style.position="absolute";t.style.width="50px";t.style.height="50px";t.style.opacity="0.5";t.style.backgroundColor="#808080";t.style.left=clWDUtil.GetDimensionPxPourStyle(i+10);t.style.top=clWDUtil.GetDimensionPxPourStyle(r+10);this.m_oFantome=document.body.appendChild(t)};n.prototype._vOnMouseMove=function(n){WDDrag.prototype._vOnMouseMove.apply(this,arguments);var r=this._nGetPosXEvent(n),u=this._nGetPosYEvent(n),i=this.__oConstruitEvent(n,r,u);clWDUtil.bForEach(t,function(t){var f=t.__tabGetDragOver(n,i,r,u);return clWDUtil.bForEach(f,function(n){return clWDUtil.nElementInconnu===clWDUtil.nDansTableau(t.m_tabDragOver,n,!0)&&t.m_oDnDNatif.m_fDragEnter(i),!0}),clWDUtil.bForEach(f,function(){return t.m_oDnDNatif.m_fDragOver(i),!0}),clWDUtil.bForEach(t.m_tabDragOver,function(n){return clWDUtil.nElementInconnu===clWDUtil.nDansTableau(f,n,!0)&&t.m_oDnDNatif.m_fDragExit(i),!0}),t.m_tabDragOver=f,!0});this.m_oFantome&&(this.m_oFantome.style.left=clWDUtil.GetDimensionPxPourStyle(r+10),this.m_oFantome.style.top=clWDUtil.GetDimensionPxPourStyle(u+10))};n.prototype._vOnMouseUp=function(n){var r=this._nGetPosXEvent(n),u=this._nGetPosYEvent(n),i=this.__oConstruitEvent(n,r,u);clWDUtil.bForEach(t,function(n){return clWDUtil.bForEach(n.m_tabDragOver,function(){return n.m_oDnDNatif.m_fDrop(i),!0}),n.m_tabDragOver=[],!0});this.m_oDnDNatif.m_fDragEnd(i);this.m_oFantome&&(this.m_oFantome.parentNode.removeChild(this.m_oFantome),this.m_oFantome=null);this.m_tabData=[];WDDrag.prototype._vOnMouseUp.apply(this,arguments)};n.prototype.__oConstruitEvent=function(n,t,i){var u=this,r=clWDUtil.oCloneObjet(n);return r.target=r.explicitOriginalTarget=r.currentTarget=r.srcElement=document.elementFromPoint(t,i),r.dataTransfer={types:this.m_oDnDNatif.ms_tabTypes,getData:function(n){return u.m_tabData[n]},setData:function(n,t){u.m_tabData[n]=t},effectAllowed:"all",dropEffect:"copy"},r};n.prototype.__tabGetDragOver=function(n,t){var i=[];return clWDUtil.bForEach(this.m_tabCibles,function(n){return clWDUtil.bEstFils(t.target,n)&&i.push(n),!0}),i}}()