(()=>{"use strict";class e{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>=e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<=e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}function n(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class i extends class{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new i),this.instance}addProject(e,t,n){const i=new s(Math.random().toString(),e,t,n,r.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const l=i.getInstance();class o extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.peopleInputElement=this.element.querySelector("#people"),this.configure()}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,n=this.descriptionInputElement.value,r=this.peopleInputElement.value,s={value:n,required:!0,minLength:5},i={value:+r,required:!0,min:1,max:5};return t({value:e,required:!0})&&t(s)&&t(i)?[e,n,+r]:void alert("Invalid input, please try again!")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.peopleInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;l.addProject(e,n,r),this.clearInputs()}}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],o.prototype,"submitHandler",null);class a extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get persons(){return 1===this.project.people?"1 person":`${this.project.people} persons`}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("DragEnd")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.persons+" assigned",this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([n],a.prototype,"dragStartHandler",null);var c=function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};class d extends e{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");l.moveProject(t,"active"===this.type?r.Active:r.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),this.element.addEventListener("drop",this.dropHandler),l.addListener((e=>{const t=e.filter((e=>"active"===this.type?e.status===r.Active:e.status===r.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent=this.type.toUpperCase()+" PROJECTS"}renderProjects(){document.getElementById(`${this.type}-projects-list`).innerHTML="";for(const e of this.assignedProjects)new a(this.element.querySelector("ul").id,e)}}c([n],d.prototype,"dragOverHandler",null),c([n],d.prototype,"dropHandler",null),c([n],d.prototype,"dragLeaveHandler",null),new o,new d("active"),new d("finished")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFFUyxNQUFlQSxFQUtwQkMsWUFDRUMsRUFDQUMsRUFDQUMsRUFDQUMsR0FFQUMsS0FBS0MsZ0JBQWtCQyxTQUFTQyxlQUM5QlAsR0FFRkksS0FBS0ksWUFBY0YsU0FBU0MsZUFBZU4sR0FFM0MsTUFBTVEsRUFBZUgsU0FBU0ksV0FDNUJOLEtBQUtDLGdCQUFnQk0sU0FDckIsR0FFRlAsS0FBS1EsUUFBVUgsRUFBYUksa0JBQ3hCVixJQUNGQyxLQUFLUSxRQUFRRSxHQUFLWCxHQUdwQkMsS0FBS1csT0FBT2IsR0FHTmEsT0FBT0MsR0FDYlosS0FBS0ksWUFBWVMsc0JBQ2ZELEVBQW9CLGFBQWUsWUFDbkNaLEtBQUtRLFVDdEJKLFNBQVNNLEVBQVNDLEdBQ3ZCLElBQUlDLEdBQVUsRUErQmQsT0E5QklELEVBQWlCRSxXQUNuQkQsRUFDRUEsR0FBK0QsSUFBcERELEVBQWlCRyxNQUFNQyxXQUFXQyxPQUFPQyxRQUd4QixNQUE5Qk4sRUFBaUJPLFdBQ2lCLGlCQUEzQlAsRUFBaUJHLFFBRXhCRixFQUNFQSxHQUFXRCxFQUFpQkcsTUFBTUcsUUFBVU4sRUFBaUJPLFdBR2pDLE1BQTlCUCxFQUFpQlEsV0FDaUIsaUJBQTNCUixFQUFpQkcsUUFFeEJGLEVBQ0VBLEdBQVdELEVBQWlCRyxNQUFNRyxRQUFVTixFQUFpQlEsV0FHdkMsTUFBeEJSLEVBQWlCUyxLQUNpQixpQkFBM0JULEVBQWlCRyxRQUV4QkYsRUFBVUEsR0FBV0QsRUFBaUJHLE9BQVNILEVBQWlCUyxLQUd4QyxNQUF4QlQsRUFBaUJVLEtBQ2lCLGlCQUEzQlYsRUFBaUJHLFFBRXhCRixFQUFVQSxHQUFXRCxFQUFpQkcsT0FBU0gsRUFBaUJVLEtBRTNEVCxFQ3pDRixTQUFTVSxFQUFTQyxFQUFRQyxFQUFZQyxHQUM1QyxNQUFNQyxFQUFpQkQsRUFBV1gsTUFRbEMsTUFQMEMsQ0FDeENhLGNBQWMsRUFDZEMsTUFFRSxPQURnQkYsRUFBZUcsS0FBS2pDLFFDTnpDLElBQVlrQyxHQUFaLFNBQVlBLEdBQ1YsdUJBQ0EsMkJBRkYsQ0FBWUEsSUFBQUEsRUFBYSxLQUtsQixNQUFNQyxFQUNYeEMsWUFDU2UsRUFDQTBCLEVBQ0FDLEVBQ0FDLEVBQ0FDLEdBSkEsS0FBQTdCLEdBQUFBLEVBQ0EsS0FBQTBCLE1BQUFBLEVBQ0EsS0FBQUMsWUFBQUEsRUFDQSxLQUFBQyxPQUFBQSxFQUNBLEtBQUFDLE9BQUFBLEdDRUosTUFBTUMsVUFSYixvQkFDWSxLQUFBQyxVQUEyQixHQUVyQ0MsWUFBWUMsR0FDVjNDLEtBQUt5QyxVQUFVRyxLQUFLRCxLQVF0QixjQUNFRSxRQUpNLEtBQUFDLFNBQXNCLEdBTzlCQyxxQkFDRSxPQUFJL0MsS0FBS2dELFdBR1RoRCxLQUFLZ0QsU0FBVyxJQUFJUixHQUZYeEMsS0FBS2dELFNBTWhCQyxXQUFXYixFQUFlQyxFQUFxQmEsR0FDN0MsTUFBTUMsRUFBYSxJQUFJaEIsRUFDckJpQixLQUFLQyxTQUFTbEMsV0FDZGlCLEVBQ0FDLEVBQ0FhLEVBQ0FoQixFQUFjb0IsUUFFaEJ0RCxLQUFLOEMsU0FBU0YsS0FBS08sR0FDbkJuRCxLQUFLdUQsa0JBR1BDLFlBQVlDLEVBQW1CQyxHQUM3QixNQUFNQyxFQUFVM0QsS0FBSzhDLFNBQVNjLE1BQUtDLEdBQU9BLEVBQUluRCxLQUFPK0MsSUFDakRFLEdBQVdBLEVBQVFwQixTQUFXbUIsSUFDaENDLEVBQVFwQixPQUFTbUIsRUFDakIxRCxLQUFLdUQsbUJBSURBLGtCQUNOLElBQUssTUFBTVosS0FBYzNDLEtBQUt5QyxVQUM1QkUsRUFBVzNDLEtBQUs4QyxTQUFTZ0IsVUFLeEIsTUFBTUMsRUFBZXZCLEVBQWF3QixjQ25EbEMsTUFBTUMsVUFBcUJ2RSxFQUtoQ0MsY0FDRWtELE1BQU0sZ0JBQWlCLE9BQU8sRUFBTSxjQUNwQzdDLEtBQUtrRSxrQkFBb0JsRSxLQUFLUSxRQUFRMkQsY0FDcEMsVUFFRm5FLEtBQUtvRSx3QkFBMEJwRSxLQUFLUSxRQUFRMkQsY0FDMUMsZ0JBRUZuRSxLQUFLcUUsbUJBQXFCckUsS0FBS1EsUUFBUTJELGNBQ3JDLFdBRUZuRSxLQUFLc0UsWUFHUEEsWUFDRXRFLEtBQUtRLFFBQVErRCxpQkFBaUIsU0FBVXZFLEtBQUt3RSxlQUcvQ0MsaUJBRVFDLGtCQUNOLE1BQU1DLEVBQWUzRSxLQUFLa0Usa0JBQWtCaEQsTUFDdEMwRCxFQUFxQjVFLEtBQUtvRSx3QkFBd0JsRCxNQUNsRDJELEVBQWdCN0UsS0FBS3FFLG1CQUFtQm5ELE1BTXhDNEQsRUFBc0MsQ0FDMUM1RCxNQUFPMEQsRUFDUDNELFVBQVUsRUFDVkssVUFBVyxHQUVQeUQsRUFBaUMsQ0FDckM3RCxPQUFRMkQsRUFDUjVELFVBQVUsRUFDVk8sSUFBSyxFQUNMQyxJQUFLLEdBR1AsT0FDR1gsRUFqQm1DLENBQ3BDSSxNQUFPeUQsRUFDUDFELFVBQVUsS0FnQlRILEVBQVNnRSxJQUNUaEUsRUFBU2lFLEdBS0gsQ0FBQ0osRUFBY0MsR0FBcUJDLFFBSDNDRyxNQUFNLG9DQU9GQyxjQUNOakYsS0FBS2tFLGtCQUFrQmhELE1BQVEsR0FDL0JsQixLQUFLb0Usd0JBQXdCbEQsTUFBUSxHQUNyQ2xCLEtBQUtxRSxtQkFBbUJuRCxNQUFRLEdBSTFCc0QsY0FBY1UsR0FDcEJBLEVBQU1DLGlCQUNOLE1BQU1DLEVBQVlwRixLQUFLMEUsa0JBQ3ZCLEdBQUlXLE1BQU1DLFFBQVFGLEdBQVksQ0FDNUIsTUFBT2hELEVBQU9tRCxFQUFNakQsR0FBVThDLEVBQzlCckIsRUFBYWQsV0FBV2IsRUFBT21ELEVBQU1qRCxHQUNyQ3RDLEtBQUtpRixpQiwwVEFOVCxFQURDdkQsRyxrQ0MvREksTUFBTThELFVBQW9COUYsRUFZL0JDLFlBQVk4RixFQUFnQjlCLEdBQzFCZCxNQUFNLGlCQUFrQjRDLEdBQVEsRUFBTzlCLEVBQVFqRCxJQUMvQ1YsS0FBSzJELFFBQVVBLEVBRWYzRCxLQUFLc0UsWUFDTHRFLEtBQUt5RSxnQkFiSGlCLGNBQ0YsT0FBNEIsSUFBeEIxRixLQUFLMkQsUUFBUXJCLE9BQ1IsV0FFQSxHQUFHdEMsS0FBSzJELFFBQVFyQixpQkFhM0JxRCxpQkFBaUJULEdBQ2ZBLEVBQU1VLGFBQWNDLFFBQVEsYUFBYzdGLEtBQUsyRCxRQUFRakQsSUFDdkR3RSxFQUFNVSxhQUFjRSxjQUFnQixPQUd0Q0MsZUFBZXBFLEdBQ2JxRSxRQUFRQyxJQUFJLFdBR2QzQixZQUNFdEUsS0FBS1EsUUFBUStELGlCQUFpQixZQUFhdkUsS0FBSzJGLGtCQUNoRDNGLEtBQUtRLFFBQVErRCxpQkFBaUIsVUFBV3ZFLEtBQUsrRixnQkFHaER0QixnQkFDRXpFLEtBQUtRLFFBQVEyRCxjQUFjLE1BQU8rQixZQUFjbEcsS0FBSzJELFFBQVF2QixNQUM3RHBDLEtBQUtRLFFBQVEyRCxjQUFjLE1BQU8rQixZQUNoQ2xHLEtBQUswRixRQUFVLFlBQ2pCMUYsS0FBS1EsUUFBUTJELGNBQWMsS0FBTStCLFlBQWNsRyxLQUFLMkQsUUFBUXRCLGMsMFRBbEI5RCxFQURDWCxHLCtXQ25CSSxNQUFNeUUsVUFBb0J6RyxFQUkvQkMsWUFBb0J5RyxHQUNsQnZELE1BQU0sZUFBZ0IsT0FBTyxFQUFPLEdBQUd1RCxjQURyQixLQUFBQSxLQUFBQSxFQUVsQnBHLEtBQUtxRyxpQkFBbUIsR0FFeEJyRyxLQUFLc0UsWUFDTHRFLEtBQUt5RSxnQkFJUDZCLGdCQUFnQnBCLEdBQ1ZBLEVBQU1VLGNBQWdELGVBQWhDVixFQUFNVSxhQUFhVyxNQUFNLEtBQ2pEckIsRUFBTUMsaUJBQ1NuRixLQUFLUSxRQUFRMkQsY0FBYyxNQUNuQ3FDLFVBQVVDLElBQUksY0FLekJDLFlBQVl4QixHQUNWLE1BQU15QixFQUFRekIsRUFBTVUsYUFBY2dCLFFBQVEsY0FDMUM3QyxFQUFhUCxZQUNYbUQsRUFDYyxXQUFkM0csS0FBS29HLEtBQW9CbEUsRUFBY29CLE9BQVNwQixFQUFjMkUsVUFLbEVDLGlCQUFpQm5GLEdBQ0EzQixLQUFLUSxRQUFRMkQsY0FBYyxNQUNuQ3FDLFVBQVVPLE9BQU8sYUFHMUJ6QyxZQUNFdEUsS0FBS1EsUUFBUStELGlCQUFpQixXQUFZdkUsS0FBS3NHLGlCQUMvQ3RHLEtBQUtRLFFBQVErRCxpQkFBaUIsWUFBYXZFLEtBQUs4RyxrQkFDaEQ5RyxLQUFLUSxRQUFRK0QsaUJBQWlCLE9BQVF2RSxLQUFLMEcsYUFFM0MzQyxFQUFhckIsYUFBYUksSUFDeEIsTUFBTWtFLEVBQW1CbEUsRUFBU21FLFFBQU9wRCxHQUNyQixXQUFkN0QsS0FBS29HLEtBQ0F2QyxFQUFJdEIsU0FBV0wsRUFBY29CLE9BRS9CTyxFQUFJdEIsU0FBV0wsRUFBYzJFLFdBRXRDN0csS0FBS3FHLGlCQUFtQlcsRUFDeEJoSCxLQUFLa0gsb0JBSVR6QyxnQkFDRSxNQUFNMEMsRUFBUyxHQUFHbkgsS0FBS29HLHFCQUN2QnBHLEtBQUtRLFFBQVEyRCxjQUFjLE1BQU96RCxHQUFLeUcsRUFDdkNuSCxLQUFLUSxRQUFRMkQsY0FBYyxNQUFPK0IsWUFDaENsRyxLQUFLb0csS0FBS2dCLGNBQWdCLFlBR3RCRixpQkFDU2hILFNBQVNDLGVBQ3RCLEdBQUdILEtBQUtvRyxzQkFFSGlCLFVBQVksR0FDbkIsSUFBSyxNQUFNQyxLQUFXdEgsS0FBS3FHLGlCQUN6QixJQUFJYixFQUFZeEYsS0FBS1EsUUFBUTJELGNBQWMsTUFBT3pELEdBQUk0RyxJQXJEMUQsR0FEQzVGLEcsb0NBVUQsR0FEQ0EsRyxnQ0FVRCxHQURDQSxHLHFDQ25DSCxJQUFJdUMsRUFDSixJQUFJa0MsRUFBWSxVQUNoQixJQUFJQSxFQUFZLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXRzLy4vc3JjL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10cy8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10cy8uL3NyYy9kZWNvcmF0b3JzL2F1dG9iaW5kLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHMvLi9zcmMvbW9kZWxzL3Byb2plY3QudHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10cy8uL3NyYy9zdGF0ZS9wcm9qZWN0LXN0YXRlLnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHMvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3VuZGVyc3RhbmRpbmctdHMvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vdW5kZXJzdGFuZGluZy10cy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtbGlzdC50cyIsIndlYnBhY2s6Ly91bmRlcnN0YW5kaW5nLXRzLy4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnQgQmFzZSBDbGFzc1xuXG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VCBleHRlbmRzIEhUTUxFbGVtZW50LCBVIGV4dGVuZHMgSFRNTEVsZW1lbnQ+IHtcbiAgICB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgaG9zdEVsZW1lbnQ6IFQ7XG4gICAgZWxlbWVudDogVTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgICAgaG9zdEVsZW1lbnRJZDogc3RyaW5nLFxuICAgICAgaW5zZXJ0QXRTdGFydDogYm9vbGVhbixcbiAgICAgIG5ld0VsZW1lbnRJZD86IHN0cmluZ1xuICAgICkge1xuICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgdGVtcGxhdGVJZFxuICAgICAgKSEgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgIHRoaXMuaG9zdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChob3N0RWxlbWVudElkKSEgYXMgVDtcblxuICAgICAgY29uc3QgaW1wb3J0ZWROb2RlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZCBhcyBVO1xuICAgICAgaWYgKG5ld0VsZW1lbnRJZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuaWQgPSBuZXdFbGVtZW50SWQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXR0YWNoKGluc2VydEF0U3RhcnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXR0YWNoKGluc2VydEF0QmVnaW5uaW5nOiBib29sZWFuKSB7XG4gICAgICB0aGlzLmhvc3RFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcbiAgICAgICAgaW5zZXJ0QXRCZWdpbm5pbmcgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJyxcbiAgICAgICAgdGhpcy5lbGVtZW50XG4gICAgICApO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNvbmZpZ3VyZSgpOiB2b2lkO1xuICAgIGFic3RyYWN0IHJlbmRlckNvbnRlbnQoKTogdm9pZDtcbiAgfVxuIiwiXG4gIC8vIFZhbGlkYXRpb25cbiAgZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0YWJsZSB7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcjtcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XG4gICAgbWluTGVuZ3RoPzogbnVtYmVyO1xuICAgIG1heExlbmd0aD86IG51bWJlcjtcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgbWF4PzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbGlkYXRhYmxlSW5wdXQ6IFZhbGlkYXRhYmxlKSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0LnJlcXVpcmVkKSB7XG4gICAgICBpc1ZhbGlkID1cbiAgICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBpc1ZhbGlkID1cbiAgICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA+PSB2YWxpZGF0YWJsZUlucHV0Lm1pbkxlbmd0aDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdzdHJpbmcnXG4gICAgKSB7XG4gICAgICBpc1ZhbGlkID1cbiAgICAgICAgaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlLmxlbmd0aCA8PSB2YWxpZGF0YWJsZUlucHV0Lm1heExlbmd0aDtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdmFsaWRhdGFibGVJbnB1dC5taW4gIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICBpc1ZhbGlkID0gaXNWYWxpZCAmJiB2YWxpZGF0YWJsZUlucHV0LnZhbHVlID49IHZhbGlkYXRhYmxlSW5wdXQubWluO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICB2YWxpZGF0YWJsZUlucHV0Lm1heCAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcidcbiAgICApIHtcbiAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPD0gdmFsaWRhdGFibGVJbnB1dC5tYXg7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG4iLCJcbiAgLy8gYXV0b2JpbmQgZGVjb3JhdG9yXG4gIGV4cG9ydCBmdW5jdGlvbiBhdXRvYmluZChfOiBhbnksIF8yOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xuICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgY29uc3QgYWRqRGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yID0ge1xuICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgIGdldCgpIHtcbiAgICAgICBjb25zdCBib3VuZEZuID0gb3JpZ2luYWxNZXRob2QuYmluZCh0aGlzKTtcbiAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgfVxuICAgfTtcbiAgIHJldHVybiBhZGpEZXNjcmlwdG9yO1xuIH1cbiIsIlxuICBleHBvcnQgZW51bSBQcm9qZWN0U3RhdHVzIHtcbiAgICBBY3RpdmUsXG4gICAgRmluaXNoZWRcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpZDogc3RyaW5nLFxuICAgICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICAgIHB1YmxpYyBwZW9wbGU6IG51bWJlcixcbiAgICAgIHB1YmxpYyBzdGF0dXM6IFByb2plY3RTdGF0dXNcbiAgICApIHt9XG4gIH1cbiIsImltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5cblxuICAvLyBQcm9qZWN0IFN0YXRlIE1hbmFnZW1lbnRcbiAgdHlwZSBMaXN0ZW5lcjxUPiA9IChpdGVtczogVFtdKSA9PiB2b2lkO1xuXG4gIGNsYXNzIFN0YXRlPFQ+IHtcbiAgICBwcm90ZWN0ZWQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxUPltdID0gW107XG5cbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lckZuOiBMaXN0ZW5lcjxUPikge1xuICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZuKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGU8UHJvamVjdD4ge1xuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQcm9qZWN0U3RhdGU7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG4gICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIG51bU9mUGVvcGxlOiBudW1iZXIpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygpLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIG51bU9mUGVvcGxlLFxuICAgICAgICBQcm9qZWN0U3RhdHVzLkFjdGl2ZVxuICAgICAgKTtcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgbW92ZVByb2plY3QocHJvamVjdElkOiBzdHJpbmcsIG5ld1N0YXR1czogUHJvamVjdFN0YXR1cykge1xuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZChwcmogPT4gcHJqLmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgaWYgKHByb2plY3QgJiYgcHJvamVjdC5zdGF0dXMgIT09IG5ld1N0YXR1cykge1xuICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUxpc3RlbmVycygpIHtcbiAgICAgIGZvciAoY29uc3QgbGlzdGVuZXJGbiBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICBsaXN0ZW5lckZuKHRoaXMucHJvamVjdHMuc2xpY2UoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNvbnN0IHByb2plY3RTdGF0ZSA9IFByb2plY3RTdGF0ZS5nZXRJbnN0YW5jZSgpO1xuIiwiICBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbiAgaW1wb3J0IHsgVmFsaWRhdGFibGUsIHZhbGlkYXRlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbiAgaW1wb3J0IHsgYXV0b2JpbmQgfSBmcm9tICcuLi9kZWNvcmF0b3JzL2F1dG9iaW5kJztcbiAgaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5cbiAgLy8gUHJvamVjdElucHV0IENsYXNzXG4gIGV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxGb3JtRWxlbWVudD4ge1xuICAgIHRpdGxlSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGRlc2NyaXB0aW9uSW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIHBlb3BsZUlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoJ3Byb2plY3QtaW5wdXQnLCAnYXBwJywgdHJ1ZSwgJ3VzZXItaW5wdXQnKTtcbiAgICAgIHRoaXMudGl0bGVJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJyN0aXRsZSdcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJyNkZXNjcmlwdGlvbidcbiAgICAgICkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICcjcGVvcGxlJ1xuICAgICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmUoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5zdWJtaXRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZW5kZXJDb250ZW50KCkge31cblxuICAgIHByaXZhdGUgZ2F0aGVyVXNlcklucHV0KCk6IFtzdHJpbmcsIHN0cmluZywgbnVtYmVyXSB8IHZvaWQge1xuICAgICAgY29uc3QgZW50ZXJlZFRpdGxlID0gdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICBjb25zdCBlbnRlcmVkUGVvcGxlID0gdGhpcy5wZW9wbGVJbnB1dEVsZW1lbnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRpdGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgICB2YWx1ZTogZW50ZXJlZFRpdGxlLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgICB2YWx1ZTogZW50ZXJlZERlc2NyaXB0aW9uLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgbWluTGVuZ3RoOiA1XG4gICAgICB9O1xuICAgICAgY29uc3QgcGVvcGxlVmFsaWRhdGFibGU6IFZhbGlkYXRhYmxlID0ge1xuICAgICAgICB2YWx1ZTogK2VudGVyZWRQZW9wbGUsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBtaW46IDEsXG4gICAgICAgIG1heDogNVxuICAgICAgfTtcblxuICAgICAgaWYgKFxuICAgICAgICAhdmFsaWRhdGUodGl0bGVWYWxpZGF0YWJsZSkgfHxcbiAgICAgICAgIXZhbGlkYXRlKGRlc2NyaXB0aW9uVmFsaWRhdGFibGUpIHx8XG4gICAgICAgICF2YWxpZGF0ZShwZW9wbGVWYWxpZGF0YWJsZSlcbiAgICAgICkge1xuICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtlbnRlcmVkVGl0bGUsIGVudGVyZWREZXNjcmlwdGlvbiwgK2VudGVyZWRQZW9wbGVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJJbnB1dHMoKSB7XG4gICAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIEBhdXRvYmluZFxuICAgIHByaXZhdGUgc3VibWl0SGFuZGxlcihldmVudDogRXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VySW5wdXQgPSB0aGlzLmdhdGhlclVzZXJJbnB1dCgpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xuICAgICAgICBjb25zdCBbdGl0bGUsIGRlc2MsIHBlb3BsZV0gPSB1c2VySW5wdXQ7XG4gICAgICAgIHByb2plY3RTdGF0ZS5hZGRQcm9qZWN0KHRpdGxlLCBkZXNjLCBwZW9wbGUpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiIsIlxuaW1wb3J0IHsgRHJhZ2dhYmxlIH1mcm9tICcuLi9tb2RlbHMvZHJhZy1kcm9wJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XG5cbiAgLy8gUHJvamVjdEl0ZW0gQ2xhc3NcbiAgZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEhUTUxVTGlzdEVsZW1lbnQsIEhUTUxMSUVsZW1lbnQ+XG4gICAgaW1wbGVtZW50cyBEcmFnZ2FibGUge1xuICAgIHByaXZhdGUgcHJvamVjdDogUHJvamVjdDtcblxuICAgIGdldCBwZXJzb25zKCkge1xuICAgICAgaWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuICcxIHBlcnNvbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5wcm9qZWN0LnBlb3BsZX0gcGVyc29uc2A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoaG9zdElkOiBzdHJpbmcsIHByb2plY3Q6IFByb2plY3QpIHtcbiAgICAgIHN1cGVyKCdzaW5nbGUtcHJvamVjdCcsIGhvc3RJZCwgZmFsc2UsIHByb2plY3QuaWQpO1xuICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcblxuICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH1cblxuICAgIEBhdXRvYmluZFxuICAgIGRyYWdTdGFydEhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyIS5zZXREYXRhKCd0ZXh0L3BsYWluJywgdGhpcy5wcm9qZWN0LmlkKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2ZlciEuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICB9XG5cbiAgICBkcmFnRW5kSGFuZGxlcihfOiBEcmFnRXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEcmFnRW5kJyk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKCkge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIHRoaXMuZHJhZ1N0YXJ0SGFuZGxlcik7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKSEudGV4dENvbnRlbnQgPSB0aGlzLnByb2plY3QudGl0bGU7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDMnKSEudGV4dENvbnRlbnQgPVxuICAgICAgICB0aGlzLnBlcnNvbnMgKyAnIGFzc2lnbmVkJztcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwJykhLnRleHRDb250ZW50ID0gdGhpcy5wcm9qZWN0LmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgfVxuXG4iLCJpbXBvcnQgeyBEcmFnVGFyZ2V0IH1mcm9tICcuLi9tb2RlbHMvZHJhZy1kcm9wJztcbmltcG9ydCB7IFByb2plY3QsIFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlJztcbmltcG9ydCB7IFByb2plY3RJdGVtIH0gZnJvbSAnLi9wcm9qZWN0LWl0ZW0nO1xuXG4gLy8gUHJvamVjdExpc3QgQ2xhc3NcbiAgZXhwb3J0IGNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgQ29tcG9uZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MRWxlbWVudD5cbiAgICBpbXBsZW1lbnRzIERyYWdUYXJnZXQge1xuICAgIGFzc2lnbmVkUHJvamVjdHM6IFByb2plY3RbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdHlwZTogJ2FjdGl2ZScgfCAnZmluaXNoZWQnKSB7XG4gICAgICBzdXBlcigncHJvamVjdC1saXN0JywgJ2FwcCcsIGZhbHNlLCBgJHt0eXBlfS1wcm9qZWN0c2ApO1xuICAgICAgdGhpcy5hc3NpZ25lZFByb2plY3RzID0gW107XG5cbiAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gPT09ICd0ZXh0L3BsYWluJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBsaXN0RWwgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSE7XG4gICAgICAgIGxpc3RFbC5jbGFzc0xpc3QuYWRkKCdkcm9wcGFibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBkcm9wSGFuZGxlcihldmVudDogRHJhZ0V2ZW50KSB7XG4gICAgICBjb25zdCBwcmpJZCA9IGV2ZW50LmRhdGFUcmFuc2ZlciEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgcHJvamVjdFN0YXRlLm1vdmVQcm9qZWN0KFxuICAgICAgICBwcmpJZCxcbiAgICAgICAgdGhpcy50eXBlID09PSAnYWN0aXZlJyA/IFByb2plY3RTdGF0dXMuQWN0aXZlIDogUHJvamVjdFN0YXR1cy5GaW5pc2hlZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAYXV0b2JpbmRcbiAgICBkcmFnTGVhdmVIYW5kbGVyKF86IERyYWdFdmVudCkge1xuICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhO1xuICAgICAgbGlzdEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3BwYWJsZScpO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZSgpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJIYW5kbGVyKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmRyb3BIYW5kbGVyKTtcblxuICAgICAgcHJvamVjdFN0YXRlLmFkZExpc3RlbmVyKChwcm9qZWN0czogUHJvamVjdFtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbGV2YW50UHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIocHJqID0+IHtcbiAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYWN0aXZlJykge1xuICAgICAgICAgICAgcmV0dXJuIHByai5zdGF0dXMgPT09IFByb2plY3RTdGF0dXMuQWN0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5GaW5pc2hlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXNzaWduZWRQcm9qZWN0cyA9IHJlbGV2YW50UHJvamVjdHM7XG4gICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoKSB7XG4gICAgICBjb25zdCBsaXN0SWQgPSBgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgO1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykhLmlkID0gbGlzdElkO1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gyJykhLnRleHRDb250ZW50ID1cbiAgICAgICAgdGhpcy50eXBlLnRvVXBwZXJDYXNlKCkgKyAnIFBST0pFQ1RTJztcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgY29uc3QgbGlzdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGAke3RoaXMudHlwZX0tcHJvamVjdHMtbGlzdGBcbiAgICAgICkhIGFzIEhUTUxVTGlzdEVsZW1lbnQ7XG4gICAgICBsaXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XG4gICAgICAgIG5ldyBQcm9qZWN0SXRlbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKSEuaWQsIHByakl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4iLCJpbXBvcnQgeyBQcm9qZWN0SW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3QnXG5cbiAgbmV3IFByb2plY3RJbnB1dCgpO1xuICBuZXcgUHJvamVjdExpc3QoJ2FjdGl2ZScpO1xuICBuZXcgUHJvamVjdExpc3QoJ2ZpbmlzaGVkJyk7XG5cblxuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGVJZCIsImhvc3RFbGVtZW50SWQiLCJpbnNlcnRBdFN0YXJ0IiwibmV3RWxlbWVudElkIiwidGhpcyIsInRlbXBsYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob3N0RWxlbWVudCIsImltcG9ydGVkTm9kZSIsImltcG9ydE5vZGUiLCJjb250ZW50IiwiZWxlbWVudCIsImZpcnN0RWxlbWVudENoaWxkIiwiaWQiLCJhdHRhY2giLCJpbnNlcnRBdEJlZ2lubmluZyIsImluc2VydEFkamFjZW50RWxlbWVudCIsInZhbGlkYXRlIiwidmFsaWRhdGFibGVJbnB1dCIsImlzVmFsaWQiLCJyZXF1aXJlZCIsInZhbHVlIiwidG9TdHJpbmciLCJ0cmltIiwibGVuZ3RoIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluIiwibWF4IiwiYXV0b2JpbmQiLCJfIiwiXzIiLCJkZXNjcmlwdG9yIiwib3JpZ2luYWxNZXRob2QiLCJjb25maWd1cmFibGUiLCJnZXQiLCJiaW5kIiwiUHJvamVjdFN0YXR1cyIsIlByb2plY3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicGVvcGxlIiwic3RhdHVzIiwiUHJvamVjdFN0YXRlIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lckZuIiwicHVzaCIsInN1cGVyIiwicHJvamVjdHMiLCJzdGF0aWMiLCJpbnN0YW5jZSIsImFkZFByb2plY3QiLCJudW1PZlBlb3BsZSIsIm5ld1Byb2plY3QiLCJNYXRoIiwicmFuZG9tIiwiQWN0aXZlIiwidXBkYXRlTGlzdGVuZXJzIiwibW92ZVByb2plY3QiLCJwcm9qZWN0SWQiLCJuZXdTdGF0dXMiLCJwcm9qZWN0IiwiZmluZCIsInByaiIsInNsaWNlIiwicHJvamVjdFN0YXRlIiwiZ2V0SW5zdGFuY2UiLCJQcm9qZWN0SW5wdXQiLCJ0aXRsZUlucHV0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXNjcmlwdGlvbklucHV0RWxlbWVudCIsInBlb3BsZUlucHV0RWxlbWVudCIsImNvbmZpZ3VyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRIYW5kbGVyIiwicmVuZGVyQ29udGVudCIsImdhdGhlclVzZXJJbnB1dCIsImVudGVyZWRUaXRsZSIsImVudGVyZWREZXNjcmlwdGlvbiIsImVudGVyZWRQZW9wbGUiLCJkZXNjcmlwdGlvblZhbGlkYXRhYmxlIiwicGVvcGxlVmFsaWRhdGFibGUiLCJhbGVydCIsImNsZWFySW5wdXRzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsImRlc2MiLCJQcm9qZWN0SXRlbSIsImhvc3RJZCIsInBlcnNvbnMiLCJkcmFnU3RhcnRIYW5kbGVyIiwiZGF0YVRyYW5zZmVyIiwic2V0RGF0YSIsImVmZmVjdEFsbG93ZWQiLCJkcmFnRW5kSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0Q29udGVudCIsIlByb2plY3RMaXN0IiwidHlwZSIsImFzc2lnbmVkUHJvamVjdHMiLCJkcmFnT3ZlckhhbmRsZXIiLCJ0eXBlcyIsImNsYXNzTGlzdCIsImFkZCIsImRyb3BIYW5kbGVyIiwicHJqSWQiLCJnZXREYXRhIiwiRmluaXNoZWQiLCJkcmFnTGVhdmVIYW5kbGVyIiwicmVtb3ZlIiwicmVsZXZhbnRQcm9qZWN0cyIsImZpbHRlciIsInJlbmRlclByb2plY3RzIiwibGlzdElkIiwidG9VcHBlckNhc2UiLCJpbm5lckhUTUwiLCJwcmpJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==