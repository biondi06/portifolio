import React,{useEffect} from "react";
const Background:React.FC=()=>{
 useEffect(()=>{
  const move=(e:MouseEvent)=>{
   const x=e.clientX/window.innerWidth-.5,y=e.clientY/window.innerHeight-.5;
   document.querySelectorAll<HTMLElement>(".orb").forEach((o,i)=>{
    o.style.marginLeft=`${x*(i+1)*7}px`;
    o.style.marginTop=`${y*(i+1)*7}px`;
   });
  };
  window.addEventListener("mousemove",move);
  return()=>window.removeEventListener("mousemove",move);
 },[]);
 return <div className="animated-bg" aria-hidden="true">
  <span className="orb orb-1"/><span className="orb orb-2"/>
  <span className="orb orb-3"/><span className="grid-bg"/>
 </div>;
};
export default Background;
