"use strict";(self.webpackChunkendless=self.webpackChunkendless||[]).push([[6184],{96184:function(t,e,n){n.r(e),n.d(e,{ToDoModule:function(){return T}});var i=n(38583),o=n(3679),s=n(39895),a=n(96718),c=n(37716),l=n(49344);const r=function(t){return{completed:t}};function d(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"li",33),c.TgZ(1,"div",34),c.TgZ(2,"h4",35),c._uU(3),c.qZA(),c.TgZ(4,"span",36),c.TgZ(5,"span",37),c.NdJ("click",function(){const e=c.CHM(t).index;return c.oxw().taskDeleted(e)}),c.TgZ(6,"i",14),c._UZ(7,"i",38),c.qZA(),c.qZA(),c.TgZ(8,"span",39),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().taskCompleted(e)}),c.TgZ(9,"i",14),c._UZ(10,"i",15),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.Q6J("ngClass",c.VKq(2,r,t.completed)),c.xp6(3),c.Oqu(t.text)}}const Z=function(t){return{"move-up":t}},p=function(t){return{"move-down":t}},u=function(t){return{hide:t}},g=function(t){return{visible:t}},k=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t){this.toastrService=t,this.todos=a.o,this.red_border=!1}ngOnInit(){}addTask(t){if(!t)return this.red_border=!0,!1;this.todos.push({text:t,completed:!1}),this.text="",this.red_border=!1}taskCompleted(t){t.completed=!t.completed,t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted")}taskDeleted(t){this.todos.splice(t,1)}markAllAction(t){this.todos.filter(e=>{e.completed=t}),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(l._W))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-to-do"]],decls:44,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks"],[1,"mark-all-tasks-container"],["id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn",3,"ngClass"],[1,"action-box",3,"click"],[1,"todo-list-body"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus","mr-1"],[1,"new-task-wrapper",3,"ngClass"],["id","new-task","placeholder","Enter new task here. . .",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn",3,"click"],["id","add-task",1,"btn","btn-success","ml-3","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"div",2),c.TgZ(3,"div",3),c.TgZ(4,"div",4),c.TgZ(5,"h5"),c._uU(6,"To-Do"),c.qZA(),c.qZA(),c.TgZ(7,"div",5),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"div",8),c.TgZ(11,"div",9),c.TgZ(12,"div",10),c.TgZ(13,"span",11),c.TgZ(14,"span",12),c._uU(15,"Mark all as finished"),c.qZA(),c.TgZ(16,"span",13),c.NdJ("click",function(){return e.markAllAction(!0)}),c.TgZ(17,"i",14),c._UZ(18,"i",15),c.qZA(),c.qZA(),c.qZA(),c.TgZ(19,"span",16),c.TgZ(20,"span",12),c._uU(21,"Mark all as completed"),c.qZA(),c.TgZ(22,"span",17),c.NdJ("click",function(){return e.markAllAction(!1)}),c.TgZ(23,"i",14),c._UZ(24,"i",15),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",18),c.TgZ(26,"ul",19),c.YNc(27,d,11,4,"li",20),c.qZA(),c.qZA(),c.TgZ(28,"div",21),c.TgZ(29,"div",22),c.TgZ(30,"span",23),c.TgZ(31,"button",24),c.NdJ("click",function(){return e.visible=!0}),c._UZ(32,"i",25),c._uU(33,"Add new task "),c.qZA(),c.qZA(),c.qZA(),c.TgZ(34,"div",26),c.TgZ(35,"textarea",27),c.NdJ("ngModelChange",function(t){return e.text=t}),c.qZA(),c.TgZ(36,"button",28),c.NdJ("click",function(){return e.visible=!1}),c._uU(37,"Close"),c.qZA(),c.TgZ(38,"button",29),c.NdJ("click",function(){return e.addTask(e.text)}),c._uU(39,"Add Task"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(40,"div",30),c.TgZ(41,"p"),c._UZ(42,"span",31),c._UZ(43,"span",32),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(13),c.Q6J("ngClass",c.VKq(8,Z,e.completed)),c.xp6(6),c.Q6J("ngClass",c.VKq(10,p,!e.completed)),c.xp6(8),c.Q6J("ngForOf",e.todos),c.xp6(3),c.Q6J("ngClass",c.VKq(12,u,e.visible)),c.xp6(4),c.Q6J("ngClass",c.VKq(14,g,e.visible)),c.xp6(1),c.ekj("border-danger",e.red_border),c.Q6J("ngModel",e.text))},directives:[i.mk,i.sg,o.Fj,o.JJ,o.On],styles:[""]}),t})(),data:{title:"To-Do",breadcrumb:""}}]}];let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[s.Bz.forChild(k)],s.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,o.u5,A]]}),t})()}}]);