!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkendless=self.webpackChunkendless||[]).push([[6184],{96184:function(n,i,o){o.r(i),o.d(i,{ToDoModule:function(){return b}});var a=o(38583),r=o(3679),s=o(39895),c=o(96718),l=o(37716),d=o(49344),u=function(t){return{completed:t}};function Z(t,e){if(1&t){var n=l.EpF();l.TgZ(0,"li",33),l.TgZ(1,"div",34),l.TgZ(2,"h4",35),l._uU(3),l.qZA(),l.TgZ(4,"span",36),l.TgZ(5,"span",37),l.NdJ("click",function(){var t=l.CHM(n).index;return l.oxw().taskDeleted(t)}),l.TgZ(6,"i",14),l._UZ(7,"i",38),l.qZA(),l.qZA(),l.TgZ(8,"span",39),l.NdJ("click",function(){var t=l.CHM(n).$implicit;return l.oxw().taskCompleted(t)}),l.TgZ(9,"i",14),l._UZ(10,"i",15),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()}if(2&t){var i=e.$implicit;l.Q6J("ngClass",l.VKq(2,u,i.completed)),l.xp6(3),l.Oqu(i.text)}}var p,g=function(t){return{"move-up":t}},k=function(t){return{"move-down":t}},f=function(t){return{hide:t}},A=function(t){return{visible:t}},T=[{path:"",children:[{path:"",component:(p=function(){function n(e){t(this,n),this.toastrService=e,this.todos=c.o,this.red_border=!1}var i,o,a;return i=n,(o=[{key:"ngOnInit",value:function(){}},{key:"addTask",value:function(t){if(!t)return this.red_border=!0,!1;this.todos.push({text:t,completed:!1}),this.text="",this.red_border=!1}},{key:"taskCompleted",value:function(t){t.completed=!t.completed,t.completed?this.toastrService.success(t.text,"Mark as completed"):this.toastrService.error(t.text,"Mark as Incompleted")}},{key:"taskDeleted",value:function(t){this.todos.splice(t,1)}},{key:"markAllAction",value:function(t){this.todos.filter(function(e){e.completed=t}),this.completed=t,t?this.toastrService.success("All Task as Completed"):this.toastrService.error("All Task as Incompleted")}}])&&e(i.prototype,o),a&&e(i,a),n}(),p.\u0275fac=function(t){return new(t||p)(l.Y36(d._W))},p.\u0275cmp=l.Xpm({type:p,selectors:[["app-to-do"]],decls:44,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-xl-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"todo"],[1,"todo-list-wrapper"],[1,"todo-list-container"],[1,"mark-all-tasks"],[1,"mark-all-tasks-container"],["id","mark-all-finished","role","button",1,"mark-all-btn",3,"ngClass"],[1,"btn-label"],[1,"action-box","completed",3,"click"],[1,"icon"],[1,"icon-check"],["id","mark-all-incomplete","role","button",1,"mark-all-btn",3,"ngClass"],[1,"action-box",3,"click"],[1,"todo-list-body"],["id","todo-list"],["class","task",3,"ngClass",4,"ngFor","ngForOf"],[1,"todo-list-footer"],[1,"add-task-btn-wrapper"],[1,"add-task-btn",3,"ngClass"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus","mr-1"],[1,"new-task-wrapper",3,"ngClass"],["id","new-task","placeholder","Enter new task here. . .",3,"ngModel","ngModelChange"],["id","close-task-panel",1,"btn","btn-danger","cancel-btn",3,"click"],["id","add-task",1,"btn","btn-success","ml-3","add-new-task-btn",3,"click"],[1,"notification-popup","hide"],[1,"task"],[1,"notification-text"],[1,"task",3,"ngClass"],[1,"task-container"],[1,"task-label"],[1,"task-action-btn"],["title","Delete Task",1,"action-box","large","delete-btn",3,"click"],[1,"icon-trash"],["title","Mark Complete",1,"action-box","large","complete-btn",3,"click"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"div",4),l.TgZ(5,"h5"),l._uU(6,"To-Do"),l.qZA(),l.qZA(),l.TgZ(7,"div",5),l.TgZ(8,"div",6),l.TgZ(9,"div",7),l.TgZ(10,"div",8),l.TgZ(11,"div",9),l.TgZ(12,"div",10),l.TgZ(13,"span",11),l.TgZ(14,"span",12),l._uU(15,"Mark all as finished"),l.qZA(),l.TgZ(16,"span",13),l.NdJ("click",function(){return e.markAllAction(!0)}),l.TgZ(17,"i",14),l._UZ(18,"i",15),l.qZA(),l.qZA(),l.qZA(),l.TgZ(19,"span",16),l.TgZ(20,"span",12),l._uU(21,"Mark all as completed"),l.qZA(),l.TgZ(22,"span",17),l.NdJ("click",function(){return e.markAllAction(!1)}),l.TgZ(23,"i",14),l._UZ(24,"i",15),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(25,"div",18),l.TgZ(26,"ul",19),l.YNc(27,Z,11,4,"li",20),l.qZA(),l.qZA(),l.TgZ(28,"div",21),l.TgZ(29,"div",22),l.TgZ(30,"span",23),l.TgZ(31,"button",24),l.NdJ("click",function(){return e.visible=!0}),l._UZ(32,"i",25),l._uU(33,"Add new task "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(34,"div",26),l.TgZ(35,"textarea",27),l.NdJ("ngModelChange",function(t){return e.text=t}),l.qZA(),l.TgZ(36,"button",28),l.NdJ("click",function(){return e.visible=!1}),l._uU(37,"Close"),l.qZA(),l.TgZ(38,"button",29),l.NdJ("click",function(){return e.addTask(e.text)}),l._uU(39,"Add Task"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(40,"div",30),l.TgZ(41,"p"),l._UZ(42,"span",31),l._UZ(43,"span",32),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(13),l.Q6J("ngClass",l.VKq(8,g,e.completed)),l.xp6(6),l.Q6J("ngClass",l.VKq(10,k,!e.completed)),l.xp6(8),l.Q6J("ngForOf",e.todos),l.xp6(3),l.Q6J("ngClass",l.VKq(12,f,e.visible)),l.xp6(4),l.Q6J("ngClass",l.VKq(14,A,e.visible)),l.xp6(1),l.ekj("border-danger",e.red_border),l.Q6J("ngModel",e.text))},directives:[a.mk,a.sg,r.Fj,r.JJ,r.On],styles:[""]}),p),data:{title:"To-Do",breadcrumb:""}}]}],m=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),e}(),b=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[a.ez,r.u5,m]]}),e}()}}])}();