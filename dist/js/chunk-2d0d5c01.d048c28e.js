(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d5c01"],{"702d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",[n("i-col",[n("Table",{attrs:{stripe:"",columns:t.columns,data:t.data,size:"small",loading:t.loading},scopedSlots:t._u([{key:"recall",fn:function(e){var i=e.row;return t._t("default",[n("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.handleRecall(i)}}},[t._v("撤回")])])}}],null,!0)})],1)],1)},r=[],o=n("9ab4"),a=n("2b0e"),s=n("f129"),d=n("b1f3"),l=a["default"].extend({data:function(){return{loading:!1,data:[],columns:[{title:"委托时间",key:"time",minWidth:80,render:function(t,e){var n=e.row;return t("span",Object(d["s"])(n.time))}},{title:"交易对",key:"symbol",minWidth:95},{title:"类型",key:"type_text",minWidth:70},{title:"方向",key:"side_text",minWidth:70},{title:"价格",key:"price",minWidth:70},{title:"订单数量",key:"origQty",minWidth:100},{title:"已成交",key:"executedQty",minWidth:90},{title:"成交金额",key:"origQtys",minWidth:90,render:function(t,e){var n=e.row,i=n.executedQty,r=n.origQty;return t("span",""+(Object(d["p"])(i/r*100)||0))}},{title:"撤销",key:"action",slot:"recall",align:"center",fixed:"right",minWidth:70}]}},mounted:function(){return o["b"](this,void 0,void 0,function(){return o["e"](this,function(t){return[2]})})},watch:{"$store.state.instant.timer":{deep:!0,handler:function(t){t.openOrder&&(this.data=t.openOrder||[])}}},computed:{width:d["u"],order:function(){var t=[],e=this.$store.state.instant.timer.openOrder,n=void 0===e?[]:e;return t=n,t}},methods:{toTickSize:d["p"],init_params:function(){return o["b"](this,void 0,void 0,function(){var t,e,n;return o["e"](this,function(i){switch(i.label){case 0:return this.loading=!0,[4,Object(s["K"])()];case 1:return t=i.sent(),e=t.error_num,n=t.list,t.msg,this.loading=!1,0===e&&(this.data=n),[2]}})})},handleRecall:function(t){var e=t.symbol,n=t.orderId,i=t.taskId;return o["b"](this,void 0,void 0,function(){var t,r,a;return o["e"](this,function(o){switch(o.label){case 0:return[4,Object(s["n"])({symbol:e,orderId:n,taskId:i})];case 1:return t=o.sent(),r=t.error_num,a=t.msg,0===r?this.init_params():this.$Notice.error({title:a}),[2]}})})}}}),u=l,c=n("2877"),h=Object(c["a"])(u,i,r,!1,null,null,null);e["default"]=h.exports}}]);