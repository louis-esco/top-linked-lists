(()=>{"use strict";class e{constructor(e=null,t=null){this.value=e,this.nextNode=t}}window.myList=new class{constructor(e=null){this.head=e}append(t){if(null===this.head)this.head=new e(t);else{let n=this.head;for(;null!==n.nextNode;)n=n.nextNode;n.nextNode=new e(t)}}}})();