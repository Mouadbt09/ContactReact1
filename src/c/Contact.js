import React, { useState } from 'react'
import './ap.css'
import img1 from "./search.png"
import img2 from "./trash.png"
import sortt from "./sort.png"
import find from "./find.png"
export default function C() {
  const[n,setn]=useState("")
  const[c,setc]=useState("")
  const[t,sett]=useState(0)
  const[shown,sets]=useState(false)
  const[shown2,sets2]=useState(false)
  const[cityname,setcity]=useState("")
  const[cityname2,setcity2]=useState("")
  const[listb,setlistb]=useState([])
  let ex=0
  let ex2=0
  const [clist,setclist]=useState([
    {name:"Samira FatHi",number:"0781624154",city:"Rabat"},
    {name:"Jawad Khalil",number:"0654782141",city:"Tanger"},
    {name:"Nadir Sabri",number:"0671418245",city:"Taza"},
    {name:"Adam Jalil",number:"0411642587",city:"Agadir"}
  ])

  function add(){
    if(n=="" || t=="" || t==0){
      alert('name and number are required')
    }
    else{
      for(var i=0;i<clist.length;i++){
        if(clist[i].number==t){
          ex=1
        }
      }
      if(ex==1){
        alert('this number already exists')
      }
      else{
      let table=[...clist,{name:n,number:t,city:c}]
        setclist(table)
        sets(false)
        setn("")
        sett(0)
        setc("")
        ex=0
      }
    }
  }

  function delet(idg){
    let f=clist.filter((c)=>{
      return c.number!=idg
    })
    setclist(f)

    let f3=listb.filter((c)=>{
      return c.number!=idg
    })
    setlistb(f3)
  }

  function show(){
    sets(true)
  }
  function unshow(){
    sets(false)
  }
  function sortf(){
    let table4=[]
    table4=[...clist]
    table4.sort((a, b) => (a.name > b.name) ? 1 : -1);
    setclist(table4)
  }
  function search(ville){
    if(ville==""){
      alert('enter the city')
    }
    else{
      for(var i=0;i<clist.length;i++){
        if(clist[i].city==ville){
          ex2=1
        }
      }
      if(ex2==0){
        alert('there is no contact with this city')
      }
      else{
        let table18=[...clist]
        setlistb(table18)
        let tb=clist.filter((c)=>{
          return c.city==ville
        })
        setclist(tb)
        setcity2(cityname)
        setcity('')
        ex2=0
        sets2(true)
      }
    }
  }
  function all(){
    console.log(listb)
    let table19=[...listb]
    setclist(table19)
    sets2(false)
  }
  return (
    <div>
      <div className="blue"></div>
      <div className="red"></div>
      <div className="green"></div>
      <div className="green2"></div>
      <div className="container">
        <div className="header">
          <span>
            <h2>Contacts</h2>
            <i onClick={sortf}><img src={sortt} alt="" /></i>
          </span>
        </div>
        <div className="search-bar">
<input className="search" type="text" value={cityname} onChange={(e)=>{setcity(e.target.value)}} placeholder="search by city..."/>
          <img onClick={()=>{search(cityname)}} src={find} alt="" />
        </div>
        <div className="list">
          <div className={shown2 ? "header":"none"}>
            <h3 className={shown2 ? "all2":"none"}>Contact with city {cityname2}</h3>
            <h3 className={shown2 ? "all":"none"} onClick={all}>Show All</h3>
          </div>
          {clist.map(
            (e)=>( 
              <div className="contact">
                <span>
                  <h3>{e.name}</h3>
                  <span>
                    <p muted>{e.number}</p>
                    <p muted>{e.city}</p>
                  </span>
                </span>
                <span>
                  <button key={e.number} onClick={()=>delet(e.number)}><img src={img2} alt="" /></button>
                </span>
              </div>
            )
          )}
        </div>
        <div className="plus" onClick={show}><p>+</p></div>
        <div className={shown ? "info":"none"}>
          <h2>Add Contact</h2>
          <i onClick={unshow}>×</i>
          <span>
            <input type="text"  value={n} onChange={(e)=>{setn(e.target.value)}} id="" placeholder="Name Here.."/>
            <input type="number"  value={t} onChange={(e)=>{sett(e.target.value)}} id="" placeholder="Number Here..."/>
            <input type="text" value={c} onChange={(e)=>{setc(e.target.value)}} placeholder="City Here..."/>
            <button onClick={add}>ADD</button>
          </span>
        </div>
      </div>
    </div>
  )
}
