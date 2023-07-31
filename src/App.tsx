import { HeatMapComponent,Adaptor,Inject} from '@syncfusion/ej2-react-heatmap';
import './App.css';

function App() {
  let heatmapData : any[] = [
    { Region: 'USA', '2000': 93, '2004': 101, '2008': 112, '2012': 103, '2016': 121 },
    { Region: 'GBR', '2000': 28, '2004': 30, '2008': 49, '2012': 65, '2016': 67 },
    { Region: 'China', '2000': 58, '2004': 63, '2008': 100, '2012': 91, '2016': 70 },
    { Region: 'Russia', '2000': 89, '2004': 90, '2008': 60, '2012': 69, '2016': 55 },
    { Region: 'Germany', '2000': 56, '2004': 49, '2008': 41, '2012': 44, '2016': 42 },
    { Region: 'Japan', '2000': 18, '2004': 37, '2008': 25, '2012': 38, '2016': 41 },
    { Region: 'France', '2000': 38, '2004': 33, '2008': 43, '2012': 35, '2016': 42 },
    { Region: 'KOR', '2000': 28, '2004': 30, '2008': 32, '2012': 30, '2016': 21 },
    { Region: 'Italy', '2000': 34, '2004': 32, '2008': 27, '2012': 28, '2016': 28 }


  ];
  return (
    <div className="App">
    <HeatMapComponent  dataSource={heatmapData}
        dataSourceSettings={{
          isJsonData: true,
          adaptorType: 'Table',
          xDataMapping: 'Region'
         
  
        }}
    
    titleSettings={{
      text: 'GDP Growth Rate for Major Economies (in Percentage)'
      
    }}
    xAxis={{
  labels:  [ 'China', 'France', 'GBR', 'Germany', 'Italy', 'Japan', 'KOR', 'Russia', 'USA' ]           
    }}
    yAxis={{
      labels:  ['2000', '2004', '2008', '2012', '2016'] }}>
              <Inject services={[Adaptor]}/>
      </HeatMapComponent>
    </div>
  );
}

export default App;
