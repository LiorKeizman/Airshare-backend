import{_ as c,a,d as t,t as r,F as d,e as o,b as i,r as m,o as u,p as l,q as _,u as h}from"./index.e70235e1.js";const p={data(){return{}},async created(){},watch:{userId:{handler(){this.userId&&this.$store.dispatch({type:"loadAndWatchUser",userId:this.userId})},immediate:!0}},computed:{user(){return this.$store.getters.watchedUser},userId(){return this.$route.params.id}}},f={key:0},x=["src"],y=t("summary",null,"Full JSON",-1);function g(k,U,I,N,b,e){const n=m("router-link");return e.user?(u(),a("section",f,[t("h1",null,"User Details - "+r(e.user.fullname),1),t("h3",null,r(e.user.username)+" score: "+r(e.user.score),1),t("img",{style:{"max-width":"200px"},src:e.user.imgUrl},null,8,x),t("ul",null,[(u(!0),a(d,null,o(e.user.givenReviews,s=>(u(),a("li",{key:s._id},[l(r(s.txt)+" ",1),_(n,{to:`/user/${s.aboutUser._id}`},{default:h(()=>[l(" About "+r(s.aboutUser.fullname),1)]),_:2},1032,["to"])]))),128))]),t("details",null,[y,t("pre",null,r(e.user),1)])])):i("",!0)}const B=c(p,[["render",g]]);export{B as default};
