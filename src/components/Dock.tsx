import React,{useEffect,useRef,useState} from "react";
import {HomeRounded,PersonRounded,BoltRounded,ViewQuiltRounded,MailRounded} from "@mui/icons-material";
const items=[
 ["home","Home",<HomeRounded/>],["sobre","Sobre",<PersonRounded/>],
 ["habilidades","Habilidades",<BoltRounded/>],["projetos","Projetos",<ViewQuiltRounded/>],
 ["contato","Contato",<MailRounded/>]
] as const;
const Dock:React.FC=()=>{
 const [active,setActive]=useState("home"),[hidden,setHidden]=useState(false);
 const last=useRef(0);
 useEffect(()=>{
  const sections=document.querySelectorAll("main section");
  const obs=new IntersectionObserver(entries=>{
   const current=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
   if(current)setActive(current.target.id);
  },{threshold:[.25,.5,.7],rootMargin:"-18% 0px -45% 0px"});
  sections.forEach(s=>obs.observe(s)); return()=>obs.disconnect();
 },[]);
 useEffect(()=>{
  const scroll=()=>{const y=window.scrollY;if(Math.abs(y-last.current)>7&&y>170)setHidden(y>last.current);else if(y<=170)setHidden(false);last.current=y};
  window.addEventListener("scroll",scroll,{passive:true});return()=>window.removeEventListener("scroll",scroll);
 },[]);
 return <nav className={`dock ${hidden?"hidden":""}`} onMouseEnter={()=>setHidden(false)}>
  {items.map(([id,label,icon])=><button key={id} className={`dock-link ${active===id?"active":""}`}
   onClick={()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"})}>
   <span>{icon}</span><b>{label}</b>
  </button>)}
 </nav>;
};
export default Dock;
