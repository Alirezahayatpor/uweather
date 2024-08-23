import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  global.lang = { ff: "vr", ffb: "vb" }

  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"Shiraz Weather"} style={{
        minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage: 'url("https://irmapserver.ir/research/71/weather.webp")',
        backgroundSize: "contain",
        height: 600,

      }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}



        <c-x style={{ backgroundColor: "" }}>

          <f-c style={{ paddingLeft: 20, fontSize: 40, color: "#CAD9E0" }}>weather:</f-c>



          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />


          <br-x />
          <br-xx />
          <f-cse>
            <f-cc style={{ height: 100, width: 400, backgroundColor: "#87CEEB", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/71/temp.webp"
                style={{ height: 30, objectFit: "contain" }} />
              <df-cc>

              <sp-3 />

                <f-20>Feels like :</f-20>
                <sp-3 />
                <f-17>{props.feelslikec}</f-17>
                <f-17>°</f-17>
                <sp-4 />
                <f-17>C</f-17>

              </df-cc>
            </f-cc>






            <f-cc style={{ height: 100, width: 400, backgroundColor: "#87CEEB", borderRadius: 15 }}>
              <img src="https://irmapserver.ir/research/71/-humidity3.png"
                style={{ height: 30, objectFit: "contain" }} />
              <df-cc>
              <sp-3 />

                <f-20> Humidity :</f-20>
                <sp-3 />
                <f-17>{props.humidity}</f-17>
                <f-17>%</f-17>
                <sp-4 />
                <f-17></f-17>

              </df-cc>


            </f-cc>


           
      

          






        </f-cse>
        <br-x />
        <br-xx />
        <br-x />
        <br-xx />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-xx />
        <br-x />
        <br-xx />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-xx />
        <br-x />
        <br-xx />
        <br-x />
        <br-x />
        <br-x />
        <br-x />
        <br-x />


        <f-cc style={{ width: "100%", fontSize: 100 }}>
          <f-13 style={{ fontSize: 30 ,color:"blue" }}>turing team</f-13>
        </f-cc>



      </c-x>




      {/* <div style={{
          direction: "ltr", fontSize: 25
        }}>
          <span>Feels like (C) : {props.feelslikec} °C</span> <br-xx />
          <span>Humidity  : {props.humidity} °C</span> <br-xx />
          <span>Pressure : {props.pressure} °C</span> <br-xx />
          <span>server date : {props.date} </span> <br-xx />




        </div> */}
      <br-x />
      <br-xx />



    </Window>
    </div >
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather/")).json()

  let feelslikec = data.current_condition[0].FeelsLikeC
  let humidity = data.current_condition[0].humidity
  let pressure = data.current_condition[0].pressure

  let date = new Date().toLocaleString()
  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        pressure,
        date,
        // nlangs,
      })
    },
  }
}