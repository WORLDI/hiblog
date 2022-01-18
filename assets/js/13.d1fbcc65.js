(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{564:function(e,n,r){"use strict";r.r(n);var s=r(12),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("hr"),e._v(" "),r("h1",{attrs:{id:"设计模式之观察者模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之观察者模式"}},[e._v("#")]),e._v(" 设计模式之观察者模式")]),e._v(" "),r("h2",{attrs:{id:"要素"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#要素"}},[e._v("#")]),e._v(" 要素")]),e._v(" "),r("p",[e._v("观察者模式有几个重要的点：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("发布者\n发布者需要有发布更新的方法，增加和删除订阅者的方法。")])]),e._v(" "),r("li",[r("p",[e._v("订阅者集合\n订阅者需要有获取更新的方法（被动更新）")])])]),e._v(" "),r("h2",{attrs:{id:"简单实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单实现"}},[e._v("#")]),e._v(" 简单实现")]),e._v(" "),r("p",[e._v("基于上面的几个要素，我们可以这样实现一个简单的观察者设计模式：")]),e._v(" "),r("ol",[r("li",[e._v("定义订阅者和发布者结构")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("interface Subject {\n  \x3c!-- add observer --\x3e\n  attach: (observer: Observer) => void;\n\n  \x3c!-- delete observer --\x3e\n  detach: (observer: Observer) => void;\n\n  \x3c!-- notice observer --\x3e\n  notify: () => void;\n}\n\ninterface Observer {\n  name: string;\n  \x3c!-- get update --\x3e\n  update: (subject: Subject) => void;\n}\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[e._v("简单实现发布者和订阅者类")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("class Subjector implements Subject {\n  public observers: Observer[] = [];\n\n  \x3c!-- add observer --\x3e\n  public attach(observer: Observer) {\n    if (this.observers.includes(observer)) {\n      console.log('observer already exist!');\n    }\n\n    this.observers.push(observer);\n    console.log(observer.name, 'add to observers');\n  }\n\n  \x3c!-- delete observer --\x3e\n  public detach(observer: Observer) {\n    const index = this.observers.indexOf(observer);\n\n    if (index === -1) {\n      console.log('observer not exist');\n    }\n\n    this.observers.splice(index, 1);\n    console.log(observer.name, 'Deleted');\n  }\n\n  \x3c!-- notice observers --\x3e\n  public notify() {\n    for (let observer of this.observers) {\n      observer.update(this);\n    }\n  }\n\n  public doSomeThing() {\n    \x3c!-- do something --\x3e\n    console.log('I have something more important to do');\n\n    \x3c!-- to notice observers --\x3e\n    this.notify();\n  }\n}\n\nclass ObserverA implements Observer {\n  public name: string = 'ObserverA';\n  public update(subject: Subject) {\n    console.log('ObserverA to update');\n  }\n}\n\nclass ObserverB implements Observer {\n  public name: string = 'ObserverB';\n  public update(subject: Subject) {\n    console.log('ObserverB to update');\n  }\n}\n")])])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("模拟发布订阅操作，验证")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("const subject = new Subjector();\n\nconst observerA = new ObserverA();\nsubject.attach(observerA);\n\nconst observerB = new ObserverB();\nsubject.attach(observerB);\n\nsubject.doSomeThing();\n\nsubject.detach(observerA);\n\nsubject.doSomeThing();\n\nsubject.detach(observerB);\n\n\x3c!-- output --\x3e\nObserverA add to observers\nObserverB add to observers\n\nI have something more important to do\nObserverA to update\nObserverB to update\n\nObserverA Deleted\nI have something more important to do\nObserverB to update\n\nObserverB Deleted\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);