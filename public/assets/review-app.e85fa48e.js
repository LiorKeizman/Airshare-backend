import{_ as w,a as m,b as g,h as r,k as t,F as u,l as c,w as U,m as p,v as f,n as b,j as x,r as y,o,p as n,q as v,t as _,u as a}from"./index.a0f7aa64.js";const E={data(){return{reviewToEdit:{txt:"",aboutUserId:null}}},computed:{reviews(){return this.$store.getters.reviews},users(){return this.$store.getters.users},loggedInUser(){return this.$store.getters.loggedinUser}},created(){this.$store.dispatch({type:"loadUsers"}),this.$store.dispatch({type:"loadReviews"})},methods:{async addReview(){try{await this.$store.dispatch({type:"addReview",review:this.reviewToEdit}),m("Review added"),this.reviewToEdit={txt:"",aboutUserId:null}}catch{g("Cannot add review")}}}},T={class:"container home"},k={class:"review-list"},I=t("hr",null,null,-1),M=t("h2",null,"Your gossip:",-1),V=["value"],R=t("button",null,"Save",-1);function S(h,s,$,B,i,l){const d=y("router-link");return o(),r("div",T,[t("ul",k,[(o(!0),r(u,null,c(l.reviews,e=>(o(),r("li",{key:e._id},[t("p",null,[n(" About "),v(d,{to:`user/${e.aboutUser._id}`},{default:_(()=>[n(a(e.aboutUser.fullname),1)]),_:2},1032,["to"])]),t("pre",null,a(e.txt),1),t("p",null,[n("By "),v(d,{to:`user/${e.byUser._id}`},{default:_(()=>[n(a(e.byUser.fullname),1)]),_:2},1032,["to"])])]))),128))]),I,l.loggedInUser?(o(),r("form",{key:0,onSubmit:s[2]||(s[2]=U(e=>l.addReview(),["prevent"]))},[M,p(t("select",{"onUpdate:modelValue":s[0]||(s[0]=e=>i.reviewToEdit.aboutUserId=e)},[(o(!0),r(u,null,c(l.users,e=>(o(),r("option",{key:e._id,value:e._id},a(e.fullname),9,V))),128))],512),[[f,i.reviewToEdit.aboutUserId]]),p(t("textarea",{placeholder:"Your Opinion Matters...","onUpdate:modelValue":s[1]||(s[1]=e=>i.reviewToEdit.txt=e)},null,512),[[b,i.reviewToEdit.txt]]),R],32)):x("",!0)])}const N=w(E,[["render",S]]);export{N as default};
