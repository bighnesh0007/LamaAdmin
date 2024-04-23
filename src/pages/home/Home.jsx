import BarChartBox from '../../components/barChartBox/Barchartbox';
import BigChartBox from '../../components/bigChartBox/Bigchartbox';
import Chartbox from '../../components/chartBox/Chartbox';
import PieChartBox from '../../components/pieChartBox/Piechartbox';
import Topbox from '../../components/topBox/Topbox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';


function Home() {
  return (
    <div className='home'>
      <div className='box box1'>
        <Topbox/>
      </div>
      <div className='box box2'><Chartbox {...chartBoxUser}/></div>
      <div className='box box3'><Chartbox {...chartBoxProduct}/></div>
      <div className='box box4'><PieChartBox/></div>
      <div className='box box5'><Chartbox {...chartBoxConversion}/></div>
      <div className='box box6'><Chartbox {...chartBoxRevenue}/></div>
      <div className='box box7'><BigChartBox/></div>
      <div className='box box8'><BarChartBox {...barChartBoxVisit}/></div>
      <div className='box box9'><BarChartBox {...barChartBoxRevenue}/></div>
    </div>
  )
}

export default Home